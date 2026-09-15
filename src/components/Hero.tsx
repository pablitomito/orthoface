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
    const timer = setTimeout(() => setMounted(true), 80);
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
        img.style.transform = `translateY(${scrollY * 0.12}px)`;
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

  const animStyle = (delayMs: number, translateY = 16): React.CSSProperties =>
    prefersReduced
      ? {}
      : {
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'none' : `translateY(${translateY}px)`,
        transition:
          'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
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
      className="relative overflow-hidden bg-brand-canvas"
    >
      {/* =========================================================
          DESKTOP
          Preenche a primeira dobra (100% viewport menos header),
          imagem perfeitamente visível e texto na margem esquerda
         ========================================================= */}
      <div className="relative hidden min-h-[calc(100vh-5rem)] lg:block lg:min-h-[720px] xl:min-h-[780px]">

        {/* Imagem do banner desktop com object-top preservando a cabeça do Dr. Fernando e o topo */}
        <img
          ref={desktopImgRef}
          src="/images/dr-fernando-hero-desktop.jpg"
          alt="Dr. Fernando Galdino, responsável clínico da Orthoface"
          className="absolute inset-0 h-full w-full object-cover object-top"
          style={imageFadeStyle}
        />

        {/* Gradiente editorial translúcido na lateral esquerda para leitura sem ocultar o Dr. Fernando */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-r
            from-[#f8fafc]/65
            via-[#f8fafc]/40
            via-[32%]
            to-transparent
          "
        />

        {/* Atmosfera sutil na parte inferior para fusão com a próxima seção */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0 h-36
            bg-gradient-to-t
            from-[#f8fafc]
            via-[#f8fafc]/10
            to-transparent
          "
        />

        {/* Conteúdo com posicionamento estritamente na lateral esquerda */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[1520px] items-center px-8 sm:px-12 lg:min-h-[720px] lg:px-16 xl:min-h-[780px] xl:px-20 2xl:px-24">

          <div className="w-full max-w-[620px] pb-10 pt-6">

            {/* Eyebrow Editorial */}
            <div style={animStyle(60, 10)} className="mb-6 flex items-center gap-3">
              <span className="h-[1.5px] w-6 bg-brand" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Orthoface · Odontologia Especializada
              </p>
            </div>

            {/* Headline com grande presença editorial */}
            <h1
              style={animStyle(140, 18)}
              className="
                text-5xl
                font-extrabold
                leading-[1.04]
                tracking-[-0.035em]
                text-brand-deep
                lg:text-[3.5rem]
                xl:text-[4.1rem]
              "
            >
              Todas as etapas do seu tratamento,
              <span className="block text-brand font-extrabold">
                em um só lugar.
              </span>
            </h1>

            {/* Descrição em largura controlada */}
            <p
              style={animStyle(240, 14)}
              className="
                mt-6
                max-w-[500px]
                text-lg
                leading-relaxed
                text-brand-muted
                xl:text-[1.2rem]
              "
            >
              Da prevenção à reabilitação oral, reunimos diferentes
              especialidades para planejar o cuidado certo para cada caso.
            </p>

            {/* CTAs de alto padrão editorial */}
            <div style={animStyle(340, 14)} className="mt-9 flex flex-wrap items-center gap-4">

              <a
                href={WA_AGENDAR}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  bg-brand
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  shadow-brand/20
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-brand-hover
                  hover:shadow-md
                  hover:shadow-brand/30
                  active:translate-y-0
                "
              >
                Agendar Avaliação
                <span aria-hidden="true" className="text-sm">↗</span>
              </a>

              <a
                href="#tratamentos"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-brand-deep/20
                  bg-white/60
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-brand-deep
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-brand-deep/50
                  hover:bg-white
                "
              >
                Conhecer Tratamentos
              </a>
            </div>

            {/* Informação de atendimento arquitetônica */}
            <div
              style={animStyle(450, 12)}
              className="
                mt-10
                flex
                items-center
                gap-3.5
                border-t
                border-brand-deep/[0.08]
                pt-6
                text-xs
                font-medium
                tracking-wide
                text-brand-muted
              "
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
              <span>
                Segunda a sexta, 08h às 19h · Sábado, 08h às 12h
              </span>
            </div>

          </div>
        </div>
      </div>


      {/* =========================================================
          MOBILE
          Composição vertical: topo para título/texto, centro livre
          para o Dr. Fernando e base para os botões e horário
         ========================================================= */}
      <div className="relative overflow-hidden lg:hidden">

        {/* Imagem vertical mobile */}
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

        {/* Gradiente superior suave para leitura */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-[42%]
            bg-gradient-to-b
            from-[#f8fafc]/95
            via-[#f8fafc]/75
            via-[35%]
            to-transparent
          "
        />

        {/* Gradiente inferior para leitura dos botões na base */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-72
            bg-gradient-to-t
            from-[#f8fafc]/98
            via-[#f8fafc]/80
            via-[48%]
            to-transparent
          "
        />

        {/* Conteúdo mobile com flex-col justify-between para manter o rosto livre */}
        <div
          className="
            relative
            z-10
            flex
            min-h-[780px]
            flex-col
            justify-between
            px-5
            pb-8
            pt-9
            xs:min-h-[820px]
            sm:min-h-[860px]
            sm:px-8
            sm:pb-10
            sm:pt-12
          "
        >

          {/* PARTE SUPERIOR: Eyebrow + Headline + Descrição */}
          <div className="max-w-[360px] sm:max-w-[420px]">

            <div style={animStyle(60, 10)} className="mb-3.5 flex items-center gap-2.5">
              <span className="h-[1.5px] w-4 bg-brand" />
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand sm:text-xs">
                Orthoface · Odontologia Especializada
              </p>
            </div>

            <h1
              style={animStyle(140, 16)}
              className="
                text-[2.2rem]
                font-extrabold
                leading-[1.05]
                tracking-[-0.035em]
                text-brand-deep
                xs:text-[2.45rem]
                sm:text-5xl
              "
            >
              Todas as etapas do seu tratamento,
              <span className="block text-brand">
                em um só lugar.
              </span>
            </h1>

            <p
              style={animStyle(230, 12)}
              className="
                mt-4
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

          {/* PARTE INFERIOR: Botões + Horário (sem sobrepor o rosto) */}
          <div className="w-full max-w-[380px] pt-4">

            <div style={animStyle(330, 12)} className="flex flex-col gap-3">

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
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  shadow-brand/20
                  transition-all
                  hover:bg-brand-hover
                  active:scale-[0.98]
                "
              >
                Agendar avaliação pelo WhatsApp
                <span aria-hidden="true">↗</span>
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
                  border-brand-deep/20
                  bg-white/80
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
              className="mt-4 flex items-center justify-center gap-2 text-[11px] text-brand-muted sm:text-xs"
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