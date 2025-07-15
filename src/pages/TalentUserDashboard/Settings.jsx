import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi2";

import profile from "../../assets/images/Abdulluah-Talent.png";
import UAE from "../../assets/images/UAE flag.jpeg";

import Navbar from "./Navbar";
import DashboardFooter from "./DashboardFooter";

import Email from "../../components/Settings/Email";
import Password from "../../components/Settings/Password";
import Notification from "../../components/Settings/Notification";
import Security from "../../components/Settings/Security";
import PaymentMethod from "../../components/Settings/PaymentMethod";
import DeleteAccount from "../../components/Settings/DeleteAccount";
import TermsAndConditions from "../../components/Settings/TermsAndConditions";
import Support from "../../components/Settings/Support";
import PrivacyAndPolicy from "../../components/Settings/PrivacyAndPolicy";
import { useLocation } from "react-router-dom";

const Settings = () => {
  const location = useLocation();

  const getQueryParam = (key) => {
    return new URLSearchParams(location.search).get(key);
  };

  const [activeTab, setActiveTab] = useState(
    getQueryParam("subTab") || "account"
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBack = () => {
    setIsEditing(false);
  };

  return (
    <div
      className="main-bg"
      style={{ minHeight: "100vh", background: "#f8f9fa" }}
    >
      <div className="flex-grow-1 px-5 inp-login">
        <Navbar />
      </div>
      <div
        className="container pb-4 ps-4 bg-white rounded-2 shadow mt-4"
        style={{ maxWidth: "900px" }}
      >
        <div className="row align-items-start">
          <div
            className="col-md-3 pt-5 pe-0"
            style={{ borderRight: "1.5px solid rgb(229, 229, 229)" }}
          >
            <h5 className="inter-font pt-4">Settings</h5>
            <div className="mb-3">
              {[
                { id: "account", label: "Account" },
                { id: "password", label: "Change Password" },
                { id: "notification", label: "Notification" },
                // { id: "security", label: "Security" },
                { id: "paymentMethod", label: "Payment Method" },
                { id: "privacyAndPolicy", label: "Privacy and Policy" },
                { id: "termsAndConditions", label: "Terms & Conditions" },
                { id: "support", label: "Support" },
                // { id: "deleteAccount", label: "Delete Account" },
              ].map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`my-5 border-bottom w-100 pb-4 ${
                    activeTab === tab.id ? "text-dark" : "text-muted"
                  }`}
                  style={{
                    cursor: "pointer",
                    color: activeTab === tab.id ? "#000" : "#909090",
                    width: "fit-content",
                  }}
                >
                  {tab.label}
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-9">
            <div className="tab-content mt-4">
              {activeTab === "account" && <Email />}
              {activeTab === "password" && <Password />}
              {activeTab === "notification" && <Notification />}
              {/* {activeTab === "security" && <Security />} */}
              {activeTab === "paymentMethod" && <PaymentMethod />}
              {activeTab === "privacyAndPolicy" && <PrivacyAndPolicy />}
              {activeTab === "termsAndConditions" && <TermsAndConditions />}
              {activeTab === "support" && <Support />}
              {/* {activeTab === "deleteAccount" && <DeleteAccount />} */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Settings;
