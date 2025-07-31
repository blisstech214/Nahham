import React, { useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";

import profile from "../../assets/images/Abdulluah-Talent.png";

import dashboard_user from "../../assets/images/dashboard-user.png";
import dashboard_users from "../../assets/images/dashboard-users.png";

import person_profile from "../../assets/images/person-profile.png";

import { Button, Col, Row, Table } from "react-bootstrap";

import dollar from "../../assets/images/dollar.png";

import Navbar from "../CompanyUserDahboard/Navbar";
import DashboardFooter from "./DashboardFooter";

import fb from "../../assets/images/fb.png";
import x from "../../assets/images/x.png";
import instagram from "../../assets/images/instagram.png";
import linkedIn from "../../assets/images/linkedIn.png";
import yt from "../../assets/images/yt.png";
import tiktok from "../../assets/images/tiktok.png";
import snapchat from "../../assets/images/snapchat.png";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";
import { ChevronLeft, ChevronRight } from "lucide-react";

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


  const [dashboardData, setDashboardData] = useState([]);
  const [dashboardCountData, setDashboardCountData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    total_pages: 1,
    current_page: 1,
  });

  useEffect(() => {
    fetchDashboardData(1);
  }, []);

  console.log("Dashboard Data:", dashboardData);

  const fetchDashboardData = async (page = 1) => {
    try {
      setIsLoading(true);
      const res = await ApiService.request({
        method: "GET",
        url: `company/getDashboard?page=${page}`,
      });

      const data = res.data;
      if (data.status) {
        setDashboardData(data?.data?.active_hires);
        setDashboardCountData(data?.data?.stats);
        setPagination(data?.data?.pagination ? data?.data?.pagination : 1);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error("Fetch Job Error:", err);
      toast.error("Failed to fetch jobs.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (
      page !== pagination.current_page &&
      page >= 1 &&
      page <= pagination.total_pages
    ) {
      fetchDashboardData(page);
    }
  };

  const { current_page, total_pages } = pagination;

  // Generate page numbers (for large datasets show 1,2,3,...,last)
  const getPages = () => {
    const pages = [];

    if (total_pages <= 5) {
      for (let i = 1; i <= total_pages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (current_page > 3) {
        pages.push("...");
      }
      for (
        let i = Math.max(2, current_page - 1);
        i <= Math.min(total_pages - 1, current_page + 1);
        i++
      ) {
        pages.push(i);
      }
      if (current_page < total_pages - 2) {
        pages.push("...");
      }
      pages.push(total_pages);
    }

    return pages;
  };

  const pages = getPages();

  function formatSingleDate(isoDate) {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" }); // or "long" for full month name
    return `${day} ${month}`;
  }

  return (
    <div
      className="inter-font "
      style={
        {
          // height: "100vh",
          // overflowY: "scroll",
          // overflowX: "hidden",
          // scrollbarWidth: "none",
          // msOverflowStyle: "none",
        }
      }
    >
      {/* Main Content */}
      <div className="inter-font flex-grow-1 px-5 main-bg inp-login">
        {/* <Navbar /> */}
        <div className="inter-font position-relative mb-3">
          <input
            type="text"
            placeholder="Search by Keywords"
            className="inter-font w-100 p-2 rounded-3 ps-5 inter-font"
            style={{ paddingLeft: "2.5rem", border: "none", fontSize: "14px" }}
          />
          <CiSearch
            className="inter-font position-absolute"
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
        <div className="inter-font row my-5">
          <div className="inter-font col-md-4">
            <h4 className="inter-font inter-font card-heading mb-4">
              Hiring History
            </h4>
            <div
              className="inter-font card border-0 shadow-sm p-3 rounded-3"
              style={{
                background: "rgba(231, 142, 123, 1)",
                color: "white",
              }}
            >
              <div className="inter-font d-flex align-items-center gap-3">
                <div
                  className="inter-font rounded-circle bg-white d-flex align-items-center justify-content-center"
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
                    className="inter-font mb-1 inter-font"
                    style={{ fontSize: "15px", fontWeight: 500 }}
                  >
                    Active Hires
                  </h6>
                  <h2
                    className="inter-font fw-bold mb-0 inter-font"
                    style={{ fontSize: "22px" }}
                  >
                    {dashboardCountData?.active_hires || 0}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="inter-font col-md-4">
            <h4 className="inter-font inter-font card-heading mb-4">Hiring History</h4>

            <div
              className="inter-font card border-0 shadow-sm p-3 rounded-3"
              style={{
                background: "rgba(205, 73, 109, 1)",
                color: "white",
              }}
            >
              <div className="inter-font d-flex align-items-center gap-3">
                <div
                  className="inter-font rounded-circle bg-white d-flex align-items-center justify-content-center"
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
                    className="inter-font mb-1 inter-font"
                    style={{ fontSize: "15px", fontWeight: 500 }}
                  >
                    All Time Hires
                  </h6>
                  <h2
                    className="inter-font fw-bold mb-0 inter-font"
                    style={{ fontSize: "22px" }}
                  >
                    {dashboardCountData?.total_hires || 0}

                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="inter-font col-md-4">
            <h4 className="inter-font inter-font card-heading mb-4">Tarnsactions</h4>

            <div
              className="inter-font card border-0 shadow-sm p-3 rounded-3"
              style={{
                background: "rgba(123, 110, 67, 1)",
                color: "white",
              }}
            >
              <div className="inter-font d-flex align-items-center gap-3">
                <div
                  className="inter-font rounded-circle bg-white d-flex align-items-center justify-content-center"
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
                    className="inter-font mb-1 inter-font"
                    style={{ fontSize: "15px", fontWeight: 500 }}
                  >
                    Total Spendings
                  </h6>
                  <h2
                    className="inter-font fw-bold mb-0 inter-font"
                    style={{ fontSize: "22px" }}
                  >
                    {dashboardCountData?.total_spendings || 0}

                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Hires Section */}
        <div>
          <h5 className="inter-font mb-4 inter-font" style={{ fontSize: "16px" }}>
            Current Hires
          </h5>
          <div
            className="inter-font bg-white rounded-3 p-4 shadow"
            style={{ height: "auto", overflow: "auto" }}
          >
            <table className="inter-font table align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">Profile</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Project</th>
                  <th scope="col">Payment</th>
                </tr>
              </thead>
              <tbody>

                {isLoading ? (
                  <p>Loading…</p>
                ) : dashboardData?.length === 0 ? (
                  <p className="inter-font text-center text-muted mt-4">
                    No data found.
                  </p>
                ) : (
                  dashboardData.map((talent, index) => {
                    return (
                        <tr key={index}>
                            <td>
                              <div className="inter-font d-flex align-items-center gap-3">
                                <img
                                  src={talent?.talent_id?.picture}
                                  alt="logo"
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                            </td>
                            <td>
                              <div className="inter-font d-flex align-items-center gap-3">
                                <span
                                  className="inter-font inter-font"
                                  style={{ color: "#959595" }}
                                >
                                  {talent?.talent_id?.first_name}{" "}
                                  {talent?.talent_id?.last_name}
                                </span>
                              </div>
                            </td>
                            <td style={{ color: "#959595" }}>
                              {talent?.job_type}

                            </td>
                            <td style={{ color: "#959595" }}>{formatSingleDate(talent?.start_date)}</td>
                            <td style={{ color: "#959595" }}>{formatSingleDate(talent.end_date)}</td>
                            <td
                              style={{ color: "rgba(54, 190, 92, 1)", fontWeight: 500 }}
                            >
                              {talent?.status}
                            </td>
                            <td style={{ color: "#959595", width: "150px" }}>{talent?.project_id.title}</td>
                            <td style={{ color: "#959595" }}>{talent.total_amount}</td>
                          </tr>
                    )
                  }))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="inter-font d-flex justify-content-center my-5">
          <Row className="inter-font mt-4">
            <Col className="inter-font d-flex justify-content-center align-items-center gap-5 flex-wrap inter-font">
              {/* Pagination Numbers */}
              <Button
                size="sm"
                variant="link"
                disabled={current_page === 1}
                onClick={() => handlePageChange(current_page - 1)}
                style={{
                  width: "36px",
                  height: "36px",
                  padding: 0,
                  borderRadius: "50%",
                  backgroundColor: "#E46D54",
                  color: "#fff",
                  border: "none",
                }}
              >
                <ChevronLeft size={18} />
              </Button>

              {pages.map((page, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant={page === current_page ? "danger" : "link"}
                  style={{
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    padding: 0,
                    backgroundColor:
                      page === current_page ? "#E46D54" : "transparent",
                    color: page === current_page ? "#fff" : "#666",
                    fontWeight: page === current_page ? "600" : "400",
                    border: "none",
                    fontSize: "14px",
                  }}
                  disabled={page === "..."}
                  onClick={() => page !== "..." && handlePageChange(page)}
                >
                  {page}
                </Button>
              ))}

              {/* Next Arrow */}
              <Button
                size="sm"
                variant="link"
                disabled={current_page === total_pages}
                onClick={() => handlePageChange(current_page + 1)}
                style={{
                  width: "36px",
                  height: "36px",
                  padding: 0,
                  borderRadius: "50%",
                  backgroundColor: "#E46D54",
                  color: "#fff",
                  border: "none",
                }}
              >
                <ChevronRight size={18} />
              </Button>

              {/* View All Button */}
              <Button
                size="sm"
                style={{
                  backgroundColor: "#E46D54",
                  border: "none",
                  padding: "6px 20px",
                  borderRadius: "10px",
                  color: "#fff",
                  marginLeft: "10px",
                }}
              // onClick={handleViewAll}
              >
                View All
              </Button>
            </Col>
          </Row>
        </div>
      </div>

      {/* Footer */}
      {/* <div>
        <footer
          className="inter-font d-flex justify-content-between align-items-center text-muted"
          style={{
            background: "#7B6E43",
            width: "81.8%",
            height: "55px",
            paddingLeft: "35px",
            position: "absolute",
            bottom: "0px",
          }}
        >
          <div className="inter-font text-white ms-3">
            @2025 Nahham, All rights reserved.
          </div>
          <div className="inter-font text-white">
            Privacy Policy | Terms and Conditions
          </div>
          <div className="inter-font social-icons-dashboard d-flex justify-content-center align-items-center">
            <img src={fb} />
            <img src={x} />
            <img src={instagram} />
            <img src={linkedIn} />
            <img src={yt} />
            <img src={tiktok} />
            <img src={snapchat} className="inter-font me-5" />
          </div>
        </footer>
      </div> */}
    </div>
  );
};

export default Dashboard;
