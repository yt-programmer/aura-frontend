import { motion } from "framer-motion";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Loading from "../Loading";
import Error from "../Error";

const ProductsTable = ({
  products,
  setPage,
  page,
  loading,
  error,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Image
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Price
              </th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center">
                  <Loading />
                </td>
              </tr>
            )}

            {error && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center">
                  <Error error={error} />
                </td>
              </tr>
            )}

            {!loading && !error && products && products.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center">
                  <p className="text-gray-500">
                    No products found. Add your first product!
                  </p>
                </td>
              </tr>
            ) : (
              !loading &&
              !error &&
              products &&
              products.length !== 0 &&
              products.map((product, index) => (
                <motion.tr
                  key={product._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                  className="transition-colors"
                >
                  <td className="px-6 py-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-lg overflow-hidden"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{product.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-indigo-600">
                      ${product.price.toFixed(2)}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <motion.button
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(79, 70, 229, 0.1)",
                        }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onEdit(product)}
                        className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                      >
                        <FiEdit2 size={18} />
                      </motion.button>
                      <motion.button
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(239, 68, 68, 0.1)",
                        }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onDelete(product._id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <FiTrash2 size={18} />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;
