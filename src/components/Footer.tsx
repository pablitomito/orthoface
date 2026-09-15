import React from 'react';
import { StaggerContainer } from './StaggerContainer';
import { AnimatedSection } from './AnimatedSection';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-canvas text-brand-deep pt-16 pb-12 border-t border-brand-deep/[0.08]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Grid Principal de Navegação ────────────────────── */}
        <StaggerContainer
          variant="fadeUp"
          staggerMs={70}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-brand-deep/[0.08]"
        >
          {/* Identidade e Apresentação */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5 mb-4">
              <img
                src="/images/logo-orthoface-footer.jpg"
                alt="Clínica Orthoface"
                className="h-10 w-auto rounded-lg border border-brand-deep/[0.08] p-0.5 bg-white"
                width={40}
                height={40}
              />
              <span className="text-xl font-extrabold tracking-tight text-brand-deep">
                Orthoface
              </span>
            </div>

            <p className="text-sm text-brand-muted leading-relaxed max-w-sm mb-4">
              Odontologia Especializada em Teresina — Piauí. Cuidado próximo, ético e focado no
              bem-estar biológico e funcional de cada paciente.
            </p>

            <p className="text-xs font-mono text-brand font-medium">
              Responsável Clínico: Dr. Fernando Galdino
            </p>
          </div>

          {/* Navegação Rápida */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-deep mb-4">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li>
                <a href="#inicio" className="hover:text-brand transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#tratamentos" className="hover:text-brand transition-colors">
                  Tratamentos
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-brand transition-colors">
                  Resultados Clínicos
                </a>
              </li>
              <li>
                <a href="#a-orthoface" className="hover:text-brand transition-colors">
                  A Orthoface
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-brand transition-colors">
                  Como Chegar
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento e Localização */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-deep mb-4">
              Atendimento &amp; Localização
            </h4>
            <p className="text-sm text-brand-muted leading-relaxed mb-2">
              Av. Poti Velho, QD Lt 03 — Residencial Lindalma Soares
              <br />
              Teresina — PI · CEP 64003-640
            </p>
            <p className="text-xs text-brand-muted mb-3 font-medium">
              Segunda a sexta: 08h às 19h · Sábado: 08h às 12h
            </p>
            <a
              href="https://wa.me/5586999398960?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Orthoface%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base font-bold text-brand hover:text-brand-hover hover:underline transition-colors"
            >
              (86) 99939-8960
            </a>
          </div>
        </StaggerContainer>

        {/* ── Copyright e Ética Profissional ─────────────────── */}
        <AnimatedSection
          variant="fade"
          delay={150}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted/80"
        >
          <p>© 2025 Clínica Orthoface. Todos os direitos reservados.</p>
          <p className="text-[11px] max-w-md sm:text-right leading-relaxed font-mono">
            As imagens de casos clínicos documentados têm objetivo informativo conforme preceitos
            éticos do CFO/CRO-PI.
          </p>
        </AnimatedSection>

      </div>
    </footer>
  );
};
