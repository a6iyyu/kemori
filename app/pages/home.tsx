import React, { useEffect } from "react";
import { ScrollIndicator } from "~/components/scroll-indicator";
import { ScrollToTop } from "~/components/scroll-to-top";
import { Header } from "~/components/header";
import { HomeLayout } from "~/layouts/home";
import { Footer } from "~/components/footer";

export const HomePage: React.FC = () => {
  useEffect(() => {
    const AboutButton = document.getElementById("about-button") as HTMLElement;
    const AboutSection = document.getElementById("about-section") as HTMLElement;

    if (AboutButton && AboutSection) {
      AboutButton.addEventListener("click", () => {
        AboutSection.scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  });

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