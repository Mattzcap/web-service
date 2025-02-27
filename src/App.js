import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignUpPage";
import ForgotPage from "./pages/ForgotPage";
import EmailForgot from "./pages/EmailForgot";
import DashBoard from "./pages/DashBoard";
import AdvertisementManagement from "./pages/AdvertisementManagement";
import TaxiFleetManagement from "./pages/TaxiFleetManagement";
import AnalyticsAndReporting from "./pages/AnalyticsAndReporting";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot" element={<ForgotPage />} />
      <Route path="/emailforgot" element={<EmailForgot />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/advertisementmanagement" element={<AdvertisementManagement />} />
      <Route path="/taxifleemanagement" element={<TaxiFleetManagement />} />
      <Route path="/analyticsandreporting" element={<AnalyticsAndReporting />} />
      <Route path="/sidebar" element={<Sidebar />} />
    </Routes>
  );
}

export default App;
