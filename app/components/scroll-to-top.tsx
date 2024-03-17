import React, { useState, useEffect } from "react";
import ScrollToTopImage from "../../public/scroll-to-top.png";

export const ScrollToTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 25 * 16) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 25 * 16) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });
  return (
    <div
      className={`h-20 w-20 lg:h-24 lg:w-24 grid place-items-center rounded-full bg-gray-50 hover:bg-gray-200 fixed cursor-pointer bottom-8 right-8 transition-all duration-300 ease-in-out
        ${showScroll ? "visible opacity-100" : "invisible opacity-0"}
      `}
      onClick={scrollToTop}
    >
      <img
        src={ScrollToTopImage}
        alt="Scroll"
        className="w-12 lg:w-16 text-gray-950 font-semibold"
      />
    </div>
  );
};