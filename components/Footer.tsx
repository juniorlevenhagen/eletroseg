// src/components/Footer.tsx

"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MapPin, Phone, X, ChevronUp } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTermos, setShowTermos] = useState(false);
  const [showPrivacidade, setShowPrivacidade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trata tecla ESC para fechar modais
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowTermos(false);
        setShowPrivacidade(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

const handlePhoneClick = () => {
  sendGAEvent("event", "generate_lead", {
    event_category: "conversion",
    event_label: "footer_phone_call",
  });
};

  return (
    <footer className="w-full bg-[#2C054A] text-white relative">
      <div className="w-full">
        <div className="container mx-auto px-4 py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Coluna 1 - Logo e Apresentação */}
            <div>
              <div className="mb-6 rounded-xl w-fit">
                <Image
                  src="/images/g336168.svg"
                  alt="Logo Eletricista"
                  width={200}
                  height={120}
                  priority
                  style={{ height: "auto" }}
                  className="w-[200px]"
                />
              </div>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Serviços de eletricista com máxima segurança, qualidade e
                transparência para residências e comércios.
              </p>

              <div className="flex flex-col items-start gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#421F60] transition-colors duration-300 group shadow-sm"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <span className="text-xs text-purple-200 font-medium">
                  Siga-nos no Instagram
                </span>
              </div>
            </div>

            {/* Coluna 2 - Serviços */}
            <div>
              <h4 className="text-lg font-bold mb-6">Serviços</h4>
              <ul className="space-y-3">
                {[
                  "Instalações e Reformas",
                  "Montagem de Quadros (QDF)",
                  "Manutenção Preventiva",
                  "Revisão e Diagnóstico",
                  "Otimização de Cargas",
                  "Atendimento de Emergência",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-purple-100 hover:text-white transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 - Links Úteis */}
            <div>
              <h4 className="text-lg font-bold mb-6">Links Úteis</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-purple-100 hover:text-white transition-colors duration-300"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#why-choose-us"
                    className="text-purple-100 hover:text-white transition-colors duration-300"
                  >
                    Por que nos escolher
                  </a>
                </li>
                <li>
                  <a
                    href="#why-choose-us"
                    className="text-purple-100 hover:text-white transition-colors duration-300"
                  >
                    Garantia do Serviço
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-purple-100 hover:text-white transition-colors duration-300"
                  >
                    Solicitar Orçamento
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 4 - Contato */}
            <div>
              <h4 className="text-lg font-bold mb-6">Atendimento</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <MapPin
                    size={20}
                    className="text-[#FFCC00] flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-purple-100">
                      Belo Horizonte, MG e Região
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone size={20} className="text-[#FFCC00] flex-shrink-0" />
                  <a
                    href="tel:+5531998363024"
                    onClick={handlePhoneClick}
                    className="text-purple-100 hover:text-white transition-colors duration-300"
                  >
                    +55 (31) 99836-3024
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-purple-800" />

      {/* Bottom Footer */}
      <div className="w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-purple-100 text-sm">
            <p>&copy; {currentYear} FixHouse. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-xs">
              <button
                onClick={() => setShowTermos(true)}
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Termos de Uso
              </button>
              <button
                onClick={() => setShowPrivacidade(true)}
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Privacidade
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Botão de Voltar ao Topo */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          className={`bg-[#421F60] text-white p-3 rounded-full shadow-lg border border-purple-400/30 hover:bg-[#522778] transition-all duration-300 ${
            showScrollTop
              ? "opacity-100 pointer-events-auto scale-100"
              : "opacity-0 pointer-events-none scale-90"
          }`}
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>

      {/* --- MODAIS DE TERMOS E PRIVACIDADE --- */}

      {/* Modal Termos de Uso */}
      {showTermos && (
        <div
          className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowTermos(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white text-gray-800 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-xl font-bold text-[#2C054A]">
                Termos de Uso
              </h3>
              <button
                onClick={() => setShowTermos(false)}
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                aria-label="Fechar modal"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto text-sm leading-relaxed space-y-4">
              <p className="font-semibold text-[#2C054A]">
                Bem-vindo à FixHouse Eletricista.
              </p>
              <p>
                Ao utilizar nosso site e serviços, você concorda com os termos
                aqui descritos:
              </p>
              <h4 className="font-bold text-[#2C054A] pt-2">
                1. Serviços Prestados
              </h4>
              <p>
                A FixHouse atua na prestação de serviços de instalações e
                manutenções elétricas residenciais e comerciais em Belo
                Horizonte e Região Metropolitana.
              </p>
              <h4 className="font-bold text-[#2C054A] pt-2">2. Orçamentos</h4>
              <p>
                Os orçamentos prévios fornecidos via WhatsApp ou telefone são
                baseados nas informações e mídias enviadas pelo cliente.
                Reservamo-nos o direito de ajustar valores caso identifiquemos
                inconsistências na estrutura elétrica durante a avaliação
                presencial.
              </p>
              <h4 className="font-bold text-[#2C054A] pt-2">3. Garantia</h4>
              <p>
                Todos os nossos serviços contam com garantia de 90 dias sobre a
                mão de obra executada, contados a partir da data de conclusão do
                serviço.
              </p>
            </div>
            <div className="p-4 border-t border-gray-100 flex justify-end bg-gray-50">
              <button
                onClick={() => setShowTermos(false)}
                className="bg-[#2C054A] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-[#421F60] transition-colors"
              >
                Entendi e Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Política de Privacidade */}
      {showPrivacidade && (
        <div
          className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowPrivacidade(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white text-gray-800 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="text-xl font-bold text-[#2C054A]">
                Política de Privacidade
              </h3>
              <button
                onClick={() => setShowPrivacidade(false)}
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                aria-label="Fechar modal"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto text-sm leading-relaxed space-y-4">
              <p className="font-semibold text-[#2C054A]">
                Sua privacidade é nossa prioridade.
              </p>
              <p>
                Esta política esclarece como tratamos as informações fornecidas
                ao navegar em nosso site:
              </p>
              <h4 className="font-bold text-[#2C054A] pt-2">
                1. Coleta de Dados
              </h4>
              <p>
                Não coletamos dados pessoais automaticamente ao navegar neste
                site. Informações como nome, telefone e endereço só são
                coletadas quando você decide voluntariamente entrar em contato
                conosco via WhatsApp ou ligação.
              </p>
              <h4 className="font-bold text-[#2C054A] pt-2">
                2. Uso das Informações
              </h4>
              <p>
                Seus dados de contato são utilizados estritamente para o
                agendamento de visitas, envio de orçamentos e comunicação direta
                entre a FixHouse e você.
              </p>
              <h4 className="font-bold text-[#2C054A] pt-2">
                3. Compartilhamento
              </h4>
              <p>
                Nenhum dado pessoal coletado é compartilhado, vendido ou
                repassado a terceiros para fins publicitários ou comerciais.
              </p>
            </div>
            <div className="p-4 border-t border-gray-100 flex justify-end bg-gray-50">
              <button
                onClick={() => setShowPrivacidade(false)}
                className="bg-[#2C054A] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-[#421F60] transition-colors"
              >
                Entendi e Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
