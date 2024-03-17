import React from "react";
import { Link } from "@remix-run/react";
import { Dropdown } from "./dropdown";

interface MenuItem {
  name: string;
  id: string;
}

export const Header: React.FC = () => {
  const menus: MenuItem[] = [
    {
      name: "About",
      id: "about-button",
    },
    {
      name: "FAQ",
      id: "faq-button",
    },
    {
      name: "How It Works",
      id: "how-it-works-button",
    },
    {
      name: "Tools",
      id: "tools-button",
    },
  ];
  return (
    <header className="h-40 w-4/5 flex justify-between mx-auto">
      <section className="h-full w-1/3 md:w-1/5 flex items-center justify-start">
        <Link to="/" className="h-fit w-fit">
          {/* <img src="" alt="Logo" className="text-gray-50 font-semibold" /> */}
          <h2 className="font-semibold text-2xl text-gray-50">KEMORI</h2>
        </Link>
      </section>
      <nav className="h-full w-3/5 hidden md:flex md:items-center md:justify-evenly drop-shadow-xl">
        {menus.map((menu) => (
          <h5
            key={menu.id}
            className="cursor-pointer font-semibold text-gray-50 hover:text-gray-200 hover:underline transition-all duration-300 ease-in-out"
          >
            {menu.name}
          </h5>
        ))}
      </nav>
      <section className="h-full w-1/2 md:w-1/5 flex items-center justify-end">
        <Dropdown />
      </section>
    </header>
  );
};