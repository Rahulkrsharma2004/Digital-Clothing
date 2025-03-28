import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ProductForm = ({ selectedProduct, clearSelection, refreshList }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedProduct) {
        await axios.put(
          `https://digital-clothing-server.vercel.app/products/${selectedProduct._id}`,
          product,
          { withCredentials: true }
        );
        alert("Product updated successfully!");
        toast.success("Product updated successfully");
      } else {
        await axios.post(
          "https://digital-clothing-server.vercel.app/products/add",
          product,
          { withCredentials: true }
        );
        alert("Product added successfully!");
        toast.success("Product added successfully");
      }
      refreshList();
      clearSelection();
      setProduct({ name: "", description: "", price: "", image: "" });
    } catch (error) {
      toast.error("Error saving product");
    }
  };

  return (
    <div>
      <h2 className="text-2xl text-center font-bold">
        {selectedProduct ? "Edit Product" : "Add Product"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded shadow-md"
      >
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {selectedProduct ? "Update" : "Add"} Product
        </button>
        {selectedProduct && (
          <button
            type="button"
            onClick={clearSelection}
            className="ml-2 bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default ProductForm;
