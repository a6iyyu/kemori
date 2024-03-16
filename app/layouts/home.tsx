import React from "react";
import { Hero } from "~/components/hero";
import { AboutUs } from "~/components/about-us";
import { Tools } from "~/components/tools";

export const HomeLayout: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Tools />
    </>
  );
};