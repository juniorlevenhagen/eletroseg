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
    <nav className="bg-zinc-200 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/images/logo.svg" alt="Logo" width={100} height={50} />
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-8">
            <li className="font-normal text-zinc-600 hover:text-blue-950 hover:underline hover:underline-offset-8">
              <a href="#services">Serviços</a>
            </li>
            <li className="font-normal text-zinc-600 hover:text-blue-950 hover:underline hover:underline-offset-8">
              <a href="#security">Segurança</a>
            </li>
            <li className="font-normal text-zinc-600 hover:text-blue-950 hover:underline hover:underline-offset-8">
              <a href="#projects">Projetos</a>
            </li>
            <li className="font-normal text-zinc-600 hover:text-blue-950 hover:underline hover:underline-offset-8">
              <a href="#testimonials">Depoimentos</a>
            </li>
            <li className="font-normal text-zinc-600 hover:text-blue-950 hover:underline hover:underline-offset-8">
              <a href="#contact">Contato</a>
            </li>
          </ul>

          {/* Botão de Ação (Desktop) */}
          <div className="hidden md:flex">
            <button className="bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors">
              Ligar Emergencial
            </button>
          </div>

          {/* Botão Hambúrguer (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-zinc-600 hover:text-blue-950 focus:outline-none"
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
          <div className="md:hidden pb-4 pt-2 border-t border-zinc-300">
            <ul className="flex flex-col space-y-3">
              <li className="font-normal text-zinc-600 hover:text-blue-950">
                <a href="#services" onClick={() => setIsOpen(false)}>
                  Serviços
                </a>
              </li>
              <li className="font-normal text-zinc-600 hover:text-blue-950">
                <a href="#security" onClick={() => setIsOpen(false)}>
                  Segurança
                </a>
              </li>
              <li className="font-normal text-zinc-600 hover:text-blue-950">
                <a href="#projects" onClick={() => setIsOpen(false)}>
                  Projetos
                </a>
              </li>
              <li className="font-normal text-zinc-600 hover:text-blue-950">
                <a href="#testimonials" onClick={() => setIsOpen(false)}>
                  Depoimentos
                </a>
              </li>
              <li className="font-normal text-zinc-600 hover:text-blue-950">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Contato
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <button
                className="w-full bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors"
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
