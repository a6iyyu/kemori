import { Link } from "@remix-run/react";
import React from "react";
import { menus } from "~/types/features";

export const Tools: React.FC = () => {
  return (
    <>
      <h3
        className="h-fit w-fit border-2 border-solid cursor-default font-semibold text-sm lg:text-lg text-center mt-16 mb-5 mx-auto px-8 py-3 rounded-full"
        id="tools-section"
      >
        <span className="text-slate-50">TO</span>
        <span className="text-pink-500">OLS</span>
      </h3>
      <section className="h-fit w-4/5 lg:w-3/5 grid place-items-center mx-auto">
        <h3 className="h-fit w-fit cursor-default font-semibold text-3xl lg:text-4xl text-center">
          <span className="text-red-400">One site for</span>
          &nbsp;
          <span className="text-slate-50">multiple services</span>
        </h3>
      </section>
      <section className="h-fit w-4/5 lg:w-3/5 grid place-items-center mt-4 mx-auto text-slate-50 cursor-default font-medium text-xl text-center">
        Provides high-quality media downloads with an easy-to-use
        <br className="hidden lg:flex" />
        interface and responsive customer service.
      </section>
      <section className="h-fit w-4/5 grid place-items-center justify-between gap-y-10 grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 mt-8 mx-auto">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="h-[23rem] md:h-72 xl:h-80 w-full xl:w-[90%] grid place-items-center bg-gradient-to-tl from-slate-50 via-slate-200 to-slate-100 rounded-3xl"
            style={{ boxShadow: "0 0 1.25rem #bcbcbc99" }}
          >
            <div className="h-3/4 w-[85%] xl:w-4/5 flex flex-col items-start justify-start">
              <img src={menu.image} alt={menu.alt} width={menu.width} />
              <p className="text-lg cursor-default font-semibold mt-4">
                {menu.title}
              </p>
              <p className="text-md cursor-default font-medium text-justify mt-2.5 mb-4">
                {menu.description}
              </p>
              <Link
                to={menu.link}
                className="text-md font-medium text-gray-950 hover:text-gray-700 text-justify mt-2.5 hover:underline transition-all duration-300 ease-in-out"
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