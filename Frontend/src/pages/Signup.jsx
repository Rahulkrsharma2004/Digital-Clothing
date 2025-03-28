import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock, FaUserShield } from "react-icons/fa";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://digital-clothing-server.vercel.app/users/register",
        {
          name,
          email,
          password,
          isAdmin,
        }
      );
      console.log(response);
      if (response.data.message === "User registered successfully.") {
        toast.success(
          isAdmin ? "Admin Registration successful!" : "User Registration successful!"
        );
        alert('Registration successful');
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white mt-6">
      <ToastContainer />
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Register Account</h1>
      
      <div className="flex flex-col bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name Input */}
          <div className="flex items-center border-b border-gray-600 py-2">
            <FaUser className="text-blue-400 mr-2" />
            <input
              type="text"
              className="bg-transparent w-full outline-none text-white"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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

          {/* Admin Checkbox */}
          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              className="mr-2 h-5 w-5 accent-blue-500 cursor-pointer"
              checked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
            />
            <FaUserShield className="text-blue-400 mr-2" />
            <label className="cursor-pointer">Register as Admin</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition py-2 rounded text-white font-semibold mt-4"
          >
            Register
          </button>
        </form>

        {/* Login Redirect */}
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
