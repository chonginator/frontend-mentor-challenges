import Icon from "../Icon";
import TwoColumnLayout from "../TwoColumnLayout";
import styles from "./FeatureSection.module.css";
import { FeatureSectionProps } from "./FeatureSectionProps";

function FeatureSection(props: FeatureSectionProps) {
  const { title, subtitle, image, features } = props.data;

  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <FeatureSectionBody />
    </section>
  );

  function FeatureSectionBody() {
    return image && features ? (
      <div className={styles.featureSectionBody}>
        <div className={styles.fullBleedLayout}>
          <TwoColumnLayout
            className={styles.twoColumnLayout}
            left={<FeatureImage />}
            right={<Features />}
          />
        </div>
      </div>
    ) : (
      <div className={styles.featureSectionBody}>
        <div className={styles.singleColumnLayout}>
          <FeatureImage />
          {features && <Features />}
        </div>
      </div>
    );
  }

  function FeatureImage() {
    return (
      <img className={styles.featureImage} src={image?.src} alt={image?.alt} />
    );
  }

  function Features() {
    return (
      <div className={styles.featureContainer}>
        {features?.map((feature, index) => (
          <div key={index} className={styles.feature}>
            {feature.iconName && (
              <Icon
                className={styles.featureIcon}
                name={feature.iconName}
                size={36}
              />
            )}
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default FeatureSection;
