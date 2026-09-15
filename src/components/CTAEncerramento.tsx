import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const WA_AGENDAR =
  'https://wa.me/5586999398960?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Orthoface%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

export const CTAEncerramento: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-brand-ice">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">

        <AnimatedSection variant="fadeDown">
          <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-3">
            Atendimento Próximo
          </span>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={80}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deep tracking-tight mb-6 leading-tight">
            Vamos entender o que o seu sorriso precisa?
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={180}>
          <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl mx-auto mb-10">
            Converse com a equipe da Orthoface e agende sua avaliação.
          </p>
        </AnimatedSection>

        {/* CTA button — scaleIn with slight spring feel */}
        <AnimatedSection variant="scaleIn" delay={280}>
          <div>
            <a
              href={WA_AGENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                px-8 py-4 rounded-full
                bg-brand text-white text-lg font-semibold
                hover:bg-brand-hover hover:-translate-y-0.5
                active:scale-[0.98] active:translate-y-0
                transition-all duration-200
                shadow-md shadow-brand/25 hover:shadow-lg hover:shadow-brand/30
              "
            >
              Falar com a Orthoface
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
