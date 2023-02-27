function Header() {
  return (
    <header className="absolute isolate z-10 mt-16 w-full px-6 font-body text-white">
      <div className="mx-auto max-w-[1111px]">
        <nav
          id="mobile-menu"
          className="fixed top-0 left-0 hidden h-full w-full bg-black"
        >
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
        <div className="flex items-center justify-between">
          <div className="isolate flex w-full items-center justify-between">
            <a href="#">
              <img src="./assets/images/logo.svg" alt="Loopstudios logo" />
            </a>
            <button id="menu" className="flex h-5 w-7 justify-center md:hidden">
              <svg
                id="open"
                width="24"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#FFF" fill-rule="evenodd">
                  <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                </g>
              </svg>
              <svg
                id="close"
                className="hidden"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                  fill="#FFF"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
          </div>
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
        </div>
      </div>
    </header>
  );
}

export default Header;
