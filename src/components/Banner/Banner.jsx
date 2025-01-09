import { motion } from "motion/react";
import { SlideUp } from "../../utility/animation";

function Banner({ image, tag, title, subtitle, link, reverse = false }) {
  return (
    <div className="bg-[#f9f9f9] pb-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          {/* banner Image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 100,
              },
            }}
            className={`flex justify-center items-center ${
              reverse && "md:order-last md:justify-end"
            }`}
          >
            <img src={image} alt="" className="w-[400px] h-full object-cover" />
          </motion.div>
          {/* banner Text  section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w[500px]">
            <motion.p
              initial="hidden"
              whileInView={"visible"}
              variants={SlideUp(0.5)}
              className="text-sm text-orange-600 font-semibold capitalize"
            >
              {tag}
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView={"visible"}
              variants={SlideUp(0.7)}
              className="text-xl md:text-2xl font-semibold capitalize"
            >
              {title}
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView={"visible"}
              variants={SlideUp(0.9)}
              className="text-sm text-slate-500"
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView={"visible"}
              variants={SlideUp(1.1)}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn !mt-5">Get Started</button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
