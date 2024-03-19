import React from "react";
import { TypingEffect } from "./typing-effect";
import { GetToKnow } from "./get-to-know";

export const Hero: React.FC = () => {
  return (
    <main className="mx-auto mb-24 mt-16 flex h-fit w-4/5 flex-col-reverse items-center justify-between xl:flex-row">
      <section className="mx-auto mt-12 h-full w-full xl:mx-0 xl:my-auto xl:w-1/2">
        <h3 className="flex cursor-default items-center justify-center text-center text-4xl font-semibold xl:justify-start xl:text-left xl:text-5xl">
          <p className="text-yellow-400">Best</p>
          &nbsp;
          <p className="text-gray-50">downloader</p>
          &nbsp;
          <p className="text-blue-400">tool</p>
        </h3>
        <TypingEffect />
        <br />
        <div className="flex h-fit w-full items-center justify-center xl:w-1/2 xl:justify-start">
          <GetToKnow />
        </div>
      </section>
      <section className="grid h-full w-full place-items-center xl:w-2/5">
        <img
          src="/hero-downloading.png"
          alt="Downloading"
          className="text-xl font-semibold"
        />
      </section>
    </main>
  );
};