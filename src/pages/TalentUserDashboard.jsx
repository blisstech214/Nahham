import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import decoration from "../assets/images/decoration.png";
import Sidebar from "./TalentUserDashboard/Sidebar";
import DashboardContent from "./TalentUserDashboard/Dashboard";
import TalentsContent from "./TalentUserDashboard/Projects";
import TransactionsContent from "./TalentUserDashboard/History";
import SettingsContent from "./TalentUserDashboard/Settings";
import ProfileContent from "./TalentUserDashboard/Profile";
import RecruitmentContent from "./TalentUserDashboard/Earnings";

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

  // Enhanced setter that also updates the URL
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    navigate(`/talent/dashboard?tab=${tabName}`);
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
    <>
      <div
        className="layout-wrapper d-flex flex-column inter-font overflow-y-hidden overflow-x-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Decoration strip */}
        <div
          className="left-strip"
          style={{
            position: "absolute",
            right: "-12px",
            top: "0px",
            opacity: "0.3",
            zIndex: 1,
            paddingTop: "0px",
          }}
        >
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={decoration}
              alt="Decoration"
              className="strip-icon"
              style={{ width: "30px" }}
            />
          ))}
        </div>

        <div className="container-fluid">
          <div
            className="row"
            // style={{ height: "100vh", overflow: "auto" }}
          >
            <div className="col-md-2 p-0">
              <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />
            </div>
            <div
              className="col-md-10 content mt-2 d-flex flex-column inter-font overflow-y-auto overflow-x-hidden"
              style={{
                height: "100%",
                // overflowY: "scroll",
                // overflowX: "hidden",
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE & Edge
                marginBottom: "50px",
                paddingLeft: "40px"
              }}
            >
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
