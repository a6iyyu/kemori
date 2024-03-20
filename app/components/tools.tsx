import { Link } from "@remix-run/react";
import React from "react";
import { menus } from "~/types/features";

export const Tools: React.FC = () => {
  return (
    <>
      <h3
        className="mx-auto mb-5 mt-16 h-fit w-fit cursor-default rounded-full border-2 border-solid px-8 py-3 text-center text-sm font-semibold lg:text-lg"
        id="tools-section"
      >
        <span className="text-slate-50">TO</span>
        <span className="text-pink-500">OLS</span>
      </h3>
      <section className="mx-auto grid h-fit w-4/5 place-items-center lg:w-3/5">
        <h3 className="h-fit w-fit cursor-default text-center text-3xl font-semibold lg:text-4xl">
          <span className="text-teal-400">One site</span>
          &nbsp;
          <span className="text-lime-400">for multiple services</span>
        </h3>
      </section>
      <section className="mx-auto mt-4 grid h-fit w-4/5 cursor-default place-items-center text-center text-xl font-medium text-slate-50 lg:w-3/5">
        Provides high-quality media downloads with an easy-to-use
        <br className="hidden lg:flex" />
        interface and responsive customer service.
      </section>
      <section className="mx-auto mt-8 grid h-fit w-4/5 grid-cols-1 grid-rows-4 place-items-center gap-y-10 xl:grid-cols-2 xl:grid-rows-2">
        {menus.map((menu) => (
          <div
            key={menu.id}
            id="tools"
            className="grid h-[26rem] w-full place-items-center rounded-3xl bg-gradient-to-tl from-slate-50 via-slate-200 to-slate-100 md:h-[22rem] xl:h-[25rem] xl:w-[90%]"
            style={{ boxShadow: "0 0 1.25rem #bcbcbc99" }}
          >
            <div className="flex h-4/5 w-[85%] flex-col items-start justify-center xl:h-3/4 xl:w-4/5 xl:justify-start">
              <img src={menu.image} alt={menu.alt} width={menu.width} />
              <p className="mt-4 cursor-default text-lg font-semibold">
                {menu.title}
              </p>
              <p className="text-md mb-4 mt-2.5 cursor-default text-justify font-medium">
                {menu.description}
              </p>
              <Link
                to={menu.link}
                className="text-md mt-2.5 text-justify font-semibold text-gray-950 transition-all duration-300 ease-in-out hover:text-gray-700 hover:underline"
              >
                See more
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};