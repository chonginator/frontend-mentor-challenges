import SectionWrapper from "../SectionWrapper";
import Project from "./Project/Project";

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
      <Project name="deep-earth" title="Deep\nEarth" />
      <Project name="night-arcade" title="Night\nArcade" />
      <Project name="soccer-team" title="Soccer\nTeam VR" />
      <Project name="grid" title="The\nGrid" />
      <Project name="from-above" title="From Up\nAbove VR" />
      <Project name="pocket-borealis" title="Pocket\nBorealis" />
      <Project name="curiosity" title="The\nCuriosity" />
      <Project name="fisheye" title="Make It\nFisheye" />
    </div>
  );
}

export default OurWork;
