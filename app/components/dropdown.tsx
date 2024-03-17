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
  const [selectedLanguage, setSelectedLanguage] = useState<string>(language[0].language);
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
        src={language.find((lang) => lang.language === selectedLanguage)?.image}
        alt={language.find((lang) => lang.alt === selectedLanguage)?.alt}
        className="h-6 w-6 rounded-full mr-3"
      />
      <h5>{selectedLanguage || language[0].language}</h5>
      {open && (
        <div
          ref={dropdown}
          className="absolute h-fit w-fit top-28 shadow-lg rounded-xl bg-gray-50 z-50"
        >
          {language.map((lang) => (
            <div
              key={lang.id}
              className="cursor-pointer flex px-7 py-4 rounded-xl hover:bg-gray-300 transition-all duration-500 ease-in-out"
              onClick={() => setSelectedLanguage(lang.language)}
            >
              <img
                src={lang.image}
                alt={lang.alt}
                className="h-6 w-6 rounded-full mr-3.5"
              />
              <span>{lang.language}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};