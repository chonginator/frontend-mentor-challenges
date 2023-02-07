export interface FeatureSectionProps {
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
