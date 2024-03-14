import type { MetaFunction } from "@remix-run/node";
import { AboutPage } from "~/pages/about";

export const meta: MetaFunction = () => {
  return [{ title: "About" }, { name: "description", content: "" }];
};

const About = () => {
  return <AboutPage />;
};

export default About;