import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const Profissional: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-brand-border/60">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">

        <AnimatedSection variant="fadeDown">
          <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-3">
            Corpo Clínico
          </span>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={80}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight mb-6">
            Quem está à frente do seu atendimento.
          </h2>
        </AnimatedSection>

        {/* Avatar — scale entrance for personality */}
        <AnimatedSection variant="scaleIn" delay={160}>
          <div className="inline-block p-1 rounded-full bg-brand-ice mb-6 border border-brand-border transition-all duration-300 hover:border-brand/40 hover:scale-[1.03]">
            <img
              src="/images/dr-fernando-avatar.jpg"
              alt="Dr. Fernando Galdino - Clínica Orthoface"
              className="w-32 h-32 rounded-full object-cover object-[center_top] shadow-sm"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={240}>
          <h3 className="text-2xl font-bold text-brand-deep mb-2">Dr. Fernando Galdino</h3>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={300}>
          <p className="text-sm font-semibold text-brand mb-6">
            Responsável Clínico · Orthoface
          </p>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={360}>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto">
            Na Orthoface, o atendimento começa pela escuta e pela compreensão de cada caso. A
            proposta é explicar as possibilidades com clareza e construir um tratamento adequado
            para cada paciente.
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
};
