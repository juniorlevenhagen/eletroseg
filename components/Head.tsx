"use client";

import Image from "next/image";

export default function Head() {
  return (
    <section className="w-full min-h-[80vh] flex items-center pt-20 bg-[url(/images/fundo_bh.png)] bg-cover bg-no-repeat bg-center bg-[#2C054A] bg-blend-multiply">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          {/* Lado Esquerdo */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
              Energia com segurança <br className="hidden md:inline" />e
              precisão.
            </h1>

            <p className="text-lg md:text-xl mt-4 text-purple-100 max-w-2xl leading-relaxed">
              Soluções elétricas de baixa tensão projetadas para máxima
              eficiência e conformidade com as normas de segurança. Projetos,
              instalações e manutenção industrial e residencial.
            </p>

            {/* Botões de Ação */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#quote"
                className="bg-[#421F60] hover:bg-[#1a022b] text-white font-semibold py-3.5 px-6 shadow-md transition-colors text-center border border-purple-400/30"
              >
                Solicitar Orçamento
              </a>

              <a
                href="#services"
                className="bg-white hover:bg-purple-50 text-[#2C054A] font-semibold py-3.5 px-6 border-2 border-white transition-colors text-center"
              >
                Nossos Serviços
              </a>
            </div>
          </div>

          {/* Lado Direito */}
          <div className="relative w-full h-full flex items-center justify-end">
            <Image
              src="/images/eletricista_mascote.svg"
              alt="Eletricista"
              width={500}
              height={500}
              priority
              className="relative mt-10 right-10 z-10 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
