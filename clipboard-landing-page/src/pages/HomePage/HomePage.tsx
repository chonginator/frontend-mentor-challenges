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
    <>
      <main className={styles.container}>
        <Hero />
        <FeatureSection data={featureSectionSnippetsData} />
        <FeatureSection data={featureSectionAccessData} />
        <FeatureSection data={featureSectionWorkflowData} />
        <TestimonialBanner />
        <CTA />
      </main>

      <Footer />
    </>
  );
};

export { HomePage };
