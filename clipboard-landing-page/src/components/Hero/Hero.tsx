import Logo from "../Logo";
import Button from "../Button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <Logo />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>A history of everything you copy</h1>
        <p className={styles.subtitle}>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Button>Download for iOS</Button>
        <Button variant="secondary">Download for Mac</Button>
      </div>
    </section>
  );
};

export default Hero;
