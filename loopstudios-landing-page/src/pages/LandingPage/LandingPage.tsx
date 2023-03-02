import Header from "../../components/Header";
import Main from "./components/Main";
import Footer from "../../components/Footer";

function LandingPage() {
  return (
    <div className="grid gap-24 bg-white md:gap-[184px]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default LandingPage;
