import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import { NAV_LINKS } from "../data/content.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-margin-lg h-20 bg-background/60 backdrop-blur-md border-b border-outline-variant transition-shadow ease-in-out hidden md:flex ${
          scrolled ? "shadow-lg shadow-black/40" : ""
        }`}
      >
        <div className="font-display-xl text-headline-md text-on-surface tracking-widest uppercase">
          BUSHIDO KARATE CLUB
        </div>
        <div className="flex items-center gap-gutter">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="font-label-sm text-label-sm uppercase text-on-surface hover:text-primary-fixed duration-300 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go("inscription")}
            className="bg-primary-container text-white px-6 py-3 font-label-sm text-label-sm uppercase hover:bg-inverse-primary transition-colors ml-4"
          >
            S'INSCRIRE
          </button>
        </div>
      </nav>

      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-sm h-16 bg-background/90 border-b border-outline-variant md:hidden">
        <div className="font-display-xl text-[24px] text-on-surface tracking-widest uppercase">
          BUSHIDO
        </div>
        <button className="text-on-surface p-2" onClick={() => setOpen(true)}>
          <Icon name="menu" />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[70] md:hidden ${open ? "" : "hidden"}`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <nav
          className={`relative h-full w-80 max-w-[80%] bg-surface border-r border-outline-variant flex flex-col p-6 gap-unit transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <span className="font-headline-lg text-headline-lg text-primary">
              BUSHIDO
            </span>
            <button
              className="text-on-surface-variant hover:text-primary"
              onClick={() => setOpen(false)}
            >
              <Icon name="close" className="text-3xl" />
            </button>
          </div>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="flex items-center gap-4 p-4 text-left text-on-surface-variant hover:bg-surface-container-low font-label-sm uppercase hover:translate-x-2 transition-transform ease-out duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go("inscription")}
            className="flex items-center gap-4 p-4 text-left bg-primary-container text-white font-label-sm uppercase hover:translate-x-2 transition-transform ease-out duration-200 mt-4"
          >
            S'INSCRIRE
          </button>
        </nav>
      </div>

    </>
  );
}
