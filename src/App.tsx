import { useCallback, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationResumeSection } from './components/EducationResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PROJECTS, type ProjectItem } from './data/portfolioData';

const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'resume', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  // Support descriptive hash routes for project case studies (#project/<slug>)
  useEffect(() => {
    const syncProjectFromHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const slug = hash.replace('#project/', '').replace(/\/$/, '');
        const match = PROJECTS.find((item) => item.slug === slug) ?? null;
        setSelectedProject(match);
      }
    };
    syncProjectFromHash();
    window.addEventListener('hashchange', syncProjectFromHash);
    return () => window.removeEventListener('hashchange', syncProjectFromHash);
  }, []);

  const handleSelectProject = useCallback((project: ProjectItem) => {
    setSelectedProject(project);
    window.history.replaceState(null, '', `#project/${project.slug}`);
  }, []);

  const handleCloseProject = useCallback(() => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project/')) {
      window.history.replaceState(null, '', '#projects');
    }
  }, []);

  // Track active navigation section via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.35] }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Silky IntersectionObserver scroll reveals across all sections (honors prefers-reduced-motion)
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.scroll-reveal')
    );
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1020] text-[#F8FAFC]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#A8E6E1] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0B1020]"
      >
        Skip to main content
      </a>

      <Navbar activeSection={activeSection} />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={handleSelectProject} />
        <ExperienceSection />
        <EducationResumeSection />
        <ContactSection />
      </main>

      <Footer />

      <ProjectDetailModal
        project={selectedProject}
        onClose={handleCloseProject}
        onSelectProject={handleSelectProject}
      />
    </div>
  );
}
