import React, { useState, useEffect, useRef } from "react";

export const TypingEffect: React.FC = () => {
  const TypingEffect = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (TypingEffect.current) {
      for (let i = 0; i < TypingEffect.current.children.length; i++) {
        TypingEffect.current.children[0].classList.add("text-in");
      }
    }
  }, []);

  return (
    <p
      ref={TypingEffect}
      className="cursor-default text-center text-4xl font-semibold text-green-400 xl:text-left xl:text-5xl"
      id="animate-text"
    >
      from&nbsp;
      <span className="text-slate-500">Anywhere</span>
      <span className="text-blue-500">Facebook</span>
      <span className="text-amber-600">Instagram</span>
      <span className="text-red-600">YouTube</span>
      <span className="text-cyan-600">Shortener</span>
    </p>
  );
};