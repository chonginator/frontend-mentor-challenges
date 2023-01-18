import Button from "../Button";

const CTA = () => {
  return (
    <section>
      <h2>Clipboard for iOS and Mac OS</h2>
      <p>
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you're ready to start adding to your clipboard.
      </p>
      <div>
        <Button>Download for iOS</Button>
        <Button variant="secondary">Download for Mac</Button>
      </div>
    </section>
  );
};

export default CTA;
