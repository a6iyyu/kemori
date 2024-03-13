import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="h-40 w-[85%] flex justify-between mx-auto">
      <section className="h-full w-2/5 grid place-items-center"></section>
      <nav className="h-full w-2/5 flex items-center justify-between">
        <a href="/about">About</a>
        <a href=""></a>
        <a href=""></a>
      </nav>
    </header>
  );
};