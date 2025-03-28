import axios from "axios";

const API_URL = "http://localhost:5000/products";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addProduct = async (productData) => {
  const response = await axios.post(`${API_URL}/add`, productData);
  return response.data;
};

export const updateProduct = async (id, updatedData) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
