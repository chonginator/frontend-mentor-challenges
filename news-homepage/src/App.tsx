/* eslint-disable jsx-a11y/anchor-is-valid */
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Header from "./components/Header";
import FeaturedStory from "./components/FeaturedStory";
import RecentStories from "./components/RecentStories";
import TopStories from "./components/TopStories";

function App() {
  return (
    <MaxWidthWrapper className="mt-7 md:mt-[89px]">
      <Header />
      <main>
        <FeaturedStoryGrid>
          <FeaturedStory />
          <RecentStories />
        </FeaturedStoryGrid>
        <TopStories />
      </main>
    </MaxWidthWrapper>
  );

  function FeaturedStoryGrid({ children }: { children: React.ReactNode }) {
    return <div className=" mt-8 md:mt-[55.1px]">{children}</div>;
  }
}

export default App;
