import Logo from "../Logo";
import IconButton from "../IconButton";

const Footer = () => {
  return (
    <footer>
      <Logo size="small" />
      <ul>
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
      <ul>
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
