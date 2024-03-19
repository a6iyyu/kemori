import type { MetaFunction } from "@remix-run/node";
import { FacebookDownloaderPage } from "~/pages/facebook-downloader";
import "~/styles/global.css";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Facebook Downloader | Kemori",
    },
    {
      name: "description",
      content: "",
    },
  ];
};

const FacebookDownloader = () => {
  return <FacebookDownloaderPage />;
};

export default FacebookDownloader;