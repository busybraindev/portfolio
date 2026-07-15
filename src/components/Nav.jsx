import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
const nav = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
const Nav = () => {
  const [is, sis] = useState(false);
  const [mn, smn] = useState(false);
  useEffect(() => {
    const hs = () => {
      sis(window.scrollY > 10);
    };
    window.addEventListener("scroll", hs);
    return () => {
      window.removeEventListener("scroll", hs);
    };
  }, []);
  return (
    <div
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        is ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relatie z-10">
            <span className="text-glow text-foreground">BusybrainTech</span>{" "}
            Portfolio
          </span>
        </a>
        <div className="hidden md:flex space-x-8">
          {nav.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <button
          className="md:hidden p-2 text-foreground z-50"
          onClick={() => smn((pv) => !pv)}
          aria-label={mn ? "Close Menu" : "Open Menu"}
        >
          {mn ? <X size={24}></X> : <Menu size={24}></Menu>}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-100 flex flex-col items-center justify-center h-screen",
            "transition-all duration-300 md:hidden",
            mn
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {nav.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => smn(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
