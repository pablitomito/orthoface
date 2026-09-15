import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface FAQItem {
  id: number;
  num: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    num: '01',
    question: 'Como funciona a primeira avaliação?',
    answer:
      'Na primeira consulta, o Dr. Fernando e a equipe avaliam detalhadamente a saúde bucal, dentes e gengivas. Caso necessário, são solicitados ou realizados exames para planejar com precisão as etapas do seu tratamento.',
  },
  {
    id: 2,
    num: '02',
    question: 'Preciso agendar antes de ir à clínica?',
    answer:
      'Recomendamos o agendamento prévio via WhatsApp para garantir o seu horário com calma e sem tempo de espera prolongado na recepção.',
  },
  {
    id: 3,
    num: '03',
    question: 'Quais tratamentos são realizados na Orthoface?',
    answer:
      'Realizamos facetas em resina, lentes de contato, implantes dentários, próteses, ortodontia (aparelhos fixos e alinhadores), clareamento dental, tratamento de canal, restaurações, extrações e profilaxia preventiva.',
  },
  {
    id: 4,
    num: '04',
    question: 'A clínica atende aos sábados?',
    answer:
      'Sim! Atendemos aos sábados das 08h às 12h, proporcionando flexibilidade para quem possui rotina agitada durante a semana.',
  },
  {
    id: 5,
    num: '05',
    question: 'Como posso falar com a equipe?',
    answer:
      'Você pode enviar uma mensagem direta pelo WhatsApp no número (86) 99939-8960. Nossa equipe responde rapidamente com todas as orientações necessárias.',
  },
  {
    id: 6,
    num: '06',
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
    <section className="py-24 lg:py-32 xl:py-36 bg-brand-canvas">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* ── Header Editorial ───────────────────────────────── */}
        <AnimatedSection variant="fadeUp" className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1.5px] w-6 bg-brand" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Capítulo 06 · Informações &amp; Dúvidas
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deep tracking-[-0.03em] leading-[1.08] mb-4">
            Perguntas Frequentes
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Entenda o funcionamento da primeira consulta e a rotina clínica da Orthoface.
          </p>
        </AnimatedSection>

        {/* ── Lista Editorial Ampla (Sem Cards ou Caixas Isoladas) ── */}
        <div className="divide-y divide-brand-deep/[0.08] border-t border-b border-brand-deep/[0.08]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="group transition-colors duration-200"
              >
                {/* Botão de Pergunta Editorial em Linha Ampla */}
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full py-7 flex items-center justify-between gap-6 text-left cursor-pointer select-none focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-body-${faq.id}`}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6 flex-1">
                    <span className="font-mono text-xs font-bold text-brand tracking-wider">
                      {faq.num}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-deep group-hover:text-brand transition-colors duration-200 tracking-tight leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Indicador Minimalista + / × */}
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-deep/[0.12] flex items-center justify-center text-brand-deep group-hover:border-brand group-hover:text-brand text-lg font-light transition-all duration-300 ml-2"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Resposta com Transição Fluida */}
                <div
                  id={`faq-body-${faq.id}`}
                  className={`accordion-body${isOpen ? ' open' : ''}`}
                >
                  <div className="accordion-body-inner">
                    <div className="pb-8 pl-8 sm:pl-12 pr-4 text-base text-brand-muted leading-relaxed max-w-3xl border-l-2 border-brand/40 ml-4 sm:ml-7 my-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
