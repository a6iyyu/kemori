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
    description: "With one click, you can save interesting Facebook videos quickly and easily to watch anytime, anywhere. We offer convenience, speed and privacy without annoying ads. Just copy and paste the video link and enjoy your video collection in various formats and qualities.",
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