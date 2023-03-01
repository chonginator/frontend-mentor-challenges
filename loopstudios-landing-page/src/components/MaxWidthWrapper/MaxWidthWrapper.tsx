function MaxWidthWrapper({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto h-full max-w-[1111px]">{children}</div>;
}

export default MaxWidthWrapper;
