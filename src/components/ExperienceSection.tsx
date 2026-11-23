import { EXPERIENCE } from '../data/portfolioData';

const NODE_ACCENTS = [
  { dot: 'bg-[#A8E6E1]', ring: 'border-[#A8E6E1]/60', text: 'text-[#A8E6E1]' },
  { dot: 'bg-[#C4B5FD]', ring: 'border-[#C4B5FD]/60', text: 'text-[#C4B5FD]' },
  { dot: 'bg-[#A5C9FF]', ring: 'border-[#A5C9FF]/60', text: 'text-[#A5C9FF]' },
  { dot: 'bg-[#B8F2D8]', ring: 'border-[#B8F2D8]/60', text: 'text-[#B8F2D8]' },
  { dot: 'bg-[#A8E6E1]', ring: 'border-[#A8E6E1]/60', text: 'text-[#A8E6E1]' },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative border-t border-[#A5C9FF]/10 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="scroll-reveal max-w-2xl">
          <p className="font-mono text-xs tracking-wide text-[#B8F2D8]">
            04. Professional Experience
          </p>
          <h2
            id="experience-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl"
          >
            Engineering &amp; Production Leadership
          </h2>
          <p className="mt-4 text-base text-[#A7B0C3]">
            Career progression across Python pipeline engineering, technical
            supervision, and department leadership at Bubble Creations Digital
            Studio, GENER8, and Prime Focus Studio (2012 – Present).
          </p>
        </div>

        {/* Alternating Editorial Vertical Timeline (Centered Spine on lg+) */}
        <ol className="relative mt-16 space-y-10 lg:space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[#A8E6E1]/60 before:via-[#C4B5FD]/40 before:to-transparent lg:before:left-1/2 lg:before:-translate-x-1/2">
          {EXPERIENCE.map((item, idx) => {
            const accent = NODE_ACCENTS[idx % NODE_ACCENTS.length];
            const isRight = idx % 2 === 1;

            return (
              <li
                key={item.id}
                className="scroll-reveal relative pl-10 sm:pl-14 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-12"
              >
                {/* Precision Timeline Node */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full border ${accent.ring} bg-[#0B1020] lg:left-1/2 lg:-translate-x-1/2`}
                >
                  <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
                </span>

                <article
                  className={`rounded-2xl border border-[#A5C9FF]/12 bg-[#172033]/75 p-7 transition-all duration-200 hover:border-[#A5C9FF]/30 ${
                    isRight ? 'lg:col-start-2' : 'lg:col-start-1'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#A7B0C3] tabular-nums">
                    <span className={accent.text}>{item.period}</span>
                    <span>0{idx + 1}</span>
                  </div>

                  <h3 className="mt-2.5 font-display text-xl font-semibold text-[#F8FAFC]">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#A8E6E1]">
                    {item.organization}
                  </p>
                  <p className="mt-2 font-mono text-xs text-[#C4B5FD]">
                    {item.domainFocus}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#A7B0C3]">
                    {item.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-[#A5C9FF]/10 pt-4">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[#F8FAFC]/88"
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot} opacity-80`}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {item.credits && item.credits.length > 0 && (
                    <div className="mt-5 border-t border-[#A5C9FF]/10 pt-4">
                      <p className="font-mono text-xs text-[#A7B0C3]">
                        <span className="text-[#B8F2D8]">
                          Selected Productions:{' '}
                        </span>
                        {item.credits.join(' · ')}
                      </p>
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
