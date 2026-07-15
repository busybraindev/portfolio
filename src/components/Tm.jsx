import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

const Tm = () => {
  const [isD, sd] = useState(false);
  useEffect(() => {
    const st = localStorage.getItem("theme");
    if (st === "dark") {
      sd(true);
      document.documentElement.classList.add("dark");
    } else {
      sd(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const tg = () => {
    if (isD) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      sd(false);
    } else {
      document.documentElement.classList.add("dark");
      sd(true);
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <button
      onClick={tg}
      className="fixed max-sm:right-0 top-4 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden"
    >
      {" "}
      {isD ? (
        <Sun className="h-6 w-6 text-yellow-300"></Sun>
      ) : (
        <Moon className="h-6 w-6 text-blue-900"></Moon>
      )}
    </button>
  );
};

export default Tm;
