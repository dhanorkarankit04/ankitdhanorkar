import { BookOpen, Download, Github, GraduationCap, Linkedin } from 'lucide-react';
import {
  BCA_COURSEWORK,
  EDUCATION,
  PROFILE,
} from '../data/portfolioData';

export function EducationResumeSection() {
  return (
    <section
      id="resume"
      aria-labelledby="education-resume-heading"
      className="relative border-t border-[#A5C9FF]/10 bg-[#111827]/45 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left: Education & Relevant BCA Academic Coursework */}
          <div className="scroll-reveal lg:col-span-6">
            <p className="font-mono text-xs tracking-wide text-[#A5C9FF]">
              05. Education &amp; Academic Coursework
            </p>
            <h2
              id="education-resume-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F8FAFC]"
            >
              Academic Foundation &amp; Credentials
            </h2>

            <div className="mt-8 space-y-5">
              {EDUCATION.map((edu) => (
                <article
                  key={edu.degree}
                  className="rounded-2xl border border-[#A5C9FF]/12 bg-[#172033]/75 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#A5C9FF]/15 bg-[#0B1020]/70 text-[#A5C9FF]">
                      <GraduationCap className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-[#F8FAFC]">
                        {edu.degree}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-[#A8E6E1]">
                        {edu.status}
                      </p>
                      <p className="mt-1 text-xs text-[#A7B0C3]">
                        {edu.institution}
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#A7B0C3]">
                        {edu.notes}
                      </p>
                    </div>
                  </div>
                </article>
              ))}

              {/* Relevant BCA Academic Coursework */}
              <div className="rounded-2xl border border-[#A5C9FF]/12 bg-[#172033]/50 p-6">
                <div className="flex items-center gap-3">
                  <BookOpen
                    className="h-4 w-4 text-[#C4B5FD]"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-base font-semibold text-[#F8FAFC]">
                    Relevant BCA Academic Coursework
                  </h3>
                </div>
                <dl className="mt-4 divide-y divide-[#A5C9FF]/10">
                  {BCA_COURSEWORK.map((group) => (
                    <div
                      key={group.category}
                      className="py-3 first:pt-1 last:pb-0"
                    >
                      <dt className="text-xs font-mono text-[#C4B5FD]">
                        {group.category}
                      </dt>
                      <dd className="mt-1.5 text-xs leading-relaxed text-[#A7B0C3]">
                        {group.courses.join(' · ')}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Right: Resume Download & Career Summary */}
          <div className="scroll-reveal lg:col-span-6 flex flex-col" style={{ transitionDelay: '100ms' }}>
            <p className="font-mono text-xs tracking-wide text-[#A8E6E1]">
              06. Resume
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F8FAFC]">
              Curriculum Vitae &amp; Profiles
            </h2>

            <article className="mt-8 flex flex-1 flex-col justify-between rounded-2xl border border-[#A5C9FF]/16 bg-[#172033]/80 p-8">
              <div>
                <p className="font-mono text-xs text-[#C4B5FD]">
                  Career Summary — {PROFILE.fullName}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#F8FAFC]/92">
                  {PROFILE.careerSummary}
                </p>

                <dl className="mt-8 grid grid-cols-1 gap-5 border-t border-[#A5C9FF]/12 pt-6 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-xs text-[#A7B0C3]">
                      Target Roles
                    </dt>
                    <dd className="mt-1.5 text-sm text-[#F8FAFC]">
                      Python Software Developer, Application Developer, VFX
                      Pipeline Developer, Technical Director, Pipeline Supervisor
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs text-[#A7B0C3]">
                      Location &amp; Languages
                    </dt>
                    <dd className="mt-1.5 text-sm text-[#F8FAFC]">
                      {PROFILE.location}
                      <span className="block mt-1 font-mono text-xs text-[#A7B0C3]">
                        {PROFILE.languages.join(' · ')}
                      </span>
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-mono text-xs text-[#A7B0C3]">
                      Resume File
                    </dt>
                    <dd className="mt-1.5 font-mono text-xs text-[#A8E6E1]">
                      {PROFILE.resumeFileName} (Verified 2026 CV · PDF)
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-9 space-y-4 border-t border-[#A5C9FF]/12 pt-6">
                <a
                  href={PROFILE.resumePdfUrl}
                  download={PROFILE.resumeFileName}
                  className="cta-primary-glow inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-[#0B1020]"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download Full CV (PDF)</span>
                </a>

                <div
                  className={`grid grid-cols-1 gap-3 ${
                    PROFILE.githubUrl ? 'sm:grid-cols-2' : ''
                  }`}
                >
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#A5C9FF]/20 bg-[#0B1020]/65 px-4 py-2.5 text-sm font-medium text-[#F8FAFC] transition-colors hover:border-[#A8E6E1]/45 hover:text-[#A8E6E1]"
                  >
                    <Linkedin
                      className="h-4 w-4 text-[#A5C9FF]"
                      aria-hidden="true"
                    />
                    <span>LinkedIn Profile</span>
                  </a>

                  {PROFILE.githubUrl && (
                    <a
                      href={PROFILE.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#A5C9FF]/20 bg-[#0B1020]/65 px-4 py-2.5 text-sm font-medium text-[#F8FAFC] transition-colors hover:border-[#C4B5FD]/45 hover:text-[#C4B5FD]"
                    >
                      <Github
                        className="h-4 w-4 text-[#C4B5FD]"
                        aria-hidden="true"
                      />
                      <span>GitHub Profile</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
