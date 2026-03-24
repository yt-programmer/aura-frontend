import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useGetProducts from "../../hooks/useGetProducts";
import Loading from "../Loading";
import Error from "../Error";

const ProductsHome = () => {
  const { products, loading, error } = useGetProducts(1, 3);

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-indigo-600 text-white text-sm rounded-full mb-4">
            Featured
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trending Products
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Handpicked selections that define the season's must-haves
          </p>
        </motion.div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && <Loading />}
          {error && <Error error={error} />}

          {products && products.length > 0
            ? products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${index % 2 === 0 ? "lg:mt-0" : "lg:mt-12"}`}
                >
                  <ProductCard product={product} isNew={true} />
                </motion.div>
              ))
            : !loading &&
              !error && (
                <p className="text-center text-gray-500 col-span-full">
                  {"No products available."}
                </p>
              )}
        </div>

        {!loading && !error && products && products.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all"
            >
              View All Products
              <FiArrowRight />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductsHome;
