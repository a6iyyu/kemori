interface MenuItem {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  width: number;
}

export const menus: MenuItem[] = [
  {
    id: 1,
    image: "/facebook.svg",
    alt: "Facebook",
    title: "Facebook Downloader",
    description: "",
    link: "/facebook-downloader",
    width: 40,
  },
  {
    id: 2,
    image: "/twitter.svg",
    alt: "X",
    title: "X Downloader",
    description: "",
    link: "/x-downloader",
    width: 40,
  },
  {
    id: 3,
    image: "/youtube.png",
    alt: "YouTube",
    title: "YouTube Downloader",
    description: "",
    link: "/youtube-downloader",
    width: 40,
  },
  {
    id: 4,
    image: "/url.png",
    alt: "URL Shortener",
    title: "URL Shortener",
    description: "",
    link: "/url-shortener",
    width: 30,
  },
];