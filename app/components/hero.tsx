import React from "react";
import { TypingEffect } from "./typing-effect";

export const Hero: React.FC = () => {
  return (
    <main className="h-fit w-4/5 flex flex-col-reverse xl:flex-row items-center justify-between mb-24 mt-16 mx-auto">
      <section className="h-full w-full xl:w-1/2 mt-12 xl:mx-0 mx-auto xl:my-auto">
        <h3 className="cursor-default font-semibold flex items-center xl:justify-start justify-center text-center xl:text-5xl text-4xl xl:text-left">
          <p className="text-yellow-400">Best</p>
          &nbsp;
          <p className="text-gray-50">downloader</p>
          &nbsp;
          <p className="text-blue-400">tool</p>
        </h3>
        <p className="cursor-default font-semibold xl:text-5xl text-4xl text-center xl:text-left text-green-400">
          for &nbsp;
          <TypingEffect />
        </p>
      </section>
      <section className="h-full w-full xl:w-2/5 grid place-items-center">
        <img
          src="/hero-downloading.png"
          alt="Downloading"
          className="font-semibold text-xl"
        />
      </section>
    </main>
  );
};