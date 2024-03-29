"use client";
import React from "react";
import Cookies from "js-cookie";
import { cn } from "@/utils";
import { motion } from "framer-motion";

import Sun from "/assets/icon-light-mode.svg";
import Moon from "/assets/icon-dark-mode.svg";

type DarkLightToggleProps = {
  initialTheme?: "dark" | "light";
};

function DarkLightToggle({ initialTheme = "light" }: DarkLightToggleProps) {
  const [theme, setTheme] = React.useState(initialTheme);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    Cookies.set("colour-theme", newTheme, { expires: 365 });
  }

  return (
    <div className="flex flex-row items-center gap-[10px]">
      <Moon
        className={cn("h-4 w-[17px] fill-gray-600 transition-colors", {
          "fill-gray-100": theme === "dark",
        })}
      />
      <button
        className={cn(
          "flex h-6 w-12 justify-end rounded-[14.5px] bg-gray-600 p-[6px]",
          {
            "justify-start": theme === "dark",
          },
        )}
        onClick={toggleTheme}
      >
        <motion.span
          className="aspect-square h-full rounded-full bg-gray-100"
          layout="position"
          transition={toggleBallSpring}
        ></motion.span>
        <span className="sr-only">Toggle dark / light mode</span>
      </button>
      <Sun
        className={cn("size-[18px] fill-gray-100 transition-colors", {
          "fill-gray-600": theme === "dark",
        })}
      />
    </div>
  );
}

const toggleBallSpring = {
  type: "spring",
  stiffness: 500,
  damping: 40,
};

export default DarkLightToggle;
