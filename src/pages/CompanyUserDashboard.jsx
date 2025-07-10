import React, { useState } from "react";
import decoration from "../assets/images/decoration.png";
import DashboardFooter from "./CompanyUserDahboard/DashboardFooter";
import Sidebar from "./CompanyUserDahboard/Sidebar";

import DashboardContent from "./CompanyUserDahboard/Dashboard";
import TalentsContent from "./CompanyUserDahboard/Talents";
import TransactionsContent from "./CompanyUserDahboard/Transactions";
import SettingsContent from "./CompanyUserDahboard/Settings";
import ProfileContent from "./CompanyUserDahboard/Profile";
import RecruitmentContent from "./CompanyUserDahboard/Recruitment";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

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
          <div className="row" style={{ height: "100vh", overflow: "hidden" }}>
            <div className="col-md-2 p-0">
              <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div
              className="col-md-10 content px-4 py-3"
              style={{
                height: "100vh",
                overflowY: "scroll",
                overflowX: "hidden",
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE & Edge
              }}
            >
              {renderContent()}
              {/* <DashboardFooter /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
