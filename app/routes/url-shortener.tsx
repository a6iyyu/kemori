import type { MetaFunction } from "@remix-run/node";
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
  return null;
};

export default URLShortener;