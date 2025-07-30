import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import decoration from "../assets/images/decorationPiece.png";
import Sidebar from "./TalentUserDashboard/Sidebar";
import DashboardContent from "./TalentUserDashboard/Dashboard";
import TalentsContent from "./TalentUserDashboard/Projects";
import TransactionsContent from "./TalentUserDashboard/History";
import SettingsContent from "./TalentUserDashboard/Settings";
import ProfileContent from "./TalentUserDashboard/Profile";
import RecruitmentContent from "./TalentUserDashboard/Earnings";
import Navbar from "./TalentUserDashboard/Navbar";
import DashboardFooter from "./TalentUserDashboard/DashboardFooter";

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
      {/* <div
        className="inter-font layout-wrapper d-flex flex-column inter-font overflow-y-hidden overflow-x-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="inter-font left-strip"
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
              className="inter-font strip-icon"
              style={{ width: "30px" }}
            />
          ))}
        </div>

        <div className="inter-font container-fluid">
          <div
            className="inter-font row"
            // style={{ height: "100vh", overflow: "auto" }}
          >
            <div className="inter-font col-md-2 p-0">
              <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />
            </div>
            <div
              className="inter-font col-md-10 content mt-2 d-flex flex-column inter-font overflow-y-auto overflow-x-hidden"
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
      </div> */}

      <div
        className="inter-font layout-wrapper inter-font"
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          height: "100vh",
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
            minHeight: "100%",
            display: "flex",
            flexDirection: "row",
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
            // padding: "20px",
            background:
              "linear-gradient(to left, rgba(255, 245, 241, 1), rgba(241, 239, 235, 1))",
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
            className="inter-font pt-3"
          >
            <Navbar />
            <div style={{ flexGrow: 1 }} className="inter-font px-5">
              {renderContent()}
            </div>
            <DashboardFooter />
          </div>

          {/* Decoration Image (Right Side) */}
          <div
            className="inter-font d-none d-lg-flex"
            style={
              {
                // width: "40px",
                // marginLeft: "10px",
                // alignItems: "center",
              }
            }
          >
            <img
              src={decoration}
              alt="Decoration"
              style={{
                width: "20px",
                height: "100%",
                // objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
