import styles from "./TwoColumnLayout.module.css";

interface TwoColumnLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const TwoColumnLayout = ({ left, right }: TwoColumnLayoutProps) => {
  return (
    <div className={styles.container}>
      {left}
      {right}
    </div>
  );
};

export default TwoColumnLayout;
