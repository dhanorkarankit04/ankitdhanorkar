import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, Download, Linkedin } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { AmbientParticleField } from './AmbientParticleField';
import { EngineeringNetworkCanvas } from './EngineeringNetworkCanvas';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [typedRole, setTypedRole] = useState(PROFILE.animatedRoles[0]);
  const [portraitError, setPortraitError] = useState(false);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 38, active: false });

  // Staggered GSAP entrance animation honoring prefers-reduced-motion
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-reveal', {
        y: 26,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Smooth typewriter subtitle cycling through roles (static fallback for reduced motion)
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      setTypedRole(PROFILE.animatedRoles[0]);
      return;
    }

    let roleIdx = 0;
    let charIdx = PROFILE.animatedRoles[0].length;
    let deleting = false;
    let timerId = 0;

    const tick = () => {
      const current = PROFILE.animatedRoles[roleIdx];
      if (!deleting) {
        if (charIdx < current.length) {
          charIdx += 1;
          setTypedRole(current.slice(0, charIdx));
          timerId = window.setTimeout(tick, 55);
        } else {
          deleting = true;
          timerId = window.setTimeout(tick, 2200);
        }
      } else {
        if (charIdx > 0) {
          charIdx -= 1;
          setTypedRole(current.slice(0, charIdx));
          timerId = window.setTimeout(tick, 32);
        } else {
          deleting = false;
          roleIdx = (roleIdx + 1) % PROFILE.animatedRoles.length;
          timerId = window.setTimeout(tick, 260);
        }
      }
    };

    timerId = window.setTimeout(() => {
      deleting = true;
      tick();
    }, 2400);

    return () => window.clearTimeout(timerId);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y, active: true });
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-label="Introduction"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight((prev) => ({ ...prev, active: false }))}
      className="relative flex min-h-screen items-center pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden"
    >
      {/* Layered architectural grid, ambient particle field, drifting pastel orbs & mouse spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-engineering-grid opacity-60"
      />
      <AmbientParticleField />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ambient-mesh"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-1/4 h-96 w-96 rounded-full bg-[#A8E6E1]/12 blur-[120px] animate-orb-drift"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-1/5 h-96 w-96 rounded-full bg-[#C4B5FD]/12 blur-[120px] animate-orb-drift"
        style={{ animationDelay: '-5.5s' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: `radial-gradient(540px circle at ${spotlight.x}% ${spotlight.y}%, rgba(168, 230, 225, 0.07), transparent 65%)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Editorial Hierarchy & Actions */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="hero-reveal font-mono text-xs sm:text-sm tracking-wide text-[#A8E6E1]">
              {PROFILE.positioning}
            </p>

            <h1 className="hero-reveal mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#F8FAFC] sm:text-5xl lg:text-[3.5rem]">
              Building Intelligent{' '}
              <span className="text-pastel-gradient">
                Software &amp; Creative Technology.
              </span>
            </h1>

            {/* Smooth Typewriter Role Subtitle */}
            <div className="hero-reveal mt-6 flex h-8 flex-wrap items-center gap-x-2.5 text-lg sm:text-xl font-medium text-[#A7B0C3]">
              <span>Focused on</span>
              <span
                aria-live="polite"
                className="inline-flex items-center font-display font-semibold text-[#C4B5FD]"
              >
                <span>{typedRole}</span>
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block h-5 w-[2px] bg-[#A8E6E1] animate-caret-blink"
                />
              </span>
            </div>

            <p className="hero-reveal mt-6 max-w-2xl text-base leading-relaxed text-[#A7B0C3] sm:text-lg">
              {PROFILE.heroSupportingText}
            </p>

            {/* Call-to-action controls: luminous gradient primary CTA + glass secondary actions */}
            <div className="hero-reveal mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="cta-primary-glow group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-[#0B1020] whitespace-nowrap"
              >
                <span>Explore My Work</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href={PROFILE.resumePdfUrl}
                download={PROFILE.resumeFileName}
                className="glass-surface hover-glow-cyan inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-[#F8FAFC] whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:border-[#A8E6E1]/40"
              >
                <Download className="h-4 w-4 text-[#A5C9FF]" aria-hidden="true" />
                <span>Download Resume</span>
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-surface hover-glow-lavender inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-[#F8FAFC] whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C4B5FD]/40"
              >
                <Linkedin className="h-4 w-4 text-[#C4B5FD]" aria-hidden="true" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            {/* Quiet unboxed contextual metadata strip */}
            <div className="hero-reveal mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#A5C9FF]/12 pt-6 text-xs font-mono text-[#A7B0C3]">
              <span>{PROFILE.currentOrganization}</span>
              <span aria-hidden="true" className="text-[#A5C9FF]/40">
                ·
              </span>
              <span>{PROFILE.location}</span>
            </div>
          </div>

          {/* Right Column: Engineering Node Network + Floating Luminous Portrait Vignette */}
          <div className="hero-reveal relative flex min-h-[380px] sm:min-h-[440px] lg:col-span-5 lg:min-h-[500px]">
            <div className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-[#A5C9FF]/16 bg-[#111827]/80 shadow-2xl shadow-[#0B1020]/60 backdrop-blur-md">
              {/* Interactive Canvas Node Network */}
              <div className="absolute inset-0">
                <EngineeringNetworkCanvas />
              </div>

              {/* Centered Minimalist Glass Portrait Anchor with soft pastel halo */}
              <div className="relative z-10 m-auto flex flex-col items-center p-6 pointer-events-none">
                <div className="relative animate-slow-float">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#A8E6E1]/22 via-[#C4B5FD]/18 to-[#A5C9FF]/22 blur-2xl"
                  />
                  <div className="relative pastel-frame rounded-2xl p-[1.5px] shadow-2xl shadow-[#0B1020]/70">
                    <div className="relative h-48 w-60 sm:h-52 sm:w-64 overflow-hidden rounded-[14.5px] bg-[#0B1020]">
                      {!portraitError ? (
                        <img
                          src={PROFILE.portraitSrc}
                          alt={PROFILE.portraitAlt}
                          referrerPolicy="no-referrer"
                          onError={() => setPortraitError(true)}
                          className="h-full w-full object-cover object-[50%_18%]"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#172033] to-[#0B1020] p-4 text-center">
                          <span className="font-display text-3xl font-bold text-[#A8E6E1]">
                            AD
                          </span>
                          <span className="mt-2 font-mono text-xs text-[#A7B0C3]">
                            {PROFILE.name}
                          </span>
                        </div>
                      )}
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B1020]/92 via-[#0B1020]/45 to-transparent"
                      />
                      <div className="absolute inset-x-0 bottom-3 px-3 text-center">
                        <p className="font-display text-xs font-semibold text-[#F8FAFC]">
                          {PROFILE.fullName}
                        </p>
                        <p className="font-mono text-[10px] text-[#A8E6E1]">
                          Python · Pipeline · Automation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle bottom architectural caption */}
              <div className="relative z-10 flex items-center justify-between border-t border-[#A5C9FF]/10 bg-[#0B1020]/75 px-5 py-3 text-[11px] font-mono text-[#A7B0C3] backdrop-blur-sm">
                <span>Interactive Workflow Graph</span>
                <span>Python · PyQt · Nuke · Django</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
