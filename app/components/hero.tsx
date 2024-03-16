import React from "react";
// import { TypingEffect } from "./typing-effect";

export const Hero: React.FC = () => {
  return (
    <main className="h-fit w-4/5 flex items-center justify-between mb-24 mt-16 mx-auto">
      <section className="h-full w-2/5 my-20">
        <h3 className="cursor-default font-semibold text-5xl flex items-center justify-start">
          <span className="text-yellow-400">Best</span>
          &nbsp;
          <span className="text-gray-50">downloader</span>
          &nbsp;
          <span className="text-blue-400">tool</span>
        </h3>
        <p className="cursor-default font-semibold text-5xl text-green-400">
          for
        </p>
      </section>
      <section className="h-full w-2/5 grid place-items-center">
        <img
          src="/hero-downloading.png"
          alt="Downloading"
          className="font-semibold text-xl"
        />
      </section>
    </main>
  );
};