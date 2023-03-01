/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../../assets/logo.svg";
import MobileNav from "./MobileNav";

function Nav() {
  return (
    <div className="flex items-center justify-between">
      <a className="isolate z-10" href="#">
        <img src={logo} alt="Loopstudios logo" />
      </a>
      <nav className="hidden border border-blue-500 md:block">
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
      <MobileNav />
    </div>
  );
}

export default Nav;
