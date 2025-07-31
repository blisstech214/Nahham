import React, { useEffect, useRef, useState } from "react";
import profile from "../../assets/images/Abdulluah-Talent.png";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const onCompanySignOut = async () => {
    try {
      const response = await ApiService.request({
        method: "POST",
        url: `/company/logout`,
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
      console.log("Error on User SignOut :- ", error);
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

  return (
    <nav
      className="inter-font navbar navbar-expand-md px-3 py-2 bg-transparent"
    // style={{ background: "transparent" }}
    >
      <button
        className="inter-font navbar-toggler"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="inter-font navbar-toggler-icon"></span>
      </button>

      <div className={`inter-font collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
        <ul className="inter-font navbar-nav ms-auto align-items-center">
          <li className="inter-font nav-item inter-font">
            <a className="inter-font nav-link" href="#">
              Home
            </a>
          </li>
          <li className="inter-font nav-item mx-md-4 mx-2 inter-font">
            <a className="inter-font nav-link" href="#">
              Jobs
            </a>
          </li>
          <li className="inter-font nav-item me-md-4 me-2 inter-font">
            <a className="inter-font nav-link" href="#">
              Notification
            </a>
          </li>

          <li className="inter-font nav-item position-relative">
            <img
              src={profile}
              style={{ width: "60px", cursor: "pointer" }}
              onClick={() => setShowDropdown(!showDropdown)}
              alt="Profile"
              className="inter-font rounded-circle ms-2"
            />

            {showDropdown && (
              <div
                ref={dropdownRef}
                className="inter-font position-absolute top-100 end-0 mt-2 bg-white shadow rounded-3 p-2"
                style={{ width: "230px", zIndex: 1000 }}
              >
                <div className="inter-font d-flex">
                  <img
                    src={profile}
                    alt="Profile"
                    style={{ width: "50px", borderRadius: "50%" }}
                  />
                  <div className="inter-font ms-3">
                    <div className="inter-font fw-bold mt-2">Movie Center</div>
                    <div className="inter-font text-muted" style={{ fontSize: "14px" }}>
                      Production House
                    </div>
                  </div>
                </div>

                <div className="inter-font text-center p-3">
                  <button
                    className="inter-font btn btn-sm mt-2 w-100 inter-font text-white py-2"
                    style={{ backgroundColor: "rgb(231, 142, 123)" }}
                    onClick={() => navigate("/company-dashboard?tab=profile")}

                  >
                    View Profile
                  </button>
                </div>

                <div className="inter-font px-3 py-2">
                  <div className="inter-font fw-bold mb-1">Account</div>
                  <ul
                    className="inter-font text-muted list-unstyled inter-font"
                    style={{ fontSize: "14px", cursor: "pointer" }}
                  >
                    <li>Settings & Privacy</li>
                    <li className="inter-font my-2">Help</li>
                    <li>Language</li>
                  </ul>
                </div>

                <div className="inter-font px-3 py-2 border-bottom">
                  <div className="inter-font fw-bold mb-1">Manage</div>
                  <ul
                    className="inter-font text-muted list-unstyled inter-font"
                    style={{ fontSize: "14px", cursor: "pointer" }}
                  >
                    <li>Posts & Activity</li>
                    <li className="inter-font mt-2">Job Posting Account</li>
                  </ul>
                </div>

                <div
                  className="inter-font px-3 py-2 text-danger"
                  style={{ fontSize: "14px", cursor: "pointer" }}
                  onClick={() => onCompanySignOut()}
                >
                  Sign Out
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
