import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactButton from "./ContactButton";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  const textRef = useRef(null);
  const imgRef = useRef(null);

  const textInView = useInView(textRef, { amount: 0.3});
  const imgInView = useInView(imgRef, { amount: 0.3});

  return (
    <div id="contact" className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center mb-12 bg-black p-6 text-white gap-8 overflow-hidden ">
      {/* Left Side - Character Image */}
      <motion.div
        ref={imgRef}
        className="w-full md:w-1/2 2xl:w-1/3 flex justify-center relative overflow-visible"
      >
        <motion.img
          src="./contact.png"
          alt="Anime Character"
          className="w-64 sm:w-80 md:w-72 lg:w-96 2xl:w-[28rem] object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          initial={{ opacity: 0, y: 50 }}
          animate={
            imgInView
              ? {
                  opacity: 1,
                  y: [50, -20, 10, -10, 0], // bounce keyframes
                }
              : {}
          }
          transition={{
            duration: 1,
            ease: "easeOut",
            type: "tween",
          }}
        />
      </motion.div>

      {/* Right Side - Contact Form */}
      <motion.div
        ref={textRef}
        className="w-full md:w-1/2 px-6 "
        initial={{ opacity: 0, y: 50 }}
        animate={textInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl 2xl:text-5xl mb-8 text-white text-center tracking-wider uppercase">
          Contact the Crew
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {["name", "email", "message"].map((field) => (
            <div key={field} className="relative group">
              <label className="block mb-1 font-semibold text-amber-400 capitalize text-lg font-[Aclonica]">
                {field}
              </label>
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-white py-2 px-1 border-b border-gray-500 focus:outline-none font-[Quicksand]"
                  placeholder={`Enter your ${field}`}
                />
              ) : (
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full bg-transparent text-white py-2 px-1 border-b border-gray-500 focus:outline-none font-[Quicksand] resize-none"
                  placeholder="What's on your mind, gamer?"
                ></textarea>
              )}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-white via-amber-400 to-white transition-all duration-500 ease-out group-focus-within:w-full group-focus-within:left-0"></span>
            </div>
          ))}
          <ContactButton type="submit">Send Message</ContactButton>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
