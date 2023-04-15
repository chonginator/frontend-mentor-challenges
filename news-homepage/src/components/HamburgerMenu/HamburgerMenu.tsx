/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import HamburgerButton from "./HamburgerButton";
import useEscapeKey from "../../hooks/useEscapeKey";
import useWindowSize from "../../hooks/useWindowSize";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

const fullConfig = resolveConfig(tailwindConfig);

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowSize();
  useEscapeKey(handleDismiss);

  useEffect(() => {
    if (
      windowSize.width &&
      windowSize.width >= parseInt(fullConfig.theme.screens.md)
    ) {
      handleDismiss();
    }
  }, [windowSize]);

  return (
    <nav className="md:hidden" aria-label="Mobile menu">
      <FocusLock>
        <HamburgerButton
          className="relative isolate z-10"
          isOpen={isOpen}
          onClick={handleToggle}
        />
        {isOpen && (
          <RemoveScroll>
            <div
              className="absolute inset-0 bg-black/50"
              onClick={handleDismiss}
            ></div>
            <ul className="absolute bottom-0 right-0 top-0 h-full w-2/3 space-y-6 bg-white px-6 pt-36 text-xs text-black">
              <li>
                <a
                  className="transition-colors hover:text-orange focus:text-orange"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-orange focus:text-orange"
                  href="#"
                >
                  New
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-orange focus:text-orange"
                  href="#"
                >
                  Popular
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-orange focus:text-orange"
                  href="#"
                >
                  Trending
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-orange focus:text-orange"
                  href="#"
                >
                  Categories
                </a>
              </li>
            </ul>
          </RemoveScroll>
        )}
      </FocusLock>
    </nav>
  );

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleDismiss() {
    setIsOpen(false);
  }
}

export default HamburgerMenu;