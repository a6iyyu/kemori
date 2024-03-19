import React from "react";
import { Link } from "@remix-run/react";

export const ErrorHandling: React.FC = () => {
  return (
    <>
      <div className="h-32 w-full"></div>
      <section className="not-found-page grid h-[40rem] w-full place-items-center">
        <div className="block h-full w-[90%] lg:flex">
          <div className="grid h-[45%] w-1/2 place-items-center lg:h-full">
            <img src="/public/img/404.png?url" alt="404: Not Found!" />
          </div>
          <div className="flex h-[55%] w-1/2 flex-col items-center justify-center lg:h-full">
            <div className="flex h-1/4 w-full flex-col items-start justify-end">
              <p className="cursor-default text-5xl font-bold text-gray-950">
                Oops!
              </p>
              <p className="cursor-default text-4xl font-medium text-gray-950">
                Didn't find anything here.
              </p>
            </div>
            <div className="grid h-1/3 w-full place-items-center">
              <p className="cursor-default text-justify text-2xl font-normal text-gray-900">
                Seems like this page took a brushstroke in the wrong direction.
                Let's navigate back to the main exhibit together.
              </p>
            </div>
            <div className="flex h-1/5 w-full items-center">
              <Link
                to="/"
                className="back-to-home flex items-center justify-center rounded-full bg-gray-950 text-slate-50 transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
              >
                <div
                  className="grid place-items-center rounded-full bg-slate-50 text-2xl text-gray-950 transition-all duration-300 ease-in-out hover:bg-slate-100 hover:text-gray-800"
                  style={{ transform: "rotate(225deg)" }}
                >
                  &#10132;
                </div>
                <div className="grid place-items-center">
                  <p className="font-bold text-white">Drift Home</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};