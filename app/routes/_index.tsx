import type { MetaFunction } from "@remix-run/node";
import { HomePage } from "~/pages/home";

export const meta: MetaFunction = () => {
  return [{ title: "Media Downloader" }, { name: "description", content: "" }];
};

const Index = () => {
  return <HomePage />;
};

export default Index;