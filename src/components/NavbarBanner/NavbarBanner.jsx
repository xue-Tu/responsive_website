import { motion } from "motion/react";
import { useState } from "react";

function NavbarBanner() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="hidden lg:block bg-primary py-1 text-center font-semibold text-sm relative"
      >
        Are you a university or school student for an online tutoring
        partnership?
        <a href="#" className="text-secondary ml-2">
          Talk to us
        </a>
        <div
          onClick={() => setIsOpen(false)}
          className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          x
        </div>
      </motion.div>
    )
  );
}

export default NavbarBanner;
