export const siteConfig = {
  name: "FixHouse | Eletricista Residencial e Comercial em BH",
  shortName: "FixHouse",
  description:
    "Serviços elétricos profissionais em Belo Horizonte. Instalações, reparos e manutenção com garantia e suporte rápido via WhatsApp.",
  url: "https://www.fixhousebh.com.br", // Mantido em letras minúsculas para SEO
  whatsappNumber: "5531998363024",
  whatsappFormatted: "(31) 99836-3024", // Alinhado com o whatsappNumber
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
    "eletricista bh mg",
    "quadro de distribuição bh",
  ],
  getWhatsappUrl: (customMessage?: string) => {
    const message = customMessage || siteConfig.whatsappDefaultMessage;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  },
};
