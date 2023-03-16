import Logo from "../Logo";
import { HeroCTA } from "../CTA";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <Logo />
      <HeroCTA>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>A history of everything you copy</h1>
          <p className={styles.subtitle}>
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
        </div>
      </HeroCTA>
    </section>
  );
};

export default Hero;
