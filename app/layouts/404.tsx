import React from "react";
import { Link } from "@remix-run/react";

export const ErrorHandling: React.FC = () => {
  return (
    <>
      <div className="h-32 w-full"></div>
      <section className="not-found-page h-[40rem] w-full grid place-items-center">
        <div className="h-full w-[90%] block lg:flex">
          <div className="h-[45%] lg:h-full w-1/2 grid place-items-center">
            <img src="/public/img/404.png?url" alt="404: Not Found!" />
          </div>
          <div className="h-[55%] lg:h-full w-1/2 flex flex-col items-center justify-center">
            <div className="h-1/4 w-full flex flex-col items-start justify-end">
              <p className="text-gray-950 text-5xl cursor-default font-bold">
                Oops!
              </p>
              <p className="text-gray-950 text-4xl cursor-default font-medium">
                Didn't find anything here.
              </p>
            </div>
            <div className="h-1/3 w-full grid place-items-center">
              <p className="text-gray-900 text-2xl cursor-default font-normal text-justify">
                Seems like this page took a brushstroke in the wrong direction.
                Let's navigate back to the main exhibit together.
              </p>
            </div>
            <div className="h-1/5 w-full flex items-center">
              <Link
                to="/"
                className="back-to-home flex items-center justify-center rounded-full transition-all duration-300 ease-in-out bg-gray-950 text-slate-50 hover:bg-gray-800 hover:text-white"
              >
                <div
                  className="grid place-items-center rounded-full transition-all duration-300 ease-in-out text-2xl bg-slate-50 text-gray-950 hover:bg-slate-100 hover:text-gray-800"
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