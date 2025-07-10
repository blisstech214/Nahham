import React, { useState } from "react";

import profile from "../../assets/images/Abdulluah-Talent.png";
import arrowDown from "../../assets/images/dashboard-arrow-down.png";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

import { HiOutlineBell } from "react-icons/hi";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  // const basePath = process.env.REACT_APP_BASE_PATH;

  const onTalentSignOut = async () => {
    try {
      setShowDropdown(!showDropdown)
      const response = await ApiService.request({
        method: "POST",
        url: `logout`,
      });
      const data = response.data;
      console.log(data);
      if (data.status) {
        toast.success(data.message);
        localStorage.clear();
        // window.location.href = basePath;
        window.location.href = '/';
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error on Talent SignOut :- ", error);

    }
  }

  const onRedirectToHome = async () => {
     navigate('/talent/dashboard?tab=dashboard');
  }

  const onRedirectToJob = async () => {
     navigate('/talent/dashboard?tab=profile&subTab=jobs');
  }

  return (
    <div>
      <nav style={{ zIndex: "10000" }}>
        <ul className="list-unstyled d-flex justify-content-end align-items-center">
          <li className="inter-font" style={{ cursor: 'pointer' }} onClick={onRedirectToHome}>Home</li>
          <li className="mx-4 inter-font" style={{ cursor: 'pointer' }} onClick={onRedirectToJob}>Jobs</li>
          <li
            className="me-4 inter-font position-relative"
            style={{ cursor: "pointer", listStyle: "none" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Notification Icon */}
            <HiOutlineBell
              style={{
                fontSize: "24px",
                color: isHovered ? "#CD496D" : "#333",
                transition: "color 0.3s",
              }}
            />

            {/* Badge */}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{
                fontSize: "10px",
                padding: "2px 6px",
                transform: "translate(-50%, 50%)",
              }}
            >
              3
            </span>
          </li>
          <div className="position-relative">
            <img
              src={profile}
              style={{ width: "40px", cursor: "pointer" }}
              onClick={() => setShowDropdown(!showDropdown)}
              alt="Profile"
              className="rounded-circle"
            />
            <img src={arrowDown} style={{ width: "13px", height: "10px", marginLeft: "10px" }} />

            {showDropdown && (
              <div
                className="position-absolute top-100 end-0 mt-2 bg-white shadow rounded-3 p-2"
                style={{ width: "230px", height: "auto", zIndex: 1000 }}
              >
                <div className="d-flex">
                  <img
                    src={profile}
                    alt="Profile"
                    style={{ width: "50px", borderRadius: "50%" }}
                  />
                  <div className="ms-3">
                    <div className="fw-bold mt-2">Movie Center</div>
                    <div className="text-muted" style={{ fontSize: "14px" }}>
                      Production House
                    </div>
                  </div>
                </div>

                <div className="text-center p-3">
                  <button
                    className="btn btn-sm mt-2 w-100 inter-font text-white py-2"
                    style={{ backgroundColor: "rgb(231, 142, 123)" }}
                  >
                    View Profile
                  </button>
                </div>

                <div className="px-3 py-2">
                  <div className="fw-bold mb-1">Account</div>
                  <ul
                    className="text-muted list-unstyled inter-font"
                    style={{ fontSize: "14px", cursor: "pointer" }}
                  >
                    <li className="inter-font"> Settings & Privacy </li>
                    <li className="inter-font my-2">Help </li>
                    <li className="inter-font">Language </li>
                  </ul>
                </div>

                <div className="px-3 py-2 border-bottom">
                  {/* <div className="fw-bold mb-1">Manage</div>
                  <li
                    className="text-muted list-unstyled"
                    style={{ fontSize: "14px", cursor: "pointer" }}
                  >
                    <li className="inter-font">Posts & Activity</li>
                    <li className="inter-font mt-2">Job Posting Account</li>
                  </li> */}
                </div>

                <div
                  className="px-3 py-2 text-danger"
                  style={{ fontSize: "14px", cursor: "pointer" }}
                  onClick={() => onTalentSignOut()}
                >
                  Sign Out
                </div>
              </div>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
