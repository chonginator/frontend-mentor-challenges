/* eslint-disable jsx-a11y/anchor-is-valid */
import HamburgerMenu from "../HamburgerMenu";
import Logo from "../Logo";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <nav className="hidden md:block" aria-label="Main menu">
        <ul className="flex gap-10 text-darkGray">
          <li>
            <a
              href="#"
              className="transition hover:text-orange focus:text-orange"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition hover:text-orange focus:text-orange"
            >
              New
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition hover:text-orange focus:text-orange"
            >
              Popular
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition hover:text-orange focus:text-orange"
            >
              Trending
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition hover:text-orange focus:text-orange"
            >
              Categories
            </a>
          </li>
        </ul>
      </nav>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
