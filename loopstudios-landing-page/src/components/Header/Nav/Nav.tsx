/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../../Logo";
import HamburgerMenu from "./HamburgerMenu";

function Nav() {
  return (
    <Wrapper>
      <Logo />
      <NavLinks />
      <HamburgerMenu />
    </Wrapper>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-between">{children}</div>;
}

function NavLinks() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8">
        <li className="group flex cursor-pointer items-center">
          <a
            className="relative border-white after:absolute after:top-[calc(100%_+_4px)] after:left-1/4 after:mx-auto after:h-[2px] after:w-1/2 after:bg-white after:opacity-0 after:transition-opacity after:group-hover:opacity-100"
            href="#"
          >
            About
          </a>
        </li>
        <li className="group cursor-pointer">
          <a
            className="relative border-white after:absolute after:top-[calc(100%_+_4px)] after:left-1/4 after:mx-auto after:h-[2px] after:w-1/2 after:bg-white after:opacity-0 after:transition-opacity after:group-hover:opacity-100"
            href="#"
          >
            Careers
          </a>
        </li>
        <li className="group cursor-pointer">
          <a
            className="relative border-white after:absolute after:top-[calc(100%_+_4px)] after:left-1/4 after:mx-auto after:h-[2px] after:w-1/2 after:bg-white after:opacity-0 after:transition-opacity after:group-hover:opacity-100"
            href="#"
          >
            Events
          </a>
        </li>
        <li className="group cursor-pointer">
          <a
            className="relative border-white after:absolute after:top-[calc(100%_+_4px)] after:left-1/4 after:mx-auto after:h-[2px] after:w-1/2 after:bg-white after:opacity-0 after:transition-opacity after:group-hover:opacity-100"
            href="#"
          >
            Products
          </a>
        </li>
        <li className="group cursor-pointer">
          <a
            className="relative border-white after:absolute after:top-[calc(100%_+_4px)] after:left-1/4 after:mx-auto after:h-[2px] after:w-1/2 after:bg-white after:opacity-0 after:transition-opacity after:group-hover:opacity-100"
            href="#"
          >
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
