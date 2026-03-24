import { useState, useEffect } from "react";
import { PrefetchPageLinks, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiPackage, FiLogOut, FiCheck, FiX } from "react-icons/fi";
import ProductsTable from "../components/admin/ProductsTable";
import AddProductModal from "../components/admin/AddProductModal";
import EditProductModal from "../components/admin/EditProductModal";
import useGetProducts from "../hooks/useGetProducts";

const Dashboard = () => {
  const navigate = useNavigate();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(1);

  const [productsData, setProducts] = useState(null);
  const { products, loading, error } = useGetProducts(page, 10);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  const handleLogout = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      const data = res.json();

      if (res.ok) {
        navigate("/");
      } else {
        setErrorMessage(data.message || "An error occurred during logout");
      }
    } catch (error) {
      setErrorMessage(error.message || "An error occurred during logout");
    }
  };

  const handleAddProduct = async (newProduct) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: newProduct.name,
          description: newProduct.description,
          price: newProduct.price,
          image: newProduct.image,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setProducts(data.data.products);
        setSuccessMessage("Product added successfully");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage(
          data.message || data.errors[0].msg || "Failed to add product",
        );
      }
    } catch (error) {
      setErrorMessage(
        error.message || "An error occurred while adding the product",
      );
    }
  };

  const handleEditProduct = async (updatedProduct) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/products/${updatedProduct._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            name: updatedProduct.name,
            description: updatedProduct.description,
            price: updatedProduct.price,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setProducts(data.data.products);
        setSuccessMessage("Product updated successfully");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage(
          data.message || data.errors[0].msg || "Failed to update product",
        );
      }
    } catch (error) {
      setErrorMessage(
        error.message || "An error occurred while updating the product",
      );
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}/products/${productId}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );

      const data = await response.json();

      if (response.ok) {
        setProducts(data.data.products);
        setSuccessMessage("Product deleted successfully");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage(
          data.message || data.errors[0].msg || "Failed to delete product",
        );
      }
    } catch (error) {
      setErrorMessage(
        error.message || "An error occurred while deleting the product",
      );
    }
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold text-gray-500"
            >
              Admin Dashboard
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 mt-1"
            >
              Manage your products and store
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 border-2 border-red-600 text-red-600 rounded-xl font-medium hover:bg-red-600 hover:text-white transition-all"
          >
            <FiLogOut />
            Logout
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl flex items-center gap-2"
            >
              <FiCheck className="text-green-600" />
              {successMessage}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl flex items-center gap-2"
            >
              {errorMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-end mb-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAddModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors"
            >
              <FiPlus />
              Add Product
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <ProductsTable
              products={productsData}
              onEdit={handleEditClick}
              onDelete={handleDeleteProduct}
              loading={loading}
              error={error}
              page={page}
              setPage={setPage}
            />
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {addModalOpen && (
            <AddProductModal
              open={addModalOpen}
              onClose={() => setAddModalOpen(false)}
              onAdd={handleAddProduct}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {editModalOpen && (
            <EditProductModal
              open={editModalOpen}
              onClose={() => {
                setEditModalOpen(false);
                setSelectedProduct(null);
              }}
              product={selectedProduct}
              onEdit={handleEditProduct}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;
