import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoGear } from "react-icons/go";
import { GoChecklist } from "react-icons/go";
import { TfiVideoClapper } from "react-icons/tfi";
import { MdOutlineHistory } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

import decorationPiece from "../../assets/images/strip-decoration.png";
import logo from "../../assets/images/footer-img.png";
import { Offcanvas } from "react-bootstrap";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const navItems = [
    {
      id: "dashboard",
      icon: <MdOutlineDashboard size={20} />,
      label: "Dashboard",
    },
    {
      id: "profile",
      icon: <CgProfile size={20} />,
      label: "My Profile",
    },
    {
      id: "talents",
      icon: <TfiVideoClapper size={20} />,
      label: "Projects",
    },
    {
      id: "recruitment",
      icon: <FaMoneyBillTrendUp size={20} />,
      label: "Earnings",
    },
    {
      id: "transactions",
      icon: <MdOutlineHistory size={20} />,
      label: "History",
    },
    {
      id: "settings",
      icon: <GoGear size={20} />,
      label: "Settings",
    },
  ];

  // Sidebar content as a function to reuse in both offcanvas and desktop
  const SidebarContent = () => (
    <div
      className="inter-font "
      style={{
        background: "rgba(231, 142, 123, 1)",
        width: "100%",
        color: "white",
        height: "100%",
        paddingLeft: "1.5rem",
      }}
    >
      {/* Decoration strips (only show on desktop) */}

      <div className="inter-font d-flex" style={{ height: "100%" }}>
        <div className="inter-font py-4">
          {/* Logo */}
          <div className="inter-font text-center mb-5">
            <img src={logo} className="inter-font w-50" alt="Company Logo" />
          </div>

          {/* Navigation */}
          <nav className="inter-font flex-grow-1">
            <ul className="inter-font list-unstyled">
              {navItems.map((item) => (
                <li key={item.id} className="inter-font mb-4">
                  <div
                    className={ `inter-font d-flex align-items-center position-relative cursor-pointer ${
                      activeTab === item.id ? "active-nav-item" : ""
                    }`}
                    onClick={() => {
                      setActiveTab(item.id);
                      setShowSidebar(false); // Close on mobile after click
                    }}
                    style={{ padding: "8px 0" }}
                  >
                    <span
                      className="inter-font icon-wrapper "
                      style={{ width: "24px", color: "white" }}
                    >
                      {item.icon}
                    </span>
                    <span className="inter-font ms-3 inter-font fw-light">
                      {item.label}
                    </span>

                    {activeTab === item.id && (
                      <div
                        style={{
                          width: "30px",
                          height: "2px",
                          backgroundColor: "rgba(231, 142, 123, 1)",
                          position: "absolute",
                          bottom: "0px",
                          left: "40px",
                        }}
                      />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div
          className="inter-font d-none d-md-block"
          style={
            {
              // width: "20%",
              // position: "absolute",
              // top: "0px",
              // left: "13%",
              // marginLeft: "5px",
            }
          }
        >
          <img
            // key={i}
            src={decorationPiece}
            alt="Decoration"
            style={{ width: "30px", height: "100%" }}
          />
          {/* {[...Array(1)].map((_, i) => (
            <img
              key={i}
              src={decorationPiece}
              alt="Decoration"
              style={{ width: "35px" }}
            />
          ))} */}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="inter-font btn d-lg-none text-white"
        style={{
          position: "fixed",
          top: "15px",
          left: "15px",
          background: "#411318",
          zIndex: 1100,
        }}
        onClick={() => setShowSidebar(true)}
      >
        ☰
      </button>

      {/* Desktop Sidebar */}
      <div className="inter-font d-none d-lg-block">
        <SidebarContent />
      </div>

      {/* Mobile Offcanvas Sidebar */}
      <Offcanvas
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        placement="start"
        backdrop={true}
      >
        <Offcanvas.Body className="inter-font p-0">
          <SidebarContent />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
