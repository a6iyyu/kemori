import type { MetaFunction } from "@remix-run/node";
import { YouTubeDownloaderPage } from "~/pages/youtube-downloader";
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
  return <YouTubeDownloaderPage />;
};

export default YouTubeDownloader;