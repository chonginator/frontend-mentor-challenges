/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import HamburgerButton from "./HamburgerButton";
import Drawer from "../Drawer";
import useEscapeKey from "../../hooks/useEscapeKey";
import useWindowSize from "../../hooks/useWindowSize";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

import FocusLock from "react-focus-lock";
import { AnimatePresence } from "framer-motion";

const fullConfig = resolveConfig(tailwindConfig);

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowSize();
  useEscapeKey(closeMenu);

  useEffect(() => {
    if (
      windowSize.width &&
      windowSize.width >= parseInt(fullConfig.theme.screens.md)
    ) {
      closeMenu();
    }
  }, [windowSize]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="md:hidden" aria-label="Mobile menu">
      <FocusLock disabled={!isOpen}>
        <HamburgerButton
          className="relative isolate z-10"
          isOpen={isOpen}
          onClick={toggleMenu}
        />
        <AnimatePresence>
          {isOpen && (
            <Drawer onClose={closeMenu}>
              <ul className="h-full space-y-6 bg-white px-6 pt-36 text-xs text-black">
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
            </Drawer>
          )}
        </AnimatePresence>
      </FocusLock>
    </nav>
  );
}

export default HamburgerMenu;
