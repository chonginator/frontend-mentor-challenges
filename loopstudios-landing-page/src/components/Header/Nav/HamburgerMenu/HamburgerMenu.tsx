/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../../tailwind.config.js";

import HamburgerButton from "./HamburgerButton";
import useEscapeKey from "../../../../hooks/useEscapeKey";
import useWindowSize from "../../../../hooks/useWindowSize";

const fullConfig = resolveConfig(tailwindConfig);

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEscapeKey(handleDismiss);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (
      windowSize.width &&
      windowSize.width >= parseInt(fullConfig.theme.screens.md)
    ) {
      handleDismiss();
    }
  }, [windowSize]);

  return (
    <nav className="md:hidden" role="navigation" aria-label="Mobile menu">
      <FocusLock disabled={!isMenuOpen}>
        <RemoveScroll enabled={isMenuOpen}>
          {isMenuOpen && <MenuLinks />}
          <HamburgerButton
            isMenuOpen={isMenuOpen}
            toggleIsMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          />
        </RemoveScroll>
      </FocusLock>
    </nav>
  );

  function handleDismiss() {
    setIsMenuOpen(false);
  }
}

function MenuLinks() {
  return (
    <div className="fixed left-0 top-0 h-full w-full bg-black">
      <ul className="absolute inset-0 my-auto flex h-fit w-full flex-col gap-6 px-6">
        <li className="group w-fit cursor-pointer">
          <a
            className="font-heading text-2xl font-light uppercase leading-6 after:mx-auto after:mt-2 after:block after:h-[2px] after:w-full after:bg-white after:opacity-0 after:transition-opacity after:group-hover:opacity-100"
            href="#"
          >
            About
          </a>
        </li>
        <li className="group w-fit cursor-pointer">
          <a
            className="font-heading text-2xl font-light uppercase leading-6 after:mx-auto after:mt-2 after:block after:h-[2px] after:w-full after:bg-white after:opacity-0 after:transition-opacity after:group-hover:opacity-100"
            href="#"
          >
            Careers
          </a>
        </li>
        <li className="group w-fit cursor-pointer">
          <a
            className="font-heading text-2xl font-light uppercase leading-6 after:mx-auto after:mt-2 after:block after:h-[2px] after:w-full after:bg-white after:opacity-0 after:transition-opacity after:group-hover:opacity-100"
            href="#"
          >
            Events
          </a>
        </li>
        <li className="group w-fit cursor-pointer">
          <a
            className="font-heading text-2xl font-light uppercase leading-6 after:mx-auto after:mt-2 after:block after:h-[2px] after:w-full after:bg-white after:opacity-0 after:transition-opacity after:group-hover:opacity-100"
            href="#"
          >
            Products
          </a>
        </li>
        <li className="group w-fit cursor-pointer">
          <a
            className="font-heading text-2xl font-light uppercase leading-6 after:mx-auto after:mt-2 after:block after:h-[2px] after:w-full after:bg-white after:opacity-0 after:transition-opacity after:group-hover:opacity-100"
            href="#"
          >
            Support
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
