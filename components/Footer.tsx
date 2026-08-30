"use client";

import React from "react";
import { ShieldCheck, Award, AlertTriangle, PhoneCall } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#102b52] text-white pt-12 pb-8 px-6 sm:px-12 lg:px-20 border-t border-sky-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Seção Principal / Compromisso */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sky-400 font-semibold mb-3 text-sm uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5" />
            <span>Compromisso com a Segurança e Excelência</span>
          </div>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            Nossos protocolos de trabalho excedem os padrões da indústria para
            garantir que cada conexão seja perfeitamente segura.
          </p>
        </div>

        {/* Grid de Destaques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Experiência */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm transition-all hover:bg-white/[0.07]">
            <div className="flex items-center gap-3 text-sky-400 mb-3 font-semibold text-lg">
              <ShieldCheck className="w-6 h-6" />
              <h3>10+ Anos de Experiência</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Histórico comprovado em centenas de projetos complexos concluídos
              com sucesso.
            </p>
          </div>

          {/* Card 2: Certificação NR-10 */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm transition-all hover:bg-white/[0.07]">
            <div className="flex items-center gap-3 text-sky-400 mb-3 font-semibold text-lg">
              <Award className="w-6 h-6" />
              <h3>Certificação NR-10</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Equipe totalmente treinada e certificada nas normas
              regulamentadoras de segurança elétrica.
            </p>
          </div>

          {/* Card 3: Atendimento de Emergência */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm transition-all hover:bg-white/[0.07]">
            <div className="flex items-center gap-3 text-sky-400 mb-3 font-semibold text-lg">
              <AlertTriangle className="w-6 h-6" />
              <h3>Atendimento de Emergência</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Problemas elétricos em casa não podem esperar. Nossa equipe de
              prontidão residencial atende emergências 24h.
            </p>
          </div>
        </div>

        {/* Caixa de Emergência 24h & Telefone */}
        <div className="bg-sky-500/10 border border-sky-400/20 rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-sky-300 font-bold text-lg mb-1 flex items-center gap-2">
              <PhoneCall className="w-5 h-5" /> Atendimento de Emergência 24h
            </h4>
            <p className="text-slate-300 text-sm">
              Para garantir o conforto e a segurança do seu lar a qualquer
              momento.
            </p>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white bg-sky-600/30 px-6 py-3 rounded-xl border border-sky-400/30">
            0800 123 4567
          </div>
        </div>

        {/* Barra Inferior (Links, Marca e Copyright) */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Marca / Slogan */}
          <div>
            <div className="text-xl font-bold tracking-wide text-white">
              EletroSeg
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Energia com Segurança e Precisão.
            </div>
          </div>

          {/* Links Úteis */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-300 font-medium">
            <a href="#terms" className="hover:text-sky-400 transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="hover:text-sky-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#safety" className="hover:text-sky-400 transition-colors">
              Safety Protocols
            </a>
            <a
              href="#certifications"
              className="hover:text-sky-400 transition-colors"
            >
              Certifications
            </a>
          </div>

          {/* Copyright e Licença */}
          <div className="text-xs text-slate-500 leading-relaxed text-center md:text-right">
            <p>
              &copy; 2024 EletroSeg Low-Voltage Solutions. All rights reserved.
            </p>
            <p className="mt-0.5">License #123456.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;