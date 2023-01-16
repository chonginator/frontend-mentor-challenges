import Logo from "../Logo";
import Button from "../Button";

const Hero = () => {
  return (
    <section>
      <Logo />
      <h1>A history of everything you copy</h1>
      <p>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div>
        <Button>Download for iOS</Button>
        <Button variant="secondary">Download for Mac</Button>
      </div>
    </section>
  );
};

export default Hero;
