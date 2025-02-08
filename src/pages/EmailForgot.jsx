import React, { useState } from "react";
import '../styles/App.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password request for:", email);
    // Add password reset logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-white text-black px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg flex flex-col forgot-password-container">
        <h2 className="text-3xl font-bold text-center mb-4">Forgot Password</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              value={email} 
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
          </div>

          {/* Reset Password Button */}
          <button type="submit" className="w-full py-3 text-lg bg-black text-white rounded-lg hover:bg-gray-800">
            Send Reset Link
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Remember your password? <a href="/login" className="text-black hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
