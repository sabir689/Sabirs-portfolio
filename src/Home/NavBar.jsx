import { FaEnvelope, FaHome, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="fixed bottom-0 left-0 right-0 flex justify-center items-center"
    >
      <div className="text-white bg-[#804dee] bg-opacity-30 backdrop-blur rounded-full py-5 flex gap-10 px-12 text-2xl">
        <FaHome className="hover:scale-125 transform transition-all duration-300" title="Home" />
        <FaUser className="hover:scale-125 transform transition-all duration-300" title="About Me" />
        <FaEnvelope className="hover:scale-125 transform transition-all duration-300" title="Contact" />
      </div>
    </motion.div>
  );
};

export default NavBar;
