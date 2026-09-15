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
    <section id="tratamentos" className="py-24 lg:py-32 xl:py-36 bg-brand-canvas">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Section Header Editorial ───────────────────────── */}
        <AnimatedSection variant="fadeUp" className="max-w-3xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1.5px] w-6 bg-brand" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Capítulo 01 · Especialidades Integradas
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deep tracking-[-0.03em] leading-[1.08] mb-6">
            Cuidado completo, de acordo com o que você precisa.
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl">
            A avaliação é o primeiro passo para entender a anatomia funcional de cada sorriso e indicar
            o plano de tratamento mais seguro e previsível.
          </p>
        </AnimatedSection>

        {/* ── Composição Editorial: Lista Numerada + Coluna de Abordagem ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── Lista Editorial Numerada (Linhas Arquitetônicas) ── */}
          <StaggerContainer
            variant="fadeUp"
            staggerMs={60}
            className="lg:col-span-7 divide-y divide-brand-deep/[0.08] border-t border-b border-brand-deep/[0.08]"
          >
            {specialties.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="group transition-colors duration-200 hover:bg-brand-deep/[0.015]"
                >
                  {/* ── Linha Clicável ── */}
                  <div
                    className="py-6 sm:py-7 flex items-start sm:items-center justify-between cursor-pointer select-none gap-4"
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
                    <div className="flex items-baseline sm:items-center gap-4 sm:gap-6 flex-1">
                      <span className="text-xs font-mono font-bold text-brand tracking-wider">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-brand-deep group-hover:text-brand transition-colors duration-200 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm text-brand-muted mt-1 leading-relaxed max-w-xl">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    {/* Ícone editorial minimalista: + / × */}
                    <div className="flex-shrink-0 ml-2 mt-1 sm:mt-0">
                      <span
                        className="w-8 h-8 rounded-full border border-brand-deep/[0.12] flex items-center justify-center text-brand-deep group-hover:border-brand group-hover:text-brand text-lg font-light transition-all duration-300"
                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </div>
                  </div>

                  {/* ── Accordion Body com Detalhes Clínicos ── */}
                  <div
                    id={`acc-body-${item.id}`}
                    className={`accordion-body${isOpen ? ' open' : ''}`}
                  >
                    <div className="accordion-body-inner">
                      <div className="pb-7 pl-8 sm:pl-12 pr-4 text-sm sm:text-base text-brand-muted/90 leading-relaxed border-l-2 border-brand/40 ml-4 sm:ml-7 my-2">
                        {item.details}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </StaggerContainer>



        </div>
      </div>
    </section>
  );
};
