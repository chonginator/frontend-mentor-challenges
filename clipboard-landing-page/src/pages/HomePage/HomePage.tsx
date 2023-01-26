import styles from "./HomePage.module.css";
import Hero from "../../components/Hero";
import FeatureSection from "../../components/FeatureSection";
import featureSectionSnippetsData from "../../components/FeatureSection/featureSectionSnippetsData";
import featureSectionAccessData from "../../components/FeatureSection/featureSectionAccessData";
import featureSectionWorkflowData from "../../components/FeatureSection/featureSectionWorkflowData";
import TestimonialBanner from "../../components/TestimonialBanner";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div>
      <main className={styles.container}>
        <Hero />
        <FeatureSection data={featureSectionSnippetsData} />
        <FeatureSection data={featureSectionAccessData} />
        <FeatureSection data={featureSectionWorkflowData} />
        <TestimonialBanner />
        <CTA>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Clipboard for iOS and Mac OS</h2>
            <p className={styles.subtitle}>
              Available for free on the App Store. Download for Mac or iOS, sync
              with iCloud and you're ready to start adding to your clipboard.
            </p>
          </div>
        </CTA>
      </main>

      <Footer />
    </div>
  );
};

export { HomePage };
