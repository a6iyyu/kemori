import React from "react";

export const Tools: React.FC = () => {
  return (
    <main className="h-fit w-4/5 flex flex-col items-center justify-center mt-16 mx-auto">
      <h3 className="border-2 cursor-default font-semibold px-12 py-2 rounded-full text-xl text-slate-50 ">
        TOOLS
      </h3>
      <section className="h-fit w-full grid place-items-center grid-cols-3 grid-rows-2">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </main>
  );
};