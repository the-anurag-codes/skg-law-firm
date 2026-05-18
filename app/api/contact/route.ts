import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';

/* ─── Validation Schema ───────────────────────────────────────────────────── */
const contactSchema = z.object({
  name: z.string().min(2).max(200),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  matter: z.enum(['direct-tax', 'gst', 'corporate', 'nri', 'litigation', 'other']),
  description: z.string().min(20).max(2000),
  preferredContact: z.enum(['phone', 'email', 'whatsapp']),
  honeypot: z.string().max(0).optional(),
});

/* ─── Rate limiting (in-memory, per-process — replace with Redis for scale) ─ */
const submissionsMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 5;

  const times = (submissionsMap.get(ip) ?? []).filter((t) => now - t < windowMs);
  if (times.length >= maxRequests) return true;

  times.push(now);
  submissionsMap.set(ip, times);
  return false;
}

/* ─── Fallback: persist lead to JSON file ────────────────────────────────── */
function saveLead(data: z.infer<typeof contactSchema>) {
  const leadsPath = path.join(process.cwd(), 'data', 'leads.json');
  const dir = path.dirname(leadsPath);

  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  let leads: unknown[] = [];
  if (fs.existsSync(leadsPath)) {
    try {
      leads = JSON.parse(fs.readFileSync(leadsPath, 'utf-8'));
    } catch { /* ignore parse errors */ }
  }

  leads.push({ ...data, receivedAt: new Date().toISOString() });
  fs.writeFileSync(leadsPath, JSON.stringify(leads, null, 2));
}

/* ─── Email body builder ─────────────────────────────────────────────────── */
function buildEmailHtml(data: z.infer<typeof contactSchema>): string {
  const matterLabels: Record<string, string> = {
    'direct-tax': 'Direct Tax',
    'gst': 'GST / Indirect Taxation',
    'corporate': 'Corporate Law & Compliance',
    'nri': 'NRI / International Tax',
    'litigation': 'Tax Litigation',
    'other': 'Other',
  };

  return `
    <div style="font-family: Georgia, serif; color: #0A0A0A; max-width: 600px;">
      <h2 style="font-size: 24px; margin-bottom: 8px;">New Consultation Request</h2>
      <p style="color: #6B6B6B; margin-bottom: 24px; font-size: 14px;">
        Received via S.K. Gambhir & Co. website
      </p>
      <hr style="border: none; border-top: 1px solid #eee; margin-bottom: 24px;" />

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 12px; color: #6B6B6B; width: 160px; text-transform: uppercase; letter-spacing: 0.1em;">Name</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 12px; color: #6B6B6B; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px;">${data.email}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 12px; color: #6B6B6B; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px;">${data.phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 12px; color: #6B6B6B; text-transform: uppercase; letter-spacing: 0.1em;">Matter</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px;">${matterLabels[data.matter] ?? data.matter}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 12px; color: #6B6B6B; text-transform: uppercase; letter-spacing: 0.1em;">Preferred Contact</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px; text-transform: capitalize;">${data.preferredContact}</td>
        </tr>
      </table>

      <div style="margin-top: 24px;">
        <p style="font-size: 12px; color: #6B6B6B; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">
          Description of Matter
        </p>
        <p style="font-size: 15px; line-height: 1.7; background: #f9f9f7; padding: 16px; border-left: 3px solid #B8985A;">
          ${data.description}
        </p>
      </div>

      <p style="margin-top: 24px; font-size: 12px; color: #999;">
        This submission is confidential. Received at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST.
      </p>
    </div>
  `;
}

/* ─── Handler ────────────────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  /* Rate limiting */
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '127.0.0.1';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    );
  }

  /* Parse & validate */
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: result.error.flatten() },
      { status: 422 },
    );
  }

  const data = result.data;

  /* Anti-spam honeypot */
  if (data.honeypot) {
    return NextResponse.json({ ok: true }); // silently succeed for bots
  }

  /* Try to send via Resend */
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? 'skgambhir@hotmail.com';
  const fromEmail = process.env.FROM_EMAIL ?? 'noreply@skgambhir.in';

  if (resendKey) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        reply_to: data.email,
        subject: `New Consultation Request — ${data.name} (${data.matter})`,
        html: buildEmailHtml(data),
      });
    } catch (err) {
      console.error('Resend error:', err);
      /* Fall through to local save */
    }
  } else {
    console.warn('RESEND_API_KEY not set — saving lead to data/leads.json');
  }

  /* Always save to JSON as a fallback/audit log */
  try {
    saveLead(data);
  } catch (err) {
    console.error('Failed to save lead locally:', err);
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
