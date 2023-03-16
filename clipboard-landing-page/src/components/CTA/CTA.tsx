import Button from "../Button";
import styles from "./CTA.module.css";
import { CTAProps } from "./CTAProps";

function CTA({ children }: CTAProps) {
  return (
    <section className={styles.container}>
      {children}
      <div className={styles.buttonContainer}>
        <Button>Download for iOS</Button>
        <Button variant="secondary">Download for Mac</Button>
      </div>
    </section>
  );
}

function HeroCTA({ children, titles }: CTAProps) {
  return <CTA titles={titles}>{children}</CTA>;
}

function FooterCTA({ titles }: CTAProps) {
  const { title, subtitle } = titles;

  return (
    <CTA titles={titles}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </CTA>
  );
}

export { HeroCTA, FooterCTA };
