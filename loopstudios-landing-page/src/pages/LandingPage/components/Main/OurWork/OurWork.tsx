import SectionWrapper from "../SectionWrapper";

function OurWork() {
  return (
    <Wrapper>
      <h2 className="font-heading text-3xl font-light uppercase lg:text-5xl">
        Our creations
      </h2>
      <button className="order-last mt-8 self-center border border-black py-3.5 px-9 font-body text-sm uppercase tracking-[0.35em] transition-colors hover:bg-black hover:text-white lg:absolute lg:top-0 lg:right-0 lg:mt-0">
        See all
      </button>
      <Projects />
    </Wrapper>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper className="text-center lg:text-left">
      <div className="relative flex flex-col">{children}</div>
    </SectionWrapper>
  );
}

function Projects() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-4 lg:mt-20 lg:gap-[30px]">
      <Project imageName="deep-earth" title="Deep\nEarth" />
      <Project imageName="night-arcade" title="Night\nArcade" />
      <Project imageName="soccer-team" title="Soccer\nTeam VR" />
      <Project imageName="grid" title="The\nGrid" />
      <Project imageName="from-above" title="From Up\nAbove VR" />
      <Project imageName="pocket-borealis" title="Pocket\nBorealis" />
      <Project imageName="curiosity" title="The\nCuriosity" />
      <Project imageName="fisheye" title="Make It\nFisheye" />
    </div>
  );
}

function Project({ imageName, title }: { imageName: string; title: string }) {
  const titleWithLineBreaks = title.split("\\n").map((line, index) => (
    <span className="block" key={index}>
      {line}
    </span>
  ));

  return (
    <div
      className={`group relative flex min-h-[120px] cursor-pointer items-end bg-project-${imageName}-mobile bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] md:bg-project-${imageName}-desktop lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop`}
    >
      <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
        {titleWithLineBreaks}
      </h3>
    </div>
  );
}

export default OurWork;
