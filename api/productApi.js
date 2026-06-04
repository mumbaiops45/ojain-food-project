import api from "../utils/axios";

const PRODUCT_BASE = "/api/products";

// TOKEN CONFIG — never manually set Content-Type for FormData;
// axios auto-adds multipart/form-data with the correct boundary.
const getConfig = () => ({
  headers: {
    Authorization: `Bearer ${typeof window !== "undefined" ? localStorage.getItem("token") : ""}`,
  },
});

// GET ALL PRODUCTS
export const getAllProducts =
  async () => {
    const response = await api.get(
      PRODUCT_BASE
    );

    return response.data;
  };

// GET SINGLE PRODUCT
export const getSingleProduct =
  async (productId) => {
    const response = await api.get(
      `${PRODUCT_BASE}/${productId}`
    );

    return response.data;
  };

// CREATE PRODUCT
export const createProduct =
  async (data) => {
    const response = await api.post(
      PRODUCT_BASE,
      data,
      getConfig()
    );

    return response.data;
  };

// UPDATE PRODUCT
export const updateProduct =
  async (productId, data) => {
    const response = await api.put(
      `${PRODUCT_BASE}/${productId}`,
      data,
      getConfig()
    );

    return response.data;
  };

// DELETE PRODUCT
export const deleteProduct =
  async (productId) => {
    const response = await api.delete(
      `${PRODUCT_BASE}/${productId}`,
      getConfig()
    );

    return response.data;
  };

// VENDOR PRODUCTS
export const getVendorProducts =
  async () => {
    const response = await api.get(
      `${PRODUCT_BASE}/vendor/my-products`,
      getConfig()
    );

    return response.data;
  };

// APPROVE PRODUCT
export const approveProduct =
  async (productId) => {
    const response = await api.put(
      `${PRODUCT_BASE}/${productId}/approve`,
      {},
      getConfig()
    );

    return response.data;
  };

  // GET PRODUCTS BY CATEGORY
export const getProductsByCategory =
  async (categoryId) => {

    const response =
      await api.get(
        `/api/products/category/${categoryId}`
      );

    return response.data;
  };