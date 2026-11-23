import { useState } from 'react';
import { ABOUT_PILLARS, PROFILE } from '../data/portfolioData';

export function AboutSection() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-t border-[#A5C9FF]/10 bg-[#111827]/45 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="scroll-reveal max-w-3xl">
          <p className="font-mono text-xs tracking-wide text-[#A8E6E1]">
            01. About
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl"
          >
            {PROFILE.professionalHeadline}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Sticky Portrait with luminous blurred pastel aura */}
          <div className="scroll-reveal lg:col-span-4 lg:sticky lg:top-28">
            <figure className="relative mx-auto max-w-md lg:mx-0">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#C4B5FD]/20 via-[#A8E6E1]/15 to-[#A5C9FF]/20 blur-2xl"
              />
              <div className="relative pastel-frame rounded-2xl p-[1.5px]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[14.5px] bg-[#172033]">
                  {!imgFailed ? (
                    <img
                      src={PROFILE.portraitSrc}
                      alt={PROFILE.portraitAlt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() => setImgFailed(true)}
                      className="h-full w-full object-cover object-[50%_18%] transition-transform duration-500 hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#172033] to-[#0B1020] p-6 text-center">
                      <span className="font-display text-4xl font-bold text-[#A8E6E1]">
                        AD
                      </span>
                      <span className="mt-2 font-mono text-xs text-[#A7B0C3]">
                        {PROFILE.fullName}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <figcaption className="relative mt-4 flex flex-col gap-1.5 text-xs text-[#A7B0C3]">
                <span className="font-medium text-[#F8FAFC]">
                  {PROFILE.fullName}
                </span>
                <span>{PROFILE.currentOrganization}</span>
                <span className="font-mono text-[11px] text-[#A8E6E1]/90">
                  {PROFILE.location} · Languages: {PROFILE.languages.join(' · ')}
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Right Column: Biography, Philosophy & Equal-Prominence Pillars */}
          <div className="lg:col-span-8">
            <div className="scroll-reveal space-y-5 text-base leading-relaxed text-[#A7B0C3] sm:text-[1.0625rem]">
              <p className="text-[#F8FAFC]/95">{PROFILE.aboutIntro}</p>
              <p>{PROFILE.aboutPhilosophy}</p>
            </div>

            {/* Dual-Domain Engineering Capabilities Grid */}
            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-[#A5C9FF]/12 pt-10 sm:grid-cols-2">
              {ABOUT_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.id}
                  className="scroll-reveal space-y-2"
                  style={{ transitionDelay: `${(idx % 2) * 80}ms` }}
                >
                  <div className="flex items-center gap-2 font-mono text-xs text-[#A7B0C3]">
                    <span className="text-[#A8E6E1] tabular-nums">
                      {pillar.index}
                    </span>
                    <span aria-hidden="true">/</span>
                    <span>{pillar.domain}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#F8FAFC]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#A7B0C3]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
