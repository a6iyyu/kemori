import React from "react";
import { ScrollIndicator } from "~/components/scroll-indicator";
import { ScrollToTop } from "~/components/scroll-to-top";
import { Header } from "~/components/header";
import { AboutLayout } from "~/layouts/about";
import { Footer } from "~/components/footer";

export const AboutPage: React.FC = () => {
  return (
    <>
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <AboutLayout />
      <Footer />
    </>
  );
};