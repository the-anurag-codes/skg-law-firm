import type { Metadata } from 'next';
import { ConsultationForm } from '@/components/ConsultationForm';
import { SectionLabel } from '@/components/SectionLabel';
import { Hairline } from '@/components/Hairline';
import { siteConfig } from '@/lib/site-config';
import { telLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contact — Schedule a Consultation',
  description:
    'Contact S.K. Gambhir & Co. to schedule a consultation. Main office at Jagriti Enclave, Delhi. Chamber at Rouse Avenue, New Delhi.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-ink text-paper pt-16 pb-20">
        <div className="container-site">
          <SectionLabel label="Contact" className="mb-6 text-paper/40" />
          <h1 className="font-serif text-display-md text-paper mt-4 mb-6 max-w-xl">
            Get in touch.
          </h1>
          <p className="text-body-lg text-paper/60 max-w-[52ch] leading-relaxed">
            The firm offers an initial 15-minute screening call at no charge.
            All communications are treated as privileged and confidential.
          </p>
        </div>
      </div>

      {/* Location cards */}
      <section className="bg-bone py-16 border-b border-rule/10" aria-labelledby="locations-heading">
        <div className="container-site">
          <h2
            id="locations-heading"
            className="font-serif text-2xl text-ink mb-10"
          >
            Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Office */}
            <article
              className="border border-rule/15 bg-paper p-8"
              aria-labelledby="office-heading"
            >
              <p className="eyebrow text-accent mb-4">
                {siteConfig.offices.primary.label}
              </p>
              <h3
                id="office-heading"
                className="font-serif text-2xl text-ink mb-5"
              >
                {siteConfig.offices.primary.name}
              </h3>

              <Hairline className="mb-6" />

              <address className="not-italic text-body text-ink/70 leading-relaxed mb-6">
                {siteConfig.offices.primary.address}<br />
                {siteConfig.offices.primary.locality}<br />
                {siteConfig.offices.primary.city} – {siteConfig.offices.primary.pincode}
              </address>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="eyebrow text-mute mb-1">Hours</p>
                  <p className="text-sm text-ink/70">{siteConfig.hours.display}</p>
                </div>
                <div>
                  <p className="eyebrow text-mute mb-1">Phone</p>
                  {siteConfig.partners.map((p) => (
                    <div key={p.id}>
                      <a
                        href={telLink(p.phone)}
                        className="text-sm text-ink/70 hover:text-accent transition-colors"
                      >
                        {p.name}: {p.phoneDisplay}
                      </a>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="eyebrow text-mute mb-1">Walk-ins</p>
                  <p className="text-sm text-ink/70">By prior appointment</p>
                </div>
              </div>

              {/* Embedded map placeholder + link */}
              <div className="relative overflow-hidden bg-bone border border-rule/10 h-48 mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="eyebrow text-mute text-center">
                    Map — Jagriti Enclave, Delhi<br />
                    <span className="text-[10px] text-mute/60 normal-case tracking-normal mt-1 block">
                      Replace with Google Maps embed in production
                    </span>
                  </p>
                </div>
              </div>
              <a
                href={siteConfig.offices.primary.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-accent hover:text-ink transition-colors"
              >
                Open in Google Maps →
              </a>
            </article>

            {/* Chamber */}
            <article
              className="border border-rule/15 bg-paper p-8"
              aria-labelledby="chamber-heading"
            >
              <p className="eyebrow text-accent mb-4">
                {siteConfig.offices.chamber.label}
                <span className="ml-2 text-gold text-[10px] normal-case tracking-normal font-normal">
                  By appointment only
                </span>
              </p>
              <h3
                id="chamber-heading"
                className="font-serif text-2xl text-ink mb-5"
              >
                {siteConfig.offices.chamber.name}
              </h3>

              <Hairline className="mb-6" />

              <address className="not-italic text-body text-ink/70 leading-relaxed mb-6">
                {siteConfig.offices.chamber.address}<br />
                {siteConfig.offices.chamber.locality}<br />
                {siteConfig.offices.chamber.city} – {siteConfig.offices.chamber.pincode}
              </address>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="eyebrow text-mute mb-1">Availability</p>
                  <p className="text-sm text-ink/70">
                    By appointment only. This chamber is used primarily for
                    litigation conferences and meetings requiring proximity to
                    the Delhi courts and the ITAT.
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-mute mb-1">Phone</p>
                  {siteConfig.partners.map((p) => (
                    <div key={p.id}>
                      <a
                        href={telLink(p.phone)}
                        className="text-sm text-ink/70 hover:text-accent transition-colors"
                      >
                        {p.name}: {p.phoneDisplay}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative overflow-hidden bg-bone border border-rule/10 h-48 mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="eyebrow text-mute text-center">
                    Map — Rouse Avenue, New Delhi<br />
                    <span className="text-[10px] text-mute/60 normal-case tracking-normal mt-1 block">
                      Replace with Google Maps embed in production
                    </span>
                  </p>
                </div>
              </div>
              <a
                href={siteConfig.offices.chamber.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-accent hover:text-ink transition-colors"
              >
                Open in Google Maps →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Consultation form */}
      <section
        className="bg-paper py-20"
        id="consultation-form"
        aria-labelledby="form-heading"
      >
        <div className="container-site max-w-3xl mx-auto">
          <SectionLabel label="Consultation Request" className="mb-6" />
          <h2
            id="form-heading"
            className="font-serif text-display-sm text-ink mb-4"
          >
            Send a request.
          </h2>
          <p className="text-body text-mute mb-10 max-w-prose">
            Describe your matter below. The firm will respond within one business
            day. All submissions are treated as privileged and confidential.
          </p>

          <ConsultationForm />
        </div>
      </section>

      {/* Bar Council disclaimer */}
      <div className="bg-bone border-t border-rule/10 py-8">
        <div className="container-site">
          <details className="text-sm">
            <summary className="eyebrow text-mute cursor-pointer hover:text-ink transition-colors">
              Bar Council of India — Rule 36 Disclaimer
            </summary>
            <div className="mt-4 text-xs text-mute leading-relaxed max-w-prose space-y-3 pt-4 border-t border-rule/10">
              <p>
                As per the rules of the Bar Council of India, advocates are not
                permitted to solicit work or advertise. This website has been
                created only for informational purposes and is not intended to
                solicit clients or advertise. The information provided on this
                website should not be construed as legal advice.
              </p>
              <p>
                By visiting this website, you confirm: (i) there has been no
                advertisement, personal communication, solicitation, invitation,
                or inducement of any sort whatsoever from S.K. Gambhir & Co.
                to solicit work; (ii) you wish to gain more information about
                the firm for your own information and use; (iii) the information
                provided is solely available at your request for informational
                purposes; (iv) no material provided on this website should be
                construed as legal advice.
              </p>
            </div>
          </details>
        </div>
      </div>
    </>
  );
}
