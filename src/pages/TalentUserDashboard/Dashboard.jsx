import React, { useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";

import profile from "../../assets/images/Abdulluah-Talent.png";

import dashboard_user from "../../assets/images/dashboard-user.png";
import dashboard_users from "../../assets/images/dashboard-users.png";

import person_profile from "../../assets/images/person-profile.png";

import { Button, Col, Row, Table } from "react-bootstrap";

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
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        url: `getDashboard?page=${page}`,
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
      <div className="inter-font flex-grow-1 px-3 px-md-5 main-bg inp-login">
        {/* Search Input */}
        <div className="inter-font position-relative my-3">
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
        <div className="inter-font row my-4">
          <div className="inter-font col-12 col-md-4 mb-3">
            <h4 className="inter-font inter-font card-heading mb-3">Views</h4>
            <div
              className="inter-font card border-0 shadow-sm p-3 rounded-3 "
              style={{
                background: "#6D5E2B",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => navigate("/talent/dashboard?tab=talents")}
            >
              <div className="inter-font d-flex align-items-center gap-3">
                <div
                  className="inter-font rounded-circle bg-white d-flex align-items-center justify-content-center"
                  style={{ width: "50px", height: "50px", minWidth: "50px" }}
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
                    className="inter-font mb-1 inter-font"
                    style={{ fontSize: "15px", fontWeight: 500 }}
                  >
                    Total Views
                  </h6>
                  <h2
                    className="inter-font fw-bold mb-0 inter-font"
                    style={{ fontSize: "22px" }}
                  >
                    5
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="inter-font col-12 col-md-4 mb-3">
            <h4 className="inter-font inter-font card-heading mb-3">Job History</h4>
            <div
              className="inter-font card border-0 shadow-sm p-3 rounded-3"
              style={{
                background: "#E26A52",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => navigate("/talent/dashboard?tab=transactions")}
            >
              <div className="inter-font d-flex align-items-center gap-3">
                <div
                  className="inter-font rounded-circle bg-white d-flex align-items-center justify-content-center"
                  style={{ width: "50px", height: "50px", minWidth: "50px" }}
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
                    className="inter-font mb-1 inter-font"
                    style={{ fontSize: "15px", fontWeight: 500 }}
                  >
                    Total Jobs
                  </h6>
                  <h2
                    className="inter-font fw-bold mb-0 inter-font"
                    style={{ fontSize: "22px" }}
                  >
                    5
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="inter-font col-12 col-md-4 mb-3">
            <h4 className="inter-font inter-font card-heading mb-3">Earnings</h4>
            <div
              className="inter-font card border-0 shadow-sm p-3 rounded-3"
              style={{
                background: "#AF516F",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => navigate("/talent/dashboard?tab=recruitment")}
            >
              <div className="inter-font d-flex align-items-center gap-3">
                <div
                  className="inter-font rounded-circle bg-white d-flex align-items-center justify-content-center"
                  style={{ width: "50px", height: "50px", minWidth: "50px" }}
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
                    className="inter-font mb-1 inter-font"
                    style={{ fontSize: "15px", fontWeight: 500 }}
                  >
                    Total Earnings
                  </h6>
                  <h2
                    className="inter-font fw-bold mb-0 inter-font"
                    style={{ fontSize: "22px" }}
                  >
                    5
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hire Projects Table */}
        <div>
          <h5 className="inter-font mb-3 inter-font" style={{ fontSize: "16px" }}>
            Hire Projects
          </h5>
          <div
            className="inter-font bg-white rounded-3 p-3 shadow"
            style={{ overflowX: "auto", width: "100%" }}
          >
            {isLoading ? (
              <div className="inter-font d-flex justify-content-center py-5">
                <div className="inter-font spinner-border" role="status"></div>
              </div>
            ) : dashboardData?.length !== 0 ? (
              <table className="inter-font table align-middle mb-0">
                <thead>
                  <tr>
                    <th>Employe Company</th>
                    <th>Job Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                    <th>Project</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="inter-font d-flex align-items-center gap-2">
                          <img
                            src={item?.receipt}
                            alt="logo"
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          />
                          <span
                            className="inter-font inter-font"
                            style={{ color: "#959595" }}
                          >
                            {item.company}
                          </span>
                        </div>
                      </td>
                      <td style={{ color: "#959595" }}>{item.job_type}</td>
                      <td style={{ color: "#959595" }}>{formatSingleDate(item.start_date)}</td>
                      <td style={{ color: "#959595" }}>{formatSingleDate(item.end_date)}</td>
                      <td
                        style={{
                          color: "rgba(54, 190, 92, 1)",
                          fontWeight: 500,
                        }}
                      >
                        {item.status}
                      </td>
                      <td style={{ color: "#959595" }}>{item.project}</td>
                      <td style={{ color: "#959595" }}>{item.total_amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="inter-font text-center py-5">Data not found</div>
            )}
          </div>
        </div>

        {/* Pagination */}
        {dashboardData?.length !== 0 && (
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
        )}

        <div style={{ height: "30px" }}></div>
      </div>
    </div>
  );
};

export default Dashboard;
