// src/components/Head.tsx

"use client";

import Image from "next/image";

export default function Head() {
  return (
    <section className="w-full min-h-[80vh] flex items-center pt-36 pb-12 md:pt-36 md:pb-16 bg-[url(/images/fundo_bh.png)] bg-cover bg-no-repeat bg-center bg-[#2C054A] bg-blend-multiply">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
              Sua rede elétrica segura <br className="hidden md:inline" /> e sem
              gambiarras.
            </h1>

            <p className="text-lg md:text-xl mt-4 text-purple-100 max-w-2xl leading-relaxed">
              Serviços de instalação, manutenção e revisão elétrica executados
              com precisão, transparência e respeito às boas práticas. Proteja
              sua família e seu imóvel.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/5531998281550?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFCC00] hover:bg-[#e6b800] text-[#2C054A] font-bold py-3.5 px-6 shadow-md transition-all duration-300 text-center"
              >
                Solicitar Orçamento no WhatsApp
              </a>

              <a
                href="#services"
                className="bg-white hover:bg-purple-50 text-[#2C054A] font-semibold py-3.5 px-6 border-2 border-white transition-all duration-300 text-center"
              >
                Ver Nossos Serviços
              </a>
            </div>
          </div>

          <div className="relative w-full h-full flex items-center justify-center md:justify-end">
            <Image
              src="/images/eletricista_mascote.svg"
              width={500}
              height={300}
              alt="Mascote"
              className="w-full h-auto translate-y-12 md:translate-y-16"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
