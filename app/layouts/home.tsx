import React from "react";
import { Hero } from "~/components/hero";
import { Tools } from "~/components/tools";

export const HomeLayout: React.FC = () => {
  return (
    <>
      <Hero />
      <Tools />
    </>
  );
};