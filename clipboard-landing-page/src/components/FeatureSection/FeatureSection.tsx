import Icon from "../Icon";
import TwoColumnLayout from "../TwoColumnLayout";
import styles from "./FeatureSection.module.css";

interface FeatureSectionProps {
  data: FeatureSectionData;
}

type FeatureSectionData = {
  title: string;
  subtitle: string;
  image?: Image;
  features?: Feature[];
};

type Image = {
  src: string;
  alt: string;
};

export type Feature = {
  title: string;
  description: string;
  iconName?: string;
};

function FeatureSection(props: FeatureSectionProps) {
  const { title, subtitle, image, features } = props.data;

  const FeatureImage = () => (
    <img className={styles.featureImage} src={image?.src} alt={image?.alt} />
  );

  const Features = () => (
    <div className={styles.featureContainer}>
      {features?.map((feature) => (
        <div className={styles.feature}>
          {feature.iconName && <Icon name={feature.iconName} />}
          <h3 className={styles.featureTitle}>{feature.title}</h3>
          <p className={styles.featureDescription}>{feature.description}</p>
        </div>
      ))}
    </div>
  );

  const FeatureSectionBody = () => {
    return image && features ? (
      <div className={styles.fullBleedLayout}>
        <TwoColumnLayout
          className={styles.twoColumnLayout}
          left={<FeatureImage />}
          right={<Features />}
        />
      </div>
    ) : (
      <div className={styles.singleColumnLayout}>
        <FeatureImage />
      </div>
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <FeatureSectionBody />
    </section>
  );
}

export default FeatureSection;
