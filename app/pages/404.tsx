import React from "react";
import { ScrollIndicator } from "~/components/scroll-indicator";
import { ScrollToTop } from "~/components/scroll-to-top";
import { Header } from "~/components/header";
import { ErrorHandling } from "~/layouts/404";
import { Footer } from "~/components/footer";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <ScrollIndicator />
      <ScrollToTop />
      <Header />
      <ErrorHandling />
      <Footer />
    </>
  );
};