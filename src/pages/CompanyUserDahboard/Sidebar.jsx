import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GoGear } from "react-icons/go";
import { BsGraphUp } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import decorationPiece from "../../assets/images/strip-decoration.png";
import logo from "../../assets/images/footer-img.png";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    {
      id: "dashboard",
      icon: <MdOutlineDashboard size={20} />,
      label: "Dashboard",
    },
    {
      id: "profile",
      icon: <CgProfile size={20} />,
      label: "Company Profile",
    },
    {
      id: "talents",
      icon: <FiUsers size={20} />,
      label: "Talents",
    },
    {
      id: "recruitment",
      icon: <GoChecklist size={20} />,
      label: "Recruitment History",
    },
    {
      id: "transactions",
      icon: <BsGraphUp size={20} />,
      label: "Transactions",
    },
    {
      id: "settings",
      icon: <GoGear size={20} />,
      label: "Settings",
    },
  ];

  return (
    <div
      className="d-flex flex-column p-4 position-relative"
      style={{
        background: "#411318",
        width: "280px",
        color: "white",
        height: "100vh",
      }}
    >
      {/* Decoration strips */}
      <div
        className="left-strip"
        style={{
          position: "absolute",
          top: "0px",
          right: "5px",
          paddingTop: "0px"
        }}
      >
        {[...Array(2)].map((_, i) => (
          <img
            key={i}
            src={decorationPiece}
            alt="Decoration"
            style={{ width: "35px" }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="text-center mb-5">
        <img src={logo} className="w-50" alt="Company Logo" />
      </div>

      {/* Navigation */}
      <nav className="flex-grow-1">
        <ul className="list-unstyled">
          {navItems.map((item) => (
            <li key={item.id} className="mb-4">
              <div
                className={`d-flex align-items-center cursor-pointer hover-highlight ${
                  activeTab === item.id ? "active-nav-item" : ""
                }`}
                onClick={() => setActiveTab(item.id)}
                style={{ padding: "8px 0" }}
              >
                <span className="icon-wrapper" style={{ width: "24px" }}>
                  {item.icon}
                </span>
                <span className="ms-3 inter-font fw-light">{item.label}</span>

                {/* Active indicator */}
                {activeTab === item.id && (
                  <div
                    style={{
                      width: "30px",
                      height: "2px",
                      backgroundColor: "rgba(231, 142, 123, 1)",
                      // marginLeft: "auto",
                      position: "absolute",
                      bottom: "0px",
                      left: "40px"
                    }}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
