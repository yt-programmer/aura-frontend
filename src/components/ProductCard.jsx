import { motion } from "framer-motion";
import { FiEye, FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product, isNew }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group   shadow-[0px_0px_20px_10px_rgba(30,41,57,1)] overflow-hidden  hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative   overflow-hidden">
        <div className="aspect-square bg-gray-200   flex justify-center p-2 items-center">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-contain "
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {isNew && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">
            New
          </div>
        )}
      </div>

      <div className="p-3 ">
        <h3 className="font-semibold   text-gray-100  text-lg mb-2 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 break-words  text-sm mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-gray-100 hover:bg-indigo-600 hover:text-white rounded-lg transition-colors"
            >
              Buy Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
