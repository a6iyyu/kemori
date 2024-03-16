import React from "react";
// import { TypingEffect } from "./typing-effect";

export const Hero: React.FC = () => {
  return (
    <main className="h-fit w-4/5 flex items-center justify-between mb-24 mt-16 mx-auto">
      <section className="h-full w-2/5 my-20">
        <h3 className="cursor-default font-semibold text-4xl flex items-center justify-start">
          <p className="text-yellow-400">Best</p>
          &nbsp;
          <p className="text-gray-50">downloader</p>
          &nbsp;
          <p className="text-blue-400">tool</p>
        </h3>
        <p className="cursor-default font-semibold text-4xl text-green-400">
          for 
        </p>
      </section>
      <section className="h-full w-2/5 grid place-items-center">
        <img src="" alt="" className="font-semibold text-xl" />
      </section>
    </main>
  );
};