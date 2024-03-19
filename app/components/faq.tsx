import React from "react";

export const FAQ: React.FC = () => {
  return (
    <>
      <h3
        className="mx-auto mb-5 mt-16 h-fit w-fit cursor-default rounded-full border-2 border-solid border-slate-300 px-8 py-3 text-center text-sm font-semibold lg:text-lg"
        id="faq-section"
      >
        <span className="text-cyan-400">FAQ</span>
      </h3>
      <section className="mx-auto grid h-fit w-4/5 place-items-center lg:w-3/5">
        <h3 className="h-fit w-fit cursor-default text-center text-3xl font-semibold lg:text-4xl">
          <span className="text-red-400">One site for</span>
          &nbsp;
          <span className="text-slate-50">multiple services</span>
        </h3>
      </section>
      <section className="mx-auto mt-4 grid h-fit w-4/5 cursor-default place-items-center text-center text-xl font-medium text-slate-50 lg:w-3/5">
        Provides high-quality media downloads with an easy-to-use
        <br className="hidden lg:flex" />
        interface and responsive customer service.
      </section>
    </>
  );
};