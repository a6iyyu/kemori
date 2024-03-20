import React from "react";
import { Link } from "@remix-run/react";
import { ChooseLanguage } from "./choose-language";

export const Header: React.FC = () => {
  const menus: { name: string; id: string }[] = [
    {
      name: "About",
      id: "about-button",
    },
    {
      name: "FAQ",
      id: "faq-button",
    },
    {
      name: "Tools",
      id: "tools-button",
    },
  ];

  return (
    <header className="mx-auto flex h-40 w-4/5 justify-between">
      <section className="flex h-full w-1/3 items-center justify-start md:w-1/5">
        <Link to="/" className="h-fit w-fit">
          {/* <img src="" alt="Logo" className="text-gray-50 font-semibold" /> */}
          <h2 className="text-2xl font-semibold text-gray-50">KEMORI</h2>
        </Link>
      </section>
      <nav className="hidden h-full w-3/5 drop-shadow-xl md:flex md:items-center md:justify-evenly">
        {menus.map((menu) => (
          <h5
            key={menu.id}
            id={menu.id}
            className="cursor-pointer font-semibold text-gray-50 transition-all duration-300 ease-in-out hover:text-gray-200 hover:underline"
          >
            {menu.name}
          </h5>
        ))}
      </nav>
      <section className="flex h-full w-1/2 items-center justify-end md:w-1/5">
        <ChooseLanguage />
      </section>
    </header>
  );
};