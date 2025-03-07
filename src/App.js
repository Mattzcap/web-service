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
import UploadsPage from "./pages/UploadsPage";
import LocationsPage from "./pages/LocationsPage";
import ScheduleDuration from "./pages/ScheduleDuration";
import CTRConversions from "./pages/CTRConversions";
import Sidebar from "./pages/Sidebar";
import RealTimeMap from "./RealTimeMap";
import AdminTicketingSystem from "./pages/AdminTicketingSystem";


function App() {
  return (
    <Routes>
      <Route path="/web-service" element={<LoginPage />} />
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
      <Route path="/uploadpage" element={<UploadsPage/>} />
      <Route path="/locationpage" element={<LocationsPage/>} />
      <Route path="/scheduleduration" element={<ScheduleDuration/>} />
      <Route path="/ctrconversions" element={<CTRConversions/>} />
      <Route path="/realtimemap" element={<RealTimeMap/>} />
      <Route path="/AdminTicketingSystem" element={<AdminTicketingSystem/>} />
    </Routes>
  );
}

export default App;
