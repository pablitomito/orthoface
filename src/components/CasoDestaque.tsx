import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const CasoDestaque: React.FC = () => {
  return (
    <section className="py-20 bg-brand-ice border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Outer wrapper animates as a unit ───────────────── */}
        <AnimatedSection
          variant="scaleIn"
          threshold={0.08}
          className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-brand-border/80 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* ── Clinical photo ────────────────────────────── */}
            <AnimatedSection
              variant="fadeRight"
              delay={80}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-md border border-brand-border">
                <img
                  src="/images/caso-bruxismo.jpg"
                  alt="Documentação clínica de caso de bruxismo e reabilitação estética na Orthoface"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-center text-xs text-brand-muted mt-3 px-1">
                <span>Fotografia clínica documentada durante o protocolo</span>
                <span className="font-medium text-brand">Caso Clínico Real · Orthoface</span>
              </div>
            </AnimatedSection>

            {/* ── Clinical narrative ────────────────────────── */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <AnimatedSection variant="fadeDown" delay={40}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-ice text-brand text-xs font-bold uppercase tracking-wider mb-4 border border-brand-border transition-all duration-200 hover:-translate-y-px hover:shadow-sm">
                  Estudo de Caso Clínico
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" delay={120}>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-deep leading-tight tracking-tight mb-6">
                  Quando o tratamento precisa recuperar mais do que a aparência.
                </h3>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" delay={220}>
                <div className="space-y-4 text-base sm:text-lg text-brand-muted leading-relaxed mb-8">
                  <p>
                    Neste caso, o paciente apresentava abrasão severa no esmalte, bruxismo
                    associado à má oclusão e dentes tratados endodonticamente que estavam
                    quebrados.
                  </p>
                  <p>
                    O tratamento incluiu reconstruções com pinos de fibra de vidro, restaurações
                    estéticas e levantamento da mordida durante o processo de reabilitação.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection variant="fadeUp" delay={340}>
                <div className="p-4 rounded-xl bg-brand-ice border border-brand-border/80 text-sm text-brand-deep flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-brand flex-shrink-0 mt-0.5 transition-transform duration-300 hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Foco em devolver a mastigação confortável e proteger as articulações antes de
                    concluir a reabilitação estética.
                  </span>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
