import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUpPage";
import ForgotPage from "./pages/ForgotPage";
import EmailForgot from "./pages/EmailForgot";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route - Login Page */}
        <Route path="/" element={<ForgotPage />} />
        
        {/* Landing Page Route */}
        <Route path="/landing" element={<LandingPage />} />

        {/* Default Route - Login Page */}
        <Route path="/signup" element={<SignupPage />} />

        {/* Default Route - Forgot Page */}
        <Route path="/forgot" element={<ForgotPage />} />

        {/* Default Route - Forgot Page */}
        <Route path="/emailforgot" element={<EmailForgot />} />        

        

      </Routes>
    </Router>
  );
}



export default App;
