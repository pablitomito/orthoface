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

  // Entrada inicial suave
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  // Scroll: estado compacto e barra de leitura progressiva
  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 50);

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

  const entranceStyle = reduced
    ? {}
    : {
        transform: mounted ? 'translateY(0)' : 'translateY(-100%)',
        opacity: mounted ? 1 : 0,
        transition:
          'transform 600ms cubic-bezier(0.16,1,0.3,1), opacity 500ms ease',
      };

  return (
    <header
      style={entranceStyle}
      className={[
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-brand-canvas/90 backdrop-blur-md border-b border-brand-deep/[0.07] h-16 shadow-[0_4px_20px_-4px_rgba(3,35,75,0.03)]'
          : 'bg-brand-canvas/70 backdrop-blur-sm border-b border-transparent h-20 sm:h-24',
      ].join(' ')}
    >
      {/* Barra de progresso ultrafina arquitetônica */}
      <div
        ref={progressBarRef}
        className="absolute bottom-0 left-0 h-[1.5px] bg-brand z-10 pointer-events-none"
        style={{ width: '0%', transition: 'width 80ms linear' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-full flex items-center justify-between">
        {/* Logo minimalista e de alta presença */}
        <a href="#inicio" className="flex items-center gap-3.5 group focus:outline-none">
          <img
            src="/images/logo-orthoface.jpg"
            alt="Clínica Orthoface - Odontologia Especializada"
            className="h-10 w-auto rounded-lg object-contain border border-brand-deep/[0.08] transition-transform duration-300 group-hover:scale-105"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <span
              className={[
                'font-extrabold tracking-tight text-brand-deep leading-tight transition-colors duration-200 group-hover:text-brand',
                scrolled ? 'text-lg' : 'text-xl',
              ].join(' ')}
            >
              Orthoface
            </span>
            <span
              className={[
                'font-medium tracking-[0.16em] uppercase text-brand-muted transition-all duration-300',
                scrolled
                  ? 'text-[0px] opacity-0 h-0 overflow-hidden'
                  : 'text-[10px] opacity-90 mt-0.5',
              ].join(' ')}
            >
              Odontologia Especializada
            </span>
          </div>
        </a>

        {/* Navegação desktop limpa e refinada */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium tracking-wide text-brand-deep/85">
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
            Como Chegar
          </a>
        </nav>

        {/* CTA do Header + Botão Mobile */}
        <div className="flex items-center gap-3.5">
          <a
            href={WA_AGENDAR}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-hover active:scale-[0.98] transition-all duration-200 shadow-sm shadow-brand/20"
          >
            Agendar Consulta
          </a>

          {/* Botão Mobile minimalista */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-brand-deep hover:bg-brand-deep/5 focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3.75 7h16.5M3.75 12h16.5M3.75 17h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile Overlay elegante */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-brand-deep/[0.08] bg-brand-canvas/98 backdrop-blur-xl px-6 py-6 space-y-4 shadow-xl animate-slide-down">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-brand-deep hover:text-brand transition-colors"
          >
            Início
          </a>
          <a
            href="#tratamentos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-brand-deep hover:text-brand transition-colors"
          >
            Tratamentos
          </a>
          <a
            href="#resultados"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-brand-deep hover:text-brand transition-colors"
          >
            Resultados Clínicos
          </a>
          <a
            href="#a-orthoface"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-brand-deep hover:text-brand transition-colors"
          >
            A Orthoface
          </a>
          <a
            href="#localizacao"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-brand-deep hover:text-brand transition-colors"
          >
            Como Chegar
          </a>

          <div className="pt-4 border-t border-brand-deep/[0.08]">
            <span className="text-xs text-brand-muted block mb-3 font-medium">
              Segunda a sexta: 08h às 19h · Sábado: 08h às 12h
            </span>
            <a
              href={WA_AGENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center block py-3.5 rounded-full bg-brand text-white text-sm font-semibold tracking-wide shadow-md shadow-brand/20 active:scale-[0.98] transition-transform"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
