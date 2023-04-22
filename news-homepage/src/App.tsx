/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from "./components/Header";
import FeaturedStory from "./components/FeaturedStory";
import RecentStories from "./components/RecentStories";
import TopStories from "./components/TopStories";

function App() {
  return (
    <div className="mx-auto grid max-w-[1110px] place-content-center px-4">
      <div className="mt-7 md:mt-[89px]">
        <Header />
        <main>
          <FeaturedStoryGrid>
            <FeaturedStory />
            <RecentStories />
          </FeaturedStoryGrid>
          <TopStories />
        </main>
      </div>
    </div>
  );

  function FeaturedStoryGrid({ children }: { children: React.ReactNode }) {
    return <div className=" mt-8 md:mt-[55.1px]">{children}</div>;
  }
}

export default App;
