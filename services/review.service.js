import api from "../utils/axios";

export const reviewAPI = {
  createReview: (data) =>
    api.post("/reviews", data),

  getProductReviews: (productId) =>
    api.get(`/reviews/product/${productId}`),

  deleteReview: (id) =>
    api.delete(`/reviews/${id}`),
};