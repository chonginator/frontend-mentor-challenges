function App() {
  return (
    <>
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
              <button
                id="menu"
                className="flex h-5 w-7 justify-center md:hidden"
              >
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

      <main className="isolate grid gap-24">
        <section className="min-h-[650px] bg-black/40 bg-hero-mobile bg-cover bg-no-repeat px-6 bg-blend-darken md:bg-hero-desktop md:bg-center">
          <div className="mx-auto h-full max-w-[1111px]">
            <div className="flex h-full flex-col justify-center">
              <h1 className="border-2 border-white px-6 pt-6 pb-3 font-heading text-[40px] font-light uppercase leading-[38px] text-white sm:px-9 sm:pt-10 sm:pb-6 sm:text-6xl md:max-w-[40rem]">
                Immersive experiences that deliver
              </h1>
            </div>
          </div>
        </section>

        <section className="relative px-6 text-center">
          <div className="mx-auto max-w-[1111px]">
            <div className="flex flex-col lg:flex-row lg:items-end">
              <img
                src="./assets/images/desktop/image-interactive.jpg"
                alt="Man using a VR headset"
              />
              <div className="mx-auto flex max-w-[17rem] flex-col gap-4 bg-white text-center sm:max-w-none lg:absolute lg:right-[164px] lg:-bottom-[1px] lg:top-[37%] lg:max-w-[541px] lg:pt-[6.67%] lg:pl-[6.67%] lg:text-left">
                <h2 className="mt-12 font-heading text-3xl font-light uppercase lg:mt-0 lg:text-5xl">
                  The leader in interactive VR
                </h2>
                <p className="font-body text-base opacity-50">
                  Founded in 2011, Loopstudios has been producing
                  world-className virtual reality projects for some of the best
                  companies around the globe. Our award-winning creations have
                  transformed businesses through digital experiences that bind
                  to their brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 text-center lg:text-left">
          <div className="mx-auto max-w-[1111px]">
            <div className="relative flex flex-col">
              <h2 className="font-heading text-3xl font-light uppercase lg:text-5xl">
                Our creations
              </h2>
              <button className="order-last mt-8 self-center border border-black py-3.5 px-9 font-body text-sm uppercase tracking-[0.35em] transition-colors hover:bg-black hover:text-white lg:absolute lg:top-0 lg:right-0 lg:mt-0">
                See all
              </button>
              <div className="mt-12 grid gap-6 md:grid-cols-4 lg:mt-20 lg:gap-[30px]">
                <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-deep-earth-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-deep-earth-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                  <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                    Deep <span className="block">earth</span>
                  </h3>
                </div>
                <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-night-arcade-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-night-arcade-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                  <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                    Night <span className="block">arcade</span>
                  </h3>
                </div>
                <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-soccer-team-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-soccer-team-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                  <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                    Soccer <span className="block">team VR</span>
                  </h3>
                </div>
                <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-grid-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-grid-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                  <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                    The <span className="block">grid</span>
                  </h3>
                </div>
                <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-from-above-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-from-above-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                  <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                    From up <span className="block">above VR</span>
                  </h3>
                </div>
                <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-pocket-borealis-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-pocket-borealis-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                  <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                    Pocket <span className="block">borealis</span>
                  </h3>
                </div>
                <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-curiosity-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-curiosity-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                  <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                    The <span className="block">curiosity</span>
                  </h3>
                </div>
                <div className="group relative flex min-h-[120px] cursor-pointer items-end bg-project-fisheye-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-fisheye-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop">
                  <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
                    Make it <span className="block">fisheye</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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

export default App;
