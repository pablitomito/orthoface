import React, { useEffect, useRef } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { StaggerContainer } from './StaggerContainer';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const AOrthoface: React.FC = () => {
  const reduced = useReducedMotion();
  const imgRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);

  // ── Parallax on clinic photo — desktop only ───────────────────
  useEffect(() => {
    if (reduced) return;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (window.innerWidth < 1024) return;

        const section = sectionRef.current;
        const img = imgRef.current;
        if (!section || !img) return;

        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;

        // Progress 0→1 as section travels through viewport
        const raw = (vh - rect.top) / (vh + rect.height);
        const progress = Math.max(0, Math.min(1, raw));

        // Translate ±14px around center (scale(1.06) gives room)
        const translateY = (progress - 0.5) * 28;
        img.style.transform = `scale(1.06) translateY(${translateY}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Trigger once immediately
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
      if (imgRef.current) imgRef.current.style.transform = '';
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="a-orthoface"
      className="py-20 lg:py-28 bg-brand-ice border-b border-brand-border/60"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Photo — fadeRight (comes from left visually) ───── */}
          <AnimatedSection variant="fadeRight" className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white">
              <img
                ref={imgRef}
                src="/images/clinica-orthoface-interior.jpg"
                alt="Dr. Fernando no consultório equipado da Clínica Orthoface em Teresina"
                className="w-full h-[480px] object-cover"
                loading="lazy"
                style={reduced ? {} : { transform: 'scale(1.06)' }}
              />
              {/* Overlay enters slightly after the photo */}
              <AnimatedSection
                variant="fadeUp"
                delay={300}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-brand-border/70 text-xs text-brand-deep"
              >
                <p className="font-bold text-sm text-brand">Estrutura planejada para Teresina</p>
                <p className="text-brand-muted mt-0.5">
                  Biossegurança, equipamentos para raio-X e diagnóstico integrado.
                </p>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* ── Text — fadeLeft (comes from right visually) ──────── */}
          <AnimatedSection variant="fadeLeft" delay={100} className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-3">
              Sobre a Clínica - ALTERAR IMAGEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight mb-6">
              Uma clínica preparada para acompanhar todo o seu tratamento.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed mb-6">
              A Orthoface reúne diferentes áreas da odontologia para que avaliação, planejamento e
              acompanhamento aconteçam de maneira integrada. Do atendimento preventivo aos casos de
              reabilitação oral, cada paciente recebe uma orientação construída para sua necessidade.
            </p>

            {/* ── Mini-cards — staggered ────────────────────────── */}
            <StaggerContainer
              variant="fadeUp"
              staggerMs={120}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-border/80"
            >
              <div className="group p-4 rounded-2xl bg-white border border-brand-border/70 transition-all duration-200 hover:border-brand/30 hover:shadow-sm">
                <h4 className="font-bold text-brand-deep text-base mb-1 transition-colors duration-150 group-hover:text-brand">
                  Sem promessas irreais
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Explicamos com clareza o que a odontologia moderna pode alcançar em cada caso
                  particular.
                </p>
              </div>
              <div className="group p-4 rounded-2xl bg-white border border-brand-border/70 transition-all duration-200 hover:border-brand/30 hover:shadow-sm">
                <h4 className="font-bold text-brand-deep text-base mb-1 transition-colors duration-150 group-hover:text-brand">
                  Acompanhamento próximo
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Você sabe quem é o dentista responsável pelo seu atendimento em todas as sessões.
                </p>
              </div>
            </StaggerContainer>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};
