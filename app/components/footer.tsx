import React from "react";

export const Footer: React.FC = () => {
  return (
    <>
      <hr className="mx-auto mt-12 h-0.5 w-4/5 rounded-full bg-slate-400" />
      <footer className="mx-auto flex h-fit w-4/5 pb-14 pt-8">
        <section className="flex h-full w-2/5 flex-col items-start justify-start">
          <img
            src=""
            alt="Kemori"
            width=""
            className="font-semibold text-slate-50"
          />
          <br />
          <h4 className="cursor-default font-semibold text-slate-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            mollitia maxime aliquid, corporis eos dolore veritatis cum odio vel
            nesciunt?
          </h4>
        </section>
        <section className=""></section>
      </footer>
    </>
  );
};