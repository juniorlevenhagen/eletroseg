// src/components/Services.tsx

"use client";

import React from "react";
import {
  Zap,
  Box,
  RotateCw,
  CheckSquare,
  TrendingDown,
  AlertCircle,
} from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Instalações e Reformas",
      description:
        "Passagem de cabos, troca de fiação, instalação de tomadas, interruptores e luminárias para residências e comércios.",
      icon: Zap,
    },
    {
      id: 2,
      title: "Montagem de Quadros (QDF)",
      description:
        "Organização e montagem de quadros de distribuição com disjuntores adequados, DR e DPS para total proteção.",
      icon: Box,
    },
    {
      id: 3,
      title: "Manutenção Preventiva",
      description:
        "Reaperto de conexões elétricas e verificação periódica para evitar aquecimentos e curtos-circuitos no imóvel.",
      icon: RotateCw,
    },
    {
      id: 4,
      title: "Revisão e Diagnóstico",
      description:
        "Identificação de fugas de corrente, sobrecargas, disjuntores caindo e riscos iminentes na instalação.",
      icon: CheckSquare,
    },
    {
      id: 5,
      title: "Otimização de Cargas",
      description:
        "Dimensionamento correto da rede para evitar desperdício de energia e queima frequente de eletrodomésticos.",
      icon: TrendingDown,
    },
    {
      id: 6,
      title: "Atendimento de Emergência",
      description:
        "Atendimento rápido para resolver falta de fase, curto-circuito e cheiro de queimado na instalação.",
      icon: AlertCircle,
    },
  ];

const handleServiceClick = (title: string) => {
  const serviceSlug = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "_");

  sendGAEvent({
    event: "generate_lead",
    event_category: "conversion",
    event_label: `servico_${serviceSlug}`,
  });
};

  return (
    <section
      id="services"
      className="w-full py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-14"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C054A] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções elétricas práticas e seguras para sua casa ou negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            const customMessage = encodeURIComponent(
              `Olá! Gostaria de um orçamento para o serviço de ${service.title}.`,
            );
            const whatsappUrl = `https://wa.me/5531998363024?text=${customMessage}`;

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#421F60] overflow-hidden"
              >
                <div className="relative mb-6 inline-block">
                  <div className="relative bg-gradient-to-br from-[#421F60] to-[#6B3FA0] rounded-full p-5 text-white transform transition-all duration-300 group-hover:scale-110">
                    <IconComponent size={40} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#2C054A] mb-3 relative">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 relative leading-relaxed">
                  {service.description}
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleServiceClick(service.title)}
                  className="relative inline-flex items-center gap-2 text-[#421F60] font-semibold hover:text-[#6B3FA0] transition-colors duration-300"
                >
                  <span>Pedir Orçamento</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
