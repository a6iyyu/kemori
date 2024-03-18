interface Languages {
  id: number;
  image: string;
  language: string;
  alt: string;
}

export const language: Languages[] = [
  {
    id: 1,
    image: "/english.webp",
    language: "EN",
    alt: "EN",
  },
  {
    id: 2,
    image: "/indonesia.png",
    language: "ID",
    alt: "ID",
  },
];