import { useEffect, useState } from "react";

const useGetProducts = (page, limit) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${import.meta.env.VITE_API}/products?page=${page}&limit=${limit}`,
      );
      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to fetch products");
        return;
      }

      setProducts(data.data.products);
    } catch (error) {
      setError(
        error.message ||
          error.errors[0] ||
          "An error occurred while fetching products",
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, [page, limit]);

  return { products, loading, error };
};

export default useGetProducts;
