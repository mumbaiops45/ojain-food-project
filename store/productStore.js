"use client";

import { create } from "zustand";

import {
  getProductsService,
  getSingleProductService,
  createProductService,
  updateProductService,
  deleteProductService,
  getVendorProductsService,
  approveProductService,
  getProductsByCategoryService,

} from "../services/product.service";

export const useProductStore = create(
  (set) => ({
    products: [],
    singleProduct: null,
    loading: false,
    error: null,

    // GET ALL
    fetchProducts: async () => {
      set({
        loading: true,
        error: null,
      });

      try {
        const data =
          await getProductsService();

        // Normalize: backend may return { products: [] } or []
        const list = Array.isArray(data)
          ? data
          : data?.products ?? data?.data ?? [];

        set({
          products: list,
          loading: false,
        });
      } catch (error) {
        set({
          error: error.message,
          loading: false,
        });
      }
    },

    // GET SINGLE
    fetchSingleProduct: async (id) => {
      set({
        loading: true,
        error: null,
      });

      try {
        const data =
          await getSingleProductService(id);

        set({
          singleProduct: data,
          loading: false,
        });
      } catch (error) {
        set({
          error: error.message,
          loading: false,
        });
      }
    },

    // CREATE
    createProduct: async (data) => {
      set({
        loading: true,
        error: null,
      });

      try {
        const res =
          await createProductService(data);

        set((state) => ({
          products: [
            res.product,
            ...state.products,
          ],
          loading: false,
        }));

        return res;
      } catch (error) {
        set({
          error: error.message,
          loading: false,
        });

        throw error;
      }
    },

    // UPDATE
    updateProduct: async (id, data) => {
      set({
        loading: true,
        error: null,
      });

      try {
        const updated =
          await updateProductService(
            id,
            data
          );

        set((state) => ({
          products: state.products.map(
            (product) =>
              product._id === id
                ? updated.updatedProduct
                : product
          ),
          singleProduct:
            updated.updatedProduct,
          loading: false,
        }));

        return updated;
      } catch (error) {
        set({
          error: error.message,
          loading: false,
        });

        throw error;
      }
    },

    // DELETE
    deleteProduct: async (id) => {
      set({
        loading: true,
        error: null,
      });

      try {
        await deleteProductService(id);

        set((state) => ({
          products: state.products.filter(
            (product) =>
              product._id !== id
          ),
          loading: false,
        }));
      } catch (error) {
        set({
          error: error.message,
          loading: false,
        });

        throw error;
      }
    },

    // VENDOR PRODUCTS
    fetchVendorProducts: async () => {
      set({
        loading: true,
        error: null,
      });

      try {
        const data =
          await getVendorProductsService();

        set({
          products: data,
          loading: false,
        });
      } catch (error) {
        set({
          error: error.message,
          loading: false,
        });
      }
    },

    // APPROVE PRODUCT
    approveProduct: async (id) => {
      set({
        loading: true,
        error: null,
      });

      try {
        const res =
          await approveProductService(id);

        set({
          loading: false,
        });

        return res;
      } catch (error) {
        set({
          error: error.message,
          loading: false,
        });

        throw error;
      }
    },

    fetchProductsByCategory: async (categoryId) => {
      set({ loading: true, error: null });
      try {
        const data = await getProductsByCategoryService(categoryId);
        // Normalize: backend may return { products: [] } or []
        const list = Array.isArray(data)
          ? data
          : data?.products ?? data?.data ?? [];
        set({ products: list, loading: false });
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  })
);  