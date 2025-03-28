import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product, addToCart }) => {
  const { name, description, price, image, customizationOptions } = product;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-60 object-cover" />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <button 
              className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition"
              onClick={() => addToCart(product)}
            >
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description.slice(0, 60)}...</p>
        <p className="text-xl font-bold text-indigo-600 mt-2">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
