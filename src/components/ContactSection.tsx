import { useState } from 'react';
import {
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = PROFILE.email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative border-t border-[#A5C9FF]/10 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="scroll-reveal relative overflow-hidden rounded-2xl border border-[#A5C9FF]/16 bg-[#172033]/75 p-8 sm:p-12 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#A8E6E1]/10 blur-[100px]"
          />
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs tracking-wide text-[#A8E6E1]">
                07. Contact
              </p>
              <h2
                id="contact-heading"
                className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl"
              >
                Open to Software Engineering &amp; Pipeline Opportunities
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#A7B0C3]">
                Available for discussions around Python Software Developer,
                Application Developer, VFX Pipeline Developer, Technical
                Director, and Pipeline Supervisor roles. Reach out directly by
                email, phone, or LinkedIn.
              </p>

              {/* Direct Static Contact Actions — zero backend form required */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${PROFILE.email}?subject=Portfolio%20Inquiry%20%E2%80%94%20${encodeURIComponent(PROFILE.fullName)}`}
                  className="cta-primary-glow inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-[#0B1020] whitespace-nowrap"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-[#A5C9FF]/25 bg-[#0B1020]/70 px-5 py-3 text-sm font-medium text-[#F8FAFC] whitespace-nowrap transition-colors hover:border-[#A8E6E1]/50"
                >
                  {copied ? (
                    <>
                      <Check
                        className="h-4 w-4 text-[#B8F2D8]"
                        aria-hidden="true"
                      />
                      <span className="text-[#B8F2D8]">Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy
                        className="h-4 w-4 text-[#A5C9FF]"
                        aria-hidden="true"
                      />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              <p className="sr-only" aria-live="polite">
                {copied ? 'Email address copied to clipboard.' : ''}
              </p>
            </div>

            {/* Structured Direct Channels */}
            <div className="lg:col-span-5">
              <dl className="space-y-5 border-t border-[#A5C9FF]/12 pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
                <div>
                  <dt className="flex items-center gap-2 font-mono text-xs text-[#A7B0C3]">
                    <Mail
                      className="h-3.5 w-3.5 text-[#A8E6E1]"
                      aria-hidden="true"
                    />
                    <span>Email</span>
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-base font-medium text-[#F8FAFC] transition-colors hover:text-[#A8E6E1] break-all"
                    >
                      {PROFILE.email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-2 font-mono text-xs text-[#A7B0C3]">
                    <Phone
                      className="h-3.5 w-3.5 text-[#B8F2D8]"
                      aria-hidden="true"
                    />
                    <span>Phone</span>
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${PROFILE.phone.replace(/[^+\d]/g, '')}`}
                      className="text-sm font-medium font-mono text-[#F8FAFC] tabular-nums transition-colors hover:text-[#B8F2D8]"
                    >
                      {PROFILE.phone}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-2 font-mono text-xs text-[#A7B0C3]">
                    <Linkedin
                      className="h-3.5 w-3.5 text-[#A5C9FF]"
                      aria-hidden="true"
                    />
                    <span>LinkedIn</span>
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#F8FAFC] transition-colors hover:text-[#A5C9FF] break-all"
                    >
                      {PROFILE.linkedinHandle}
                    </a>
                  </dd>
                </div>

                {PROFILE.githubUrl && (
                  <div>
                    <dt className="flex items-center gap-2 font-mono text-xs text-[#A7B0C3]">
                      <Github
                        className="h-3.5 w-3.5 text-[#C4B5FD]"
                        aria-hidden="true"
                      />
                      <span>GitHub</span>
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={PROFILE.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[#F8FAFC] transition-colors hover:text-[#C4B5FD] break-all"
                      >
                        {PROFILE.githubHandle || 'Explore GitHub Profile'}
                      </a>
                    </dd>
                  </div>
                )}

                <div>
                  <dt className="flex items-center gap-2 font-mono text-xs text-[#A7B0C3]">
                    <MapPin
                      className="h-3.5 w-3.5 text-[#C4B5FD]"
                      aria-hidden="true"
                    />
                    <span>Location</span>
                  </dt>
                  <dd className="mt-1.5 text-sm text-[#F8FAFC]/90">
                    {PROFILE.location}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
