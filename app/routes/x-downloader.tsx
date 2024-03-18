import type { MetaFunction } from "@remix-run/node";
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
  return null;
};

export default XDownloader;