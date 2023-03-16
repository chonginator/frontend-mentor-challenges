import Logo from "../Logo";
import HeroCTA from "../CTA/HeroCTA";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <Logo />
      <HeroCTA />
    </section>
  );
};

export default Hero;
