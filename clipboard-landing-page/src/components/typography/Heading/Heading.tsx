import { ElementType } from "react";
import styles from "./Heading.module.css";

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: string;
}

const Heading = ({ level, children }: HeadingProps) => {
  const HeadingTag: ElementType = `h${level}`;
  return (
    <HeadingTag className={`${styles.heading} ${styles[HeadingTag]}`}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
