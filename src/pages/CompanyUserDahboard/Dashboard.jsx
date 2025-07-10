import React, { useState } from 'react';

import { CiSearch } from "react-icons/ci";

import profile from "../../assets/images/Abdulluah-Talent.png";

import dashboard_user from "../../assets/images/dashboard-user.png";
import dashboard_users from "../../assets/images/dashboard-users.png";

import person_profile from "../../assets/images/person-profile.png";

import { Table } from "react-bootstrap";

import dollar from "../../assets/images/dollar.png";

import Navbar from "../CompanyUserDahboard/Navbar"
import DashboardFooter from './DashboardFooter';

import fb from "../../assets/images/fb.png";
import x from "../../assets/images/x.png";
import instagram from "../../assets/images/instagram.png";
import linkedIn from "../../assets/images/linkedIn.png";
import yt from "../../assets/images/yt.png";
import tiktok from "../../assets/images/tiktok.png";
import snapchat from "../../assets/images/snapchat.png";

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const hireProjects = [
    {
      logo: person_profile,
      company: "World Studios",
      job: "Casting Actor",
      start: "14 April",
      end: "20 April",
      status: "Active",
      project: "D4 Movie",
      amount: "3000 AED",
    },
    {
      logo: person_profile,
      company: "River Picture",
      job: "Casting Actor",
      start: "14 April",
      end: "20 April",
      status: "Active",
      project: "D4 Movie",
      amount: "5000 AED",
    },
    {
      logo: person_profile,
      company: "Marvel Studios",
      job: "Casting Actor",
      start: "14 April",
      end: "20 April",
      status: "Active",
      project: "D4 Movie",
      amount: "3500 AED",
    },
  ];

  return (
    <div
      className="w-100 content"
      style={{
        height: "100vh",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {/* Main Content */}
      <div className="flex-grow-1 px-5 main-bg inp-login">
        <Navbar />
        <div className="position-relative mb-3">
          <input
            type="text"
            placeholder="Search by Keywords"
            className="w-100 p-2 rounded-3 ps-5 inter-font"
            style={{ paddingLeft: "2.5rem", border: "none", fontSize: "14px" }}
          />
          <CiSearch
            className="position-absolute"
            style={{
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
            size={20}
          />
        </div>
        {/* Stats Cards */}
        <div className="row my-5">
          <div className="col-md-4">
            <h4 className="inter-font card-heading mb-4">
              Active Jobs/Projects
            </h4>
            <div
              className="card border-0 shadow-sm p-3 rounded-3"
              style={{
                background: "rgba(231, 142, 123, 1)",
                color: "white",
              }}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-circle bg-white d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    minWidth: "50px",
                  }}
                >
                  <img
                    src={dashboard_user}
                    alt="Dashboard User"
                    style={{
                      width: "30px",
                      height: "30px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div>
                  <h6
                    className="mb-1 inter-font"
                    style={{ fontSize: "15px", fontWeight: 500 }}
                  >
                    Active Hires
                  </h6>
                  <h2
                    className="fw-bold mb-0 inter-font"
                    style={{ fontSize: "22px" }}
                  >
                    5
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="inter-font card-heading mb-4">Job History</h4>

            <div
              className="card border-0 shadow-sm p-3 rounded-3"
              style={{
                background: "rgba(205, 73, 109, 1)",
                color: "white",
              }}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-circle bg-white d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    minWidth: "50px",
                  }}
                >
                  <img
                    src={dashboard_users}
                    alt="Dashboard User"
                    style={{
                      width: "30px",
                      height: "30px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div>
                  <h6
                    className="mb-1 inter-font"
                    style={{ fontSize: "15px", fontWeight: 500 }}
                  >
                    Active Hires
                  </h6>
                  <h2
                    className="fw-bold mb-0 inter-font"
                    style={{ fontSize: "22px" }}
                  >
                    5
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="inter-font card-heading mb-4">Earnings</h4>

            <div
              className="card border-0 shadow-sm p-3 rounded-3"
              style={{
                background: "rgba(123, 110, 67, 1)",
                color: "white",
              }}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-circle bg-white d-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    minWidth: "50px",
                  }}
                >
                  <img
                    src={dollar}
                    alt="Dashboard User"
                    style={{
                      width: "30px",
                      height: "30px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div>
                  <h6
                    className="mb-1 inter-font"
                    style={{ fontSize: "15px", fontWeight: 500 }}
                  >
                    Active Hires
                  </h6>
                  <h2
                    className="fw-bold mb-0 inter-font"
                    style={{ fontSize: "22px" }}
                  >
                    5
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Hires Section */}
        <div>
          <h5 className="mb-4 inter-font" style={{ fontSize: "16px" }}>
            Hire Projects
          </h5>
          <div
            className="bg-white rounded-3 p-4 shadow"
            style={{ height: "auto", overflow: "auto" }}
          >
            <table className="table align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">Employe Company</th>
                  <th scope="col">Job Name</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Project</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                {hireProjects.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={item.logo}
                          alt="logo"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                        <span
                          className="inter-font"
                          style={{ color: "#959595" }}
                        >
                          {item.company}
                        </span>
                      </div>
                    </td>
                    <td style={{ color: "#959595" }}>{item.job}</td>
                    <td style={{ color: "#959595" }}>{item.start}</td>
                    <td style={{ color: "#959595" }}>{item.end}</td>
                    <td
                      style={{ color: "rgba(54, 190, 92, 1)", fontWeight: 500 }}
                    >
                      {item.status}
                    </td>
                    <td style={{ color: "#959595" }}>{item.project}</td>
                    <td style={{ color: "#959595" }}>{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination-container">
          <ul className="pagination-list">
            <li className="page-item active inter-font">1</li>
            <li className="page-item inter-font">2</li>
            <li className="page-item inter-font">3</li>
            <li className="page-item inter-font">4</li>
            <li className="page-item inter-font">5</li>
            <li className="page-item inter-font">...</li>
            <li className="page-item inter-font">26</li>
            <li className="page-item inter-font arrow">{">"}</li>
          </ul>
          <button className="view-all-btn inter-font fw-lighter py-3">
            View All
          </button>
        </div>
      </div>

      {/* Footer */}
      <div>
        <footer
          className="d-flex justify-content-between align-items-center text-muted"
          style={{
            background: "#7B6E43",
            width: "81.8%",
            height: "55px",
            paddingLeft: "35px",
            position: "absolute",
            bottom: "0px",
          }}
        >
          <div className="text-white ms-3">
            @2025 Nahham, All rights reserved.
          </div>
          <div className="text-white">
            Privacy Policy | Terms and Conditions
          </div>
          <div className="social-icons-dashboard d-flex justify-content-center align-items-center">
            <img src={fb} />
            <img src={x} />
            <img src={instagram} />
            <img src={linkedIn} />
            <img src={yt} />
            <img src={tiktok} />
            <img src={snapchat} className="me-5" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;
