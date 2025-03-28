import { useState } from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";

const AdminDashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductForm 
          selectedProduct={selectedProduct} 
          clearSelection={() => setSelectedProduct(null)} 
          refreshList={() => window.location.reload()} 
        />
        <ProductList onEdit={setSelectedProduct} />
      </div>
    </div>
  );
};

export default AdminDashboard;
