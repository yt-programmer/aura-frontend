import { motion } from "framer-motion";
import { useState } from "react";
import { FiEye, FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product, isNew }) => {
  const [selectedColor, setSelectedColor] = useState("لم يتم الاختيار");
  const [selectedSize, setSelectedSize] = useState("لم يتم الاختيار");

  const handleButtonClick = (product) => {
    const message = `السلام عليكم، أود شراء المنتج: ${product.name} بسعر: $${product.price.toFixed(
      2,
    )}، اللون: ${selectedColor === "selectColor " || selectedColor === "لم يتم الاختيار" ? "لم يتم الاختيار" : selectedColor}, المقاس: ${selectedSize === "selectSize" || selectedSize === "لم يتم الاختيار" ? "لم يتم الاختيار" : selectedSize}`;
    const url = `https://wa.me/201?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group shadow-[0px_0px_20px_10px_rgba(30,41,57,1)] overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative overflow-hidden">
        <div className="aspect-square bg-gray-200 flex justify-center p-2 items-center">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-contain"
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

      <div className="p-3">
        <h3 className="font-semibold text-gray-100 text-lg group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>

        <div className="mb-2 flex flex-col gap-2">
          {product.colors?.length > 0 && (
            <div>
              <span className="text-gray-500 text-sm">Colors: </span>
              <select
                id="colorSelect"
                onChange={(e) => {
                  setSelectedColor(e.target.value);
                }}
                defaultValue="selectColor"
                className="ml-2 bg-gray-900 text-white rounded-md px-1 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm hover:bg-gray-800 transition-colors"
              >
                <option value="selectColor">Select Color</option>
                {product.colors.map((color, index) => (
                  <option key={`${color}-${index}`} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          )}
          {product.size?.length > 0 && (
            <div>
              <span className="text-gray-500 text-sm">Sizes: </span>
              <select
                id="sizeSelect"
                defaultValue="selectSize"
                onChange={(e) => {
                  setSelectedSize(e.target.value);
                }}
                className="ml-2 bg-gray-900 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm hover:bg-gray-800 transition-colors"
              >
                <option value="selectSize">Select Size</option>
                {product.size.map((size, index) => (
                  <option key={`${size}-${index}`} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <p className="text-gray-500 break-words text-sm mb-4">
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
              className="p-2 bg-gray-100 hover:bg-indigo-600 hover:text-white rounded-lg transition-colors text-sm"
              onClick={() => handleButtonClick(product)}
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
