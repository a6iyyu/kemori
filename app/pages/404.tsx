import React from "react";
import { Header } from "~/components/header";
import { ErrorHandling } from "~/layouts/404";
import { Footer } from "~/components/footer";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header />
      <ErrorHandling />
      <Footer />
    </>
  );
};