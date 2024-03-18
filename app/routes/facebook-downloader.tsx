import type { MetaFunction } from "@remix-run/node";
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
  return null;
};

export default FacebookDownloader;