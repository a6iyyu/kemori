interface Narrative {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
}

export const narrative: Narrative[] = [
  {
    id: "what-is-this",
    image: "/reels.png",
    alt: "Reels",
    title: "WHAT IS THIS TOOL?",
    description: "With this tool, you can download and convert videos from almost anywhere on the internet. From YouTube, Twitter, and Facebook to your gallery. In addition, you can shorten the URL for dissemination and easy access.",
  },
  {
    id: "why-choose-us",
    image: "/question-mark.png",
    alt: "Question Mark",
    title: "WHY CHOOSE US?",
    description: "We provide unlimited media downloads, are easy to use, and instantly save to the gallery securely. However, we currently only have Facebook, Twitter, YouTube, and URL shortener download services.",
  },
  {
    id: "how-it-works",
    image: "/gear.png",
    alt: "Gear",
    title: "HOW DOES IT WORK?",
    description: "Functionally-wise, it's very straight-forward. For media downloaders, users simply need a URL and paste it into the download field, select a format, and press download. As for the URL shortener, users simply put the URL into the shortener field, press shorten, and then copy.",
  },
];