import React, { useState } from "react";
import profile from "../../assets/images/Abdulluah-Talent.png";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <nav
      className="navbar navbar-expand-md px-3 py-2 bg-transparent"
      // style={{ background: "transparent" }}
    >
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item inter-font">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item mx-md-4 mx-2 inter-font">
            <a className="nav-link" href="#">
              Jobs
            </a>
          </li>
          <li className="nav-item me-md-4 me-2 inter-font">
            <a className="nav-link" href="#">
              Notification
            </a>
          </li>

          <li className="nav-item position-relative">
            <img
              src={profile}
              style={{ width: "60px", cursor: "pointer" }}
              onClick={() => setShowDropdown(!showDropdown)}
              alt="Profile"
              className="rounded-circle ms-2"
            />

            {showDropdown && (
              <div
                className="position-absolute top-100 end-0 mt-2 bg-white shadow rounded-3 p-2"
                style={{ width: "230px", zIndex: 1000 }}
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
                    <li>Settings & Privacy</li>
                    <li className="my-2">Help</li>
                    <li>Language</li>
                  </ul>
                </div>

                <div className="px-3 py-2 border-bottom">
                  <div className="fw-bold mb-1">Manage</div>
                  <ul
                    className="text-muted list-unstyled inter-font"
                    style={{ fontSize: "14px", cursor: "pointer" }}
                  >
                    <li>Posts & Activity</li>
                    <li className="mt-2">Job Posting Account</li>
                  </ul>
                </div>

                <div
                  className="px-3 py-2 text-danger"
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
