import React, { useState, useRef, useEffect } from "react";
import { language } from "~/types/languages";

export const ChooseLanguage: React.FC = () => {
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
      className="flex h-1/3 w-1/2 cursor-pointer items-center justify-center rounded-full bg-gray-50 font-semibold text-gray-950 transition-all duration-300 ease-in-out selection:bg-none hover:bg-gray-200"
      onClick={DropdownClick}
    >
      <img
        src={language.find((lang) => lang.language === selectedLanguage)?.image}
        alt={language.find((lang) => lang.alt === selectedLanguage)?.alt}
        className="mr-3 h-6 w-6 rounded-full"
      />
      <h5>{selectedLanguage || language[0].language}</h5>
      {open && (
        <div
          ref={dropdown}
          className="absolute top-28 z-50 h-fit w-fit rounded-xl bg-gray-50 shadow-lg"
        >
          {language.map((lang) => (
            <div
              key={lang.id}
              className="flex cursor-pointer rounded-xl px-7 py-4 transition-all duration-500 ease-in-out hover:bg-gray-300"
              onClick={() => setSelectedLanguage(lang.language)}
            >
              <img
                src={lang.image}
                alt={lang.alt}
                className="mr-3.5 h-6 w-6 rounded-full"
              />
              <span>{lang.language}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};