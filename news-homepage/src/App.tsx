/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "./components/Logo";

function App() {
  return (
    <>
      <header>
        <Logo />
        <nav aria-label="Main menu">
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
        <nav aria-label="Mobile menu">
          <button aria-expanded>
            <div aria-hidden>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
      </header>
      <main>
        <div>
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
        </div>
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
      </main>
    </>
  );
}

export default App;
