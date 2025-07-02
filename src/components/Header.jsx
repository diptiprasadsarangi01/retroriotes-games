import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap/dist/gsap';
import { motion } from "framer-motion"; 
import "remixicon/fonts/remixicon.css";
import Navbar from "./Navbar";

function Header() {
      const [showContent, setShowContent] = useState(false);
    
      useGSAP(() => {
        const tl = gsap.timeline();
    
        tl.to(".vi-mask-group", {
          rotate: 10,
          duration: 2,
          ease: "Power4.easeInOut",
          transformOrigin: "50% 50%",
        }).to(".vi-mask-group", {
          scale: 10,
          duration: 2,
          delay: -1.8,
          ease: "Expo.easeInOut",
          transformOrigin: "50% 50%",
          opacity: 0,
          onUpdate: function () {
            if (this.progress() >= 0.9) {
              document.querySelector(".svg")?.remove();
              setShowContent(true);
              this.kill();
            }
          },
        });
      }, []);
    
      useGSAP(() => {
        if (!showContent) return;
    
        gsap.to(".main", {
          scale: 1,
          rotate: 0,
          duration: 2,
          delay: "-1",
          ease: "Expo.easeInOut",
        });
    
        gsap.to(".sky", {
          scale: 1.1,
          rotate: 0,
          duration: 2,
          delay: "-.8",
          ease: "Expo.easeInOut",
        });
    
        gsap.to(".bg", {
          scale: 1.1,
          rotate: 0,
          duration: 2,
          delay: "-.8",
          ease: "Expo.easeInOut",
        });
    
    
        const main = document.querySelector(".main");
    
        main?.addEventListener("mousemove", function (e) {
          const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
          gsap.to(".main .text", { x: `${xMove * 0.4}%` });
          gsap.to(".sky", { x: xMove });
          gsap.to(".bg", { x: xMove * 1.7 });
        });
      }, [showContent]);
  return (
    <>
      {/* SVG Reveal Screen */}
      <div className=" svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="80"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  RR
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {/* Main Content */}
      {showContent && (
        <div className=" main w-screen rotate-[-10deg] scale-[1.2] sm:scale-[1.4] md:scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">

            {/* Navbar */}
            <Navbar />

            {/* Animated Images & Text */}
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.3] sm:scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt="sky"
              />

              <img
                className="absolute bg scale-[1.4] sm:scale-[1.8] rotate-[-30deg] top-0 left-0 w-full h-full object-bottom object-cover"
                src="./bg.png"
                alt="bg"
              />

              {/* Only visible on sm and up */}
              <div className="text hidden ">
               
              </div>

              <div className="charbox flex justify-center">
                <motion.img
                 className="absolute character overflow-hidden"
                 src="./charbg.png"
                 alt="character"
                 initial={{ opacity: 0, scale: 0.8 }}                      // Start hidden
                 animate={showContent ? { 
                   opacity: [0.5,1],                                      // fade from 1 ➔ 0
                   scale: [0.8,1],                                      // zoom from 1 ➔ 0.8
                   transition: { 
                     opacity: { duration: 1}, // fade-out starts 1s after showContent=true
                     scale: { duration: 1},   // zoom-out syncs with fade-out
                   },
                 } : { opacity: 0, scale: 0.8 }}                          // fallback for when showContent is false
                />
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full border-b-black py-7 px-6 sm:py-10 sm:px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
              <a href="#games" className=" inline-flex gap-2 " onClick={() => setIsOpen(false)}>
                <i className=" text-3xl sm:text-4xl ri-arrow-down-line"></i>
                <h3 className=" playsoon-text flex items-center text-base md:text-xl font-[Aclonica]">
                  Play Fast
                </h3>
              </a>
              </div>
              <img
                className="absolute h-[40px] sm:h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt="ps5"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
