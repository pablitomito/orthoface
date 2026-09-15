import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useReducedMotion } from '../hooks/useReducedMotion';

const WA_AGENDAR =
  'https://wa.me/5586999398960?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Orthoface%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

interface NavItem {
  num: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { num: '01', label: 'Início', href: '#inicio' },
  { num: '02', label: 'Tratamentos', href: '#tratamentos' },
  { num: '03', label: 'Resultados', href: '#resultados' },
  { num: '04', label: 'A Orthoface', href: '#a-orthoface' },
  { num: '05', label: 'Profissional', href: '#profissional' },
  { num: '06', label: 'Localização', href: '#localizacao' },
  { num: '07', label: 'FAQ', href: '#faq' },
];

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

  // Bloqueio do scroll da página quando o menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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

  // Navegação suave com fechamento imediato do menu e restauração do scroll
  const handleMobileNavClick = (href: string) => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Evita criar containing block permanente após o término da transição de entrada
  const entranceStyle: React.CSSProperties = reduced
    ? {}
    : {
        transform: mounted ? 'none' : 'translateY(-100%)',
        opacity: mounted ? 1 : 0,
        transition:
          'transform 600ms cubic-bezier(0.16,1,0.3,1), opacity 500ms ease',
      };

  return (
    <>
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

            {/* Botão Hamburger Mobile com área de toque confortável */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-xl text-brand-deep hover:bg-brand-deep/5 focus:outline-none transition-colors"
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                  d="M3.75 7h16.5M3.75 12h16.5M3.75 17h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          PAINEL DO MENU MOBILE (PORTAL DIRETO NO BODY)
          Fundo 100% sólido #F8FAFC, isolado de stacking contexts,
          ocupando 100dvh, sem transparência ou interferência do Hero
         ========================================================= */}
      {mobileMenuOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            id="mobile-menu-layer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de Navegação Principal"
            className={`
              fixed inset-0 z-[99999] md:hidden
              bg-[#F8FAFC] text-brand-deep
              flex flex-col
              ${reduced ? 'transition-none' : 'animate-slide-down'}
            `}
            style={{
              height: '100dvh',
              width: '100vw',
            }}
          >
            {/* Top Bar do Menu Mobile: Logo e Botão Fechar X */}
            <div className="h-20 px-5 sm:px-8 border-b border-brand-deep/[0.08] flex items-center justify-between flex-shrink-0 bg-[#F8FAFC]">
              <div className="flex items-center gap-3.5">
                <img
                  src="/images/logo-orthoface.jpg"
                  alt="Clínica Orthoface"
                  className="h-10 w-auto rounded-lg object-contain border border-brand-deep/[0.08]"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col">
                  <span className="font-extrabold tracking-tight text-brand-deep text-xl leading-tight">
                    Orthoface
                  </span>
                  <span className="font-medium tracking-[0.16em] uppercase text-brand-muted text-[10px] mt-0.5">
                    Odontologia Especializada
                  </span>
                </div>
              </div>

              {/* Botão de Fechar X nítido e visível */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl text-brand-deep hover:bg-brand-deep/5 focus:outline-none transition-colors"
                aria-label="Fechar menu"
              >
                <svg
                  className="w-6 h-6 text-brand-deep"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Conteúdo Rolável do Menu com Fundo Sólido e Tipografia Editorial */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 flex flex-col justify-between">
              {/* Lista de Navegação Numerada */}
              <nav className="divide-y divide-brand-deep/[0.06] border-b border-brand-deep/[0.06]">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMobileNavClick(item.href);
                    }}
                    className="py-4 flex items-center justify-between group focus:outline-none"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs font-bold text-brand tracking-wider">
                        {item.num}
                      </span>
                      <span className="text-2xl font-extrabold text-brand-deep tracking-tight group-hover:text-brand transition-colors">
                        {item.label}
                      </span>
                    </div>

                    <span className="text-brand-muted/40 text-sm font-light transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand">
                      →
                    </span>
                  </a>
                ))}
              </nav>

              {/* Seção Inferior: Atendimento e CTA WhatsApp */}
              <div className="pt-6 mt-4">
                <div className="flex items-center gap-2 text-xs text-brand-muted font-medium mb-4">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
                  <span>Segunda a sexta: 08h às 19h · Sábado: 08h às 12h</span>
                </div>

                <a
                  href={WA_AGENDAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.body.style.overflow = '';
                  }}
                  className="w-full text-center flex items-center justify-center gap-2 py-4 rounded-full bg-brand text-white text-sm font-semibold tracking-wide shadow-md shadow-brand/20 active:scale-[0.98] transition-transform"
                >
                  <span>Agendar Consulta no WhatsApp</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
