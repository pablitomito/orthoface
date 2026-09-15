import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { StaggerContainer } from './StaggerContainer';

interface Specialty {
  id: string;
  num: string;
  title: string;
  summary: string;
  details: string;
}

const specialties: Specialty[] = [
  {
    id: 'acc1',
    num: '01',
    title: 'Facetas & Lentes de Contato Dental',
    summary:
      'Estratificação anatômica em resinas nobres ou cerâmica para harmonizar proporções e alinhamento do sorriso.',
    details:
      'Planejamento individualizado preservando ao máximo a estrutura biológica natural. Ideal para correção de diastemas, desgastes incisais e alterações cromáticas.',
  },
  {
    id: 'acc2',
    num: '02',
    title: 'Implantes, Próteses & Reabilitação Oral',
    summary:
      'Recuperação da estabilidade mastigatória, suporte ósseo e harmonia funcional do arco dental.',
    details:
      'Tratamento integrado para perdas dentárias parciais ou totais com implantes de alta precisão e próteses fixas biocompatíveis.',
  },
  {
    id: 'acc3',
    num: '03',
    title: 'Aparelho Ortodôntico & Alinhadores',
    summary:
      'Correção de apinhamentos, espaçamentos e desequilíbrios da oclusão funcional.',
    details:
      'Acompanhamento contínuo para crianças, jovens e adultos com aparelhos convencionais, estéticos ou alinhadores invisíveis.',
  },
  {
    id: 'acc4',
    num: '04',
    title: 'Tratamento de Canal & Restaurações',
    summary:
      'Eliminação de dor e infecções, associada à reconstrução por pinos de fibra e resinas estéticas.',
    details:
      'Tecnologia endodôntica mecanizada para tratamentos seguros e acolhedores, devolvendo a integridade do dente natural.',
  },
  {
    id: 'acc5',
    num: '05',
    title: 'Clareamento, Botox & Harmonização Facial',
    summary:
      'Procedimentos complementares para equilíbrio funcional da musculatura mastigatória e realce estético.',
    details:
      'Clareamento supervisionado seguro e aplicação terapêutica de toxina botulínica para controle de bruxismo e cefaleias tensionais.',
  },
  {
    id: 'acc6',
    num: '06',
    title: 'Extrações & Raio-X Diagnóstico',
    summary:
      'Remoção criteriosa de sisos inclusos e diagnóstico radiográfico direto no consultório.',
    details:
      'Exames para planejamento cirúrgico preciso e atendimento sem deslocamentos desnecessários em Teresina.',
  },
];

export const Tratamentos: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="tratamentos" className="py-20 lg:py-28 bg-white border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Section header ─────────────────────────────────── */}
        <AnimatedSection variant="fadeUp" className="max-w-2xl mb-14 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-3">
            Especialidades Integradas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight mb-4">
            Cuidado completo, de acordo com o que você precisa.
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            A avaliação é o primeiro passo para entender seu caso e indicar o tratamento adequado.
          </p>
        </AnimatedSection>

        {/* ── Grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Accordion ────────────────────────────────────── */}
          <StaggerContainer
            variant="fadeUp"
            staggerMs={55}
            className="lg:col-span-7 divide-y divide-brand-border/70 border-t border-b border-brand-border/70"
          >
            {specialties.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="group transition-colors duration-150 hover:bg-brand-ice/20">
                  {/* ── Row header ──────────────────────────── */}
                  <div
                    className="py-5 flex items-center justify-between cursor-pointer select-none"
                    onClick={() => toggleAccordion(item.id)}
                    role="button"
                    aria-expanded={isOpen}
                    aria-controls={`acc-body-${item.id}`}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleAccordion(item.id);
                      }
                    }}
                  >
                    <span className="text-xs font-mono text-brand font-bold mr-4 group-hover:text-brand transition-colors">
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-brand-deep group-hover:text-brand transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-sm text-brand-muted mt-1">{item.summary}</p>
                    </div>
                    {/* ── Icon: + rotates 45° → × when open ── */}
                    <span
                      className="ml-4 text-brand-muted group-hover:text-brand text-xl font-light select-none transition-transform duration-300 inline-block"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </div>

                  {/* ── Accordion body (CSS Grid height trick) ── */}
                  <div
                    id={`acc-body-${item.id}`}
                    className={`accordion-body${isOpen ? ' open' : ''}`}
                  >
                    <div className="accordion-body-inner">
                      <div className="pb-5 text-sm text-brand-muted pl-8 leading-relaxed">
                        {item.details}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </StaggerContainer>

          {/* ── Sticky card (right column) ───────────────────── */}
          <AnimatedSection
            variant="fadeLeft"
            delay={200}
            className="lg:col-span-5 bg-brand-ice p-6 sm:p-8 rounded-3xl border border-brand-border/70 sticky top-28"
          >
            <div className="overflow-hidden rounded-2xl mb-6 shadow-sm">
              <img
                src="/images/tratamentos-resina.jpg"
                alt="Caso de facetas em resina e reabilitação na Orthoface"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-1">
              Abordagem Clínica
            </span>
            <h4 className="text-xl font-bold text-brand-deep mb-2">
              Diagnóstico claro e sem pressa
            </h4>
            <p className="text-sm text-brand-muted leading-relaxed mb-6">
              Em nossa clínica, nenhum procedimento é realizado sem uma análise minuciosa da sua
              saúde gengival, mastigatória e oclusal. Você entende exatamente o passo a passo de
              cada intervenção.
            </p>
            <a
              href="https://wa.me/5586999398960?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Orthoface%20e%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20os%20tratamentos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover transition-colors"
            >
              <span>Tirar dúvidas sobre um procedimento</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
