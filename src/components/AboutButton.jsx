import { motion } from "framer-motion";

function AboutButton() {
  return (
    <motion.button
      className="bg-yellow-500 px-4 py-3 text-black mt-8 text-xl w-full sm:w-1/2 md:text-2xl lg:text-4xl rounded-xl shadow-lg"
      whileHover={{
        y: [0, -3, 0, 3, 0], // smooth drizzle: gentle up & down
        transition: {
          duration: 0.5,
        
        },
        scale: 1.05,
        boxShadow: "0px 0px 20px rgba(255, 213, 0, 0.6)",
        backgroundColor: "#facc15",
      }}
      transition={{ type: "spring", stiffness: 100, damping: 12 }}
    >
      Play Now
    </motion.button>
  );
}

export default AboutButton;
