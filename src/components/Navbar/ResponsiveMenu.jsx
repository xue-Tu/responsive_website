import { AnimatePresence, motion } from "motion/react";

function ResponsiveMenu({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
        >
          <div className="bg-primary py-10 rounded-lg text-white font-semibold text-xl uppercase m-6">
            <ul className="flex flex-col gap-10 justify-center items-center">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResponsiveMenu;
