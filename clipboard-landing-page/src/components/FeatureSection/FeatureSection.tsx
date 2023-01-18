import Icon from "../Icon";

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
    <section>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div>
        <img src={image?.src} alt={image?.alt} />

        {features?.map((feature) => (
          <div>
            {feature.iconName && <Icon name={feature.iconName} />}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
