import {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getVendorProducts,
  approveProduct,
  getProductsByCategory,
} from "../api/productApi";

export const getProductsService =
  async () => {
    return await getAllProducts();
  };

export const getSingleProductService =
  async (id) => {
    return await getSingleProduct(id);
  };

export const createProductService =
  async (data) => {
    return await createProduct(data);
  };

export const updateProductService =
  async (id, data) => {
    return await updateProduct(id, data);
  };

export const deleteProductService =
  async (id) => {
    return await deleteProduct(id);
  };

export const getVendorProductsService =
  async () => {
    return await getVendorProducts();
  };

export const approveProductService =
  async (id) => {
    return await approveProduct(id);
  };

// GET PRODUCTS BY CATEGORY
export const getProductsByCategoryService =
  async (categoryId) => {

    const res =
      await getProductsByCategory(
        categoryId
      );

    return res;
  };