import styles from "./HomePage.module.css";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Hero from "../../components/Hero";
import FeatureSection from "../../components/FeatureSection";
import featureSectionSnippetsData from "../../components/FeatureSection/featureSectionSnippetsData";
import featureSectionAccessData from "../../components/FeatureSection/featureSectionAccessData";
import featureSectionWorkflowData from "../../components/FeatureSection/featureSectionWorkflowData";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <>
      <main className={styles.container}>
        <Hero />
        <FeatureSection data={featureSectionSnippetsData} />
        <FeatureSection data={featureSectionAccessData} />
        <FeatureSection data={featureSectionWorkflowData} />

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
