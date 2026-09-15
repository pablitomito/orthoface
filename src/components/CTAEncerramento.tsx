import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const WA_AGENDAR =
  'https://wa.me/5586999398960?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Orthoface%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

export const CTAEncerramento: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 xl:py-44 bg-brand-canvas">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">

        <AnimatedSection variant="fadeDown">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1.5px] w-6 bg-brand" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Início do Tratamento
            </span>
            <span className="h-[1.5px] w-6 bg-brand" />
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={80}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-brand-deep tracking-[-0.035em] leading-[1.04] max-w-4xl mx-auto mb-8">
            Vamos entender o que o seu sorriso precisa?
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={180}>
          <p className="text-lg sm:text-xl lg:text-2xl text-brand-muted leading-relaxed max-w-2xl mx-auto mb-12 font-normal">
            Agende uma avaliação detalhada com a equipe clínica da Orthoface em Teresina.
          </p>
        </AnimatedSection>

        {/* CTA Monumental e Minimalista */}
        <AnimatedSection variant="scaleIn" delay={260}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_AGENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-3
                px-9 py-5 rounded-full
                bg-brand text-white text-base sm:text-lg font-semibold tracking-wide
                hover:bg-brand-hover hover:-translate-y-0.5
                active:scale-[0.98] active:translate-y-0
                transition-all duration-300
                shadow-sm shadow-brand/20 hover:shadow-lg hover:shadow-brand/30
              "
            >
              <span>Falar com a Orthoface</span>
              <span aria-hidden="true" className="text-sm">↗</span>
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
