import MaxWidthWrapper from "../../MaxWidthWrapper";

function HeaderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <header className="absolute isolate z-10 mt-16 w-full px-6 font-body text-white">
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </header>
  );
}

export default HeaderWrapper;
