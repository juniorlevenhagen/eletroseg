// src/components/WhyChooseUs.tsx

"use client";

import Image from "next/image";
import React from "react";
import {
  CheckCircle,
  Clock,
  ShieldCheck,
  FileText,
  Sparkles,
  Zap,
} from "lucide-react";

export default function WhyChooseUs() {
  const diferenciais = [
    {
      id: 1,
      titulo: "Qualificação Profissional",
      descricao:
        "Eletricista treinado e capacitado nas melhores práticas de instalação e segurança.",
      icone: CheckCircle,
    },
    {
      id: 2,
      titulo: "Atendimento Rápido",
      descricao:
        "Disponibilidade para agendamentos flexíveis e resolução de emergências elétricas.",
      icone: Clock,
    },
    {
      id: 3,
      titulo: "Normas de Segurança (NBR 5410)",
      descricao:
        "Serviços executados rigorosamente dentro dos padrões técnicos para sua total proteção.",
      icone: ShieldCheck,
    },
    {
      id: 4,
      titulo: "Garantia de Mão de Obra",
      descricao:
        "Compromisso de retorno imediato e garantia por escrito em todos os serviços prestados.",
      icone: FileText,
    },
    {
      id: 5,
      titulo: "Trabalho Limpo e Organizado",
      descricao:
        "Respeito ao seu imóvel: ambiente limpo ao finalizar a instalação ou reparo.",
      icone: Sparkles,
    },
    {
      id: 6,
      titulo: "Orçamento Transparente",
      descricao:
        "Preço fechado e detalhado antes de iniciar o serviço, sem surpresas no final.",
      icone: Zap,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="w-full py-12 sm:py-20 bg-gradient-to-b from-purple-50 via-white to-white overflow-hidden scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagem */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[800px] flex items-center justify-center group">
            <Image
              src="/images/rose.svg"
              alt="Eletricista Housefix"
              fill
              priority
              className="object-contain drop-shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_15px_30px_rgba(66,31,96,0.65)] p-2"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Conteúdo do Texto */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="mb-6 sm:mb-10 text-center lg:text-left">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2C054A] mb-3 sm:mb-4">
                Por que escolher a Housefix?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Compromisso com o seu bem-estar, honestidade no diagnóstico e
                excelência na execução da sua rede elétrica.
              </p>
            </div>

            {/* Lista de Diferenciais */}
            <div className="space-y-3 sm:space-y-4">
              {diferenciais.map((item) => {
                const IconComponent = item.icone;
                return (
                  <div
                    key={item.id}
                    className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-purple-100"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#421F60] text-white">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#2C054A] mb-1 text-sm sm:text-base">
                        {item.titulo}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Botão Call to Action (Totalmente Centralizado) */}
            <div className="mt-8 sm:mt-10 flex justify-center w-full">
              <a
                href="https://wa.me/5531998281550?text=Olá!%20Quero%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#421F60] hover:bg-[#32174a] text-white font-semibold py-3.5 px-8 sm:px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base text-center"
              >
                <span>Fazer Orçamento sem Compromisso</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
