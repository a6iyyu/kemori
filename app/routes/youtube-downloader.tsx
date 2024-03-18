import type { MetaFunction } from "@remix-run/node";
import "~/styles/global.css";

export const meta: MetaFunction = () => {
  return [
    {
      title: "YouTube Downloader | Kemori",
    },
    {
      name: "description",
      content: "",
    },
  ];
};

const YouTubeDownloader = () => {
  return null;
};

export default YouTubeDownloader;