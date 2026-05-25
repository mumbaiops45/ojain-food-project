import {useCategoryStore} from "../store/categoryStore";

export const useCategory = () => {
  const {
    categories,
    singleCategory,
    loading,
    error,
    fetchCategories,
    fetchSingleCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  } = useCategoryStore();

  return {
    categories,
    singleCategory,
    loading,
    error,
    fetchCategories,
    fetchSingleCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  };
};