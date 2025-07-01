import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Aki Tanaka",
    email:"chococherry@hotmail.com",
    message: "Takes me right back to the 90s—pure nostalgia!",
    image: "https://dcbswebdesign.wordpress.com/wp-content/uploads/2013/04/testimonialpicex.jpg",
  },
  {
    id: 2,
    name: "Swati Kumari",
    email:"whiterose@gmail.com",
    message: "Addictive and retro, just like the old keypad classics!",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 3,
    name: "Ankit Acharya",
    email:"noobplayer@gmail.com",
    message: "Perfect throwback to my childhood gaming days!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHduflV4Fb-1yIcz9179uTcke9ppfheM_g-tEnjeqJaUycR3OFJy3mZAarTeVKGJTokyA&usqp=CAU",
  },
  {
    id: 4,
    name: "Namita Pradhan",
    email:"misspradhan@gmail.com",
    message: "Simple, fun, and endlessly replayable—love it!",
    image: "https://www.csueastbay.edu/iao/files/images/student-testimonial-images/olivia.png",
  }
  ,
  {
    id: 5,
    name: "Deep Sharma",
    email:"mrdeveloper@gmail.com",
    message: "Old-school vibes with modern smoothness—amazing!",
    image: "https://www.csueastbay.edu/iao/files/images/student-testimonial-images/damoder.jpeg",
  },
    {
    id: 6,
    name: "Amrita Khan",
    email:"moglipuchi@gmail.com",
    message: "Finally, games that bring back the keypad magic!",
    image: "https://www.shutterstock.com/image-photo/headshot-portrait-smiling-little-girl-600nw-2579821615.jpg",
  },{
    id: 7,
    name: "Miku Panda",
    email:"wildfire@gmail.com",
    message: "Just like my first mobile games—can’t stop playing!",
    image: "https://img.freepik.com/premium-photo/cute-indian-little-boy-giving-multiple-expression_54391-1907.jpg",
  }

];


const SliderOfUsers = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getTestimonialAt = (offset) =>
    testimonials[(current + offset + testimonials.length) % testimonials.length];

  const positions = [
    { y: -150, scale: 0.8, opacity: 0.19, zIndex: 1 }, // Top box
    { y: 0, scale: 1, opacity: 1, zIndex: 2 },        // Center box
    { y: 150, scale: 0.8, opacity: 0.19, zIndex: 1 },  // Bottom box
  ];

  return (
    <div className="flex flex-col items-center justify-center  text-black overflow-hidden relative px-4 font-nunito">
      <div className=" relative w-full flex flex-col items-center h-100 md:h-[600px]  font-serif">
        {[ -1, 0, 1 ].map((offset, i) => {
          const t = getTestimonialAt(offset);
          const pos = positions[i];

          return (
            <motion.div
              key={t.id}
              className={`absolute w-9/9 md:w-4/4 flex flex-col p-3 top-1/3 rounded-xl shadow-2xl bg-[#3b0a3c] `}
              animate={{
                y: pos.y,
                scale: pos.scale,
                opacity: pos.opacity,
                zIndex: pos.zIndex,
              }}
              transition={{ duration: 0.9 }}
            >
              <div className="flex items-center gap-2 md:gap-4 mb-2 ">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border-2 md:border-4 shadow-[0_2px_20px] shadow-gray-700 border-gray-100"
                />
                <div>
                  <h3 className="text-lg md:text-xl font-bold font-[Aclonica] text-[#ffffff]">{t.name}</h3>
                  <p className="text-sm font-[Quicksand] text-amber-300">{t.email}</p>
                </div>
              </div>
              <p className="text-sm md:text-base font-[nunito] text-gray-200">{t.message}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default SliderOfUsers;
