import React, { useState } from "react";
import '../styles/App.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    console.log("Password reset successful for:", formData);
    // Add password reset logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-white text-black px-6">
      <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-lg flex flex-col reset-password-container">
        <h2 className="text-4xl font-bold text-center mb-6">Reset Password</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Old Password Input */}
          <div className="password-container">
            <label className="block font-medium text-gray-700 mb-2">Old Password</label>
            <div className="relative w-full">
              <input
                type={showOldPassword ? "text" : "password"}
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-12"
                placeholder="Enter old password"
              />
              <span
                className="eye-icon"
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
              </span>
            </div>
          </div>

          {/* New Password Input */}
          <div className="password-container">
            <label className="block font-medium text-gray-700 mb-2">New Password</label>
            <div className="relative w-full">
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-12"
                placeholder="Enter new password"
              />
              <span
                className="eye-icon"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
              </span>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="password-container">
            <label className="block font-medium text-gray-700 mb-2">Confirm Password</label>
            <div className="relative w-full">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black pr-12"
                placeholder="Confirm new password"
              />
              <span
                className="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
              </span>
            </div>
          </div>

          {/* Reset Password Button */}
          <button type="submit" className="w-full py-4 text-lg bg-gray-700 text-white rounded-lg hover:bg-gray-800">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
