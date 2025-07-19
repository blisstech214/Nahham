import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BecomePartner from "../pages/BecomePartner";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsAndConditions";
import Aboutus from "../pages/AboutUs";
import Register from "../pages/Register";
import SelectCompany from "../pages/Company/SelectCompany";
import CompanyUserDashboard from "../pages/CompanyUserDashboard";
import Login from "../pages/Company/Login";
import TalentVerifyOTP from "../pages/Talent/VerifyOTP";
import UploadDocuments from "../pages/Company/UploadDocuments";
import CompanyVerifyOTP from "../pages/Company/VerifyOTP";

import TalentUserDashboard from "../pages/TalentUserDashboard";
import HireTheTalent from "../pages/CompanyUserDahboard/HireTheTalent";

const AppRouter = () => {
  // const basePath= process.env.REACT_APP_BASE_PATH;

  return (
    // <Router basename={basePath}>
    <Router>
      <Routes>
        {/* D */}
        <Route path="/" element={<HomePage />} />
        {/* D */}
        <Route path="/becomePartner" element={<BecomePartner />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/termsCondition" element={<TermsCondition />} />
        <Route path="/about-us" element={<Aboutus />} />
        {/* D */}
        <Route path="/register" element={<Register />} />
        <Route path="/company-dashboard" element={<CompanyUserDashboard />} />
{/* D */}
        <Route path="/company" element={<SelectCompany />} />
        {/* D */}
        <Route path="/company/login" element={<Login />} />
        {/* D */}
        <Route path="/company/verify-otp" element={<CompanyVerifyOTP />} />

        <Route path="/talent/dashboard" element={<TalentUserDashboard />} />
        {/* D */}
        <Route path="/talent/verify-otp" element={<TalentVerifyOTP />} />

        <Route path="/company/talent/hire" element={<HireTheTalent />} />
{/* D */}
        <Route path="/UploadDocuments" element={<UploadDocuments />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
