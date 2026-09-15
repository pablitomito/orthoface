import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { StaggerContainer } from './StaggerContainer';

interface CaseItem {
  id: number;
  image: string;
  tag: string;
  title: string;
  desc: string;
  alt: string;
  objectPosition?: string;
}

const cases: CaseItem[] = [
  {
    id: 1,
    image: '/images/resultado-resina-1.jpg',
    objectPosition: '50% 50%',
    tag: 'Resina Composta',
    title: 'Estratificação Direta e Alinhamento',
    desc: 'Harmonização do arco anterior respeitando o contorno labial e a textura dental natural.',
    alt: 'Antes e depois de restaurações e facetas em resina',
  },
  {
    id: 2,
    image: '/images/resultado-pino-reconstrucao.jpg',
    objectPosition: '25% 55%',
    tag: 'Reconstrução Biológica',
    title: 'Pino de Fibra de Vidro & Reconstrução',
    desc: 'Salvação do dente anterior fraturado por meio de ancoragem radicular e escultura em resina.',
    alt: 'Pino com reconstrução de dente quebrado',
  },
  {
    id: 3,
    image: '/images/resultado-clareamento.jpg',
    objectPosition: '10% 53%',
    tag: 'Clareamento Clínico',
    title: 'Clareamento com Proteção Pulpar',
    desc: 'Abertura segura de tons com redução de manchas e uniformização da luminosidade do sorriso.',
    alt: 'Antes e depois de clareamento guiado',
  },
  {
    id: 4,
    image: '/images/resultado-aparelho-clareamento.jpg',
    objectPosition: '50% 52%',
    tag: 'Ortodontia & Finalização',
    title: 'Remoção de Aparelho & Profilaxia',
    desc: 'Alinhamento prévio seguido de clareamento e restaurações estéticas de fechamento.',
    alt: 'Remoção de aparelho ortodôntico e clareamento',
  },
  {
    id: 5,
    image: '/images/resultado-faceta-masculino.jpg',
    objectPosition: '50% 34%',
    tag: 'Facetas em Resina',
    title: 'Fechamento de Espaços e Cor',
    desc: 'Correção de proporções sem desgastes agressivos da estrutura hígida do dente.',
    alt: 'Antes e depois de faceta em resina composta',
  },
  {
    id: 6,
    image: '/images/resultado-transformacao-sorriso.jpg',
    objectPosition: '50% 50%',
    tag: 'Harmonização Dental',
    title: 'Reestruturação do Sorriso',
    desc: 'Renovação estética completa respeitando a linha do sorriso e o formato facial da paciente.',
    alt: 'Transformação estética de sorriso',
  },
];

export const Resultados: React.FC = () => {
  return (
    <section
      id="resultados"
      className="py-20 lg:py-28 bg-white border-b border-brand-border/60"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Section header ─────────────────────────────────── */}
        <AnimatedSection
          variant="fadeUp"
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-3">
              Casos Clínicos Documentados
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight mb-4">
              Resultados construídos caso a caso.
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              Cada tratamento começa com avaliação, planejamento e acompanhamento profissional.
              Conheça alguns casos atendidos pela Orthoface.
            </p>
          </div>

          <p className="text-xs text-brand-muted italic max-w-xs md:text-right">
            As necessidades e os resultados variam conforme cada paciente.
          </p>
        </AnimatedSection>

        {/* ── Featured case — split reveal ─────────────────────── */}
        <AnimatedSection
          variant="scaleIn"
          threshold={0.08}
          className="mb-16 bg-brand-ice rounded-3xl p-6 sm:p-10 lg:p-12 border border-brand-border/80"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            <AnimatedSection
              variant="fadeRight"
              delay={100}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg border border-white">
                <img
                  src="/images/reabilitacao-oral-destaque.jpg"
                  alt="Caso de Reabilitação Oral Completa na Clínica Orthoface - Antes e Depois"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection
              variant="fadeLeft"
              delay={180}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-2">
                Grande Destaque Clínico
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-deep mb-4 leading-tight">
                Reabilitação Oral &amp; Devolução da Função
              </h3>

              <p className="text-base text-brand-muted leading-relaxed mb-6">
                Não precisa explicar muito: na expressão da paciente nota-se a felicidade em sorrir
                sem medo. Devolver dentes ausentes, restabelecer a dimensão vertical e a segurança
                social são a essência do nosso trabalho.
              </p>

              <div className="space-y-3 border-t border-brand-border/80 pt-5 text-sm text-brand-deep">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand" />
                  <span>Recuperação anatômica mastigatória e oclusal</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand" />
                  <span>Planejamento estético harmonizado ao rosto</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* ── Case grid — staggered ────────────────────────────── */}
        <StaggerContainer
          variant="fadeUp"
          staggerMs={70}
          threshold={0.06}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cases.map((c) => (
            <div
              key={c.id}
              className="group bg-brand-ice/60 rounded-2xl p-5 border border-brand-border/70 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-brand/10 hover:border-brand-border"
            >
              <div>
                <div className="rounded-xl overflow-hidden mb-4 shadow-sm bg-black/5">
                  <img
                    src={c.image}
                    alt={c.alt}
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    loading="lazy"
                    style={{
                      objectPosition: c.objectPosition || '50% 50%',
                    }}
                  />
                </div>

                <span className="text-xs font-bold uppercase text-brand">
                  {c.tag}
                </span>

                <h4 className="text-lg font-bold text-brand-deep mt-1 mb-2">
                  {c.title}
                </h4>

                <p className="text-sm text-brand-muted leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-border/60 text-xs text-brand-muted">
                Resultado clínico obtido em consultório
              </div>
            </div>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};