import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/hero.png";
import { motion } from "motion/react";
import { SlideRight } from "../../utility/animation";

function Hero() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2  min-h-[650px] relative">
      {/* branch info */}
      <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
        <div className="text-center md:text-left space-y-4">
          <motion.p
            initial="hidden"
            variants={SlideRight(0.4)}
            animate="visible"
            className="text-orange-600 uppercase font-semibold"
          >
            100% Satisfaction Guarantee
          </motion.p>
          <motion.h1
            initial="hidden"
            variants={SlideRight(0.6)}
            animate="visible"
            className="text-5xl lg:text-6xl font-semibold !leading-tight"
          >
            Find Your Perfect <span className="text-primary">Tutor</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            variants={SlideRight(0.8)}
            animate="visible"
          >
            We help you find perfect tutor for 1-on-1 lessons. It is completely
            free and private
          </motion.p>
          {/* button section */}
          <motion.div
            initial="hidden"
            variants={SlideRight(1)}
            animate="visible"
            className="flex gap-8 justify-center items-center font-semibold !mt-8"
          >
            <button className="primary-btn">Get Started</button>
            <button className="flex justify-end items-center gap-2">
              <span className="w-10 h-10 flex justify-center items-center bg-secondary/15 rounded-full">
                <FaPlay className="text-secondary" />
              </span>
              See how it works
            </button>
          </motion.div>
        </div>
      </div>
      {/* Hero image */}
      <div className="flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          src={HeroImg}
          alt=""
          className="w-[350px] md:w-[550px] xl:w-[700px]"
        />
      </div>
    </div>
  );
}

export default Hero;
