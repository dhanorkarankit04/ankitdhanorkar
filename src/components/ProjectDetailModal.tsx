import { useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Lock,
  X,
} from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectDetailModal({
  project,
  onClose,
  onSelectProject,
}: ProjectDetailModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!project) return;
    closeButtonRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIdx = PROJECTS.findIndex((item) => item.slug === project.slug);
  const prevProject =
    PROJECTS[(currentIdx - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIdx + 1) % PROJECTS.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1020]/85 p-4 backdrop-blur-md sm:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#A5C9FF]/18 bg-[#111827] shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 border-b border-[#A5C9FF]/12 bg-[#0B1020]/70 px-6 py-4 sm:px-8">
          <div className="min-w-0">
            <p className="font-mono text-xs text-[#A8E6E1] truncate">
              {project.category} · /projects/{project.slug}/
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project case study"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#A5C9FF]/20 bg-[#172033] text-[#F8FAFC] transition-colors hover:border-[#A8E6E1]/50 hover:text-[#A8E6E1]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-8 sm:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2
                id="project-modal-title"
                className="font-display text-3xl font-bold tracking-tight text-[#F8FAFC]"
              >
                {project.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#A7B0C3]">
                {project.shortDescription}
              </p>
              <p className="mt-5 font-mono text-xs text-[#C4B5FD]">
                {project.technologies.join(' · ')}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-[#A5C9FF]/15 bg-[#0B1020]">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  referrerPolicy="no-referrer"
                  className={`aspect-[16/10] w-full object-cover ${
                    project.visualVariant === 'budget' ? 'scale-x-[-1]' : ''
                  }`}
                />
              </div>
              <p className="mt-2 font-mono text-[11px] text-[#A7B0C3]/80">
                Conceptual architectural visual — replace with approved project
                screenshots when available.
              </p>
            </div>
          </div>

          {/* Case Study Structured Breakdown */}
          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-[#A5C9FF]/12 pt-8 md:grid-cols-2">
            <section>
              <h3 className="font-mono text-xs text-[#A8E6E1]">
                01. Problem Statement
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A7B0C3]">
                {project.problemStatement}
              </p>
            </section>

            <section>
              <h3 className="font-mono text-xs text-[#A5C9FF]">
                02. Solution Overview
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A7B0C3]">
                {project.solutionOverview}
              </p>
            </section>

            <section>
              <h3 className="font-mono text-xs text-[#C4B5FD]">
                03. My Contribution
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A7B0C3]">
                {project.myContribution}
              </p>
            </section>

            <section>
              <h3 className="font-mono text-xs text-[#B8F2D8]">
                04. Verified Results
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A7B0C3]">
                {project.resultsStatus}
              </p>
            </section>
          </div>

          {/* Architecture Details */}
          <section className="mt-8 border-t border-[#A5C9FF]/12 pt-8">
            <h3 className="font-mono text-xs text-[#A8E6E1]">
              05. Architecture Details
            </h3>
            <ul className="mt-4 space-y-3">
              {project.architectureDetails.map((detail, index) => (
                <li
                  key={detail}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#F8FAFC]/90"
                >
                  <span className="mt-0.5 font-mono text-xs text-[#A5C9FF] tabular-nums">
                    0{index + 1}
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Repository Availability */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#A5C9FF]/12 pt-6">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#A8E6E1] px-4 py-2 text-xs font-semibold text-[#0B1020] transition-colors hover:bg-[#B8F2D8]"
              >
                <span>View GitHub Repository</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A7B0C3]">
                <Lock className="h-3.5 w-3.5 text-[#C4B5FD]" aria-hidden="true" />
                <span>
                  Repository: Private / Internal production software (link added
                  only when publicly available)
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Footer Project Navigation */}
        <div className="flex items-center justify-between gap-4 border-t border-[#A5C9FF]/12 bg-[#0B1020]/70 px-6 py-4 sm:px-8">
          <button
            type="button"
            onClick={() => onSelectProject(prevProject)}
            className="inline-flex min-h-[40px] items-center gap-2 text-xs font-medium text-[#A7B0C3] transition-colors hover:text-[#F8FAFC]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span className="truncate max-w-[140px] sm:max-w-none">
              {prevProject.title}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onSelectProject(nextProject)}
            className="inline-flex min-h-[40px] items-center gap-2 text-xs font-medium text-[#A7B0C3] transition-colors hover:text-[#F8FAFC]"
          >
            <span className="truncate max-w-[140px] sm:max-w-none">
              {nextProject.title}
            </span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
