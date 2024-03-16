import { Link } from "@remix-run/react";
import React from "react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
}

export const Tools: React.FC = () => {
  const menus: MenuItem[] = [
    {
      id: 1,
      name: "Facebook Downloader",
      description: "",
    },
    {
      id: 2,
      name: "X Downloader",
      description: "",
    },
    {
      id: 3,
      name: "YouTube Downloader",
      description: "",
    },
    {
      id: 4,
      name: "Shortenen URL",
      description: "",
    },
  ];
  return null;
};