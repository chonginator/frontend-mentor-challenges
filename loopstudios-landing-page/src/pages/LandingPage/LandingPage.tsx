import Header from "../../components/Header";
import Main from "./components/Main";

function LandingPage() {
  return (
    <>
      <Header />
      <Main />
      <footer className="mt-24 bg-black px-6 py-14 text-center text-white md:py-11">
        <div className="mx-auto max-w-[1111px]">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col items-center gap-6 md:items-start">
              <a href="#">
                <img src="./assets/images/logo.svg" alt="Loopstudios logo" />
              </a>
              <ul className="flex flex-col gap-4 font-body text-base md:flex-row md:gap-8">
                <li className="group">
                  <a
                    className="relative after:absolute after:left-1/4 after:top-full after:mt-2 after:h-[2px] after:w-1/2 after:bg-white after:opacity-0 after:transition-opacity group-hover:after:opacity-100"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    className="relative after:absolute after:left-1/4 after:top-full after:mt-2 after:h-[2px] after:w-1/2 after:bg-white after:opacity-0 after:transition-opacity group-hover:after:opacity-100"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                <li className="group">
                  <a
                    className="relative after:absolute after:left-1/4 after:top-full after:mt-2 after:h-[2px] after:w-1/2 after:bg-white after:opacity-0 after:transition-opacity group-hover:after:opacity-100"
                    href="#"
                  >
                    Events
                  </a>
                </li>
                <li className="group">
                  <a
                    className="relative after:absolute after:left-1/4 after:top-full after:mt-2 after:h-[2px] after:w-1/2 after:bg-white after:opacity-0 after:transition-opacity group-hover:after:opacity-100"
                    href="#"
                  >
                    Products
                  </a>
                </li>
                <li className="group">
                  <a
                    className="relative after:absolute after:left-1/4 after:top-full after:mt-2 after:h-[2px] after:w-1/2 after:bg-white after:opacity-0 after:transition-opacity group-hover:after:opacity-100"
                    href="#"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 flex flex-col gap-3 md:mt-0 md:items-end md:justify-between">
              <ul className="flex flex-row justify-center gap-4 md:mt-0">
                <li className="group flex">
                  <a
                    className="after:mt-2 after:block after:h-[2px] after:w-full after:bg-white after:opacity-0 after:transition-opacity group-hover:after:opacity-100"
                    href="#"
                  >
                    <img
                      src="./assets/images/icon-facebook.svg"
                      alt="Facebook logo"
                    />
                  </a>
                </li>
                <li className="group flex">
                  <a
                    className="after:mt-[12.5px] after:block after:h-[2px] after:w-full after:bg-white after:opacity-0 after:transition-opacity group-hover:after:opacity-100"
                    href="#"
                  >
                    <img
                      src="./assets/images/icon-twitter.svg"
                      alt="Twitter logo"
                    />
                  </a>
                </li>
                <li className="group flex">
                  <a
                    className="after:mt-2 after:block after:h-[2px] after:w-full after:bg-white after:opacity-0 after:transition-opacity group-hover:after:opacity-100"
                    href="#"
                  >
                    <img
                      src="./assets/images/icon-pinterest.svg"
                      alt="Pinterest logo"
                    />
                  </a>
                </li>
                <li className="group flex">
                  <a
                    className="after:mt-2 after:block after:h-[2px] after:w-full after:bg-white after:opacity-0 after:transition-opacity group-hover:after:opacity-100"
                    href="#"
                  >
                    <img
                      src="./assets/images/icon-instagram.svg"
                      alt="Instagram logo"
                    />
                  </a>
                </li>
              </ul>
              <small className="font-body text-base text-white/50">
                © 2021 Loopstudios. All rights reserved.
              </small>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
