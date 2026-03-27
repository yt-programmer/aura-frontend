import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiShoppingBag, FiStar, FiTruck } from "react-icons/fi";
import hero from "../../assets/hero.webp";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex  items-center  overflow-hidden bg-gray-800">
      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-1">
              <FiStar className="text-yellow-300" />
              <span className="text-sm font-medium">Premium Collection</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-3 leading-tight"
          >
            Discover
            <span className="block text-yellow-300">Your Style</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white rounded-2xl  bg-black/30 px-4 py-2  mb-8 max-w-lg"
          >
            Explore our curated collection of premium products designed to
            elevate your lifestyle with quality and elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              Shop Now
              <FiArrowRight />
            </Link>
            <Link
              to="/#about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
