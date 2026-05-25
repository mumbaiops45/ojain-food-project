

import { getAllCategories,  getSingleCategory,
  createCategory,
  updateCategory,
  deleteCategory, } from "../api/categoryApi";

export const getCategoriesService = async () => {
  const res = await getAllCategories();
  return res;
};

export const getSingleCategoryService = async (id) => {
  const res = await getSingleCategory(id);
  return res;
};

export const createCategoryService = async (formData) => {
  const res = await createCategory(formData);
  return res;
};

export const updateCategoryService = async (id, formData) => {
  const res = await updateCategory(id, formData);
  return res;
};

export const deleteCategoryService = async (id) => {
  const res = await deleteCategory(id);
  return res;
};