import MaxWidthWrapper from "../../../../../components/MaxWidthWrapper";

function SectionWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div className={`px-6 ${className}`}>
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </div>
  );
}

export default SectionWrapper;
