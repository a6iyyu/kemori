import React, { useState, useRef, useEffect } from "react";

const language: { id: number; image: string; language: string }[] = [
  {
    id: 1,
    image: "",
    language: "EN",
  },
  {
    id: 2,
    image: "",
    language: "ID",
  },
];

export const Dropdown: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdown = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (dropdown.current && !dropdown.current.contains(e.target as Element)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  });

  return (
    <div className="flex xl:hidden relative">
      <button></button>
    </div>
  );
};