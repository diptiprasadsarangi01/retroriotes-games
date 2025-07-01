import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SliderOfUsers from "./SliderOfUsers";

const Testimonial = () => {
  const sliderRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);

  const headingInView = useInView(headingRef, { margin: "-10% 0% -35% 0%" });
  const sliderInView = useInView(sliderRef, { margin: "-90px" });
  const imageInView = useInView(imageRef, { margin: "-100px" });

  return (
    <div id="testimonials">
      <motion.h1
        ref={headingRef}
        className="text-center text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl pt-20 lg:pt-16 2xl:pt-52 md:mb-8 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        What Our Players Say
      </motion.h1>

      <div className="overflow-hidden flex flex-row flex-wrap-reverse md:flex-row items-center justify-center bg-black text-white px-4 md:px-16 py-20 mb-8 md:mb-0">
        {/* Left - Testimonial Slider */}
        <motion.div
          ref={sliderRef}
          initial={{ opacity: 0, y: 50 }}
          animate={sliderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <SliderOfUsers />
        </motion.div>

        {/* Right - Anime character */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: 100 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 2xl:w-1/3 flex justify-center"
        >
          <img
            src="./testimonial.png"
            alt="Anime Character"
            className="w-64 sm:w-80 md:w-72 lg:w-96 2xl:w-[28rem] object-contain drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
