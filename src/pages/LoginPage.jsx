import React, { useState } from "react";
import '../styles/App.css';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // Add authentication logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-800 to-red-800 text-white px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg flex flex-col text-gray-900 login-container">
        <h2 className="text-3xl font-bold text-center mb-4">Login to AuAdsTri</h2>

        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700 mb-2">Email or Phone</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 input-field"
              placeholder="Enter your email or phone"
            />
          </div>
          
          <div>
            <label className="block font-medium text-gray-700 mb-2">Password</label>
            <div className="relative password-container">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 input-field"
                placeholder="Enter your password"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-green-600 hover:text-green-800 text-sm password-toggle"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          
          <div className="text-right">
            <a href="/forgot-password" className="text-green-600 hover:underline text-sm link-text">Forgot password?</a>
          </div>

          <button type="submit" className="w-full py-3 text-lg bg-green-600 text-white rounded-lg hover:bg-green-700 primary-button">
            Sign in
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          New to AuAdsTri? <a href="/register" className="text-green-600 hover:underline link-text">Join now</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
