import CTA from "../CTA";
import styles from "./FooterCTA.module.css";
import { titles } from "../data/footer-cta-titles";

function FooterCTA() {
  const { title, subtitle } = titles;

  return (
    <CTA>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </CTA>
  );
}

export default FooterCTA;
