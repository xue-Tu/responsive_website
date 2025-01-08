import { MdComputer, MdMenu } from "react-icons/md";
import { NavbarMenu } from "../../mockData/data";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "motion/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6">
          {/* Logo section */}
          <div className="flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary" />
            <p className="text-2xl text-black">E-Tutro</p>
          </div>
          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    className="text-gray-600 text-sm xl:text-base hover:text-secondary inline-block px-2 py-1 xl:px-3 transition-all duration-300"
                    href={item.path}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* CTA Button section */}
          <div className="hidden lg:block space-x-6 font-semibold">
            <button>Sign in</button>
            <button className="text-white  py-2 px-6 bg-secondary rounded-full">
              Register
            </button>
          </div>
          {/* Mobile Hamburger Menu */}
          <div
            className="lg:hidden cursor-pointer  hover:text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>

      {/* mobile Sidebar section */}

      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
}

export default Navbar;
