import MaxWidthWrapper from "../MaxWidthWrapper";
import Nav from "./Nav";

function Header() {
  return (
    <header className="absolute isolate z-10 mt-16 w-full px-6 font-body text-white">
      <MaxWidthWrapper>
        <Nav />
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
