import interactiveVRImage from "../../../../../assets/image-interactive.jpg";
import SectionWrapper from "../SectionWrapper";

function About() {
  return (
    <Wrapper>
      <img src={interactiveVRImage} alt="Man using a VR headset" />
      <div className="mx-auto flex max-w-[17rem] flex-col gap-4 bg-white text-center sm:max-w-none lg:absolute lg:right-[164px] lg:-bottom-[1px] lg:top-[37%] lg:max-w-[34.375rem] lg:pt-[6.67%] lg:pl-[6.67%] lg:text-left">
        <h2 className="mt-12 font-heading text-3xl font-light uppercase lg:mt-0 lg:text-5xl">
          The leader in interactive VR
        </h2>
        <p className="font-body text-base opacity-50">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </Wrapper>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper className="relative text-center md:-mt-6">
      <div className="flex flex-col lg:flex-row lg:items-end">{children}</div>
    </SectionWrapper>
  );
}

export default About;
