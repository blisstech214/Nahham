import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GoGear, GoChecklist } from "react-icons/go";
import { BsGraphUp } from "react-icons/bs";
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
    { id: "profile", icon: <CgProfile size={20} />, label: "Company Profile" },
    { id: "talents", icon: <FiUsers size={20} />, label: "Talents" },
    {
      id: "recruitment",
      icon: <GoChecklist size={20} />,
      label: "Recruitment History",
    },
    {
      id: "qutations",
      icon: <GoChecklist size={20} />,
      label: "Qutations",
    },
    {
      id: "transactions",
      icon: <BsGraphUp size={20} />,
      label: "Transactions",
    },
    { id: "settings", icon: <GoGear size={20} />, label: "Settings" },
  ];

  // Sidebar content as a function to reuse in both offcanvas and desktop
  const SidebarContent = () => (
    <div
      className=""
      style={{
        background: "#411318",
        width: "100%",
        color: "white",
        height: "100%",
        paddingLeft: "1.5rem",
      }}
    >
      {/* Decoration strips (only show on desktop) */}

      <div className="d-flex" style={{ height: "100%" }}>
        <div className="py-4">
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
                    className={`d-flex align-items-center position-relative cursor-pointer ${
                      activeTab === item.id ? "active-nav-item" : ""
                    }`}
                    onClick={() => {
                      setActiveTab(item.id);
                      setShowSidebar(false); // Close on mobile after click
                    }}
                    style={{ padding: "8px 0" }}
                  >
                    <span className="icon-wrapper" style={{ width: "24px" }}>
                      {item.icon}
                    </span>
                    <span className="ms-3 inter-font fw-light">
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
          className="d-none d-md-block"
          style={{
            // width: "20%",
            // position: "absolute",
            // top: "0px",
            // left: "13%",
            // marginLeft: "5px",
          }}
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
        className="btn d-lg-none text-white"
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
      <div className="d-none d-lg-block">
        <SidebarContent />
      </div>

      {/* Mobile Offcanvas Sidebar */}
      <Offcanvas
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        placement="start"
        backdrop={true}
      >
        <Offcanvas.Body className="p-0">
          <SidebarContent />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
