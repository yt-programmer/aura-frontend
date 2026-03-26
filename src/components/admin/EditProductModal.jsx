import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const EditProductModal = ({ open, onClose, product, onEdit }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    colors: "",
    size: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // Fill data when product changes
  // =========================
  useEffect(() => {
    if (product) {
      setForm({
        name: product.name || "",
        price: product.price?.toString() || "",
        description: product.description || "",
        colors: product.colors?.join(", ") || "",
        size: product.size?.join(", ") || "",
      });
    }
  }, [product]);

  // =========================
  // Handle input
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // Submit
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const updatedProduct = {
        ...product,
        name: form.name.trim(),
        description: form.description.trim(),
        price: parseFloat(form.price),
        colors: form.colors.split(",").map((c) => c.trim()),
        size: form.size.split(",").map((s) => s.trim()),
      };

      await onEdit(updatedProduct);

      handleClose();
    } catch (err) {
      setError(err.message || "Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Reset + Close
  // =========================
  const handleClose = () => {
    setForm({
      name: "",
      price: "",
      description: "",
      colors: "",
      size: "",
    });

    setError("");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4 p-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Edit Product</h3>

          <button
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 p-3 rounded-xl">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            required
            min="0"
            step="0.01"
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            name="colors"
            value={form.colors}
            onChange={handleChange}
            placeholder="Colors (red, blue)"
            required
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            name="size"
            value={form.size}
            onChange={handleChange}
            placeholder="Sizes (S, M, L)"
            required
            className="w-full p-3 border rounded-xl"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-3 border rounded-xl"
          />

          {/* Actions */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="flex-1 py-3 border rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3 bg-indigo-600 text-white rounded-xl"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EditProductModal;
