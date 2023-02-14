function App() {
  return (
    <>
      <main className="grid gap-40 bg-[url('/assets/images/bg-header-mobile.png')] bg-contain bg-no-repeat md:bg-[url('/assets/images/bg-header-desktop.png')]">
        <section className="mt-32">
          <img
            className="h-[125px] w-[125px]"
            src="/assets/images/logo.svg"
            alt="Clipboard logo"
          />
          <h1 className="mt-16 text-32 font-semibold text-darkGrayishBlue md:mt-14 md:text-46">
            A history of everything you copy
          </h1>
          <p className="tracking-wide text-grayishBlue md:text-xl">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div>
            <button className="w-full rounded-full bg-strongCyan py-3 px-9 text-lg font-semibold text-white shadow-btnPrimary transition-colors hover:bg-strongCyan/75 md:w-fit">
              Download for iOS
            </button>
            <button className="w-full rounded-full bg-lightBlue py-3 px-9 text-lg font-semibold text-white shadow-btnSecondary transition-colors hover:bg-lightBlue/75 md:w-fit">
              Download for Mac
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-28 font-semibold text-darkGrayishBlue md:text-4xl">
            Keep track of your snippets
          </h2>
          <p className="tracking-wide text-grayishBlue md:text-lg">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
          <div>
            <img src="/assets/images/image-computer.png" alt="iMac" />
            <div>
              <div>
                <h3 className="text-2xl">Quick Search</h3>
                <p>
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              <div>
                <h3 className="text-2xl">iCloud Sync</h3>
                <p>
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              <div>
                <h3 className="text-2xl">Complete History</h3>
                <p>
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-28 font-semibold text-darkGrayishBlue md:text-4xl">
            Access Clipboard Anywhere
          </h2>
          <p className="tracking-wide text-grayishBlue md:text-lg">
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img src="/assets/images/image-devices.png" alt="iPhone and iPad" />
        </section>

        <section>
          <h2 className="text-28 font-semibold text-darkGrayishBlue md:text-4xl">
            Supercharge your workflow
          </h2>
          <p className="tracking-wide text-grayishBlue md:text-lg">
            We've got the tools to boost your productivity.
          </p>
          <div>
            <div>
              <img src="/assets/images/icon-blacklist.svg" alt="List icon" />
              <h3 className="text-2xl font-semibold text-darkGrayishBlue">
                Create blacklists
              </h3>
              <p className="tracking-wide text-grayishBlue">
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
            <div>
              <img
                src="/assets/images/icon-text.svg"
                alt="Text with cursor icon"
              />
              <h3 className="text-2xl font-semibold text-darkGrayishBlue">
                Plain text snippets
              </h3>
              <p className="tracking-wide text-grayishBlue">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            <div>
              <img src="/assets/images/icon-preview.svg" alt="Eye icon" />
              <h3 className="text-2xl font-semibold text-darkGrayishBlue">
                Sneak preview
              </h3>
              <p className="tracking-wide text-grayishBlue">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </section>

        <div>
          <img src="/assets/images/logo-google.png" alt="Google logo" />
          <img src="/assets/images/logo-ibm.png" alt="IBM logo" />
          <img src="/assets/images/logo-microsoft.png" alt="Microsoft logo" />
          <img src="/assets/images/logo-hp.png" alt="HP logo" />
          <img
            src="/assets/images/logo-vector-graphics.png"
            alt="Vector Graphics logo"
          />
        </div>

        <section>
          <h2 className="text-28 font-semibold text-darkGrayishBlue md:text-4xl">
            Clipboard for iOS and Mac OS
          </h2>
          <p className="tracking-wide text-grayishBlue md:text-lg">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
          <div>
            <button className="w-full rounded-full bg-strongCyan py-3 px-9 text-lg font-semibold text-white shadow-btnPrimary transition-colors hover:bg-strongCyan/75 md:w-fit">
              Download for iOS
            </button>
            <button className="w-full rounded-full bg-lightBlue py-3 px-9 text-lg font-semibold text-white shadow-btnSecondary transition-colors hover:bg-lightBlue/75 md:w-fit">
              Download for Mac
            </button>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <img
            className="h-[55px] w-[55px]"
            src="/assets/images/logo.svg"
            alt="Clipboard logo"
          />
          <ul>
            <li className="text-lg tracking-wide text-darkGrayishBlue">
              <a href="#">FAQs</a>
            </li>
            <li className="text-lg tracking-wide text-darkGrayishBlue">
              <a href="#">Contact Us</a>
            </li>
            <li className="text-lg tracking-wide text-darkGrayishBlue">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="text-lg tracking-wide text-darkGrayishBlue">
              <a href="#">Press Kit</a>
            </li>
            <li className="text-lg tracking-wide text-darkGrayishBlue">
              <a href="#">Install Guide</a>
            </li>
          </ul>
        </div>
        <div>
          <img src="/assets/images/icon-facebook.svg" alt="Facebook icon" />
          <img src="/assets/images/icon-twitter.svg" alt="Twitter icon" />
          <img src="/assets/images/icon-instagram.svg" alt="Instagram icon" />
        </div>
      </footer>
    </>
  );
}

export default App;
