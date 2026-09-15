import React, { useEffect, useRef } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { StaggerContainer } from './StaggerContainer';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const AOrthoface: React.FC = () => {
  const reduced = useReducedMotion();
  const imgRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>(0);

  // Parallax suave na foto da clínica no desktop
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

        const raw = (vh - rect.top) / (vh + rect.height);
        const progress = Math.max(0, Math.min(1, raw));

        const translateY = (progress - 0.5) * 24;
        img.style.transform = `scale(1.05) translateY(${translateY}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
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
      className="py-24 lg:py-32 xl:py-36 bg-brand-canvas"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ── Fotografia Institucional em Grande Escala ──────── */}
          <AnimatedSection variant="fadeRight" className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-brand-deep/[0.08] bg-white">
              <img
                ref={imgRef}
                src="/images/clinica-orthoface-interior.jpg"
                alt="Consultório equipado da Clínica Orthoface em Teresina"
                className="w-full h-[460px] sm:h-[520px] object-cover transition-transform duration-700 ease-out"
                loading="lazy"
                style={reduced ? {} : { transform: 'scale(1.05)' }}
              />

              {/* Legenda técnica integrada na foto */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-brand-deep/[0.08]">
                <p className="font-bold text-xs uppercase tracking-wider text-brand">
                  Estrutura Planejada em Teresina
                </p>
                <p className="text-xs text-brand-muted mt-0.5">
                  Biossegurança rigorosa, radiografia diagnóstica e conforto clínico.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Narrativa Institucional Editorial ──────────────── */}
          <AnimatedSection variant="fadeLeft" delay={100} className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1.5px] w-6 bg-brand" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Capítulo 03 · A Instituição
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deep tracking-[-0.03em] leading-[1.08] mb-6">
              Uma clínica preparada para acompanhar todo o seu tratamento.
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed mb-10">
              A Orthoface reúne diferentes áreas da odontologia para que avaliação, planejamento e
              acompanhamento aconteçam de maneira integrada. Do atendimento preventivo aos casos mais
              complexos de reabilitação oral, cada paciente recebe orientação personalizada e transparente.
            </p>

            {/* Pilares Institucionais em Linhas Arquitetônicas */}
            <StaggerContainer
              variant="fadeUp"
              staggerMs={100}
              className="space-y-6 pt-6 border-t border-brand-deep/[0.08]"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs font-bold text-brand uppercase tracking-wider mt-1">
                  01.
                </span>
                <div>
                  <h4 className="font-bold text-brand-deep text-lg mb-1 tracking-tight">
                    Sem promessas irreais
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    Explicamos com absoluta clareza os alcances e os limites biológicos da odontologia
                    em cada plano de cuidado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-brand-deep/[0.06]">
                <span className="font-mono text-xs font-bold text-brand uppercase tracking-wider mt-1">
                  02.
                </span>
                <div>
                  <h4 className="font-bold text-brand-deep text-lg mb-1 tracking-tight">
                    Acompanhamento contínuo e pessoal
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    Você sabe exatamente quem é o profissional responsável pelo seu caso do início à
                    manutenção periódica.
                  </p>
                </div>
              </div>
            </StaggerContainer>
          </AnimatedSection>

        </div>

      </div>
    </section>
  );
};
