import React from "react";
import { ScrollIndicator } from "~/components/scroll-indicator";
import { ScrollToTop } from "~/components/scroll-to-top";
import { Header } from "~/components/header";
import { HomeLayout } from "~/layouts/home";
import { Footer } from "~/components/footer";

export const HomePage: React.FC = () => {
  return (
    <>
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <HomeLayout />
      <Footer />
    </>
  );
};