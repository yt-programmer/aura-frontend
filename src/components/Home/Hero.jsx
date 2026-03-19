import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiShoppingBag, FiStar, FiTruck } from "react-icons/fi";
import hero from "../../assets/hero.webp";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl"></div>
      </div>

      {/* Diagonal Shape */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-white transform skew-x-12 translate-x-20 hidden lg:block"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="text-white z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <FiStar className="text-yellow-300" />
                <span className="text-sm font-medium">Premium Collection</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Discover
              <span className="block text-yellow-300">Your Style</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-white/90 mb-8 max-w-lg"
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

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <img
                src={hero}
                alt="Featured"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-pink-300 rounded-full opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
