/**
 * Interactive Portfolio Runtime (Zero-Backend Static Compatible)
 * Handles: Lucide icons, scroll progress, mobile menu, animated hero roles,
 * Canvas2D engineering network, project category filters, copy-email action,
 * and selective GSAP scroll reveals with prefers-reduced-motion compliance.
 */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function initIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  function initHeaderAndScrollProgress() {
    const header = document.getElementById("site-header");
    const progressBar = document.getElementById("scroll-progress-bar");

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

      if (progressBar) {
        progressBar.style.transform = `scaleX(${ratio})`;
      }
      if (header) {
        header.classList.toggle("bg-[#0B1020]/90", scrollTop > 20);
        header.classList.toggle("backdrop-blur-md", scrollTop > 20);
        header.classList.toggle("border-[#A5C9FF]/12", scrollTop > 20);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initMobileNav() {
    const toggle = document.getElementById("mobile-menu-toggle");
    const drawer = document.getElementById("mobile-nav-drawer");
    if (!toggle || !drawer) return;

    const setOpen = (isOpen) => {
      toggle.setAttribute("aria-expanded", String(isOpen));
      drawer.classList.toggle("hidden", !isOpen);
    };

    toggle.addEventListener("click", () => {
      const next = toggle.getAttribute("aria-expanded") !== "true";
      setOpen(next);
    });

    drawer.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  }

  function initRoleCycler() {
    const roleEl = document.getElementById("animated-role-text");
    const roles = Array.isArray(window.PORTFOLIO_ROLES)
      ? window.PORTFOLIO_ROLES
      : [];
    if (!roleEl || roles.length < 2) return;

    let idx = 0;
    window.setInterval(() => {
      idx = (idx + 1) % roles.length;
      if (prefersReduced || !window.gsap) {
        roleEl.textContent = roles[idx];
        return;
      }
      window.gsap.to(roleEl, {
        y: -8,
        opacity: 0,
        duration: 0.22,
        onComplete: () => {
          roleEl.textContent = roles[idx];
          window.gsap.fromTo(
            roleEl,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" }
          );
        },
      });
    }, 3200);
  }

  function initProjectFilters() {
    const buttons = document.querySelectorAll(".project-filter-btn");
    const cards = document.querySelectorAll(".project-card");
    if (!buttons.length || !cards.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selected = btn.getAttribute("data-project-filter") || "All";

        buttons.forEach((other) => {
          const active = other === btn;
          other.setAttribute("aria-pressed", String(active));
          other.className =
            "project-filter-btn min-h-[38px] rounded-lg px-3.5 py-2 text-xs font-medium whitespace-nowrap transition-colors " +
            (active
              ? "bg-[#A8E6E1] text-[#0B1020] font-semibold"
              : "text-[#A7B0C3] hover:bg-[#172033] hover:text-[#F8FAFC]");
        });

        cards.forEach((card) => {
          const group = card.getAttribute("data-filter-group");
          const visible = selected === "All" || group === selected;
          card.classList.toggle("hidden", !visible);
        });
      });
    });
  }

  function initCopyEmail() {
    const btn = document.getElementById("copy-email-btn");
    const label = document.getElementById("copy-email-label");
    const status = document.getElementById("copy-email-status");
    if (!btn || !label) return;

    btn.addEventListener("click", async () => {
      const email = btn.getAttribute("data-email") || "";
      try {
        await navigator.clipboard.writeText(email);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      label.textContent = "Email Copied";
      if (status) status.textContent = "Email address copied to clipboard.";
      window.setTimeout(() => {
        label.textContent = "Copy Email";
      }, 2500);
    });
  }

  function initEngineeringCanvas() {
    const canvas = document.getElementById("engineering-network-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const specs = [
      { rx: 0.14, ry: 0.18, r: 5, c: "#A8E6E1", l: "Python Core" },
      { rx: 0.48, ry: 0.12, r: 4.5, c: "#A5C9FF", l: "Django API" },
      { rx: 0.84, ry: 0.2, r: 5, c: "#C4B5FD", l: "Nuke API" },
      { rx: 0.24, ry: 0.44, r: 4, c: "#B8F2D8", l: "PyQt / Qt" },
      { rx: 0.78, ry: 0.48, r: 5.5, c: "#A8E6E1", l: "OpenEXR" },
      { rx: 0.16, ry: 0.76, r: 4.5, c: "#C4B5FD", l: "Docker" },
      { rx: 0.52, ry: 0.84, r: 5, c: "#B8F2D8", l: "Validation" },
      { rx: 0.84, ry: 0.78, r: 4.5, c: "#A5C9FF", l: "Automation" },
    ];
    const edges = [
      [0, 1],
      [1, 2],
      [0, 3],
      [2, 4],
      [3, 5],
      [5, 6],
      [6, 7],
      [4, 7],
      [1, 3],
      [1, 4],
      [3, 6],
      [4, 6],
    ];

    let w = 520;
    let h = 480;
    let nodes = [];

    function resize() {
      const rect = canvas.getBoundingClientRect();
      w = rect.width || 520;
      h = rect.height || 480;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = specs.map((s) => ({
        bx: s.rx * w,
        by: s.ry * h,
        x: s.rx * w,
        y: s.ry * h,
        r: s.r,
        c: s.c,
        l: s.l,
      }));
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      nodes.forEach((n, i) => {
        if (!prefersReduced) {
          n.x = n.bx + Math.sin(t * 0.0006 + i) * 7;
          n.y = n.by + Math.cos(t * 0.00055 + i) * 7;
        }
      });

      edges.forEach(([a, b]) => {
        ctx.strokeStyle = "rgba(168, 230, 225, 0.22)";
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(nodes[a].x, nodes[a].y);
        ctx.lineTo(nodes[b].x, nodes[b].y);
        ctx.stroke();
      });

      ctx.font = '500 11px "JetBrains Mono", monospace';
      ctx.textBaseline = "middle";
      nodes.forEach((n) => {
        ctx.fillStyle = n.c;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.textAlign = n.x > w * 0.65 ? "right" : "left";
        ctx.fillStyle = "rgba(248, 250, 252, 0.78)";
        ctx.fillText(n.l, n.x + (n.x > w * 0.65 ? -10 : 12), n.y);
      });

      if (!prefersReduced) {
        window.requestAnimationFrame(draw);
      }
    }

    resize();
    draw(0);
    window.addEventListener("resize", () => {
      resize();
      if (prefersReduced) draw(0);
    });
  }

  function initGsapReveals() {
    if (prefersReduced || !window.gsap) return;
    if (window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }

    window.gsap.from(".hero-reveal", {
      y: 22,
      opacity: 0,
      duration: 0.7,
      stagger: 0.09,
      ease: "power3.out",
      clearProps: "transform,opacity",
    });

    if (window.ScrollTrigger) {
      document.querySelectorAll(".reveal-card").forEach((el) => {
        window.gsap.from(el, {
          y: 18,
          opacity: 0,
          duration: 0.55,
          ease: "power2.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    initIcons();
    initHeaderAndScrollProgress();
    initMobileNav();
    initRoleCycler();
    initProjectFilters();
    initCopyEmail();
    initEngineeringCanvas();
    initGsapReveals();
  });
})();
