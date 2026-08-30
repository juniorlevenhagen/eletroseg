// src/components/Navbar.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#2C054A] shadow-md w-full fixed top-0 left-0 z-50 border-b border-purple-900/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo com container de contraste inteligente */}
          <div className="flex-shrink-0 bg-white/30 px-3 py-1.5 rounded-xl shadow-sm">
            <Image
              src="/images/logo_housefix.svg"
              alt="Logo"
              width={120}
              height={100}
            />
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-8">
            <li className="font-semibold text-white hover:text-[#FFE08B] hover:underline hover:underline-offset-8">
              <a href="#services">Serviços</a>
            </li>
            <li className="font-semibold text-white hover:text-[#FFE08B] hover:underline hover:underline-offset-8">
              <a href="#security">Segurança</a>
            </li>
            <li className="font-semibold text-white hover:text-[#FFE08B] hover:underline hover:underline-offset-8">
              <a href="#projects">Projetos</a>
            </li>
            <li className="font-semibold text-white hover:text-[#FFE08B] hover:underline hover:underline-offset-8">
              <a href="#testimonials">Depoimentos</a>
            </li>
            <li className="font-semibold text-white hover:text-[#FFE08B] hover:underline hover:underline-offset-8">
              <a href="#contact">Contato</a>
            </li>
          </ul>

          {/* Botão de Ação (Desktop) */}
          <div className="hidden md:flex">
            <button className="bg-[#FFCC00] text-[#361254] rounded-md font-semibold text-sm py-2 px-4 hover:bg-[#F1C100] transition-colors cursor-pointer shadow-sm">
              Ligar Emergencial
            </button>
          </div>

          {/* Botão Hambúrguer (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:text-[#FFE08B] focus:outline-none"
              aria-label="Abrir menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Dropdown (Mobile) */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-3 border-t border-purple-800 bg-[#2C054A]">
            <ul className="flex flex-col space-y-4 px-2">
              <li className="font-medium text-purple-100 hover:text-[#FFE08B]">
                <a href="#services" onClick={() => setIsOpen(false)}>
                  Serviços
                </a>
              </li>
              <li className="font-medium text-purple-100 hover:text-[#FFE08B]">
                <a href="#security" onClick={() => setIsOpen(false)}>
                  Segurança
                </a>
              </li>
              <li className="font-medium text-purple-100 hover:text-[#FFE08B]">
                <a href="#projects" onClick={() => setIsOpen(false)}>
                  Projetos
                </a>
              </li>
              <li className="font-medium text-purple-100 hover:text-[#FFE08B]">
                <a href="#testimonials" onClick={() => setIsOpen(false)}>
                  Depoimentos
                </a>
              </li>
              <li className="font-medium text-purple-100 hover:text-[#FFE08B]">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Contato
                </a>
              </li>
            </ul>
            <div className="mt-5 px-2">
              <button
                className="w-full bg-[#FFCC00] text-[#361254] py-2.5 px-4 rounded font-semibold hover:bg-[#F1C100] transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Ligar Emergencial
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
