import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "../styles/App.css"; // Ensure styles are imported

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Sign-up successful!");
      navigate("/"); // Redirect after successful sign-up
    } catch (error) {
      console.error("Sign-up error:", error.message);
      setError("Error signing up. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-800 to-red-800 text-white px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg flex flex-col text-gray-900 signup-container">
        <h2 className="text-3xl font-bold text-center mb-4">Sign Up for AuAdsTri</h2>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <form onSubmit={handleSignUp} className="space-y-5">
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

          <button type="submit" className="w-full py-3 text-lg primary">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account? <a href="/" className="text-green-600 hover:underline link-text">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
