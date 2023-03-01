/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../../assets/logo.svg";
import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import pinterestIcon from "../../assets/icon-pinterest.svg";
import instagramIcon from "../../assets/icon-instagram.svg";
import MaxWidthWrapper from "../MaxWidthWrapper";

function Footer() {
  return (
    <footer className="mt-24 bg-black px-6 py-14 text-center text-white md:py-11">
      <MaxWidthWrapper>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-col items-center gap-6 md:items-start">
            <a href="#">
              <img src={logo} alt="Loopstudios logo" />
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
                  <img src={facebookIcon} alt="Facebook logo" />
                </a>
              </li>
              <li className="group flex">
                <a
                  className="after:mt-[12.5px] after:block after:h-[2px] after:w-full after:bg-white after:opacity-0 after:transition-opacity group-hover:after:opacity-100"
                  href="#"
                >
                  <img src={twitterIcon} alt="Twitter logo" />
                </a>
              </li>
              <li className="group flex">
                <a
                  className="after:mt-2 after:block after:h-[2px] after:w-full after:bg-white after:opacity-0 after:transition-opacity group-hover:after:opacity-100"
                  href="#"
                >
                  <img src={pinterestIcon} alt="Pinterest logo" />
                </a>
              </li>
              <li className="group flex">
                <a
                  className="after:mt-2 after:block after:h-[2px] after:w-full after:bg-white after:opacity-0 after:transition-opacity group-hover:after:opacity-100"
                  href="#"
                >
                  <img src={instagramIcon} alt="Instagram logo" />
                </a>
              </li>
            </ul>
            <small className="font-body text-base text-white/50">
              © 2021 Loopstudios. All rights reserved.
            </small>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}

export default Footer;
