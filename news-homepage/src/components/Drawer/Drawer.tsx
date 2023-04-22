/* eslint-disable jsx-a11y/anchor-is-valid */
import { DrawerProps } from "./DrawerProps";
import { motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";

function Drawer({ onClose, children }: DrawerProps) {
  return (
    <>
      <Backdrop />
      <Panel>{children}</Panel>
    </>
  );

  function Backdrop() {
    return (
      <motion.div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>
    );
  }

  function Panel({ children }: { children: React.ReactNode }) {
    return (
      <motion.div
        className="absolute right-0 top-0 h-full w-2/3"
        initial={{ translateX: "100%" }}
        animate={{ translateX: "0" }}
        exit={{ translateX: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <RemoveScroll className="h-full">{children}</RemoveScroll>
      </motion.div>
    );
  }
}

export default Drawer;
