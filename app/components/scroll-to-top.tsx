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
      className={`fixed bottom-8 right-8 z-[999] grid h-20 w-20 cursor-pointer place-items-center rounded-full bg-gray-50 transition-all duration-300 ease-in-out hover:bg-gray-200 lg:h-24 lg:w-24
        ${showScroll ? "visible opacity-100" : "invisible opacity-0"}
      `}
      onClick={scrollToTop}
    >
      <img
        src={ScrollToTopImage}
        alt="Scroll"
        className="w-12 font-semibold text-gray-950 lg:w-16"
      />
    </div>
  );
};