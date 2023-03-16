import Hero from "./Hero";
import About from "./About";
import OurWork from "./OurWork";

function Main() {
  return (
    <Wrapper>
      <Hero />
      <About />
      <OurWork />
    </Wrapper>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return <main className="isolate grid gap-24 md:gap-[184px]">{children}</main>;
}

export default Main;
