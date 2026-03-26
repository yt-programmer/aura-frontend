import { useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const AddProductModal = ({ open, onClose, onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: null,
    description: "",
    colors: "",
    size: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // Handle Inputs
  // =========================
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // =========================
  // Upload Image
  // =========================
  const uploadImage = async (file) => {
    const url = import.meta.env.VITE_CLOUDINARY;

    if (!url) throw new Error("Cloudinary URL not found");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "aura_store");

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Image upload failed");
    }

    const data = await res.json();

    if (!data.secure_url) {
      throw new Error("Invalid image response");
    }

    return data.secure_url;
  };

  // =========================
  // Submit
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const imageUrl = await uploadImage(form.image);

      const newProduct = {
        name: form.name.trim(),
        description: form.description.trim(),
        price: parseFloat(form.price),
        image: imageUrl,
        colors: form.colors.split(",").map((c) => c.trim()),
        size: form.size.split(",").map((s) => s.trim()),
      };

      await onAdd(newProduct);

      // reset form
      setForm({
        name: "",
        price: "",
        image: null,
        description: "",
        colors: "",
        size: "",
      });

      onClose();
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4 p-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Add New Product
          </h3>

          <button
            onClick={onClose}
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
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            name="colors"
            placeholder="Colors (red, blue, ...)"
            value={form.colors}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            name="size"
            placeholder="Sizes (S, M, L...)"
            value={form.size}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl"
          />

          {/* Actions */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border rounded-xl"
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3 bg-indigo-600 text-white rounded-xl"
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddProductModal;
