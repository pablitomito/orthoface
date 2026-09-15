import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { StaggerContainer } from './StaggerContainer';

interface CaseItem {
  id: number;
  num: string;
  image: string;
  tag: string;
  title: string;
  alt: string;
  objectPosition?: string;
}

const cases: CaseItem[] = [
  {
    id: 1,
    num: '01',
    image: '/images/resultado-resina-1.jpg',
    objectPosition: '50% 50%',
    tag: 'Resina Composta',
    title: 'Estratificação Direta e Alinhamento',
    alt: 'Antes e depois de restaurações e facetas em resina',
  },
  {
    id: 2,
    num: '02',
    image: '/images/resultado-pino-reconstrucao.jpg',
    objectPosition: '25% 55%',
    tag: 'Reconstrução Biológica',
    title: 'Pino de Fibra de Vidro & Reconstrução',
    alt: 'Pino com reconstrução de dente quebrado',
  },
  {
    id: 3,
    num: '03',
    image: '/images/resultado-clareamento.jpg',
    objectPosition: '10% 53%',
    tag: 'Clareamento Clínico',
    title: 'Clareamento com Proteção Pulpar',
    alt: 'Antes e depois de clareamento guiado',
  },
  {
    id: 4,
    num: '04',
    image: '/images/resultado-aparelho-clareamento.jpg',
    objectPosition: '50% 52%',
    tag: 'Ortodontia & Finalização',
    title: 'Remoção de Aparelho & Profilaxia',
    alt: 'Remoção de aparelho ortodôntico e clareamento',
  },
  {
    id: 5,
    num: '05',
    image: '/images/resultado-faceta-masculino.jpg',
    objectPosition: '50% 34%',
    tag: 'Facetas em Resina',
    title: 'Fechamento de Espaços e Cor',
    alt: 'Antes e depois de faceta em resina composta',
  },
  {
    id: 6,
    num: '06',
    image: '/images/resultado-transformacao-sorriso.jpg',
    objectPosition: '50% 50%',
    tag: 'Harmonização Dental',
    title: 'Reestruturação do Sorriso',
    alt: 'Transformação estética de sorriso',
  },
];

export const Resultados: React.FC = () => {
  return (
    <section
      id="resultados"
      className="py-24 lg:py-32 xl:py-36 bg-brand-canvas"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Section Header Editorial ───────────────────────── */}
        <AnimatedSection
          variant="fadeUp"
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-8"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1.5px] w-6 bg-brand" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Capítulo 02 · Portfólio Clínico
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deep tracking-[-0.03em] leading-[1.08] mb-5">
              Resultados construídos caso a caso.
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl">
              Cada tratamento é precedido por rigoroso planejamento funcional. Conheça casos reais
              conduzidos com ética e precisão na Orthoface.
            </p>
          </div>

          <p className="text-xs text-brand-muted/80 font-mono uppercase tracking-wider max-w-xs md:text-right border-l md:border-l-0 md:border-r border-brand-deep/[0.12] pl-3 md:pl-0 md:pr-3">
            Documentação ética conforme CFO / CRO-PI
          </p>
        </AnimatedSection>

        {/* ── 1. PRIMEIRO RESULTADO — Destaque Sozinho com 100% da Largura ── */}
        <AnimatedSection
          variant="fadeUp"
          threshold={0.06}
          className="w-full mb-16 lg:mb-24 border-y border-brand-deep/[0.08] py-12 lg:py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-brand-deep/[0.08] bg-white">
                <img
                  src="/images/reabilitacao-oral-destaque.jpg"
                  alt="Caso de Reabilitação Oral Completa na Clínica Orthoface - Antes e Depois"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand mb-2 block">
                Destaque Reabilitador
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-deep mb-5 leading-[1.15] tracking-tight">
                Reabilitação Oral &amp; Devolução da Função
              </h3>

              <p className="text-base text-brand-muted leading-relaxed mb-7">
                Devolver dentes ausentes, restabelecer a dimensão vertical de oclusão e recuperar a
                segurança social e mastigatória são a essência primordial da odontologia integrada.
              </p>

              <div className="space-y-3.5 border-t border-brand-deep/[0.08] pt-6 text-sm text-brand-deep">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span className="font-medium">Recuperação anatômica mastigatória e oclusal</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span className="font-medium">Planejamento estético harmonizado ao rosto</span>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>

        {/* ── 2. DEMAIS RESULTADOS — 2 colunas no Mobile e 3 colunas no Desktop ── */}
        <StaggerContainer
          variant="fadeUp"
          staggerMs={70}
          threshold={0.05}
          className="grid grid-cols-2 lg:grid-cols-3 gap-x-3.5 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-12 lg:gap-y-14"
        >
          {cases.map((c) => (
            <div
              key={c.id}
              className="group flex flex-col justify-between"
            >
              <div>
                {/* Imagem com moldura mínima e proporção vertical no mobile e 4:3 no desktop */}
                <div className="rounded-xl overflow-hidden mb-3.5 sm:mb-5 border border-brand-deep/[0.08] bg-white aspect-[3/4] sm:aspect-[4/3]">
                  <img
                    src={c.image}
                    alt={c.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    style={{
                      objectPosition: c.objectPosition || '50% 50%',
                    }}
                  />
                </div>

                {/* Identificação e metadados */}
                <div className="flex items-baseline justify-between border-b border-brand-deep/[0.08] pb-1.5 sm:pb-2 mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-brand truncate pr-2">
                    {c.tag}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-brand-muted/70 font-semibold flex-shrink-0">
                    {c.num}
                  </span>
                </div>

                <h4 className="text-sm sm:text-lg lg:text-xl font-bold text-brand-deep group-hover:text-brand transition-colors duration-200 tracking-tight leading-snug mb-1.5 sm:mb-2 line-clamp-2 sm:line-clamp-none">
                  {c.title}
                </h4>
              </div>
            </div>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};