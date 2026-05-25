// services/address.js
import api from "../utils/axios";

export const getAddresses = () => api.get("/address");
export const createAddress = (data) => api.post("/address", data);
export const updateAddress = (id, data) => api.put(`/address/${id}`, data);
export const deleteAddress = (id) => api.delete(`/address/${id}`);