import React, { useEffect } from "react";
import { ScrollIndicator } from "~/components/scroll-indicator";
import { ScrollToTop } from "~/components/scroll-to-top";
import { Header } from "~/components/header";
import { URLShortenerLayout } from "~/layouts/url-shortener";
import { Footer } from "~/components/footer";

export const URLShortenerPage: React.FC = () => {
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

    const ToolsButton = document.getElementById("tools-button") as HTMLElement;
    const ToolsSection = document.getElementById("tools-section") as HTMLElement;
    if (ToolsButton && ToolsSection) {
      ToolsButton.addEventListener("click", () => {
        ToolsSection.scrollIntoView({
          behavior: "smooth",
        });
      });
    }

    const FAQButton = document.getElementById("faq-button") as HTMLElement;
    const FAQSection = document.getElementById("faq-section") as HTMLElement;
    if (FAQButton && FAQSection) {
      FAQButton.addEventListener("click", () => {
        FAQSection.scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }, []);

  return (
    <>
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <URLShortenerLayout />
      <Footer />
    </>
  );
};