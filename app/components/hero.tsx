import React from "react";
import { TypingEffect } from "./typing-effect";
import { GetToKnow } from "./get-to-know";

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
        <TypingEffect />
        <br />
        <div className="h-fit w-full xl:w-1/2 flex items-center justify-center xl:justify-start">
          <GetToKnow />
        </div>
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