import styles from "./TwoColumnLayout.module.css";
import { TwoColumnLayoutProps } from "./TwoColumnLayoutProps";

const TwoColumnLayout = ({ className, left, right }: TwoColumnLayoutProps) => {
  return (
    <div className={`${className} ${styles.container}`}>
      {left}
      {right}
    </div>
  );
};

export default TwoColumnLayout;
