import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=Av.+Poti+Velho,+QD+Lt+03+-+Residencial+Lindalma+Soares,+Teresina+-+PI,+64003-640';
const WA_AGENDAR =
  'https://wa.me/5586999398960?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Orthoface%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

export const Localizacao: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-brand-ice border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Heading ─────────────────────────────────────────── */}
        <AnimatedSection variant="fadeUp" className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-3">
            Fácil Acesso em Teresina
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight mb-4">
            Chegar à Orthoface é simples.
          </h2>
          <p className="text-base sm:text-lg text-brand-muted">
            Estrutura acessível com localização privilegiada na Zona Norte de Teresina.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* ── Info card — fadeRight ────────────────────────── */}
          <AnimatedSection
            variant="fadeRight"
            delay={80}
            className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-brand-border/80 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase text-brand tracking-wider mb-2">
                  Endereço
                </h4>
                <p className="text-base font-semibold text-brand-deep leading-snug">
                  Av. Poti Velho, QD Lt 03 — Residencial Lindalma Soares
                </p>
                <p className="text-sm text-brand-muted mt-1">Teresina — PI, CEP 64003-640</p>
              </div>

              <div className="border-t border-brand-border/60 pt-6">
                <h4 className="text-xs font-bold uppercase text-brand tracking-wider mb-2">
                  Horários de Atendimento
                </h4>
                <p className="text-sm text-brand-deep font-medium">
                  Segunda a sexta: <span className="font-bold">08h às 19h</span>
                </p>
                <p className="text-sm text-brand-deep font-medium mt-1">
                  Sábado: <span className="font-bold">08h às 12h</span>
                </p>
              </div>

              <div className="border-t border-brand-border/60 pt-6">
                <h4 className="text-xs font-bold uppercase text-brand tracking-wider mb-2">
                  WhatsApp Direto
                </h4>
                <p className="text-xl font-bold text-brand tracking-tight transition-all duration-150 hover:text-brand-hover hover:underline cursor-pointer">
                  (86) 99939-8960
                </p>
                <p className="text-xs text-brand-muted mt-1">
                  Atendimento ágil para tirar dúvidas e confirmar agendamentos.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-8 mt-6 border-t border-brand-border/60">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-5 py-3.5 rounded-full bg-brand-deep text-white text-sm font-semibold hover:bg-brand-navy transition-colors active:scale-[0.98]"
              >
                Traçar rota
              </a>
              <a
                href={WA_AGENDAR}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-5 py-3.5 rounded-full bg-brand text-white text-sm font-semibold hover:bg-brand-hover transition-all active:scale-[0.98] hover:shadow-md hover:shadow-brand/20"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </AnimatedSection>

          {/* ── Map — fadeLeft ───────────────────────────────── */}
          <AnimatedSection
            variant="fadeLeft"
            delay={160}
            className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-brand-border/80 shadow-sm min-h-[380px] relative"
          >
            <iframe
              title="Mapa de Localização Orthoface em Teresina"
              src="https://maps.google.com/maps?q=Av.+Poti+Velho,+Teresina+-+PI&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};
