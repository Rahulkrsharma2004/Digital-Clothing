import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://digital-clothing-server.vercel.app/products",
        { withCredentials: true }
      );
      setProducts(response.data.products);
    } catch (error) {
      toast.error("Error fetching products");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://digital-clothing-server.vercel.app/products/${id}`,
        { withCredentials: true }
      );
      toast.success("Product deleted successfully");
      fetchProducts();
    } catch (error) {
      toast.error("Error deleting product");
    }
  };

  return (
    <div>
      <h2 className="text-2xl text-center font-bold">Product List</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-3">Image</th>
            <th className="p-3">Name</th>
            <th className="p-3">Description</th>
            <th className="p-3">Price</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="border-b">
              <td className="p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="p-3">{product.name}</td>
              <td className="p-3">{product.description}</td>
              <td className="p-3">Rs-{product.price}</td>
              <td className="p-3">
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                  onClick={() => onEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
