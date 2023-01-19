import Icon from "../Icon";
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

type Feature = {
  title: string;
  description: string;
  iconName?: string;
};

function FeatureSection(props: FeatureSectionProps) {
  const { title, subtitle, image, features } = props.data;

  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.fullBleedContainer}>
        <div className={styles.bodyContainer}>
          <img
            className={styles.featureImage}
            src={image?.src}
            // sizes={"(min-width: 768px) 752px, 312px"}
            alt={image?.alt}
          />

          <div className={styles.featureContainer}>
            {features?.map((feature) => (
              <div className={styles.feature}>
                {feature.iconName && <Icon name={feature.iconName} />}
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
