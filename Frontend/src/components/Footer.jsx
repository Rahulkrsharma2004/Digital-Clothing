const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-12 w-full mt-100px">
        <div className="container mx-auto px-1">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-wider">Digital Clothing</h1>
              <p className="text-sm mt-2 opacity-75">
                Elevate your fashion game with the latest trends and styles. Quality you can trust, designs you'll love.
              </p>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold text-white">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="hover:text-white transition duration-300">Home</a></li>
                <li><a href="/shop" className="hover:text-white transition duration-300">Shop</a></li>
                <li><a href="/about" className="hover:text-white transition duration-300">About</a></li>
                <li><a href="/contact" className="hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold text-white">Support</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-white transition duration-300">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Terms & Conditions</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold text-white">Follow Us</h3>
              <div className="flex space-x-4 mt-3">
                <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300 text-2xl">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300 text-2xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300 text-2xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition duration-300 text-2xl">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-700 mt-10 pt-6 text-center">
            <p className="text-sm opacity-75">&copy; 2024 Digital Clothing. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  