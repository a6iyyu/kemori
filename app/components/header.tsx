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
  return <header className="h-40 w-4/5 flex mx-auto"></header>;
};