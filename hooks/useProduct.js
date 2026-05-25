import { useProductStore } from "../store/productStore";

export const useProduct = () => {
  const {
    products,
    singleProduct,
    loading,
    error,
    fetchProducts,
    fetchProductsByCategory,   // ← ADD THIS
    fetchSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    fetchVendorProducts,
    approveProduct,
  } = useProductStore();

  return {
    products,
    singleProduct,
    loading,
    error,
    fetchProducts,
    fetchProductsByCategory,   // ← EXPOSE IT
    fetchSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    fetchVendorProducts,
    approveProduct,
  };
};