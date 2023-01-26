import Logo from "../Logo";
import IconButton from "../IconButton";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Logo size="small" />
      <ul className={styles.links}>
        <li>
          <a>FAQs</a>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
        <li>
          <a>Privacy Policy</a>
        </li>
        <li>
          <a>Press Kit</a>
        </li>
        <li>
          <a>Install Guide</a>
        </li>
      </ul>
      <ul className={styles.socialLinks}>
        <li>
          <IconButton name="facebook" href="https://www.facebook.com/" />
        </li>
        <li>
          <IconButton name="twitter" href="https://www.twitter.com/" />
        </li>
        <li>
          <IconButton name="instagram" href="https://www.instagram.com/" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
