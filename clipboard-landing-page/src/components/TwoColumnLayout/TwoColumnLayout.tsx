import styles from "./TwoColumnLayout.module.css";

interface TwoColumnLayoutProps {
  className?: string;
  left: React.ReactNode;
  right: React.ReactNode;
}

const TwoColumnLayout = ({ className, left, right }: TwoColumnLayoutProps) => {
  return (
    <div className={`${className} ${styles.container}`}>
      {left}
      {right}
    </div>
  );
};

export default TwoColumnLayout;
