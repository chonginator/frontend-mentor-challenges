import Header from "../../components/Header";
import Main from "./components/Main";
import Footer from "../../components/Footer";

function LandingPage() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-24 bg-white md:gap-[184px]">{children}</div>;
}

export default LandingPage;
