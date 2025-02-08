import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route - Login Page */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Landing Page Route */}
        <Route path="/landing" element={<LandingPage />} />

        {/* Default Route - Login Page */}
        <Route path="/signup" element={<SignupPage />} />

      </Routes>
    </Router>
  );
}



export default App;
