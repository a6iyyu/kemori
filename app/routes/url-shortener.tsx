import type { MetaFunction } from "@remix-run/node";
import { URLShortenerPage } from "~/pages/url-shortener";
import "~/styles/global.css";

export const meta: MetaFunction = () => {
  return [
    {
      title: "URL Shortener | Kemori",
    },
    {
      name: "description",
      content: "",
    },
  ];
};

const URLShortener = () => {
  return <URLShortenerPage />;
};

export default URLShortener;