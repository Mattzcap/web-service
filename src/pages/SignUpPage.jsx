import React, { useState } from "react";
import '../styles/App.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-white text-black px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg flex flex-col signup-container">
        <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName} 
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your full name"
            />
          </div>
          
          {/* Email */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email} 
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
          </div>
          
          {/* Password Field */}
          <div className="password-container">
            <label className="block font-medium text-gray-700 mb-2">Password</label>
            <input 
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password} 
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
            />
            <span 
              onClick={() => setShowPassword(!showPassword)}
              className="eye-icon"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          {/* Confirm Password Field */}
          <div className="password-container">
            <label className="block font-medium text-gray-700 mb-2">Confirm Password</label>
            <input 
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword} 
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Confirm your password"
            />
            <span 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="eye-icon"
            >
              {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>
          
          {/* Submit Button */}
          <button type="submit" className="w-full py-3 text-lg bg-black text-white rounded-lg hover:bg-gray-800">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account? <a href="/login" className="text-black hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
