import React, { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const WA_AGENDAR =
  'https://wa.me/5586999398960?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Orthoface%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const reduced = useReducedMotion();

  // ── Initial entrance animation (runs once on mount) ──────────
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  // ── Scroll: compact state + progress bar via direct DOM write ──
  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 80);

        if (progressBarRef.current) {
          const max =
            document.documentElement.scrollHeight - window.innerHeight;
          const pct = max > 0 ? (y / max) * 100 : 0;
          progressBarRef.current.style.width = `${pct}%`;
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── Entrance style ────────────────────────────────────────────
  const entranceStyle = reduced
    ? {}
    : {
      transform: mounted ? 'translateY(0)' : 'translateY(-100%)',
      opacity: mounted ? 1 : 0,
      transition:
        'transform 620ms cubic-bezier(0.4,0,0.2,1), opacity 500ms ease',
    };

  return (
    <header
      style={entranceStyle}
      className={[
        'sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border/70',
        'transition-[height,box-shadow] duration-300',
        scrolled ? 'h-14 shadow-md shadow-brand-deep/5' : 'h-20',
      ].join(' ')}
    >
      {/* ── Scroll progress bar ──────────────────────────────── */}
      <div
        ref={progressBarRef}
        className="absolute bottom-0 left-0 h-[2px] bg-brand z-10 pointer-events-none"
        style={{ width: '0%', transition: 'width 80ms linear' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-full flex items-center justify-between">
        {/* ── Logo ─────────────────────────────────────────── */}
        <a href="#inicio" className="flex items-center gap-3 group focus:outline-none">
          <img
            src="/images/logo-orthoface.jpg"
            alt="Clínica Orthoface - Odontologia Especializada"
            className="h-11 w-auto rounded-lg object-contain shadow-sm border border-brand-border/60"
            width={44}
            height={44}
          />
          <div className="flex flex-col overflow-hidden">
            <span
              className={[
                'font-bold tracking-tight text-brand-deep leading-none',
                'group-hover:text-brand transition-colors duration-200',
                scrolled ? 'text-lg' : 'text-xl',
              ].join(' ')}
            >
              Orthoface
            </span>
            <span
              className={[
                'font-medium tracking-wider uppercase text-brand-muted',
                'transition-all duration-300 origin-top',
                scrolled
                  ? 'text-[0px] opacity-0 mt-0 h-0'
                  : 'text-[11px] opacity-100 mt-1',
              ].join(' ')}
            >
              Odontologia Especializada
            </span>
          </div>
        </a>

        {/* ── Desktop Nav ──────────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-brand-deep">
          <a href="#inicio" className="nav-underline hover:text-brand transition-colors py-1">
            Início
          </a>
          <a href="#tratamentos" className="nav-underline hover:text-brand transition-colors py-1">
            Tratamentos
          </a>
          <a href="#resultados" className="nav-underline hover:text-brand transition-colors py-1">
            Resultados
          </a>
          <a href="#a-orthoface" className="nav-underline hover:text-brand transition-colors py-1">
            A Orthoface
          </a>
          <a href="#localizacao" className="nav-underline hover:text-brand transition-colors py-1">
            Como chegar
          </a>
        </nav>

        {/* ── CTA + Mobile Toggle ──────────────────────────── */}
        <div className="flex items-center gap-3">
          <a
            href={WA_AGENDAR}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand text-white text-sm font-semibold hover:bg-brand-hover active:scale-[0.98] transition-all shadow-sm shadow-brand/20"
          >
            Agendar avaliação
          </a>

          {/* Hamburger — icon rotates on open */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-brand-deep hover:bg-brand-ice focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Nav Dropdown ──────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-brand-border bg-white px-5 py-5 space-y-4 shadow-lg animate-slide-down">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-brand-deep hover:text-brand transition-colors"
          >
            Início
          </a>
          <a
            href="#tratamentos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-brand-deep hover:text-brand transition-colors"
          >
            Tratamentos
          </a>
          <a
            href="#planejamento-3d"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-medium text-brand hover:text-brand-hover transition-colors"
          >
            <span>Tecnologia &amp; Planejamento 3D</span>
            <span className="text-xs bg-brand/10 text-brand px-2 py-0.5 rounded-full font-semibold">
              Novo
            </span>
          </a>
          <a
            href="#resultados"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-brand-deep hover:text-brand transition-colors"
          >
            Resultados
          </a>
          <a
            href="#a-orthoface"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-brand-deep hover:text-brand transition-colors"
          >
            A Orthoface
          </a>
          <a
            href="#localizacao"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-brand-deep hover:text-brand transition-colors"
          >
            Como chegar
          </a>
          <div className="pt-2 border-t border-brand-border/60">
            <span className="text-xs text-brand-muted block mb-2">
              Segunda a sexta: 08h às 19h · Sábado: 08h às 12h
            </span>
            <a
              href={WA_AGENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center block py-3 rounded-full bg-brand text-white text-sm font-semibold shadow-sm active:scale-[0.98] transition-transform"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
