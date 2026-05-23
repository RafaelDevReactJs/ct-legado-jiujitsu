export const academyConfig = {
  name: "CT Legado Jiu-Jitsu",
  tagline: "Construa seu legado no tatame",
  heroTitle: "Muito além de uma arte macial, uma filosofia de vida.",
  heroDescription:
    "O Jiu-Jitsu é a arte suave que ensina tecnica, disciplina, respeito e evolução. No CT Legado, formamos atletas e pessoas melhores — do tatame para a vida.",
  address: {
    street: "Rua Luiz Inacio de Sousa, 790A",
    neighborhood: "Planalto Horizonte",
    city: "Horizonte",
    state: "CE",
    zipCode: "62884-010",
    full: "Rua Luiz Inacio de Sousa, 790A — Planalto Horizonte, Horizonte — CE, CEP 62884-010",
  },
  whatsapp: {
    phone: "558591198567",
    message: "Olá! Gostaria de saber mais sobre as aulas de Jiu-Jitsu.",
    freeClassMessage:
      "Olá! Gostaria de agendar uma aula experimental grátis no CT Legado.",
  },
  maps: {
    embedUrl:
      "https://www.google.com/maps?q=Rua+Luiz+Inacio+de+Sousa+790A,+Planalto+Horizonte,+Horizonte,+CE,+62884-010&hl=pt&z=17&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Rua+Luiz+Inacio+de+Sousa+790A,+Planalto+Horizonte,+Horizonte,+CE,+62884-010",
  },
  schedule: [
    {
      days: "Segunda, Quarta e Sexta-feira",
      classes: [
        { time: "17:00 - 18:00", name: "Infantil (4 a 6 anos)" },
        { time: "18:00 - 19:00", name: "Infantil (7 a 11 anos)" },
        { time: "19:00 - 20:00", name: "Adolescentes" },
        { time: "20:00 - 21:00", name: "Treino Adulto (Gi/Pano)" },
        { time: "21:00 - 22:00", name: "NoGi (Jiu-Jitsu sem kimono)" },
      ],
    },
    {
      days: "Terça-feira e Quinta-feira",
      classes: [{ time: "18:00 - 19:00", name: "Treino Feminino" }],
    },
  ],
  carousel: [
    {
      src: "/assets/images/GI01.jpeg",
      alt: "Treino de Jiu-Jitsu com kimono (Gi) no CT Legado",
    },
    {
      src: "/assets/images/GI02.jpeg",
      alt: "Treino de Jiu-Jitsu com kimono (Gi) no CT Legado",
    },
    {
      src: "/assets/images/NoGi01.jpeg",
      alt: "Treino Jiu-Jitsu sem kimono  (NoGi) no CT Legado",
    },
    {
      src: "/assets/images/NoGi02.jpeg",
      alt: "Alunos praticando Jiu-Jitsu sem kimono (NoGi) no CT Legado",
    },
    {
      src: "/assets/images/NoGi03.jpeg",
      alt: "Treino Jiu-Jitsu sem kimono (NoGi) no CT Legado",
    },
    {
      src: "/assets/images/NoGi04.jpeg",
      alt: "Equipe CT Legado no tatame",
    },
  ],
} as const;

export function getWhatsAppUrl(message?: string) {
  const { phone, message: defaultMessage } = academyConfig.whatsapp;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message ?? defaultMessage)}`;
}

export function getFreeClassWhatsAppUrl() {
  return getWhatsAppUrl(academyConfig.whatsapp.freeClassMessage);
}
