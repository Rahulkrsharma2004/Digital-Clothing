import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsUserLoggedIn, setIsAdminLoggedIn, setUserName, setAdminName } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://digital-clothing-server.vercel.app/users/login",
        { email, password },
        { withCredentials: true }
      );

      console.log(response)

      if (response.data.message === "Login successful.") {
        let firstName = response.data.user.name.charAt(0).toUpperCase();
        alert("login successful")
        if (response.data.user.isAdmin) {
        //   setIsAdminLoggedIn(true);
        //   setAdminName(firstName);
        //   localStorage.setItem("isAdminLoggedIn", true);
        //   localStorage.setItem("adminID", response.data.user._id);
        //   localStorage.setItem("adminName", firstName);
          toast.success("Admin Login successful!");
          navigate("/admin-dashboard");
        } else {
          setIsUserLoggedIn(true);
          setUserName(firstName);
          localStorage.setItem("isUserLoggedIn", true);
          localStorage.setItem("userID", response.data.user._id);
          localStorage.setItem("userName", firstName);
          toast.success("User Login successful!");
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <ToastContainer />
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Login Account</h1>
      
      <div className="flex flex-col bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <div className="flex items-center border-b border-gray-600 py-2">
            <FaEnvelope className="text-blue-400 mr-2" />
            <input
              type="email"
              className="bg-transparent w-full outline-none text-white"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center border-b border-gray-600 py-2">
            <FaLock className="text-blue-400 mr-2" />
            <input
              type="password"
              className="bg-transparent w-full outline-none text-white"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition py-2 rounded text-white font-semibold mt-4"
          >
            Login
          </button>
        </form>

        {/* Register Redirect */}
        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
