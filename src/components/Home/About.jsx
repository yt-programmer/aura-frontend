import React from "react";

import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="py-24 bg-gray-50 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 lg:p-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                About Aura
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/80 text-lg mb-6"
              >
                AURA Streetwear built for presence. Oversized silhouettes,
                artistic designs, and premium comfort — made for those who move
                differently.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/80 text-lg mb-8"
              >
                We partner with trusted brands and artisans to bring you
                products that combine exceptional quality, timeless design, and
                affordable pricing.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=500&fit=crop"
                alt="About"
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Stats */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
