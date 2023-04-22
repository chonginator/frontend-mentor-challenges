/* eslint-disable jsx-a11y/anchor-is-valid */
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Header from "./components/Header";
import MainStoryGrid from "./components/MainStoryGrid";
import FeaturedStory from "./components/FeaturedStory";
import RecentStories from "./components/RecentStories";
import TopStories from "./components/TopStories";

function App() {
  return (
    <Wrapper>
      <Header />
      <main className="flex flex-col gap-16">
        <MainStoryGrid>
          <FeaturedStory />
          <RecentStories />
        </MainStoryGrid>
        <TopStories />
      </main>
    </Wrapper>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <MaxWidthWrapper className="flow-root">
      <div className="mb-20 mt-7 md:mb-[129px] md:mt-[89px]">{children}</div>
    </MaxWidthWrapper>
  );
}

export default App;
