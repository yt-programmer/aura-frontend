import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import useGetProducts from "../hooks/useGetProducts";
import { useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Products = () => {
  const [page, setPage] = useState(1);

  const { products, loading, error } = useGetProducts(page, 10);
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with diagonal background */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative py-16 mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl transform skew-y-2"></div>
          <div className="relative text-center py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Explore our complete collection of premium products
            </p>
          </div>
        </motion.div>

        {/* Masonry/Staggered Grid */}
        <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products &&
            products.length > 0 &&
            products.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={` ${index % 3 === 0 ? "lg:mt-0" : index % 3 === 1 ? "lg:mt-8" : "lg:mt-16"}`}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
        </div>

        {/* Empty State */}
        {loading && <Loading />}
        {error && <Error error={error} />}
        {!loading && !error && products && products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No products available at the moment.
            </p>
          </div>
        )}
        <div className="flex justify-center mt-12 space-x-4">
          <button
            onClick={() => setPage(page === 1 ? 1 : page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
          >
            <FiArrowLeft />
          </button>
          <div className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md">
            <span className="text-gray-300">{page}</span>
          </div>
          <button
            disabled={!products || products.length < 10}
            onClick={() => setPage((prev) => prev + 1)}
            className="px-4 disabled:bg-gray-400 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
