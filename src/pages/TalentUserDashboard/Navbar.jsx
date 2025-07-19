import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineBell } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";

import profile from "../../assets/images/Abdulluah-Talent.png";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const languages = [
    { name: "English", code: "en", flag: "https://flagcdn.com/w320/us.png" },
    { name: "العربية", code: "ar", flag: "https://flagcdn.com/w320/sa.png" },
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
  };

  const onTalentSignOut = async () => {
    try {
      setShowDropdown(false);
      const response = await ApiService.request({
        method: "POST",
        url: "logout",
      });
      const data = response.data;
      if (data.status) {
        toast.success(data.message);
        localStorage.clear();
        window.location.href = "/";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error on Talent SignOut :- ", error);
    }
  };

  return (
    <nav
      className="py-2 px-3 bg-transparent shadow-sm"
      style={{ zIndex: 10000 }}
    >
      <ul className="list-unstyled d-flex justify-content-end align-items-center m-0">
        {/* Language Selector */}
        <li className="mx-3">
          <div className="d-flex border rounded-3 shadow-sm bg-white">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                style={{
                  cursor: "pointer",
                  padding: "8px 15px",
                  borderRadius: "10px",
                  backgroundColor:
                    i18n.language === lang.code ? "#181515" : "transparent",
                  color: i18n.language === lang.code ? "#fff" : "#000",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                {lang.name}
              </div>
            ))}
          </div>
        </li>

        {/* Home Link */}
        <li
          className="mx-2 inter-font"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/talent/dashboard?tab=dashboard")}
        >
          Home
        </li>

        {/* Jobs Link */}
        <li
          className="mx-2 inter-font"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/talent/dashboard?tab=profile&subTab=jobs")}
        >
          Jobs
        </li>

        {/* Notification Bell */}
        <li
          className="mx-3 position-relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() =>
            navigate("/talent/dashboard?tab=settings&subTab=notification")
          }
          style={{ cursor: "pointer" }}
        >
          <HiOutlineBell
            style={{
              fontSize: "24px",
              color: isHovered ? "#CD496D" : "#333",
              transition: "color 0.3s",
            }}
          />
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: "10px", padding: "2px 6px" }}
          >
            3
          </span>
        </li>

        {/* Profile Dropdown */}
        <li className="position-relative">
          <img
            src={profile}
            alt="Profile"
            style={{
              width: "40px",
              height: "40px",
              cursor: "pointer",
              borderRadius: "50%",
            }}
            onClick={() => setShowDropdown(!showDropdown)}
          />

          {showDropdown && (
            <div
              className="position-absolute top-100 end-0 mt-2 bg-white shadow rounded-3 p-3"
              style={{ width: "230px", zIndex: 2000 }}
            >
              <div className="d-flex align-items-center mb-3">
                <img
                  src={profile}
                  alt="Profile"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
                <div className="ms-3">
                  <div className="fw-bold">Movie Center</div>
                  <div className="text-muted" style={{ fontSize: "13px" }}>
                    Production House
                  </div>
                </div>
              </div>

              <button
                className="btn btn-sm w-100 text-white mb-3"
                style={{ backgroundColor: "rgb(231, 142, 123)" }}
                onClick={() => navigate("/talent/dashboard?tab=profile")}
              >
                View Profile
              </button>

              <div className="mb-2">
                <div className="fw-bold mb-1">Account</div>
                <div
                  className="text-muted inter-font"
                  style={{ fontSize: "14px", cursor: "pointer" }}
                  onClick={() => navigate("/talent/dashboard?tab=settings")}
                >
                  Settings & Privacy
                </div>
              </div>

              <div
                className="text-danger mt-2"
                style={{ fontSize: "14px", cursor: "pointer" }}
                onClick={onTalentSignOut}
              >
                Sign Out
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
