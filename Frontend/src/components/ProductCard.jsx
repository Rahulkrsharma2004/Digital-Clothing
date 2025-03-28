import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductCard = ({ product, addToCart }) => {
  const { name, description, price, image, customizationOptions } = product;
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCustomization, setSelectedCustomization] = useState(
    customizationOptions.length > 0 ? customizationOptions[0] : ''
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    const productWithCustomization = {
      ...product,
      selectedCustomization,
    };
    addToCart(productWithCustomization);
  };

  return (
    <div
      className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative">
        {loading ? (
          <Skeleton height={240} />
        ) : (
          <img src={image} alt={name} className="w-full h-60 object-cover" />
        )}
        {isHovered && !loading && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600 transition"
              onClick={handleAddToCart}
            >
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col items-center">
        {loading ? (
          <>
            <Skeleton width={150} height={20} />
            <Skeleton width={200} height={15} className="mt-2" />
            <Skeleton width={100} height={25} className="mt-2" />
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600 mt-1">
              {description.length > 60 ? `${description.slice(0, 60)}...` : description}
            </p>
            <p className="text-xl font-bold text-indigo-600 mt-2">Rs-{price}</p>
          </>
        )}

        {/* Customization Options */}
        {!loading && customizationOptions.length > 0 && (
          <div className="mt-3 w-full">
            <label htmlFor={`customization-${name}`} className="block text-sm font-medium text-gray-700">
              Choose an option:
            </label>
            <select
              id={`customization-${name}`}
              value={selectedCustomization}
              onChange={(e) => setSelectedCustomization(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {customizationOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
