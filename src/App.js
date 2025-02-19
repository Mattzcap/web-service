import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUpPage";
import ForgotPage from "./pages/ForgotPage";
import EmailForgot from "./pages/EmailForgot";
import DashBoard from "./pages/DashBoard";
import AdvertisementManagement from "./pages/AdvertisementManagement";
import TaxiFleetManagement from "./pages/TaxiFleetManagement";
import AnalyticsAndReporting from "./pages/AnalyticsAndReporting";


function App() {
  return (
    <Router>
      <Routes>

        {/* Default Route - Login Page */}
        <Route path="/" element={<TaxiFleetManagement />} />
       
        {/* Landing Page Route */}
        <Route path="/dashboard" element={<DashBoard />} />        
        
        {/* Landing Page Route */}
        <Route path="/landing" element={<LandingPage />} />

        {/* Default Route - Login Page */}
        <Route path="/signup" element={<SignupPage />} />

        {/* Default Route - Forgot Page */}
        <Route path="/forgot" element={<ForgotPage />} />

        {/* Default Route - Forgot Page */}
        <Route path="/emailforgot" element={<EmailForgot />} />   

        <Route path="/loginpage" element={<LoginPage />} />

        {/* Default Route - Login Page */}
        <Route path="/advertisemendmangement" element={<AdvertisementManagement />} />        

        {/* Default Route - Login Page */}
        <Route path="/taxifleemanagement" element={<TaxiFleetManagement />} />            

        {/* Default Route - Login Page */}
        <Route path="/aanalyticsandreporting" element={<AnalyticsAndReporting />} />  

        

      </Routes>
    </Router>
  );
}



export default App;
