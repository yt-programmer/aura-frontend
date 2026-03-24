import React from "react";
import { FiInstagram, FiMessageCircle } from "react-icons/fi";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section
      className="py-24 bg-gray-800 relative overflow-hidden"
      id="contact"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-200 rounded-full opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out through any of these channels.
          </p>
        </motion.div>

        <div className="grid   grid-cols-1 md:grid-cols-2 gap-8  ">
          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/auraa_2222/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="group bg-gradient-to-br from-pink-500 to-purple-600 p-8 rounded-3xl text-white text-center cursor-pointer"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <FiInstagram className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <p className="text-white/80">Follow us on Instagram</p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/201066394593"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="group bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-3xl text-white text-center cursor-pointer md:-mt-8"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <FiMessageCircle className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-white/80">Chat with us</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
