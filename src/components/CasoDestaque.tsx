import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const CasoDestaque: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 xl:py-36 bg-brand-canvas">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Composição Editorial de Estudo de Caso ────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ── Imagem Clínica em Alta Resolução ──────────────── */}
          <AnimatedSection
            variant="fadeRight"
            delay={80}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden border border-brand-deep/[0.08] bg-white">
              <img
                src="/images/caso-bruxismo.jpg"
                alt="Documentação clínica de caso de bruxismo e reabilitação estética na Orthoface"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs text-brand-muted mt-4 gap-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-brand">
                FIG. 01 — Protocolo de Reabilitação Oclusal
              </span>
              <span className="text-brand-muted/80">
                Documentação fotográfica clínica · Orthoface
              </span>
            </div>
          </AnimatedSection>

          {/* ── Narrativa Clínica Editorial ──────────────────── */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <AnimatedSection variant="fadeDown" delay={40}>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-[1.5px] w-6 bg-brand" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                  Estudo de Caso Clínico #01
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={120}>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-brand-deep leading-[1.1] tracking-[-0.03em] mb-6">
                Quando o tratamento precisa recuperar mais do que a aparência.
              </h2>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={200}>
              <div className="space-y-4 text-base sm:text-lg text-brand-muted leading-relaxed mb-8">
                <p>
                  Neste caso, o paciente apresentava abrasão severa no esmalte, bruxismo
                  associado à má oclusão e dentes tratados endodonticamente que estavam
                  quebrados.
                </p>
                <p>
                  O planejamento integrou reconstruções com pinos de fibra de vidro, restaurações
                  estéticas e restabelecimento da dimensão vertical de oclusão ao longo do processo.
                </p>
              </div>
            </AnimatedSection>

            {/* Destaque arquitetônico com linha fina */}
            <AnimatedSection variant="fadeUp" delay={280}>
              <div className="pt-6 border-t border-brand-deep/[0.08]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-deep mb-2">
                  Princípio Fundamental
                </p>
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                  Foco em devolver a mastigação confortável e proteger as articulações antes de
                  concluir as etapas de harmonização estética.
                </p>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};
