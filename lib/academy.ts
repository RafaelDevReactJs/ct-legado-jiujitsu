export const academyConfig = {
  name: "CT Legado Jiu-Jitsu",
  tagline: "Construa seu legado no tatame",
  heroTitle: "Muito além de uma luta. Uma filosofia de vida.",
  heroDescription:
    "O Jiu-Jitsu é a arte suave que ensina disciplina, respeito e superação. No CT Legado, formamos atletas e pessoas melhores — do tatame para a vida.",
  address: {
    street: "Rua Luis Inacio, 709A",
    neighborhood: "Planalto",
    city: "Horizonte",
    state: "CE",
    zipCode: "62884-010",
    full: "Rua Luis Inacio, 709A — Planalto, Horizonte — CE, CEP 62884-010",
  },
  whatsapp: {
    phone: "5589996384807",
    message: "Olá! Gostaria de saber mais sobre as aulas de Jiu-Jitsu.",
  },
  maps: {
    embedUrl:
      "https://www.google.com/maps?q=Rua+Luis+Inacio,+709A,+Planalto,+Horizonte,+CE&hl=pt&z=16&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Rua+Luis+Inacio,+709A,+Planalto,+Horizonte,+CE",
  },
  carousel: [
    {
      src: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1200&q=80",
      alt: "Treino de Jiu-Jitsu no tatame",
    },
    {
      src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1200&q=80",
      alt: "Alunos praticando técnicas de grappling",
    },
    {
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
      alt: "Espaço da academia CT Legado",
    },
    {
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
      alt: "Treino em grupo na academia",
    },
  ],
} as const;

export function getWhatsAppUrl() {
  const { phone, message } = academyConfig.whatsapp;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
