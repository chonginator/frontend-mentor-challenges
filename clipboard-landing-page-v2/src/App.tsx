function App() {
  return (
    <>
      <main className="grid gap-40 bg-[url('/assets/images/bg-header-mobile.png')] bg-contain bg-no-repeat px-8 pb-[170px] md:bg-[url('/assets/images/bg-header-desktop.png')] md:pb-[150px]">
        <section className="mt-32 flex flex-col items-center text-center">
          <img
            className="h-[125px] w-[125px]"
            src="/assets/images/logo.svg"
            alt="Clipboard logo"
          />
          <h1 className="mt-16 text-32 font-semibold text-darkGrayishBlue md:mt-14 md:text-46">
            A history of everything you copy
          </h1>
          <p className="mt-4 tracking-wide text-grayishBlue md:text-xl">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="mt-12 flex w-full flex-col justify-center gap-6 md:flex-row">
            <button className="rounded-full bg-strongCyan py-3 px-9 text-lg font-semibold text-white shadow-btnPrimary transition-colors hover:bg-strongCyan/75 md:w-fit">
              Download for iOS
            </button>
            <button className="rounded-full bg-lightBlue py-3 px-9 text-lg font-semibold text-white shadow-btnSecondary transition-colors hover:bg-lightBlue/75 md:w-fit">
              Download for Mac
            </button>
          </div>
        </section>

        <section className="flex flex-col items-center text-center">
          <div className="max-w-[730px]">
            <h2 className="text-28 font-semibold text-darkGrayishBlue md:text-4xl">
              Keep track of your snippets
            </h2>
            <p className="mt-5 tracking-wide text-grayishBlue md:text-lg">
              Clipboard instantly stores any item you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and iOS apps will help you organize everything.
            </p>
          </div>
          <div className="mt-16 grid-cols-[62%_30%] gap-[8%] md:relative md:-left-[12%] md:mt-20 md:grid md:text-left">
            <img
              className="my-auto md:justify-self-end"
              src="/assets/images/image-computer.png"
              alt="iMac"
            />
            <div className="col-start-2 flex flex-col gap-12">
              <div className="mt-14">
                <h3 className="text-2xl font-semibold text-darkGrayishBlue">
                  Quick Search
                </h3>
                <p className="mt-3 tracking-wide text-grayishBlue">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-darkGrayishBlue">
                  iCloud Sync
                </h3>
                <p className="mt-3 tracking-wide text-grayishBlue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-darkGrayishBlue">
                  Complete History
                </h3>
                <p className="mt-3 tracking-wide text-grayishBlue">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center text-center">
          <div className="max-w-[730px]">
            <h2 className="text-28 font-semibold text-darkGrayishBlue md:text-4xl">
              Access Clipboard Anywhere
            </h2>
            <p className="mt-5 tracking-wide text-grayishBlue md:text-lg">
              Whether you're on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </p>
          </div>
          <img
            className="mt-16"
            src="/assets/images/image-devices.png"
            alt="iPhone and iPad"
          />
        </section>

        <section className="flex flex-col items-center text-center">
          <div className="max-w-[730px]">
            <h2 className="text-28 font-semibold text-darkGrayishBlue md:text-4xl">
              Supercharge your workflow
            </h2>
            <p className="mt-5 tracking-wide text-grayishBlue md:text-lg">
              We've got the tools to boost your productivity.
            </p>
          </div>
          <div className="mt-16 grid max-w-[1110px] items-stretch gap-14 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col items-center">
              <img
                className=" h-8"
                src="/assets/images/icon-blacklist.svg"
                alt="List icon"
              />
              <h3 className="mt-11 text-2xl font-semibold text-darkGrayishBlue">
                Create blacklists
              </h3>
              <p className="mt-4 leading-[30px] tracking-wide text-grayishBlue">
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className=" h-8"
                src="/assets/images/icon-text.svg"
                alt="Text with cursor icon"
              />
              <h3 className="mt-11 text-2xl font-semibold text-darkGrayishBlue">
                Plain text snippets
              </h3>
              <p className="mt-4 leading-[30px] tracking-wide text-grayishBlue">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className=" h-8"
                src="/assets/images/icon-preview.svg"
                alt="Eye icon"
              />
              <h3 className="mt-11 text-2xl font-semibold text-darkGrayishBlue">
                Sneak preview
              </h3>
              <p className="mt-4 leading-[30px] tracking-wide text-grayishBlue">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-col flex-wrap items-center justify-center gap-16 md:flex-row">
          <img src="/assets/images/logo-google.png" alt="Google logo" />
          <img src="/assets/images/logo-ibm.png" alt="IBM logo" />
          <img src="/assets/images/logo-microsoft.png" alt="Microsoft logo" />
          <img src="/assets/images/logo-hp.png" alt="HP logo" />
          <img
            src="/assets/images/logo-vector-graphics.png"
            alt="Vector Graphics logo"
          />
        </div>

        <section className="flex flex-col items-center text-center">
          <div className="max-w-[730px]">
            <h2 className="text-28 font-semibold text-darkGrayishBlue md:text-4xl">
              Clipboard for iOS and Mac OS
            </h2>
            <p className="mt-5 tracking-wide text-grayishBlue md:text-lg">
              Available for free on the App Store. Download for Mac or iOS, sync
              with iCloud and you’re ready to start adding to your clipboard.
            </p>
          </div>
          <div className="mt-12 flex w-full flex-col justify-center gap-6 md:flex-row">
            <button className="w-full rounded-full bg-strongCyan py-3 px-9 text-lg font-semibold text-white shadow-btnPrimary transition-colors hover:bg-strongCyan/75 md:w-fit">
              Download for iOS
            </button>
            <button className="w-full rounded-full bg-lightBlue py-3 px-9 text-lg font-semibold text-white shadow-btnSecondary transition-colors hover:bg-lightBlue/75 md:w-fit">
              Download for Mac
            </button>
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center bg-grayishBlue/20 px-8 py-12 md:flex-row">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row">
          <img
            className="h-[55px] w-[55px]"
            src="/assets/images/logo.svg"
            alt="Clipboard logo"
          />
          <ul className="grid gap-5 md:grid-flow-col md:grid-cols-2">
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
