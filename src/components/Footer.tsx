import { PROFILE } from '../data/portfolioData';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#A5C9FF]/10 bg-[#0B1020] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-8">
        <div>
          <p className="font-display text-sm font-semibold text-[#F8FAFC]">
            {PROFILE.fullName}
          </p>
          <p className="mt-1 text-xs text-[#A7B0C3]">
            © {year} {PROFILE.fullName} · {PROFILE.location}
          </p>
        </div>

        <nav
          aria-label="Footer links"
          className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#A7B0C3]"
        >
          <a href="#about" className="transition-colors hover:text-[#F8FAFC]">
            About
          </a>
          <a href="#skills" className="transition-colors hover:text-[#F8FAFC]">
            Skills
          </a>
          <a href="#projects" className="transition-colors hover:text-[#F8FAFC]">
            Projects
          </a>
          <a
            href="#experience"
            className="transition-colors hover:text-[#F8FAFC]"
          >
            Experience
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#A8E6E1]"
          >
            LinkedIn
          </a>
          {PROFILE.githubUrl && (
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#C4B5FD]"
            >
              GitHub
            </a>
          )}
        </nav>
      </div>
    </footer>
  );
}
