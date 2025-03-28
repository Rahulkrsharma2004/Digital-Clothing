import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const {
    isUserLoggedIn,
    isAdminLoggedIn,
    setIsUserLoggedIn,
    setIsAdminLoggedIn,
    setUserName,
    setAdminName,
  } = useContext(AuthContext);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isUserLoggedIn");
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("userID");
    localStorage.removeItem("adminID");
    localStorage.removeItem("userName");
    localStorage.removeItem("adminName");

    setIsUserLoggedIn(false);
    setIsAdminLoggedIn(false);
    setUserName("");
    setAdminName("");

    navigate("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
      }`}
    >
      <div className="mx-auto px-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/zenbusiness/q_auto/v1/logaster/logaster-2019-02-t-digital-droom-logo-11.png"
            alt="Digital Clothing Logo"
            className="w-30 h-14 object-contain" 
          />
        </Link>

        <div className="flex items-center gap-10">
          <Link
            to="/products-dashboard"
            className="text-gray-700 hover:text-blue-500 transition font-semibold"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="flex items-center text-gray-700 hover:text-blue-500 transition font-semibold"
          >
            <FaShoppingCart className="mr-1" /> Cart
          </Link>

          {isUserLoggedIn || isAdminLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-600 transition font-semibold focus:outline-none"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-500 transition font-semibold"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-gray-700 hover:text-blue-500 transition font-semibold"
              >
                Signup
              </Link>
            </>
          )}
        </div>

        {(isUserLoggedIn || isAdminLoggedIn) && (
          <Link to="/profile" className="flex items-center space-x-2">
            <FaUserCircle className="text-3xl text-blue-500" />
            <span className="text-gray-700 font-semibold hidden md:inline">
              Profile
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
