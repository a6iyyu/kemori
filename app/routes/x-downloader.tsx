import type { MetaFunction } from "@remix-run/node";
import { XDownloaderPage } from "~/pages/x-downloader";
import "~/styles/global.css";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Twitter Downloader | Kemori",
    },
    {
      name: "description",
      content: "",
    },
  ];
};

const XDownloader = () => {
  return <XDownloaderPage />;
};

export default XDownloader;