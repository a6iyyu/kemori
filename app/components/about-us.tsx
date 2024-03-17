import React from "react";
import { narrative } from "~/types/narrative";

export const AboutUs: React.FC = () => {
  return (
    <>
      <h3 className="h-fit w-fit border-2 border-solid cursor-default font-semibold text-sm lg:text-lg text-center mb-8 mx-auto px-8 py-3 rounded-full">
        <span className="text-slate-50">ABOUT</span>
        &nbsp;
        <span className="text-green-400">US</span>
      </h3>
      <section className="h-fit w-4/5 lg:w-3/5 grid place-items-center mx-auto">
        <h3 className="h-fit w-fit cursor-default font-semibold text-3xl lg:text-4xl text-center">
          <span className="text-red-400">Kemori is</span>
          &nbsp;
          <span className="text-slate-50">one of the best</span>
          &nbsp;
          <span className="text-sky-600">
            media <br className="hidden lg:flex" /> downloader
          </span>
          &nbsp;
          <span className="text-teal-400">tools on the internet.</span>
        </h3>
      </section>
      <section className="h-fit w-4/5 lg:w-3/5 grid place-items-center mt-4 mx-auto text-slate-50 cursor-default font-medium text-xl text-center">
        Converting and downloading high-quality video files from
        <br className="hidden lg:flex" />
        YouTube is now as easy as pie with Kemori.
      </section>
      <section className="h-fit w-4/5 flex flex-col lg:flex-row items-center justify-between mt-1 lg:mt-0 mx-auto">
        {narrative.map((reason) => (
          <div
            key={reason.id}
            className="h-fit w-full lg:w-1/3 bg-slate-50 rounded-3xl first:mr-0 first:mt-6 lg:first:mr-5 even:mx-0 even:mt-6 lg:even:mx-5 last:ml-0 last:my-6 lg:last:ml-5"
            style={{ boxShadow: "0 0 1rem #bcbcbc" }}
          >
            <img src={reason.image} alt="" />
            <p className="h-fit w-4/5 text-lg cursor-default font-semibold mx-auto mt-8">
              {reason.title}
            </p>
            <p className="h-fit w-4/5 text-md cursor-default font-semibold mx-auto mt-2.5 mb-8">
              {reason.description}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};