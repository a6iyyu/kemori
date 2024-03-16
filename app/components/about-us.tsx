import React from "react";

export const AboutUs: React.FC = () => {
  return (
    <>
      <h3 className="h-fit w-fit border-2 border-solid cursor-default font-semibold text-lg text-center mb-8 mx-auto px-8 py-3 rounded-full">
        <span className="text-slate-50">ABOUT</span>
        &nbsp;
        <span className="text-green-400">US</span>
      </h3>
      <section className="h-fit w-3/5 mx-auto grid place-items-center">
        <h3 className="h-fit w-fit cursor-default font-semibold text-4xl text-center">
          <span className="text-red-400">Kemori is</span>
          &nbsp;
          <span className="text-slate-50">one of the best</span>
          &nbsp;
          <span className="text-sky-600">
            media <br /> downloader
          </span>
          &nbsp;
          <span className="text-teal-400">tools on the internet.</span>
        </h3>
      </section>
    </>
  );
};