import React, { useEffect, useState } from "react";
import decoration from "../assets/images/decoration.png";
import DashboardFooter from "./CompanyUserDahboard/DashboardFooter";
import Sidebar from "./CompanyUserDahboard/Sidebar";

import DashboardContent from "./CompanyUserDahboard/Dashboard";
import TalentsContent from "./CompanyUserDahboard/Talents";
import TransactionsContent from "./CompanyUserDahboard/Transactions";
import SettingsContent from "./CompanyUserDahboard/Settings";
import ProfileContent from "./CompanyUserDahboard/Profile";
import RecruitmentContent from "./CompanyUserDahboard/Recruitment";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./CompanyUserDahboard/Navbar";

const UserDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getQueryParam = (key) => {
    return new URLSearchParams(location.search).get(key);
  };

  const [activeTab, setActiveTab] = useState(
    getQueryParam("tab") || "dashboard"
  );

  useEffect(() => {
    const currentTab = getQueryParam("tab");
    if (currentTab && currentTab !== activeTab) {
      setActiveTab(currentTab);
    }
  }, [location.search]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    navigate(`/company-dashboard?tab=${tabName}`);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />;
      case "talents":
        return <TalentsContent />;
      case "transactions":
        return <TransactionsContent />;
      case "settings":
        return <SettingsContent />;
      case "profile":
        return <ProfileContent />;
      case "recruitment":
        return <RecruitmentContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div
      className="layout-wrapper inter-font"
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        height:'100vh'
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          flexBasis: "25%",
          flexGrow: 1,
          maxWidth: "300px",
          minWidth: "250px",
          width: "100%",
        }}
      >
        <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />
      </div>

      {/* Content + Decoration Row */}
      <div
        style={{
          flexBasis: "75%",
          flexGrow: 1,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          padding: "20px",
        }}
      >
        {/* Main Content Area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <div style={{ flexGrow: 1 }}>{renderContent()}</div>
          <DashboardFooter />
        </div>

        {/* Decoration Image (Right Side) */}
        <div
          className="d-none d-lg-flex"
          style={{
            width: "40px",
            marginLeft: "10px",
            alignItems: "center",
          }}
        >
          <img
            src={decoration}
            alt="Decoration"
            style={{
              width: "30px",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
