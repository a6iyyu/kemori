import { Link } from "@remix-run/react";
import React, { useState, useRef, useEffect } from "react";

const DropdownMenu: { id: number; title: string; link: string }[] = [
  {
    id: 1,
    title: "Facebook Downloader",
    link: "/facebook-downloader",
  },
  {
    id: 2,
    title: "X Downloader",
    link: "/x-downloader",
  },
  {
    id: 3,
    title: "YouTube Downloader",
    link: "/youtube-downloader",
  },
  {
    id: 4,
    title: "URL Shortener",
    link: "/url-shortener",
  },
];

export const GetToKnow: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdown = useRef<HTMLButtonElement>(null);

  const HandleClickDropdown = (e: MouseEvent) => {
    if (dropdown.current && !dropdown.current.contains(e.target as Element)) {
      setOpen(false);
    }
  };

  const HandleDropdownMenus = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.addEventListener("click", HandleClickDropdown);
    return () => document.removeEventListener("click", HandleClickDropdown);
  });

  return (
    <>
      <button
        className="h-fit w-fit bg-slate-100 hover:bg-slate-300 text-gray-950 px-8 py-4 font-black text-base rounded-xl"
        style={{
          boxShadow: "0 0 1rem #bcbcbc50",
          transition: "all 300ms ease-in-out",
        }}
        ref={dropdown}
        onClick={HandleDropdownMenus}
      >
        GET TO KNOW
      </button>
      {open && (
        <div className="absolute h-fit w-fit bg-gradient-to-tr from-slate-200 via-slate-50 to-slate-100 top-[48rem] xl:top-[31rem] rounded-xl">
          {DropdownMenu.map((dropdown) => (
            <Link
              to={dropdown.link}
              className="grid place-items-center px-6 py-5 font-semibold text-gray-950 hover:bg-slate-300 rounded-xl transition-all duration-300 ease-in-out"
            >
              {dropdown.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};