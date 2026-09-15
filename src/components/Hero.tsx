import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const WA_AGENDAR =
  "https://wa.me/5586999398960?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Orthoface%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

export const Hero: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const desktopImgRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax suave no scroll para a imagem desktop
  useEffect(() => {
    if (prefersReduced) return;

    const handleScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        if (window.innerWidth < 1024) return;
        const section = sectionRef.current;
        const img = desktopImgRef.current;
        if (!section || !img) return;

        const scrollY = window.scrollY;
        const sectionHeight = section.offsetHeight;
        if (scrollY > sectionHeight) {
          img.style.transform = '';
          return;
        }
        img.style.transform = `translateY(${scrollY * 0.16}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId.current);
      if (desktopImgRef.current) {
        desktopImgRef.current.style.transform = '';
      }
    };
  }, [prefersReduced]);

  const animStyle = (delayMs: number, translateY = 18): React.CSSProperties =>
    prefersReduced
      ? {}
      : {
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'none' : `translateY(${translateY}px)`,
        transition:
          'opacity 650ms cubic-bezier(0.4, 0, 0.2, 1), transform 650ms cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: `${delayMs}ms`,
      };

  const imageFadeStyle: React.CSSProperties = prefersReduced
    ? {}
    : {
      opacity: mounted ? 1 : 0,
      transition: 'opacity 900ms ease',
      transitionDelay: '60ms',
    };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative overflow-hidden bg-brand-ice"
    >
      {/* =========================================================
          DESKTOP
          Imagem horizontal ocupando toda a primeira dobra,
          com alinhamento ao topo para preservar o banner original
         ========================================================= */}
      <div className="relative hidden aspect-video w-full lg:block">

        {/* Imagem principal desktop com object-top para preservar o topo original */}
        <img
          ref={desktopImgRef}
          src="/images/dr-fernando-hero-desktop.jpg"
          alt="Dr. Fernando Galdino, responsável clínico da Orthoface"
          className="absolute inset-0 h-full w-full object-contain"
          style={{ opacity: 1 }}
        />

        {/* Gradiente suave da esquerda para leitura ideal sem ofuscar a imagem à direita */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-r
            from-white/85
            via-white/45
            via-[40%]
            to-transparent
          "
        />

        {/* Atmosfera sutil na parte inferior para fusão com a próxima seção */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0 h-32
            bg-gradient-to-t
            from-brand-deep/10
            to-transparent
          "
        />

        {/* Conteúdo posicionado elegantemente à esquerda com margem lateral refinada */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[1520px] items-center px-8 sm:px-12 lg:min-h-[700px] lg:px-14 xl:min-h-[760px] xl:px-20 2xl:px-24">

          <div className="w-full max-w-[620px] pb-8 pt-4">

            {/* Eyebrow */}
            <div style={animStyle(60, 10)} className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand" />

              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                Orthoface · Odontologia especializada
              </p>
            </div>

            {/* Headline com maior presença visual */}
            <h1
              style={animStyle(140, 18)}
              className="
                text-5xl
                font-extrabold
                leading-[1.04]
                tracking-[-0.035em]
                text-brand-deep
                lg:text-[3.4rem]
                xl:text-[3.9rem]
              "
            >
              Todas as etapas do seu tratamento,
              <span className="block text-brand">
                em um só lugar.
              </span>
            </h1>

            {/* Descrição */}
            <p
              style={animStyle(240, 14)}
              className="
                mt-6
                max-w-[520px]
                text-lg
                leading-relaxed
                text-brand-muted
                xl:text-[1.2rem]
              "
            >
              Da prevenção à reabilitação oral, reunimos diferentes
              especialidades para planejar o cuidado certo para cada caso.
            </p>

            {/* CTAs */}
            <div style={animStyle(340, 14)} className="mt-8 flex flex-wrap items-center gap-3.5">

              <a
                href={WA_AGENDAR}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-brand
                  px-7
                  py-4
                  text-base
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-brand/25
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-brand-hover
                  hover:shadow-xl
                  hover:shadow-brand/30
                  active:translate-y-0
                "
              >
                Agendar avaliação
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#tratamentos"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-brand-deep/15
                  bg-white/80
                  px-6
                  py-4
                  text-base
                  font-semibold
                  text-brand-deep
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:border-brand/30
                  hover:bg-white
                "
              >
                Conhecer tratamentos
              </a>
            </div>

            {/* Informação de atendimento */}
            <div
              style={animStyle(450, 12)}
              className="
                mt-8
                flex
                items-center
                gap-3
                border-t
                border-brand-deep/10
                pt-5
                text-sm
                text-brand-muted
              "
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand/10">
                <svg
                  className="h-4 w-4 text-brand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>

              <span>
                Segunda a sexta, 08h às 19h · Sábado, 08h às 12h
              </span>
            </div>

          </div>
        </div>
      </div>


      {/* =========================================================
          MOBILE
          Composição vertical com botões e horários na base,
          deixando o rosto do Dr. Fernando completamente livre
         ========================================================= */}
      <div className="relative overflow-hidden lg:hidden">

        {/* Imagem vertical */}
        <img
          src="/images/dr-fernando-hero-mobile.jpg"
          alt="Dr. Fernando Galdino, responsável clínico da Orthoface"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-top
          "
          style={imageFadeStyle}
        />

        {/* Gradiente superior para leitura do texto */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-[40%]
            bg-gradient-to-b
            from-white/95
            via-white/70
            via-[35%]
            to-transparent
          "
        />

        {/* Gradiente inferior para leitura dos botões e horário na base */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-64
            bg-gradient-to-t
            from-white/95
            via-white/80
            via-[45%]
            to-transparent
          "
        />

        {/* Conteúdo mobile distribuído entre topo e base com centro livre */}
        <div
          className="
            relative
            z-10
            flex
            min-h-[760px]
            flex-col
            justify-between
            px-5
            pb-8
            pt-8
            xs:min-h-[780px]
            sm:min-h-[840px]
            sm:px-8
            sm:pb-10
            sm:pt-10
          "
        >

          {/* PARTE SUPERIOR: Eyebrow + Headline + Descrição */}
          <div className="max-w-[360px] sm:max-w-[420px]">

            {/* Eyebrow */}
            <div style={animStyle(60, 10)} className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand" />

              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand sm:text-xs">
                Orthoface · Odontologia especializada
              </p>
            </div>

            {/* Headline */}
            <h1
              style={animStyle(140, 16)}
              className="
                text-[2.15rem]
                font-extrabold
                leading-[1.05]
                tracking-[-0.035em]
                text-brand-deep
                xs:text-[2.35rem]
                sm:text-5xl
              "
            >
              Todas as etapas do seu tratamento,
              <span className="block text-brand">
                em um só lugar.
              </span>
            </h1>

            {/* Descrição */}
            <p
              style={animStyle(230, 12)}
              className="
                mt-3.5
                max-w-[340px]
                text-[14px]
                leading-relaxed
                text-brand-muted
                xs:max-w-[360px]
                sm:text-base
              "
            >
              Da prevenção à reabilitação oral, reunimos diferentes
              especialidades para planejar o cuidado certo para cada caso.
            </p>

          </div>

          {/* PARTE INFERIOR: Botões + Horário (mantém o rosto totalmente desobstruído) */}
          <div className="w-full max-w-[380px] pt-4">

            {/* CTAs */}
            <div style={animStyle(330, 12)} className="flex flex-col gap-2.5">

              <a
                href={WA_AGENDAR}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-brand
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-brand/25
                  transition-all
                  hover:bg-brand-hover
                  active:scale-[0.98]
                "
              >
                Agendar avaliação pelo WhatsApp

              </a>

              <a
                href="#tratamentos"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-brand-deep/15
                  bg-white/85
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-brand-deep
                  backdrop-blur-sm
                  transition-all
                  hover:bg-white
                  active:scale-[0.98]
                "
              >
                Conhecer tratamentos
              </a>

            </div>

            {/* Horário na parte inferior abaixo dos botões */}
            <div
              style={animStyle(440, 8)}
              className="mt-3.5 flex items-center gap-2 text-[11px] text-brand-muted sm:text-xs"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Segunda a sexta, 08h às 19h · Sábado, 08h às 12h</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};