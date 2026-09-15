import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const Profissional: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 xl:py-36 bg-brand-canvas">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Composição Editorial de Corpo Clínico ─────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ── Retrato com Protagonismo Visual ──────────────── */}
          <AnimatedSection
            variant="fadeRight"
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl overflow-hidden border border-brand-deep/[0.08] bg-white aspect-[3/4] shadow-sm">
                <img
                  src="/images/dr-fernando-avatar.jpg"
                  alt="Dr. Fernando Galdino - Responsável Clínico da Orthoface"
                  className="w-full h-full object-cover object-[center_top]"
                  loading="lazy"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-brand-muted/80 font-mono">
                <span>Fundador Orthoface</span>
                <span>Teresina · PI</span>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Credenciais e Filosofia de Atendimento ────────── */}
          <div className="lg:col-span-7">
            <AnimatedSection variant="fadeDown">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1.5px] w-6 bg-brand" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                  Capítulo 04 · Responsabilidade Técnica
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={80}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deep tracking-[-0.03em] leading-[1.08] mb-4">
                Dr. Fernando Galdino
              </h2>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={140}>
              <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-brand mb-8">
                Responsável Clínico · Cirurgião-Dentista
              </p>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={200}>
              <div className="space-y-5 text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl mb-10">
                <p>
                  Na Orthoface, o atendimento odontológico começa pela escuta atenta e pela avaliação
                  criteriosa de cada estrutura biológica. A proposta é apresentar diagnósticos com
                  transparência completa e planejar tratamentos sólidos, sem atalhos ou modismos.
                </p>
                <p>
                  Com atuação dedicada à harmonização funcional, reabilitação oral e odontologia estética,
                  o Dr. Fernando coordena cada etapa clínica garantindo segurança, previsibilidade e
                  conforto ao paciente.
                </p>
              </div>
            </AnimatedSection>

            {/* Compromisso Técnico em Linhas Arquitetônicas */}
            <AnimatedSection variant="fadeUp" delay={280}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-brand-deep/[0.08]">
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand mb-1">
                    Atendimento Direto
                  </h4>
                  <p className="text-sm text-brand-muted">
                    Acompanhamento pessoal em todas as consultas e etapas reabilitadoras.
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand mb-1">
                    Rigor Biológico
                  </h4>
                  <p className="text-sm text-brand-muted">
                    Preservação da estrutura dentária e restabelecimento da função mastigatória.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>

      </div>
    </section>
  );
};
