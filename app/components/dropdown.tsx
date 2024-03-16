import React, { useState, useRef, useEffect } from "react";

interface Languages {
  id: number;
  image: string;
  language: string;
  alt: string;
}

const language: Languages[] = [
  {
    id: 1,
    image: "/english.webp",
    language: "EN",
    alt: "EN",
  },
  {
    id: 2,
    image: "/indonesia.png",
    language: "ID",
    alt: "ID",
  },
];

export const Dropdown: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdown = useRef<HTMLDivElement>(null);

  const HandleClick = (e: MouseEvent) => {
    if (dropdown.current && !dropdown.current.contains(e.target as Element)) {
      setOpen(false);
    }
  };

  const DropdownClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.addEventListener("click", HandleClick);
    return () => document.removeEventListener("click", HandleClick);
  });

  return (
    <div
      className="h-1/3 w-1/2 flex items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-200 text-gray-950 transition-all duration-300 ease-in-out rounded-full font-semibold selection:bg-none"
      onClick={DropdownClick}
    >
      <img
        src={language[0].image}
        alt={language[0].alt}
        className="h-6 w-6 rounded-full mr-2"
      />
      <h5>{language[0].language}</h5>
      {open && (
        <div
          ref={dropdown}
          className="absolute h-fit w-fit top-28 shadow-lg rounded-xl bg-gray-50 z-50"
        >
          {language.map((lang) => (
            <div
              key={lang.id}
              className="cursor-pointer flex px-7 py-4 hover:rounded-xl hover:bg-gray-300"
              onClick={() => lang.language}
            >
              <img
                src={lang.image}
                alt={lang.alt}
                className="h-6 w-6 rounded-full mr-2"
              />
              <span>{lang.language}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};