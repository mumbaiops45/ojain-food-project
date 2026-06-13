"use client";

import { create } from "zustand";
import {
  getCategoriesService,
  getSingleCategoryService,
  createCategoryService,
  updateCategoryService,
  deleteCategoryService,
} from "../services/category.service";

let fetchRequest = null;

export const useCategoryStore = create((set, get) => ({
  categories: [],
  singleCategory: null,
  loading: false,
  error: null,

  fetchCategories: async ({ force = false } = {}) => {
    const existing = get().categories;
    if (existing.length > 0 && !force) {
      getCategoriesService()
        .then((data) => {
          const list = Array.isArray(data) ? data : data?.categories ?? [];
          set({ categories: list });
        })
        .catch(() => {});
      return;
    }

    if (fetchRequest) return fetchRequest;
    fetchRequest = (async () => {
      set({ loading: true, error: null });
      try {
        const data = await getCategoriesService();
        const list = Array.isArray(data) ? data : data?.categories ?? [];
        set({ categories: list, loading: false });
      } catch (error) {
        set({ error: error.message, loading: false });
      } finally {
        fetchRequest = null;
      }
    })();
    return fetchRequest;
  },

  fetchSingleCategory: async (id) => {
    set({ loading: true, error: null });
    try {
      const data = await getSingleCategoryService(id);
      set({ singleCategory: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  createCategory: async (formData) => {
    set({ loading: true, error: null });
    try {
      const newCategory = await createCategoryService(formData);
      set((state) => ({
        categories: [newCategory, ...state.categories],
        loading: false,
      }));
      return newCategory;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  updateCategory: async (id, formData) => {
    set({ loading: true, error: null });
    try {
      const updated = await updateCategoryService(id, formData);
      set((state) => ({
        categories: state.categories.map((cat) =>
          cat._id === id ? updated : cat
        ),
        singleCategory: updated,
        loading: false,
      }));
      return updated;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  deleteCategory: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteCategoryService(id);
      set((state) => ({
        categories: state.categories.filter((cat) => cat._id !== id),
        singleCategory: null,
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },
}));
