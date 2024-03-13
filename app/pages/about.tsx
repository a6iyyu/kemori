import React from "react";
import { Header } from "~/components/header";
import { AboutLayout } from "~/layouts/about";
import { Footer } from "~/components/footer";

export const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <AboutLayout />
      <Footer />
    </>
  );
};