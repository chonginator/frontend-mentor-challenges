import styles from "./TwoColumnLayout.module.css";

interface TwoColumnLayoutProps {
  children: React.ReactNode;
}

const TwoColumnLayout = ({ children }: TwoColumnLayoutProps) => {
  return <div className={styles.bodyContainer}>{children}</div>;
};

export default TwoColumnLayout;
