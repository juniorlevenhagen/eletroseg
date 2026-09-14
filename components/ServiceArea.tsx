// src/components/ServiceArea.tsx

"use client";

import React from "react";
import { MapPin, Navigation, Clock } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

export default function ServiceArea() {
  const bairrosAtendidos = [
    "Savassi",
    "Lourdes",
    "Funcionários",
    "Santo Antônio",
    "Gutierrez",
    "Prado",
    "Buritis",
    "Belvedere",
    "Vila da Serra",
  ];

  const handleWhatsappClick = () => {
    sendGAEvent({
      event: "generate_lead",
      value: "service_area_whatsapp",
    });
  };

  return (
    <section
      id="service-area"
      className="w-full py-12 sm:py-16 bg-[#FAF5FF] dark:bg-[#FAF5FF] border-y border-purple-100 scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C054A] dark:text-[#2C054A] mb-3">
            Eletricista em Belo Horizonte: Áreas de Atendimento
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-600 px-2">
            Atendimento ágil em BH para garantir rapidez, segurança e menor
            custo de deslocamento.
          </p>
        </div>

        {/* Cards de Recursos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="bg-white dark:bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-purple-100 flex flex-col items-center text-center">
            <MapPin className="text-[#421F60] mb-3 shrink-0" size={32} />
            <h3 className="font-bold text-[#2C054A] dark:text-[#2C054A] mb-1 text-base sm:text-lg">
              Base Central em BH
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-600">
              Belo Horizonte - MG e região metropolitana.
            </p>
          </div>

          <div className="bg-white dark:bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-purple-100 flex flex-col items-center text-center">
            <Clock className="text-[#421F60] mb-3 shrink-0" size={32} />
            <h3 className="font-bold text-[#2C054A] dark:text-[#2C054A] mb-1 text-base sm:text-lg">
              Atendimento Rápido
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-600">
              Deslocamento prioritário para urgências e chamados locais.
            </p>
          </div>

          <div className="bg-white dark:bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-purple-100 flex flex-col items-center text-center sm:col-span-2 md:col-span-1">
            <Navigation className="text-[#421F60] mb-3 shrink-0" size={32} />
            <h3 className="font-bold text-[#2C054A] dark:text-[#2C054A] mb-1 text-base sm:text-lg">
              Outras Regiões
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-600">
              Atendimento sob consulta para serviços residenciais e comerciais.
            </p>
          </div>
        </div>

        {/* Lista de Bairros Otimizada para SEO */}
        <div className="bg-white dark:bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-purple-100 max-w-4xl mx-auto">
          <h3 className="text-center text-xs sm:text-sm font-semibold text-purple-900 dark:text-purple-900 uppercase tracking-wider mb-4 sm:mb-6">
            Bairros com atendimento prioritário em BH
          </h3>

          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {bairrosAtendidos.map((bairro, index) => (
              <span
                key={index}
                className="bg-[#FAF5FF] dark:bg-[#FAF5FF] text-[#421F60] dark:text-[#421F60] text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full border border-purple-100"
              >
                Eletricista no {bairro}
              </span>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-center text-gray-600 dark:text-gray-600 mt-5 sm:mt-6 leading-relaxed">
            Seu bairro não está listado?{" "}
            <a
              href="https://wa.me/5531998363024?text=Olá!%20Gostaria%20de%20saber%20se%20atendem%20o%20meu%20bairro."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              className="text-[#421F60] dark:text-[#421F60] font-bold underline inline-block hover:text-purple-700 transition-colors"
            >
              Consulte disponibilidade pelo WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
