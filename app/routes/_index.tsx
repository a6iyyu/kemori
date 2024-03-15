import type { MetaFunction } from "@remix-run/node";
import { HomePage } from "~/pages/home";
import "~/styles/global.css";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Kemori",
    },
    {
      name: "description",
      content: "Kemori, one of the best downloader tools on the internet.",
    },
  ];
};

const Index = () => {
  return <HomePage />;
};

export default Index;