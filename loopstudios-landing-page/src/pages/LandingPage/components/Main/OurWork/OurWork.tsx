import SectionWrapper from "../SectionWrapper";

function OurWork() {
  return (
    <OurWorkWrapper>
      <h2 className="font-heading text-3xl font-light uppercase lg:text-5xl">
        Our creations
      </h2>
      <button className="order-last mt-8 self-center border border-black py-3.5 px-9 font-body text-sm uppercase tracking-[0.35em] transition-colors hover:bg-black hover:text-white lg:absolute lg:top-0 lg:right-0 lg:mt-0">
        See all
      </button>
      <OurWorkProjects />
    </OurWorkWrapper>
  );
}

function OurWorkWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper className="text-center lg:text-left">
      <div className="relative flex flex-col">{children}</div>
    </SectionWrapper>
  );
}

function OurWorkProjects() {
  return (
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
  );
}

export default OurWork;
