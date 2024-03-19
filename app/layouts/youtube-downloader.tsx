import React from "react";
import { AboutUs } from "~/components/about-us";
import { Tools } from "~/components/tools";
import { FAQ } from "~/components/faq";

export const YouTubeDownloaderLayout: React.FC = () => {
  return (
    <>
      <AboutUs />
      <Tools />
      <FAQ />
    </>
  );
};