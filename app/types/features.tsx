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
    description: "Make the experience of watching videos and images on Twitter more flexible and convenient. Just copy the link of the tweet containing the media you want to save, paste it in our search field, and in no time, it's ready for you to enjoy whenever and wherever you want.",
    link: "/x-downloader",
    width: 40,
  },
  {
    id: 3,
    image: "/youtube.png",
    alt: "YouTube",
    title: "YouTube Downloader",
    description: "Downloading quick and easy access to your favorite YouTube videos is a piece of cake. No more worrying about slow internet connections or annoying buffering. Just copy the link of the YouTube video you want to save, paste it in our search bar, and ready to be enjoyed offline.",
    link: "/youtube-downloader",
    width: 40,
  },
  {
    id: 4,
    image: "/url.png",
    alt: "URL Shortener",
    title: "URL Shortener",
    description: "No more worrying about links that are too long and hard to share. Copy your long link, paste it in our search field, and in no time, you'll have a short link ready to share with your friends. Simple, fast and efficient.",
    link: "/url-shortener",
    width: 30,
  },
];