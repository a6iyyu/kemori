import React, { useState, useEffect } from "react";

export const ScrollIndicator: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const updateScrollPercentage = () => {
    const scrollHeight: number = document.documentElement.scrollHeight - window.innerHeight;
    const percentage: number = (window.scrollY / scrollHeight) * 100;
    setScrollPercentage(percentage);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScrollPercentage);
    return () => {
      window.removeEventListener("scroll", updateScrollPercentage);
    };
  });
  return (
    <div
      className="fixed z-[999] h-1 bg-slate-50"
      style={{ width: `${scrollPercentage}%` }}
    ></div>
  );
};