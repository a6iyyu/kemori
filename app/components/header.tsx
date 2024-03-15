import React from "react";
import { Link } from "@remix-run/react";

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
      name: "Utility",
      id: "utility-button",
    },
  ];
  return (
    <header className="h-40 w-4/5 flex mx-auto">
      <section className="h-full w-1/5 flex items-center justify-start">
        <Link to="/" className="h-fit w-fit">
          <img src="" alt="Logo" className="text-slate-50 font-semibold" />
        </Link>
      </section>
      <nav className="h-full w-3/5 grid place-items-center">
        <div
          className="h-fit w-fit flex items-center justify-evenly rounded-full px-6 py-4 bg-slate-50"
          style={{ boxShadow: "0 0 1rem rgba(188, 188, 188, 0.7)" }}
        >
          {menus.map((menu) => (
            <p
              key={menu.name}
              id={menu.id}
              className="text-md cursor-pointer font-semibold mx-6 text-slate-950 hover:text-slate-700 hover:underline transition-all duration-300 ease-in-out"
            >
              {menu.name}
            </p>
          ))}
        </div>
      </nav>
      <section className="h-full w-1/5 flex items-center justify-between"></section>
    </header>
  );
};