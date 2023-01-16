import styles from "./HomePage.module.css";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <>
      <main className={styles.container}>
        <Hero />
        <section>
          <h2>Keep track of your snippets</h2>
          <p>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
          <div>
            <img src="/images/image-computer.png" alt="iMac computer" />

            <div>
              <h3>Quick Search</h3>
              <p>
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div>
              <h3>iCloud Sync</h3>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </div>
            <div>
              <h3>Complete History</h3>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Access Clipboard Anywhere</h2>
          <p>
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img src="/images/image-devices.png" alt="iPhone and an iPad" />
        </section>
        <section>
          <h2>Supercharge Your Workflow</h2>
          <p>We've got the tools to boost your productivity.</p>
          <div>
            <div>
              <Icon name="blacklist" />
              <h3>Create blacklists</h3>
              <p>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
            <div>
              <Icon name="text" />
              <h3>Plain text snippets</h3>
              <p>
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            <div>
              <Icon name="preview" />
              <h3>Sneak preview</h3>
              <p>
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </section>

        <div>
          <img src="/images/logo-google.png" alt="Google logo" />
          <img src="/images/logo-ibm.png" alt="IBM logo" />
          <img src="/images/logo-microsoft.png" alt="Microsoft logo" />
          <img src="/images/logo-hp.png" alt="Hewlett-Packard logo" />
          <img
            src="/images/logo-vector-graphics.png"
            alt="Vector Graphics logo"
          />
        </div>

        <section>
          <h2>Clipboard for iOS and Mac OS</h2>
          <p>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>
          <div>
            <Button>Download for iOS</Button>
            <Button variant="secondary">Download for Mac</Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export { HomePage };
