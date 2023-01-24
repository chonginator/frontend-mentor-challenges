import styles from "./TestimonialBanner.module.css";

const TestimonialBanner = () => {
  return (
    <div className={styles.container}>
      <img src="/images/logo-google.png" alt="Google logo" />
      <img src="/images/logo-ibm.png" alt="IBM logo" />
      <img src="/images/logo-microsoft.png" alt="Microsoft logo" />
      <img src="/images/logo-hp.png" alt="Hewlett-Packard logo" />
      <img src="/images/logo-vector-graphics.png" alt="Vector Graphics logo" />
    </div>
  );
};

export default TestimonialBanner;
