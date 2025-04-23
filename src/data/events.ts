
export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  registrationLink?: string;
  image: string;
  isPast: boolean;
  isFeatured?: boolean;
}

// Sample data for events
export const events: Event[] = [
  {
    id: 1,
    title: "Acampamento UPA 2025",
    date: "10-12 de Janeiro, 2025",
    time: "15:00 - 14:00",
    location: "Acampamento Betel, Rua das Flores, 123",
    description: "Venha participar do nosso acampamento anual repleto de louvor, ensinamentos bíblicos, atividades recreativas e muita comunhão. Este será um tempo especial para nos aproximarmos de Deus e construirmos amizades que durarão para sempre.",
    registrationLink: "https://example.com/registro-acampamento",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    isPast: false,
    isFeatured: true
  },
  {
    id: 2,
    title: "Reunião de Louvor",
    date: "25 de Novembro, 2024",
    time: "19:30 - 21:30",
    location: "Igreja Presbiteriana Central",
    description: "Uma noite especial de louvor, adoração e pregação da palavra de Deus. Traga seus amigos e venha adorar ao Senhor conosco!",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    isPast: false
  },
  {
    id: 3,
    title: "Ação Social - Natal Solidário",
    date: "15 de Dezembro, 2024",
    time: "09:00 - 14:00",
    location: "Comunidade Vila Esperança",
    description: "Vamos levar esperança e amor através de atividades recreativas, distribuição de presentes e uma mensagem de natal para as crianças da comunidade.",
    registrationLink: "https://example.com/registro-acao-social",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    isPast: false
  },
  {
    id: 4,
    title: "Culto da Juventude",
    date: "05 de Novembro, 2024",
    time: "19:00 - 21:00",
    location: "Igreja Presbiteriana Central",
    description: "Um culto especialmente preparado para os jovens com música contemporânea, testemunhos inspiradores e uma mensagem relevante para os desafios que enfrentamos hoje.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    isPast: false
  },
  {
    id: 5,
    title: "Encontro de Líderes UPA",
    date: "12 de Outubro, 2024",
    time: "14:00 - 18:00",
    location: "Centro de Treinamento Emmanuel",
    description: "Um tempo de capacitação e planejamento para líderes e futuros líderes da UPA. Teremos palestras sobre liderança cristã, dinâmicas de grupo e um tempo de oração e comunhão.",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    isPast: true
  },
  {
    id: 6,
    title: "Festival de Talentos",
    date: "20 de Setembro, 2024",
    time: "18:00 - 22:00",
    location: "Auditório da Igreja",
    description: "Uma noite para celebrar os talentos dos nossos adolescentes. Apresentações de música, teatro, dança, poesia e muito mais!",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    isPast: true
  },
  {
    id: 7,
    title: "Estudo Bíblico: Identidade em Cristo",
    date: "15 de Agosto, 2024",
    time: "19:00 - 20:30",
    location: "Salão da UPA",
    description: "Série de estudos sobre quem somos em Cristo e como viver essa identidade no dia-a-dia como adolescentes cristãos.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    isPast: true
  },
  {
    id: 8,
    title: "Gincana Missionária",
    date: "05 de Agosto, 2024",
    time: "09:00 - 16:00",
    location: "Pátio da Igreja",
    description: "Uma divertida gincana com provas que nos ensinam sobre missões e o compromisso de levar a mensagem do evangelho a todas as nações.",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    isPast: true
  }
];
