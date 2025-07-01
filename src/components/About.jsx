
import "remixicon/fonts/remixicon.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AboutButton from "./AboutButton";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2,
    threshold: 0.2,
    initialInView: false,
    delay: 0.2,
    delayChildren: 0.2,
    animateInViewport: true,
    
  });
  const imgRef = useRef(null);

  const imgInView = useInView(imgRef, { amount: 0.3 });


  return (
    <div id="about" className="about-section w-full mb-12 sm:mb-4 md:mb-12 lg:mb-0 xl:mt-5 h-[85vh] sm:h-[75vh] md:h-[65vh] lg:h-[90vh] xl:h-screen flex items-center justify-center  bg-black">
      <motion.div
        ref={ref}
        className="cntnr flex text-white w-full h-[80%]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Image Side */}
        <motion.div
          className="limg hidden sm:block limg relative w-1/2 h-full "
          ref={imgRef}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
        

           <motion.img
            className="absolute sm:scale-[1.2] md:scale-[0.9] lg:scale-[0.8] xl:scale-[0.9] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:display-none"
            src="./imag.png"
            alt=""
            initial={{ scale: 0.6, y: 0 }}
            animate={
              imgInView
                ? {
                    scale: [0.6, 0.7, 0.6],
                    y: [0, -10, 0],
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />

        </motion.div>

        {/* Text Side */}
        <motion.div
          className="rg w-full md:w-[60%] lg:w-[50%] 2xl:w-[40%] px-6 py-4 md:py-6 flex flex-col justify-center "
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-[55px] leading-tight "
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            Press, Play..
          </motion.h1>
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-[55px] pb-8 md:pb-0 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Relive the Retro.
          </motion.h1>

          <motion.p
            className="mt-6 text-amber-50 text-base md:text-lg xl:text-xl 2xl:text-[26px] text-justify font-[Nunito] font-(family-name:'sans-serif')"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to <strong>RetroRiotes</strong>, where the charm of 90's keypad mobile
            games comes back to life — just for kids!
            <br />
            <br />
            We're on a mission to bring back the simple and joy-filled gameplay
            of the past. Inspired by the iconic games once played on chunky
            phones with clicky buttons, our team recreates that timeless fun
            with a modern twist.
          </motion.p>

            <a href="#games" onClick={() => setIsOpen(false)}>
              <AboutButton />
            </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;