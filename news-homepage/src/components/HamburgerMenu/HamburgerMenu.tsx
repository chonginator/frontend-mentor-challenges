import { useState } from "react";
import HamburgerButton from "./HamburgerButton";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden" aria-label="Mobile menu">
      <HamburgerButton isOpen={isOpen} onClick={handleToggle} />
      {isOpen && (
        <ul className="absolute">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      )}
    </nav>
  );

  function handleToggle() {
    setIsOpen(!isOpen);
  }
}

export default HamburgerMenu;
