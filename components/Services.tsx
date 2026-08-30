"use client";

export default function Services() {
  const services = [
    {
      title: "Instalações Residenciais",
      description:
        "Projetos elétricos completos para residências, garantindo distribuição inteligente e segura de energia.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      link: "#",
    },
    {
      title: "Manutenção Preventiva",
      description:
        "Inspeções regulares e testes térmicos para prevenir falhas e garantir operação contínua sem riscos.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      link: "#",
    },
    {
      title: "Quadros e Circuitos",
      description:
        "Montagem e adequação de quadros de distribuição conforme normas técnicas rigorosas e demanda de carga.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      link: "#",
    },
  ];

  return (
    <section id="services" className="w-full bg-zinc-100 py-24">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#102b52] font-bold text-sm uppercase tracking-wider bg-yellow-300 py-1 px-3">
            Serviços Especializados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#102b52] mt-4 leading-tight">
            Precisão técnica e protocolos rigorosos de segurança
          </h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between border-t-4 border-[#102b52] group"
            >
              <div>
                <div className="w-12 h-12 bg-gray-50 text-[#102b52] flex items-center justify-center mb-6 group-hover:bg-[#102b52] group-hover:text-yellow-300 transition-colors duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-[#102b52] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100">
                <a
                  href={service.link}
                  className="inline-flex items-center text-[#102b52] font-semibold hover:text-blue-700 transition-colors group/link"
                >
                  Saiba mais
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
