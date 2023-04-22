/* eslint-disable jsx-a11y/anchor-is-valid */
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Header from "./components/Header";
import FeaturedStory from "./components/FeaturedStory";
import RecentStories from "./components/RecentStories";
import TopStories from "./components/TopStories";

function App() {
  return (
    <MaxWidthWrapper className="flow-root">
      <div className="mb-20 mt-7 md:mb-[129px] md:mt-[89px]">
        <Header />
        <main className="flex flex-col gap-16">
          <MainStoryGrid>
            <FeaturedStory />
            <RecentStories />
          </MainStoryGrid>
          <TopStories />
        </main>
      </div>
    </MaxWidthWrapper>
  );

  function MainStoryGrid({ children }: { children: React.ReactNode }) {
    return (
      <div className="mt-8 grid gap-16 md:mt-[55.1px] md:grid-cols-3 md:gap-[30px]">
        {children}
      </div>
    );
  }
}

export default App;
