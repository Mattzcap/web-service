import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const ForgotPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
      setTimeout(() => navigate("/"), 5000); // Redirect after 5 seconds
    } catch (error) {
      console.error("Error sending reset email:", error.message);
      setError("Failed to send reset email. Please check your email and try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-400 text-white px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg flex flex-col text-gray-900 forgot-password-container">
        <h2 className="text-3xl font-bold text-center mb-4">Forgot Password?</h2>

        {message && <p className="text-green-600 text-sm text-center">{message}</p>}
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <form onSubmit={handleForgotPassword} className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 input-field"
              placeholder="Enter your registered email"
            />
          </div>

          <button type="submit" className="w-full py-3 text-lg bg-gray-700 text-white rounded-lg hover:bg-gray-800">
            Send Reset Link
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Remembered your password? <a href="/" className="text-gray-600 hover:underline link-text">Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPage;
