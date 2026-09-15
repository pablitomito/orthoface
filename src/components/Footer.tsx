import React from 'react';
import { StaggerContainer } from './StaggerContainer';
import { AnimatedSection } from './AnimatedSection';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Columns — staggered fadeUp ───────────────────────── */}
        <StaggerContainer
          variant="fadeUp"
          staggerMs={80}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10"
        >
          {/* Identity */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo-orthoface-footer.jpg"
                alt="Clínica Orthoface"
                className="h-10 w-auto rounded-lg bg-white p-1"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold tracking-tight text-white">Orthoface</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm mb-4">
              Odontologia Especializada em Teresina — Piauí. Cuidado próximo, ético e focado no
              bem-estar de cada paciente.
            </p>
            <p className="text-xs text-gray-400">Responsável Clínico: Dr. Fernando Galdino</p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors duration-150">
                  Início
                </a>
              </li>
              <li>
                <a href="#tratamentos" className="hover:text-white transition-colors duration-150">
                  Tratamentos
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-white transition-colors duration-150">
                  Resultados Clínicos
                </a>
              </li>
              <li>
                <a href="#a-orthoface" className="hover:text-white transition-colors duration-150">
                  A Orthoface
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors duration-150">
                  Como chegar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand mb-4">
              Atendimento e Endereço
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed mb-2">
              Av. Poti Velho, QD Lt 03 — Residencial Lindalma Soares
              <br />
              Teresina — PI, CEP 64003-640
            </p>
            <p className="text-sm text-gray-300 mb-2">
              Segunda a sexta: 08h às 19h · Sábado: 08h às 12h
            </p>
            <a
              href="https://wa.me/5586999398960?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Orthoface%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base font-bold text-brand hover:underline mt-1 transition-colors duration-150 hover:text-brand-hover"
            >
              (86) 99939-8960
            </a>
          </div>
        </StaggerContainer>

        {/* ── Copyright — fade, no translate (legal text stays put) ── */}
        <AnimatedSection
          variant="fade"
          delay={200}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400"
        >
          <p>© 2025 Clínica Orthoface. Todos os direitos reservados.</p>
          <p className="text-[11px] text-gray-400 max-w-md sm:text-right">
            As imagens de casos clínicos documentados têm objetivo informativo conforme preceitos
            éticos do CFO/CRO-PI.
          </p>
        </AnimatedSection>

      </div>
    </footer>
  );
};
