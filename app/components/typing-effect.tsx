import React, { useState, useEffect } from "react";

export const TypingEffect: React.FC = () => {
  const words: { id: number; name: string; color: string }[] = [
    {
      id: 1,
      name: "Anywhere",
      color: "red",
    },
    {
      id: 2,
      name: "Facebook",
      color: "blue",
    },
    {
      id: 3,
      name: "Instagram",
      color: "brown",
    },
    {
      id: 4,
      name: "Twitter",
      color: "blue",
    },
    {
      id: 5,
      name: "YouTube",
      color: "red",
    },
  ];

  const [currentText, setCurrentText] = useState<string>(words[0].name);
  const [index, setIndex] = useState<number>(0);
  const [backspace, setBackspace] = useState<boolean>(false);

  useEffect(() => {});

  return null;
};