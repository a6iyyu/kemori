import React from "react";
import { Header } from "~/components/header";
import { HomeLayout } from "~/layouts/home";
import { Footer } from "~/components/footer";

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HomeLayout />
      <Footer />
    </>
  );
};