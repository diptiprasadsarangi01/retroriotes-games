import { motion } from "framer-motion";

function ContactButton({ children, ...props }) {
  return (
    <motion.button
      {...props}
      className="w-full bg-yellow-500 px-6 py-3 text-black text-xl md:text-2xl lg:text-4xl rounded-xl shadow-lg"
      whileHover={{
        y: [0, -3, 0, 3, 0], // subtle drizzle
        scale: 1.05,
        boxShadow: "0px 0px 20px rgba(255, 213, 0, 0.6)",
        backgroundColor: "#facc15",
        transition: { duration: 0.5 },
      }}
      transition={{ type: "spring", stiffness: 100, damping: 12 }}
    >
      {children}
    </motion.button>
  );
}

export default ContactButton;