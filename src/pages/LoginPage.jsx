import React, { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";  // Import Firebase auth
import { useNavigate } from "react-router-dom";  // For navigation
import "../styles/App.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();  // React Router navigation

  // Function to handle Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");
      navigate("/landing");  // Redirect after successful login
    } catch (error) {
      console.error("Login error:", error.message);
      setError("Invalid email or password. Please try again.");
    }
  };

  // Function to handle Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Google Login successful!");
      navigate("/landing"); // Redirect after successful Google login
    } catch (error) {
      console.error("Google Login error:", error.message);
      setError("Failed to sign in with Google. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-800 to-red-800 text-white px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg flex flex-col text-gray-900 login-container">
        <h2 className="text-3xl font-bold text-center mb-4">Login to AuAdsTri</h2>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 input-field"
              placeholder="Enter your email"
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
              
            </div>
          </div>
          
          <div className="text-right">
            <a href="/forgot-password" className="text-green-600 hover:underline text-sm link-text">Forgot password?</a>
          </div>

          
        </form>

        {/* Google Sign-in Button */}

        <div className="button-container">
          <button type="submit" className="w-full py-3 text-lg primary">
            Sign in
          </button>

          <button 
            onClick={handleGoogleLogin} 
            className="w-full py-3 text-lg google-signin"
          >
            <img 
              src="https://img.icons8.com/color/24/000000/google-logo.png" 
              alt="Google Logo" 
              className="mr-2" 
            />
            Sign in with Google
          </button>
        </div>

        <p className="text-center text-gray-600 mt-6 text-sm">
          New to AuAdsTri? <a href="/signup" className="text-green-600 hover:underline link-text">Join now</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
