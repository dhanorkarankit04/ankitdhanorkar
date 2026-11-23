import {
  Code2,
  Server,
  Monitor,
  Box,
  Film,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES, type SkillCategory } from '../data/portfolioData';

const ICON_MAP = {
  code: Code2,
  server: Server,
  monitor: Monitor,
  container: Box,
  film: Film,
  sparkles: Sparkles,
};

const ACCENT_STYLES: Record<
  SkillCategory['accent'],
  { iconText: string; hoverBorder: string; hoverGlow: string; rule: string }
> = {
  cyan: {
    iconText: 'text-[#A8E6E1]',
    hoverBorder: 'hover:border-[#A8E6E1]/35',
    hoverGlow: 'hover-glow-cyan',
    rule: 'bg-[#A8E6E1]/50',
  },
  lavender: {
    iconText: 'text-[#C4B5FD]',
    hoverBorder: 'hover:border-[#C4B5FD]/35',
    hoverGlow: 'hover-glow-lavender',
    rule: 'bg-[#C4B5FD]/50',
  },
  blue: {
    iconText: 'text-[#A5C9FF]',
    hoverBorder: 'hover:border-[#A5C9FF]/35',
    hoverGlow: 'hover-glow-blue',
    rule: 'bg-[#A5C9FF]/50',
  },
  mint: {
    iconText: 'text-[#B8F2D8]',
    hoverBorder: 'hover:border-[#B8F2D8]/35',
    hoverGlow: 'hover-glow-mint',
    rule: 'bg-[#B8F2D8]/50',
  },
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative border-t border-[#A5C9FF]/10 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="scroll-reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-wide text-[#C4B5FD]">
              02. Technical Skills
            </p>
            <h2
              id="skills-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl"
            >
              Software Engineering &amp; Pipeline Stack
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#A7B0C3]">
            Technologies applied across backend services, desktop Qt tooling,
            containerized infrastructure, and automated VFX production workflows.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = ICON_MAP[category.iconName];
            const accent = ACCENT_STYLES[category.accent];

            return (
              <article
                key={category.id}
                style={{ transitionDelay: `${(idx % 3) * 70}ms` }}
                className={`scroll-reveal group flex flex-col justify-between rounded-2xl border border-[#A5C9FF]/12 bg-[#172033]/75 p-7 transition-all duration-300 hover:-translate-y-1.5 ${accent.hoverBorder} ${accent.hoverGlow}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1020]/70 border border-[#A5C9FF]/10 ${accent.iconText}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span
                      aria-hidden="true"
                      className={`h-[2px] w-8 rounded-full opacity-60 transition-all duration-200 group-hover:w-12 group-hover:opacity-100 ${accent.rule}`}
                    />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold text-[#F8FAFC]">
                    {category.title}
                  </h3>

                  {/* Clean unboxed typographic list — zero fabricated ratings or pill clutter */}
                  <ul className="mt-5 space-y-2.5 border-t border-[#A5C9FF]/10 pt-5">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center justify-between text-sm text-[#A7B0C3] transition-colors duration-150 group-hover:text-[#F8FAFC]/90"
                      >
                        <span>{skill}</span>
                        <span
                          aria-hidden="true"
                          className="h-px w-4 bg-[#A5C9FF]/20 transition-colors group-hover:bg-[#A8E6E1]/40"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
