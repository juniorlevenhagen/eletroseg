// src/components/Faq.tsx

"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      pergunta: "Como funciona a solicitação de orçamento?",
      resposta:
        "Você pode enviar fotos, vídeos ou o relato do problema pelo WhatsApp. Em muitos casos conseguimos passar uma estimativa imediata. Para serviços maiores ou diagnósticos complexos, agendamos uma avaliação presencial.",
    },
    {
      pergunta: "Vocês cobram taxa de visita?",
      resposta:
        "Para bairros da nossa zona de atendimento prioritário e serviços pré-agendados, o orçamento via foto/vídeo é gratuito. Em casos que exigem diagnóstico presencial com ferramentas, informamos antecipadamente o valor da avaliação caso o serviço não seja aprovado.",
    },
    {
      pergunta: "Qual é a garantia dos serviços executados?",
      resposta:
        "Oferecemos garantia por escrito de 90 dias sobre a mão de obra prestada. Se qualquer problema relacionado ao serviço executado ocorrer nesse período, retornamos sem custos adicionais.",
    },
    {
      pergunta: "Quais são as formas de pagamento aceitas?",
      resposta:
        "Aceitamos Pix, cartões de débito e crédito (com opção de parcelamento), além de transferência bancária.",
    },
    {
      pergunta: "Vocês atendem chamados de emergência?",
      resposta:
        "Sim! Atendemos situações emergenciais como falta de energia parcial no imóvel, cheiro de queimado ou disjuntores caindo. Entre em contato direto pelo botão de ligação do site.",
    },
  ];

  const toggleFaq = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);

    // Dispara o evento apenas quando o usuário abre uma pergunta
    if (isOpening) {
      const questionSlug = faqs[index].pergunta
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "_");

      sendGAEvent({
        event: "select_content",
        event_category: "faq",
        event_label: `faq_${questionSlug}`,
      });
    }
  };

  return (
    <section id="faq" className="w-full py-20 bg-white scroll-mt-14">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C054A] mb-3">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600">
            Respostas diretas para as principais perguntas antes de contratar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-purple-100 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-purple-50/50 transition-colors duration-200"
                >
                  <span className="font-semibold text-[#2C054A] text-base md:text-lg">
                    {faq.pergunta}
                  </span>
                  <ChevronDown
                    className={`text-[#421F60] transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-purple-50 bg-purple-50/30">
                    {faq.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
