import api from "../utils/axios";
const CATEGORY_BASE = "/category";

// Get all categories
export const getAllCategories = async () => {
  const response = await api.get(`${CATEGORY_BASE}/all`);
  // assuming backend returns { categories: [...] } or array directly
  return response.data.categories || response.data || [];
};

// Get single category by ID
export const getSingleCategory = async (categoryId) => {
  const response = await api.get(`${CATEGORY_BASE}/${categoryId}`);
  return response.data;
};

// Create category (with image file)
export const createCategory = async (formData) => {
  const response = await api.post(`${CATEGORY_BASE}/create`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Update category (with optional image file)
export const updateCategory = async (categoryId, formData) => {
  const response = await api.put(`${CATEGORY_BASE}/update/${categoryId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Delete category
export const deleteCategory = async (categoryId) => {
  const response = await api.delete(`${CATEGORY_BASE}/delete/${categoryId}`);
  return response.data;
};