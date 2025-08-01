import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineBell } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";

import profile from "../../assets/images/Abdulluah-Talent.png";
import validateImageUrl from "../../utils/validateImageUrl";
import { User } from "lucide-react";

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


  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    // Attach the listener to the whole document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await ApiService.request({
        method: "GET",
        url: `getProfile`,
      });
      const data = response.data;

      if (data.status) {
        setProfileData(data.data.talent);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };


  const [isImageValid, setIsImageValid] = useState(false)

  const checkImage = async (imageUrl) => {

    const result = await validateImageUrl(imageUrl);
    setIsImageValid(result);
  };

  return (
    <nav
      className="inter-font py-2 px-3 bg-transparent"
    // style={{ zIndex: 10000 }}
    >
      <ul className="inter-font list-unstyled d-flex justify-content-end align-items-center m-0">
        {/* Language Selector */}
        <li className="inter-font mx-3">
          <div
            onClick={() =>
              handleLanguageChange(i18n.language === "en" ? "ar" : "en")
            }
            // className={inter-font `lang-item ${
            //   i18n.language === lang.code ? "active-lang" : ""
            // }`}
            style={{
              cursor: "pointer",
              padding: "8px 15px",
              borderRadius: "10px",
              backgroundColor: "#6d5f27",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            {i18n.language === "en" ? "العربية" : "English"}
          </div>
          {/* <div className="inter-font d-flex border rounded-3 shadow-sm bg-white">
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
          </div> */}
        </li>

        {/* Home Link */}
        <li
          className="inter-font mx-2 inter-font"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/talent/dashboard?tab=dashboard")}
        >
          Home
        </li>

        {/* Jobs Link */}
        <li
          className="inter-font mx-2 inter-font"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/talent/dashboard?tab=profile&subTab=jobs")}
        >
          Jobs
        </li>

        {/* Notification Bell */}
        <li
          className="inter-font mx-3 position-relative"
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
            className="inter-font position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: "10px", padding: "2px 6px" }}
          >
            3
          </span>
        </li>

        {/* Profile Dropdown */}
        <li className="inter-font position-relative">


          {checkImage(profileData?.picture) && isImageValid ?
            <img
              src={profileData?.picture}
              className="inter-font rounded-circle"
              alt="Profile"
              style={{
                width: "40px",
                height: "40px",
                cursor: "pointer",
                borderRadius: "50%",
              }}
              onClick={() => setShowDropdown(!showDropdown)}
            />
            :
            <User className="inter-font rounded-circle m-2"
              onClick={() => setShowDropdown(!showDropdown)}
            />
          }

          {showDropdown && (
            <div
              ref={dropdownRef}

              className="inter-font position-absolute top-100 end-0 mt-2 bg-white shadow rounded-3 p-3"
              style={{ width: "230px", zIndex: 2000 }}
            >
              <div className="inter-font d-flex align-items-center mb-3">
                {checkImage(profileData?.picture) && isImageValid ?
                  <img
                    src={profileData?.picture}
                    className="inter-font rounded-circle"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    alt="Profile"
                  />
                  :
                  <User className="inter-font rounded-circle m-2"
                  />
                }

                <div className="inter-font ms-3">
                  <div className="inter-font fw-bold">Movie Center</div>
                  <div className="inter-font text-muted" style={{ fontSize: "13px" }}>
                    Production House
                  </div>
                </div>
              </div>

              <button
                className="inter-font btn btn-sm w-100 text-white mb-3"
                style={{ backgroundColor: "rgb(231, 142, 123)" }}
                onClick={() => navigate("/talent/dashboard?tab=profile")}
              >
                View Profile
              </button>

              <div className="inter-font mb-2">
                <div className="inter-font fw-bold mb-1">Account</div>
                <div
                  className="inter-font text-muted inter-font"
                  style={{ fontSize: "14px", cursor: "pointer" }}
                  onClick={() => navigate("/talent/dashboard?tab=settings")}
                >
                  Settings & Privacy
                </div>
              </div>

              <div
                className="inter-font text-danger mt-2"
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
