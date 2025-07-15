import React, { useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";

import profile from "../../assets/images/Abdulluah-Talent.png";

import dashboard_user from "../../assets/images/dashboard-user.png";
import dashboard_users from "../../assets/images/dashboard-users.png";

import person_profile from "../../assets/images/person-profile.png";

import { Table } from "react-bootstrap";

import dollar from "../../assets/images/dollar.png";

import Navbar from "./Navbar";

import talentUser from "../../assets/images/talent-user.png";
import allTimeHires from "../../assets/images/all-time-hires.png";
import earnings from "../../assets/images/earnings.png";

import DashboardFooter from "./DashboardFooter";

import fb from "../../assets/images/fb.png";
import x from "../../assets/images/x.png";
import instagram from "../../assets/images/instagram.png";
import linkedIn from "../../assets/images/linkedIn.png";
import yt from "../../assets/images/yt.png";
import tiktok from "../../assets/images/tiktok.png";
import snapchat from "../../assets/images/snapchat.png";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const [isLoadingHireProjects, setIsLoadingHireProjects] = useState(true);

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

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingHireProjects(false);
    }, 2000);
  }, []);

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
            <h4 className="inter-font card-heading mb-4">Views</h4>
            <div
              className="card border-0 shadow-sm p-3 rounded-3"
              style={{
                background: "#6D5E2B",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => navigate("/talent/dashboard?tab=talents")}
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
                    src={talentUser}
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
                    Total Views
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
                background: "#E26A52",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => navigate("/talent/dashboard?tab=transactions")}
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
                    src={allTimeHires}
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
                    Total Jobs
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
                background: "#AF516F",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => navigate("/talent/dashboard?tab=recruitment")}
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
                    src={earnings}
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
                    Total Earnings
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
        {/* <div className="p-4 rounded-4">
          <h5 className="mb-4 inter-font" style={{ fontSize: "16px" }}>
            Hire Projects
          </h5>
          <Table className="align-middle borderless responsive rounded-4 shadow">
            <thead>
              <tr>
                <th className="fw-light border-bottom-0">Employe Company</th>
                <th className="fw-light border-bottom-0">Job Name</th>
                <th className="fw-light border-bottom-0">Start Date</th>
                <th className="fw-light border-bottom-0">End Date</th>
                <th className="fw-light border-bottom-0">Status</th>
                <th className="fw-light border-bottom-0">Project</th>
                <th className="fw-light border-bottom-0">Amount</th>
              </tr>
            </thead>
            <tbody>
              {hireProjects.map((item, index) => (
                <tr key={index}>
                  <td className="d-flex align-items-center gap-3 border-bottom-0">
                    <img
                      src={item.logo}
                      alt="logo"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    <span className="inter-font t-heading">{item.company}</span>
                  </td>
                  <td className="t-heading border-bottom-0">{item.job}</td>
                  <td className="t-heading border-bottom-0">{item.start}</td>
                  <td className="t-heading border-bottom-0">{item.end}</td>
                  <td
                    className="border-bottom-0"
                    style={{ color: "rgba(54, 190, 92, 1)" }}
                  >
                    {item.status}
                  </td>
                  <td className="t-heading border-bottom-0">{item.project}</td>
                  <td className="t-heading border-bottom-0">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div> */}

        <div>
          <h5 className="mb-4 inter-font" style={{ fontSize: "16px" }}>
            Hire Projects
          </h5>
          <div
            className="bg-white rounded-3 p-4 shadow"
            style={{ height: "auto", overflow: "auto" }}
          >
            {isLoadingHireProjects ? (
              <div className="d-flex justify-content-center">
                <div
                  className="spinner-border align-items-center"
                  role="status"
                >
                  {/* <span class="sr-only">Loading...</span> */}
                </div>
              </div>
            ) : hireProjects?.length !== 0 ? (
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
                        style={{
                          color: "rgba(54, 190, 92, 1)",
                          fontWeight: 500,
                        }}
                      >
                        {item.status}
                      </td>
                      <td style={{ color: "#959595" }}>{item.project}</td>
                      <td style={{ color: "#959595" }}>{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center">Data not found</div>
            )}
          </div>
        </div>

        {/* Pagination */}
        {hireProjects?.length !== 0 && (
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
        )}
      </div>

      <div style={{ height: "30px" }}></div>

      {/* Footer */}
      <DashboardFooter />
    </div>
  );
};

export default Dashboard;
