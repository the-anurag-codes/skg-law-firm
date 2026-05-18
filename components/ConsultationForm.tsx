'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { siteConfig } from '@/lib/site-config';
import { telLink } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(10, 'Please enter a valid phone number.').max(15),
  matter: z.enum(
    ['direct-tax', 'gst', 'corporate', 'nri', 'litigation', 'other'],
    { required_error: 'Please select the nature of your matter.' },
  ),
  description: z.string().min(20, 'Please describe your matter in at least 20 characters.').max(2000),
  preferredContact: z.enum(['phone', 'email', 'whatsapp']),
  honeypot: z.string().max(0, '').optional(), // anti-spam
});

type FormValues = z.infer<typeof formSchema>;

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const matterOptions = [
  { value: 'direct-tax', label: 'Direct Tax' },
  { value: 'gst', label: 'GST / Indirect Taxation' },
  { value: 'corporate', label: 'Corporate Law & Compliance' },
  { value: 'nri', label: 'NRI / International Tax Matter' },
  { value: 'litigation', label: 'Tax Litigation' },
  { value: 'other', label: 'Other' },
];

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { preferredContact: 'email' },
  });

  const onSubmit = async (data: FormValues) => {
    if (data.honeypot) return; // spam bot caught
    setSubmitState('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      setSubmitState('success');
      reset();
    } catch {
      setSubmitState('error');
    }
  };

  if (submitState === 'success') {
    return (
      <div className="border border-rule/15 p-8 bg-accent-soft text-center">
        <p className="font-serif text-2xl text-ink mb-3">Thank you.</p>
        <p className="text-mute text-sm leading-relaxed max-w-md mx-auto">
          Your consultation request has been received. The firm will respond
          within one business day. All communications are treated as privileged
          and confidential.
        </p>
        <button
          onClick={() => setSubmitState('idle')}
          className="mt-6 eyebrow tracking-[0.12em] text-accent border-b border-accent pb-0.5 hover:opacity-70 transition-opacity"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Consultation request form"
      className="space-y-6"
    >
      {/* Honeypot — hidden, must stay empty */}
      <div className="hidden" aria-hidden="true">
        <input type="text" {...register('honeypot')} tabIndex={-1} autoComplete="off" />
      </div>

      <div className={`grid grid-cols-1 ${compact ? '' : 'sm:grid-cols-2'} gap-5`}>
        {/* Full Name */}
        <Field label="Full Name" error={errors.name?.message} required>
          <input
            {...register('name')}
            type="text"
            id="name"
            autoComplete="name"
            placeholder="Your full name"
            className={inputCls(!!errors.name)}
          />
        </Field>

        {/* Email */}
        <Field label="Email Address" error={errors.email?.message} required>
          <input
            {...register('email')}
            type="email"
            id="email"
            autoComplete="email"
            placeholder="your@email.com"
            className={inputCls(!!errors.email)}
          />
        </Field>

        {/* Phone */}
        <Field label="Phone Number" error={errors.phone?.message} required>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            autoComplete="tel"
            placeholder="+91 98XXX XXXXX"
            className={inputCls(!!errors.phone)}
          />
        </Field>

        {/* Matter type */}
        <Field label="Nature of Matter" error={errors.matter?.message} required>
          <select
            {...register('matter')}
            id="matter"
            className={inputCls(!!errors.matter)}
            defaultValue=""
          >
            <option value="" disabled>
              Select a practice area…
            </option>
            {matterOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Description */}
      <Field label="Brief Description" error={errors.description?.message} required>
        <textarea
          {...register('description')}
          id="description"
          rows={compact ? 4 : 5}
          placeholder="A brief description of the matter, relevant facts, and what you are seeking advice on…"
          className={`${inputCls(!!errors.description)} resize-none`}
        />
      </Field>

      {/* Preferred contact method */}
      <fieldset>
        <legend className="eyebrow text-mute mb-3">Preferred Contact Method</legend>
        <div className="flex flex-wrap gap-5">
          {(['phone', 'email', 'whatsapp'] as const).map((method) => (
            <label key={method} className="flex items-center gap-2.5 cursor-pointer">
              <input
                {...register('preferredContact')}
                type="radio"
                value={method}
                className="accent-accent w-4 h-4"
              />
              <span className="eyebrow text-ink capitalize">{method}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Confidentiality notice */}
      <p className="text-xs text-mute border-t border-rule/10 pt-4">
        All submissions are treated as privileged and confidential.
      </p>

      {/* Error state */}
      {submitState === 'error' && (
        <p className="text-sm text-red-700 border border-red-200 bg-red-50 px-4 py-3" role="alert">
          There was an error sending your request. Please try again, or email
          us directly at{' '}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.emailDisplay}
          </a>
          .
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitState === 'loading'}
        className="
          inline-flex items-center gap-3
          bg-ink text-paper
          px-8 py-3.5
          eyebrow tracking-[0.14em]
          hover:bg-accent disabled:opacity-50
          transition-colors duration-200
          focus-visible:outline-accent
        "
      >
        {submitState === 'loading' ? (
          <>
            <span className="inline-block w-4 h-4 border-2 border-paper/30 border-t-paper rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send <span aria-hidden="true">→</span>
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={getInputId(children)}
        className="eyebrow text-ink"
      >
        {label}
        {required && (
          <span className="text-accent ml-1" aria-hidden="true">*</span>
        )}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function getInputId(children: React.ReactNode): string | undefined {
  if (typeof children === 'object' && children !== null && 'props' in (children as object)) {
    return (children as React.ReactElement).props.id;
  }
  return undefined;
}

function inputCls(hasError: boolean) {
  return `
    w-full bg-paper border px-4 py-3
    text-sm text-ink placeholder:text-mute/60
    focus:outline-none focus-visible:outline-accent
    transition-colors duration-150
    ${hasError ? 'border-red-400' : 'border-rule/20 hover:border-rule/40 focus:border-accent'}
  `;
}
