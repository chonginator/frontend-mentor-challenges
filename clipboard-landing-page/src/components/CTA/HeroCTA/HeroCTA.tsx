import CTA from "../CTA";
import styles from "./HeroCTA.module.css";
import { titles } from "../data/hero-cta-titles";

function HeroCTA() {
  return (
    <CTA>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>A history of everything you copy</h1>
        <p className={styles.subtitle}>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
    </CTA>
  );
}

export default HeroCTA;
