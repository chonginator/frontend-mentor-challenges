import SectionWrapper from "../SectionWrapper";

function Hero() {
  return (
    <Wrapper>
      <h1 className="border-2 border-white px-6 pt-6 pb-3 font-heading text-[40px] font-light uppercase leading-[38px] text-white sm:px-9 sm:pt-10 sm:pb-6 sm:text-6xl md:mt-20 md:max-w-[40rem] md:text-7xl">
        Immersive experiences that deliver
      </h1>
    </Wrapper>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <SectionWrapper className="min-h-[650px] bg-black/40 bg-hero-mobile bg-cover bg-no-repeat bg-blend-darken md:bg-hero-desktop md:bg-center">
      <div className="flex h-full flex-col justify-center">{children}</div>;
    </SectionWrapper>
  );
}

export default Hero;
