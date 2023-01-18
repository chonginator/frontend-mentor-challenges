import styles from "./HomePage.module.css";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Hero from "../../components/Hero";
import FeatureSection from "../../components/FeatureSection";
import featureSectionSnippetsData from "../../components/FeatureSection/featureSectionSnippetsData";
import featureSectionAccessData from "../../components/FeatureSection/featureSectionAccessData";
import featureSectionWorkflowData from "../../components/FeatureSection/featureSectionWorkflowData";
import TestimonialBanner from "../../components/TestimonialBanner";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <>
      <main className={styles.container}>
        <Hero />
        <FeatureSection data={featureSectionSnippetsData} />
        <FeatureSection data={featureSectionAccessData} />
        <FeatureSection data={featureSectionWorkflowData} />

        <TestimonialBanner />

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
