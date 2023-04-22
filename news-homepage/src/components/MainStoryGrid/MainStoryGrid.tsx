function MainStoryGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 grid gap-16 md:mt-[55.1px] md:grid-cols-3 md:gap-[30px]">
      {children}
    </div>
  );
}

export default MainStoryGrid;
