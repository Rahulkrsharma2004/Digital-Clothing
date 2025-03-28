import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import { toast } from "react-toastify";

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      toast.error("Error fetching products");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
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
            <th className="p-3">Name</th>
            <th className="p-3">Description</th>
            <th className="p-3">Price</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="border-b">
              <td className="p-3">{product.name}</td>
              <td className="p-3">{product.description}</td>
              <td className="p-3">${product.price}</td>
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
