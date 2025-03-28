import { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  {
    url: "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014029787-Orange-RUSTCORAL-1000014029787_01-2100.jpg",
    title: "New Season Arrivals",
    description: "Discover the latest trends and styles.",
  },
  {
    url: "https://zerrin.com/wp-content/uploads/2022/08/DressX-x-Meta-.png",
    title: "Exclusive Deals",
    description: "Limited time offers on top brands.",
  },
  {
    url: "https://th.bing.com/th/id/OIP.2HPShaAbo6sB6MiFrLu0SwHaGI?rs=1&pid=ImgDetMain",
    title: "Shop the Best",
    description: "Hand-picked collections for every occasion.",
  },
];

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full  mt-28">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={3000}
          className=""
        >
          {images.map((img, index) => (
            <div key={index} className="relative h-[250px] md:h-[450px]">
              <img
                src={img.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-[full] object-cover"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40 p-4">
                <h2 className="text-2xl md:text-4xl font-bold">{img.title}</h2>
                <p className="mt-2 text-sm md:text-lg">{img.description}</p>
                <Link
                  to="/products-dashboard"
                  className="mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Trending Now
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {/* Sample Products with Different Images */}
          {[
            {
              id: 1,
              name: "Digital Fashion Dress",
              price: 2999,
              image:
                "https://th.bing.com/th/id/OIP.PMabyeQSYz9HfMHOzSJlUAHaIG?w=183&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            },
            {
              id: 2,
              name: "Virtual Reality Jacket",
              price: 4999,
              image:
                "https://th.bing.com/th/id/OIP.K2BAAn9rqHQ5YDSwMmsYtAHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            },
            {
              id: 3,
              name: "Smart LED Suit",
              price: 5999,
              image:
                "https://www.bing.com/th/id/OIP.bfwK0uDcJ4-w04b-SBiY-wHaHa?w=183&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            },
          ].map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 md:h-72 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600">Rs - {product.price}</p>
                <Link
                  to="/products-dashboard"
                  className="mt-2 block text-blue-500 hover:underline"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-500 text-white text-center py-12 px-4">
        <h2 className="text-3xl font-bold">Stay Ahead in Fashion</h2>
        <p className="mt-3 text-lg">
          Subscribe to get exclusive offers and the latest fashion updates.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg sm:rounded-l-lg w-64 text-black outline-none"
          />
          <button className="bg-black px-6 py-3 rounded-lg sm:rounded-r-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
