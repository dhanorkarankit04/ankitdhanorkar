import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  PROJECTS,
  type ProjectFilterCategory,
  type ProjectItem,
} from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const FILTER_OPTIONS: ProjectFilterCategory[] = [
  'All',
  'VFX Pipeline',
  'Desktop Software',
  'Business Software',
];

function ProjectCardVisual({ project }: { project: ProjectItem }) {
  const [failed, setFailed] = useState(false);

  // Subtle distinct tint scrim for projects sharing a base visual asset
  const variantTint =
    project.visualVariant === 'attendance'
      ? 'from-[#0B1020]/85 via-[#C4B5FD]/10 to-transparent'
      : project.visualVariant === 'budget'
        ? 'from-[#0B1020]/85 via-[#A5C9FF]/12 to-transparent'
        : 'from-[#0B1020]/80 via-[#0B1020]/20 to-transparent';

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111827]">
      {!failed ? (
        <img
          src={project.imageSrc}
          alt={project.imageAlt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] ${
            project.visualVariant === 'budget' ? 'scale-x-[-1]' : ''
          }`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#172033] via-[#111827] to-[#0B1020] p-6 text-center">
          <span className="font-mono text-xs text-[#A8E6E1]">
            {project.category}
          </span>
          <span className="mt-2 font-display text-lg font-semibold text-[#F8FAFC]">
            {project.title}
          </span>
        </div>
      )}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-t ${variantTint}`}
      />
    </div>
  );
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilterCategory>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.filterGroup === activeFilter);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative border-t border-[#A5C9FF]/10 bg-[#111827]/45 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="scroll-reveal flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-wide text-[#A8E6E1]">
              03. Featured Projects
            </p>
            <h2
              id="projects-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl"
            >
              Selected Software &amp; Pipeline Engineering Work
            </h2>
            <p className="mt-4 text-base text-[#A7B0C3]">
              Production tools, desktop Qt applications, and internal business
              software engineered for reliability and clarity. Select any
              project to inspect its architecture and engineering details.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-[#A5C9FF]/14 bg-[#0B1020]/75 p-1.5"
          >
            {FILTER_OPTIONS.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-[38px] rounded-lg px-3.5 py-2 text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#A8E6E1] to-[#A5C9FF] text-[#0B1020] font-semibold shadow-sm'
                      : 'text-[#A7B0C3] hover:bg-[#172033] hover:text-[#F8FAFC]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-6">
          {filteredProjects.map((project, idx) => {
            const colSpanClass =
              activeFilter === 'All'
                ? idx < 2
                  ? 'lg:col-span-3'
                  : 'lg:col-span-2'
                : 'lg:col-span-3';

            const accentHover =
              project.accent === 'cyan'
                ? 'hover:border-[#A8E6E1]/35 hover-glow-cyan'
                : project.accent === 'lavender'
                  ? 'hover:border-[#C4B5FD]/35 hover-glow-lavender'
                  : project.accent === 'mint'
                    ? 'hover:border-[#B8F2D8]/35 hover-glow-mint'
                    : 'hover:border-[#A5C9FF]/35 hover-glow-blue';

            const cornerGlow =
              project.accent === 'cyan'
                ? 'from-[#A8E6E1]/20'
                : project.accent === 'lavender'
                  ? 'from-[#C4B5FD]/20'
                  : project.accent === 'mint'
                    ? 'from-[#B8F2D8]/20'
                    : 'from-[#A5C9FF]/20';

            return (
              <article
                key={project.slug}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[#A5C9FF]/12 bg-[#172033]/80 transition-all duration-300 hover:-translate-y-1.5 ${accentHover} ${colSpanClass}`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-16 -top-16 z-10 h-44 w-44 rounded-full bg-gradient-to-br ${cornerGlow} to-transparent blur-2xl opacity-35 transition-opacity duration-300 group-hover:opacity-95`}
                />
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="relative z-10 flex h-full w-full flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8E6E1] focus-visible:ring-inset"
                >
                  <ProjectCardVisual project={project} />

                  <div className="flex flex-1 flex-col justify-between p-7">
                    <div>
                      <p className="font-mono text-xs text-[#A5C9FF]">
                        {project.category}
                      </p>

                      <div className="mt-2.5 flex items-start justify-between gap-4">
                        <h3 className="font-display text-xl font-semibold text-[#F8FAFC] transition-colors group-hover:text-[#A8E6E1]">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          className="h-5 w-5 shrink-0 text-[#A7B0C3] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#A8E6E1]"
                          aria-hidden="true"
                        />
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-[#A7B0C3]">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Clean unboxed technology stack separated by typographic dots */}
                    <div className="mt-6 border-t border-[#A5C9FF]/10 pt-4">
                      <p className="font-mono text-xs text-[#A7B0C3]/90">
                        {project.technologies.join(' · ')}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#A8E6E1]">
                        Inspect case study
                      </span>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
