import React from "react";
import { narrative } from "~/types/narrative";

export const AboutUs: React.FC = () => {
  return (
    <>
      <h3
        className="mx-auto mb-5 h-fit w-fit cursor-default rounded-full border-2 border-solid px-8 py-3 text-center text-sm font-semibold lg:text-lg"
        id="about-section"
      >
        <span className="text-slate-50">ABOUT</span>
        &nbsp;
        <span className="text-green-400">US</span>
      </h3>
      <section className="mx-auto grid h-fit w-4/5 place-items-center lg:w-3/5">
        <h3 className="h-fit w-fit cursor-default text-center text-3xl font-semibold lg:text-4xl">
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
      <section className="mx-auto mt-4 grid h-fit w-4/5 cursor-default place-items-center text-center text-xl font-medium text-slate-50 lg:w-3/5">
        Converting and downloading high-quality video files from
        <br className="hidden lg:flex" />
        &nbsp; various sources is now a piece of cake with Kemori.
      </section>
      <section className="mx-auto mt-1 flex h-fit w-4/5 flex-col items-center justify-between xl:mt-0 xl:flex-row">
        {narrative.map((reason) => (
          <div
            key={reason.id}
            id={reason.id}
            className="grid h-[23rem] w-full place-items-center rounded-3xl bg-gradient-to-tl from-slate-50 via-slate-200 to-slate-100 first:mr-0 first:mt-8 last:ml-0 last:mt-8 even:mx-0 even:mt-8 md:h-72 lg:last:ml-5 lg:even:mx-5 xl:h-96 xl:w-1/3 xl:first:mr-5"
            style={{ boxShadow: "0 0 1.25rem #bcbcbc99" }}
          >
            <div className="flex h-3/4 w-[85%] flex-col items-start justify-start xl:h-4/5 xl:w-4/5">
              <img src={reason.image} alt={reason.alt} width={40} />
              <p className="mt-4 cursor-default text-lg font-semibold">
                {reason.title}
              </p>
              <p className="text-md mb-8 mt-2.5 cursor-default text-justify font-medium last:mb-10">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};