import React from "react";
import { narrative } from "~/types/narrative";

export const AboutUs: React.FC = () => {
  return (
    <>
      <h3
        className="h-fit w-fit border-2 border-solid cursor-default font-semibold text-sm lg:text-lg text-center mb-5 mx-auto px-8 py-3 rounded-full"
        id="about-section"
      >
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
        &nbsp; various sources is now a piece of cake with Kemori.
      </section>
      <section className="h-fit w-4/5 flex flex-col xl:flex-row items-center justify-between mt-1 xl:mt-0 mx-auto">
        {narrative.map((reason) => (
          <div
            key={reason.id}
            id={reason.id}
            className="h-[23rem] md:h-72 xl:h-96 w-full xl:w-1/3 grid place-items-center bg-gradient-to-tl from-slate-50 via-slate-200 to-slate-100 rounded-3xl first:mr-0 first:mt-8 xl:first:mr-5 even:mx-0 even:mt-8 lg:even:mx-5 last:ml-0 last:mt-8 lg:last:ml-5"
            style={{ boxShadow: "0 0 1.25rem #bcbcbc99" }}
          >
            <div className="h-3/4 xl:h-4/5 w-[85%] xl:w-4/5 flex flex-col items-start justify-start">
              <img src={reason.image} alt={reason.alt} width={40} />
              <p className="text-lg cursor-default font-semibold mt-4">
                {reason.title}
              </p>
              <p className="text-md cursor-default font-medium text-justify mt-2.5 last:mb-10 mb-8">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};