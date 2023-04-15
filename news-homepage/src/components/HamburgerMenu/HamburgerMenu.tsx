/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import HamburgerButton from "./HamburgerButton";
import useEscapeKey from "../../hooks/useEscapeKey";
import useWindowSize from "../../hooks/useWindowSize";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence>{isOpen && <Drawer />}</AnimatePresence>
      </FocusLock>
    </nav>
  );

  function Drawer() {
    return (
      <>
        <motion.div
          className="absolute inset-0 bg-black/50"
          onClick={closeMenu}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        ></motion.div>
        <motion.div
          className="absolute right-0 top-0 h-full w-2/3"
          initial={{ translateX: "100%" }}
          animate={{ translateX: "0" }}
          exit={{ translateX: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <RemoveScroll className="h-full">
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
          </RemoveScroll>
        </motion.div>
      </>
    );
  }
}

export default HamburgerMenu;
