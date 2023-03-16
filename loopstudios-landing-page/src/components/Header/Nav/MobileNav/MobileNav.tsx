/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import useLockBodyScroll from "../../../../hooks/useLockBodyScroll";
import HamburgerMenu from "./HamburgerMenu";

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useLockBodyScroll(isMenuOpen);

  return (
    <>
      {isMenuOpen && <MobileNavLinks />}
      <HamburgerMenu
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
    </>
  );
}

function MobileNavLinks() {
  return (
    <nav className="fixed top-0 left-0 h-full w-full bg-black">
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
    </nav>
  );
}

export default MobileNav;
