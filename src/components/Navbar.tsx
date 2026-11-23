import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#contact', id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setScrollProgress(progress);
      setScrolled(scrollTop > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0B1020]/88 backdrop-blur-md border-b border-[#A5C9FF]/12'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Top Scroll Progress Indicator */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-transparent overflow-hidden"
      >
        <div
          className="h-full origin-left bg-gradient-to-r from-[#A8E6E1] via-[#A5C9FF] to-[#C4B5FD]"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* Strict 3-Zone Top Bar Contract */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-[#F8FAFC] whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
        >
          {PROFILE.name}
        </a>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              data-active={activeSection === link.id}
              className={`nav-link-underline text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-[#F8FAFC]'
                  : 'text-[#A7B0C3] hover:text-[#F8FAFC]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary CTA Action (+ Mobile Drawer Toggle on small viewports) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#resume"
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-[#A8E6E1] px-4 py-2 text-xs font-semibold text-[#0B1020] whitespace-nowrap shrink-0 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#B8F2D8]"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#A5C9FF]/20 bg-[#172033]/80 text-[#F8FAFC] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Panel */}
      <div
        id="mobile-navigation-drawer"
        aria-hidden={!mobileMenuOpen}
        className={`md:hidden overflow-hidden border-b border-[#A5C9FF]/15 bg-[#0B1020]/96 backdrop-blur-xl transition-all duration-200 ${
          mobileMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className={`flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-[#172033] text-[#A8E6E1]'
                  : 'text-[#A7B0C3] hover:bg-[#172033]/60 hover:text-[#F8FAFC]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-[#A5C9FF]/12">
            <a
              href="#resume"
              onClick={() => setMobileMenuOpen(false)}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#A8E6E1] px-4 py-2.5 text-sm font-semibold text-[#0B1020]"
            >
              View Resume &amp; Summary
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
