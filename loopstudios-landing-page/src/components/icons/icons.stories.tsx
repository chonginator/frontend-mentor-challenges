import {
  AnimatedHamburgerIcon,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from "./icons";

export default {
  title: "Components/icons",
};

export const AllIcons = () => (
  <div className="flex h-7 gap-4">
    <AnimatedHamburgerIcon isMenuOpen={true} />
    <AnimatedHamburgerIcon isMenuOpen={false} />
    <FacebookIcon />
    <InstagramIcon />
    <PinterestIcon />
    <TwitterIcon />
  </div>
);
