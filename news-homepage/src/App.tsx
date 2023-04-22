/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from "./components/Header";

function App() {
  return (
    <div className="mx-auto grid max-w-[1110px] place-content-center px-4">
      <div className="mt-7 md:mt-[89px]">
        <Header />
        <main>
          <FeaturedStorySection />
          <TopStories />
        </main>
      </div>
    </div>
  );

  function FeaturedStorySection() {
    return (
      <div className=" mt-8 md:mt-[55.1px]">
        <FeaturedStory />
        <RecentStories />
      </div>
    );

    function FeaturedStory() {
      return (
        <div>
          <img src="/images/image-web-3-desktop.jpg" alt="Web 3" />
          <div>
            <h1>The Bright Future of Web 3.0?</h1>
            <div>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      );
    }

    function RecentStories() {
      return (
        <div>
          <h2>New</h2>
          <div>
            <article>
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </article>
            <article>
              <h3>The Downsides of AI Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </article>
            <article>
              <h3>Is VC Funding Drying Up?</h3>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </article>
          </div>
        </div>
      );
    }
  }

  function TopStories() {
    return (
      <div>
        <article>
          <img src="/images/image-retro-pcs.jpg" alt="Retro PC" />
          <div>
            <span>01</span>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </article>
        <article>
          <img src="/images/image-top-laptops.jpg" alt="Computer Keyboard" />
          <div>
            <span>02</span>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </article>
        <article>
          <img src="/images/image-gaming-growth.jpg" alt="PS5 controller" />
          <div>
            <span>03</span>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </article>
      </div>
    );
  }
}

export default App;
