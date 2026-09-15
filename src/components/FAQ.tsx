import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { StaggerContainer } from './StaggerContainer';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'Como funciona a primeira avaliação?',
    answer:
      'Na primeira consulta, o Dr. Fernando e a equipe avaliam detalhadamente a saúde bucal, dentes e gengivas. Caso necessário, são solicitados ou realizados exames para planejar com precisão as etapas do seu tratamento.',
  },
  {
    id: 2,
    question: 'Preciso agendar antes de ir à clínica?',
    answer:
      'Recomendamos o agendamento prévio via WhatsApp para garantir o seu horário com calma e sem tempo de espera prolongado na recepção.',
  },
  {
    id: 3,
    question: 'Quais tratamentos são realizados na Orthoface?',
    answer:
      'Realizamos facetas em resina, lentes de contato, implantes dentários, próteses, ortodontia (aparelhos fixos e alinhadores), clareamento dental, tratamento de canal, restaurações, extrações e profilaxia preventiva.',
  },
  {
    id: 4,
    question: 'A clínica atende aos sábados?',
    answer:
      'Sim! Atendemos aos sábados das 08h às 12h, proporcionando flexibilidade para quem possui rotina agitada durante a semana.',
  },
  {
    id: 5,
    question: 'Como posso falar com a equipe?',
    answer:
      'Você pode enviar uma mensagem direta pelo WhatsApp no número (86) 99939-8960. Nossa equipe responde rapidamente com todas as orientações necessárias.',
  },
  {
    id: 6,
    question: 'Como chegar à Orthoface?',
    answer:
      'A clínica está localizada na Av. Poti Velho, QD Lt 03, Residencial Lindalma Soares, em Teresina - PI (CEP 64003-640), com acesso fácil e sinalizado.',
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-brand-border/60">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">

        {/* ── Heading ─────────────────────────────────────────── */}
        <AnimatedSection variant="fadeUp" className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand block mb-3">
            Dúvidas Comuns
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-brand-muted">
            Entenda como funciona o primeiro contato e a rotina da clínica.
          </p>
        </AnimatedSection>

        {/* ── Accordion items — staggered ─────────────────────── */}
        <StaggerContainer variant="fadeUp" staggerMs={60} className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-brand-border/80 rounded-2xl bg-brand-ice/40 overflow-hidden transition-colors duration-200 hover:border-brand/30 hover:bg-brand-ice/70"
              >
                {/* ── Question button ──────────────────────── */}
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-body-${faq.id}`}
                >
                  <h3 className="text-lg font-bold text-brand-deep transition-colors duration-150">
                    {faq.question}
                  </h3>
                  {/* Icon: + rotates 45° → × when open */}
                  <span
                    className="flex-shrink-0 text-brand-muted text-xl font-light transition-transform duration-300 inline-block select-none"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* ── Answer body (CSS Grid height trick) ─────── */}
                <div
                  id={`faq-body-${faq.id}`}
                  className={`accordion-body${isOpen ? ' open' : ''}`}
                >
                  <div className="accordion-body-inner">
                    <p className="px-6 pb-6 text-sm text-brand-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
