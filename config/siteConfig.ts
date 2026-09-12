// src/config/siteConfig.ts

export const siteConfig = {
  name: "FixHouse | Eletricista Residencial e Comercial em BH",
  shortName: "FixHouse",
  description:
    "Serviços elétricos profissionais em Belo Horizonte. Instalações, reparos e manutenção com garantia e suporte rápido via WhatsApp.",
  url: "https://www.FixHouse.com.br", // Troque pelo seu domínio final sem barra no fim
  whatsappNumber: "5531998363024", // Número do WhatsApp no formato internacional sem espaços ou símbolos
  whatsappFormatted: "(31) 99828-1550", // Número do WhatsApp formatado para exibição
  whatsappDefaultMessage: "Olá! Preciso de um orçamento para serviço elétrico.",
  keywords: [
    "eletricista em BH",
    "eletricista belo horizonte",
    "serviços elétricos BH",
    "manutenção elétrica residencial",
    "eletricista urgente BH",
    "instalação de chuveiro elétrico BH",
    "troca de fiação residencial BH",
    "eletricista credenciado BH",
  ],
  getWhatsappUrl: (customMessage?: string) => {
    const message = customMessage || siteConfig.whatsappDefaultMessage;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  },
};
