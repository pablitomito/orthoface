import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=Av.+Poti+Velho,+QD+Lt+03+-+Residencial+Lindalma+Soares,+Teresina+-+PI,+64003-640';
const WA_AGENDAR =
  'https://wa.me/5586999398960?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Orthoface%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

export const Localizacao: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 lg:py-32 xl:py-36 bg-brand-canvas">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Header Editorial ───────────────────────────────── */}
        <AnimatedSection variant="fadeUp" className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1.5px] w-6 bg-brand" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Capítulo 05 · Acesso &amp; Atendimento
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deep tracking-[-0.03em] leading-[1.08] mb-5">
            Chegar à Orthoface é simples.
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Estrutura acessível com localização privilegiada na Zona Norte de Teresina.
          </p>
        </AnimatedSection>

        {/* ── Grid Arquitetônico Unificado ───────────────────── */}
        <div className="border border-brand-deep/[0.08] rounded-2xl overflow-hidden bg-white grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-brand-deep/[0.08]">

          {/* ── Dados de Atendimento ─────────────────────────── */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-10">
            <div className="space-y-8">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand block mb-2">
                  01. Endereço
                </span>
                <p className="text-lg font-bold text-brand-deep leading-snug">
                  Av. Poti Velho, QD Lt 03 — Residencial Lindalma Soares
                </p>
                <p className="text-sm text-brand-muted mt-1">
                  Teresina — PI · CEP 64003-640
                </p>
              </div>

              <div className="pt-6 border-t border-brand-deep/[0.06]">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand block mb-2">
                  02. Horários de Funcionamento
                </span>
                <p className="text-sm sm:text-base text-brand-deep font-medium">
                  Segunda a sexta: <span className="font-bold">08h às 19h</span>
                </p>
                <p className="text-sm sm:text-base text-brand-deep font-medium mt-1">
                  Sábado: <span className="font-bold">08h às 12h</span>
                </p>
              </div>

              <div className="pt-6 border-t border-brand-deep/[0.06]">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand block mb-2">
                  03. Agendamento &amp; Contato
                </span>
                <a
                  href={WA_AGENDAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-extrabold text-brand tracking-tight hover:text-brand-hover transition-colors inline-block"
                >
                  (86) 99939-8960
                </a>
                <p className="text-xs text-brand-muted mt-1.5 leading-relaxed">
                  Confirmação de consultas, dúvidas sobre procedimentos e orientações prévias.
                </p>
              </div>
            </div>

            {/* Ações de navegação em linha */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-brand-deep/[0.08]">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-3.5 rounded-full border border-brand-deep/20 text-brand-deep text-xs font-bold uppercase tracking-wider hover:border-brand-deep/60 hover:bg-brand-deep/5 transition-all active:scale-[0.98]"
              >
                Traçar Rota no Mapa
              </a>

              <a
                href={WA_AGENDAR}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-3.5 rounded-full bg-brand text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-hover shadow-sm shadow-brand/20 transition-all active:scale-[0.98]"
              >
                WhatsApp Direto
              </a>
            </div>
          </div>

          {/* ── Mapa Interativo Perfeitamente Integrado ──────── */}
          <div className="lg:col-span-7 min-h-[420px] sm:min-h-[480px] bg-brand-deep/5 relative">
            <iframe
              title="Mapa de Localização Orthoface em Teresina"
              src="https://maps.google.com/maps?q=Av.+Poti+Velho,+Teresina+-+PI&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
