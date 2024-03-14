import React from "react";
import { Link } from "@remix-run/react";

interface MenuItem {
  name: string;
  link: string;
}

export const Header: React.FC = () => {
  const menus: MenuItem[] = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/service",
    },
  ];
  return (
    <header className="h-40 w-4/5 flex mx-auto">
      <section className="h-full w-1/5 flex items-center justify-start">
        <Link to="/" className="h-fit w-fit">
          <img src="" alt="Logo" className="text-slate-50 font-semibold" />
        </Link>
      </section>
      <nav className="h-full w-2/5 flex items-center justify-evenly">
        {menus.map((menu) => (
          <Link
            key={menu.name}
            to={menu.link}
            className="text-xl font-semibold text-slate-50 hover:text-slate-200 hover:underline"
          >
            {menu.name}
          </Link>
        ))}
      </nav>
      <section className="h-full w-2/5 flex items-center justify-between"></section>
    </header>
  );
};