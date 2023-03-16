import Button from "../Button";
import styles from "./CTA.module.css";

function CTA({ children }: { children: React.ReactNode }) {
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

export default CTA;
