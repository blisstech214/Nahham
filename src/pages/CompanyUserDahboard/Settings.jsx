import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import DashboardFooter from "./DashboardFooter";

import Email from "../../components/Settings/Email";
import Password from "../../components/Settings/Password";
import Notification from "../../components/Settings/Notification";
import PaymentMethod from "../../components/Settings/PaymentMethod";
import TermsAndConditions from "../../components/Settings/TermsAndConditions";
import Support from "../../components/Settings/Support";
import PrivacyAndPolicy from "../../components/Settings/PrivacyAndPolicy";
// import Security from "../../components/Settings/Security";
// import DeleteAccount from "../../components/Settings/DeleteAccount";

const Settings = () => {
  const location = useLocation();

  const getQueryParam = (key) => {
    return new URLSearchParams(location.search).get(key);
  };

  const [activeTab, setActiveTab] = useState(
    getQueryParam("subTab") || "account"
  );

  useEffect(() => {
    const subTab = getQueryParam("subTab");
    if (subTab) {
      setActiveTab(subTab);
    }
  }, [location.search]);

  const tabs = [
    { id: "account", label: "Account" },
    { id: "password", label: "Change Password" },
    { id: "notification", label: "Notification" },
    // { id: "security", label: "Security" },
    { id: "paymentMethod", label: "Payment Method" },
    { id: "privacyAndPolicy", label: "Privacy and Policy" },
    { id: "termsAndConditions", label: "Terms & Conditions" },
    { id: "support", label: "Support" },
    // { id: "deleteAccount", label: "Delete Account" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return <Email />;
      case "password":
        return <Password />;
      case "notification":
        return <Notification />;
      case "paymentMethod":
        return <PaymentMethod />;
      case "privacyAndPolicy":
        return <PrivacyAndPolicy />;
      case "termsAndConditions":
        return <TermsAndConditions />;
      case "support":
        return <Support />;
      // case "security":
      //   return <Security />;
      // case "deleteAccount":
      //   return <DeleteAccount />;
      default:
        return <Email />;
    }
  };

  return (
    <div className="inter-font mb-5" style={{ minHeight: "100vh" }}>
      <div
        className="inter-font container pb-4 ps-4 bg-white rounded-2 shadow mt-4"
        style={{ maxWidth: "900px" }}
      >
        <div className="inter-font row align-items-start">
          {/* Sidebar */}
          <div
            className="inter-font col-md-3 pt-5 pe-0"
            style={{ borderRight: "1.5px solid rgb(229, 229, 229)" }}
          >
            <h5 className="inter-font inter-font pt-4">Settings</h5>
            <div className="inter-font mb-3">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={ `inter-font my-5 border-bottom w-100 pb-4 ${
                    activeTab === tab.id
                      ? "text-dark fw-semibold"
                      : "text-muted"
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

          {/* Content */}
          <div className="inter-font col-md-9">
            <div className="inter-font tab-content mt-4">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
