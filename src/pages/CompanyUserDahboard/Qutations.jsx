import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import DashboardFooter from "./DashboardFooter";
import { CiSearch } from "react-icons/ci";
import Select from "react-select";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LuDownload } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import SelectedQuoteTalent from "./SelectedQuoteTalent";
import SelectedTalentsOfQuotes from "./SelectedTalentsOfQuotes";

const Qutations = () => {
  const yearOptions = [
    { value: "", label: "Year of Exp" },
    { value: "1-3", label: "1-3 years" },
    { value: "4-6", label: "4-6 years" },
    { value: "7+", label: "7+ years" },
  ];

  const categoryOptions = [
    { value: "", label: "Category" },
    { value: "camera", label: "Camera man" },
    { value: "actor", label: "Actor" },
    { value: "writer", label: "Writer" },
  ];

  const subCategoryOptions = [
    { value: "", label: "Sub Category" },
    { value: "photographer", label: "Photographer" },
    { value: "producer", label: "Producer" },
    { value: "musician", label: "Musician" },
  ];

  const ageOptions = [
    { value: "", label: "Age" },
    { value: "18-25", label: "18-25" },
    { value: "26-35", label: "26-35" },
    { value: "36+", label: "36+" },
  ];

  const availabilityOptions = [
    { value: "", label: "Availability" },
    { value: "available", label: "Available" },
    { value: "not_available", label: "Not Available" },
  ];

  const data = [
    {
      date: "10 April",
      invoiceNo: "NH00112",
      name: "Nadeem Tamimi",
      contract: "Active",
      project: "NGI Film",
      duration: "5 Days",
      amount: "2500 AED",
      status: "Paid",
    },
    {
      date: "10 April",
      invoiceNo: "NH00113",
      name: "Nadeem Tamimi",
      contract: "Expired",
      project: "NGI Film",
      duration: "5 Days",
      amount: "2500 AED",
      status: "Paid",
    },
    {
      date: "10 April",
      invoiceNo: "NH00114",
      name: "Nadeem Tamimi",
      contract: "Expired",
      project: "NGI Film",
      duration: "5 Days",
      amount: "2500 AED",
      status: "Paid",
    },
    {
      date: "10 April",
      invoiceNo: "NH00115",
      name: "Nadeem Tamimi",
      contract: "Expired",
      project: "NGI Film",
      duration: "5 Days",
      amount: "2500 AED",
      status: "Paid",
    },
    {
      date: "10 April",
      invoiceNo: "NH00116",
      name: "Nadeem Tamimi",
      contract: "Expired",
      project: "NGI Film",
      duration: "5 Days",
      amount: "2500 AED",
      status: "Paid",
    },
  ];

  const [qutationData, setQutationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    total_pages: 1,
    current_page: 1,
  });

  const [selectedTalentData, setSelectedTalentData] = useState([]);
  const [selectedTalentByProjectData, setSelectedTalentByProjectData] =
    useState([]);

  console.log("selectedTalentByProjectData - - ", selectedTalentByProjectData);

  const fetchQutationData = async (page = 1) => {
    try {
      setIsLoading(true);
      const res = await ApiService.request({
        method: "GET",
        url: `company/getProjects?page=${page}`,
      });

      const data = res.data;
      if (data.status) {
        setQutationData(data?.data?.projects);
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

  useEffect(() => {
    fetchQutationData(1);
  }, []);

    function formatSingleDate(isoDate) {
      const date = new Date(isoDate);
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "short" }); // or "long" for full month name
      return `${day} ${month}`;
    }

  function calculateDurationDetailsISO(startISO, endISO) {
    const startDate = new Date(startISO);
    const endDate = new Date(endISO);

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const parts = [];
    if (years) parts.push(`${years} year${years > 1 ? "s" : ""}`);
    if (months) parts.push(`${months} month${months > 1 ? "s" : ""}`);
    if (days) parts.push(`${days} day${days > 1 ? "s" : ""}`);

    return parts.length ? ` ${parts.join(", ")}` : "Duration: 0 days";
  }

  const handlePageChange = (page) => {
    if (
      page !== pagination.current_page &&
      page >= 1 &&
      page <= pagination.total_pages
    ) {
      fetchQutationData(page);
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

  const location = useLocation();
  const navigate = useNavigate();

  const getQueryParam = (key) => new URLSearchParams(location.search).get(key);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const currentTab = getQueryParam("subTab");
    if (currentTab && currentTab !== activeTab) {
      setActiveTab(currentTab);
    }
  }, [location.search]);

  return (
    <>
      <div className="inter-font " style={{ minHeight: "100vh" }}>
        {activeTab === "" && (
          <>
            <div className="inter-font d-flex justify-content-between align-items-center flex-wrap px-3">
              <h2 className="inter-font inter-font" style={{ fontSize: "19px" }}>
                My Qutations
              </h2>
            </div>

            {/* Search */}
            <div className="inter-font position-relative mb-3">
              <input
                type="text"
                placeholder="Search by Keywords"
                className="inter-font w-100 p-2 rounded-3 ps-5 py-3 inter-font"
                style={{ paddingLeft: "2.5rem", border: "none" }}
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

            {/* Filters */}
            <div className="inter-font d-flex flex-wrap gap-2 px-3">
              <div style={{ flex: "1 1 100px", minWidth: "150px" }}>
                <Select options={yearOptions} />
              </div>
              <div style={{ flex: "1 1 100px", minWidth: "150px" }}>
                <Select options={categoryOptions} />
              </div>
              <div style={{ flex: "1 1 100px", minWidth: "150px" }}>
                <Select options={subCategoryOptions} />
              </div>
              <div style={{ flex: "1 1 100px", minWidth: "150px" }}>
                <Select options={ageOptions} />
              </div>
              <div style={{ flex: "1 1 100px", minWidth: "150px" }}>
                <Select options={availabilityOptions} />
              </div>

              <button
                className="inter-font btn inter-font d-flex align-items-center justify-content-center gap-1"
                style={{
                  background: "rgba(205, 73, 109, 1)",
                  color: "white",
                  padding: "8px 18px",
                  border: "none",
                  borderRadius: "8px",
                }}
              >
                <CiSearch size={18} />
                Search
              </button>
            </div>

            {/* Table */}
            <Container className="inter-font bg-white rounded-4 mt-4 p-0 px-0 overflow-hidden">
              {isLoading ? (
                <p>Loading…</p>
              ) : qutationData?.length === 0 ? (
                <p className="inter-font text-center text-muted mt-4">
                  No job data found.
                </p>
              ) : (
                qutationData.map((item, idx) => (
                  <Row
                    key={idx}
                    className="inter-font align-items-center py-3 px-3 border-bottom"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <Col xs={12} sm={6} md={2} className="inter-font mb-3 mb-md-0">
                      <div className="inter-font fw-semibold">Date</div>
                      <div>
                        {item.talents[0]?.start_date
                          ? formatSingleDate(item.talents[0]?.start_date)
                          : "-"}
                      </div>
                    </Col>

                    <Col xs={12} sm={6} md={2} className="inter-font mb-3 mb-md-0">
                      <div className="inter-font fw-semibold">Quote No</div>
                      <div>{item.project_code}</div>
                    </Col>

                    <Col xs={12} sm={6} md={2} className="inter-font mb-3 mb-md-0">
                      <div className="inter-font fw-semibold">Project</div>
                      <div>{item.title}</div>
                    </Col>

                    <Col xs={12} sm={6} md={2} className="inter-font mb-3 mb-md-0">
                      <div className="inter-font fw-semibold">Duration</div>
                      <div style={{ fontSize: "14px", color: "#999" }}>
                        {item.talents[0]?.start_date
                          ? calculateDurationDetailsISO(
                              item.talents[0]?.start_date,
                              item.talents[0]?.end_date
                            )
                          : "-"}
                      </div>
                    </Col>

                    <Col xs={12} sm={6} md={2} className="inter-font mb-3 mb-md-0">
                      <div className="inter-font fw-semibold">Amount</div>
                      <div style={{ fontSize: "14px", color: "#999" }}>
                        {item.total_amount} AED
                      </div>
                    </Col>

                    <Col xs={12} sm={6} md={1}>
                      <div className="inter-font fw-semibold">Status</div>
                      <div className="inter-font d-flex flex-wrap align-items-center gap-2 mt-2 inter-font">
                        <span
                          style={{
                            background: "#CC496D",
                            fontWeight: 500,
                            width: "50px",
                            height: "22px",
                            fontSize: "10px",
                            color: "white",
                            borderRadius: "4px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {item.pay_status}
                        </span>
                      </div>
                    </Col>

                      {/* <div className="inter-font fw-semibold">Duration</div> */}
                    {/* <Col xs={12} sm={6} md={1} className="inter-font mb-3 mb-md-0">
                      <span
                        style={{
                          background: "#CC496D",
                          fontWeight: 500,
                          width: "50px",
                          height: "22px",
                          fontSize: "10px",
                          color: "white",
                          borderRadius: "4px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        Paid
                      </span>
                    </Col> */}

                    <Col xs={12} sm={6} md={1}>
                      <div className="inter-font d-flex flex-wrap align-items-center gap-2 mt-2">
                        <FaEye
                          onClick={() => {
                            navigate(
                              "/company-dashboard?tab=qutations&subTab=selectedTalentsOfQuotes"
                            );
                            setSelectedTalentData(item);
                          }}
                          fontSize={20}
                          style={{ cursor: "pointer", color: "gray" }}
                        />
                      </div>
                    </Col>
                  </Row>
                ))
              )}
            </Container>

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
          </>
        )}

        {activeTab === "selectedOuoteTalent" && (
          <SelectedQuoteTalent
            selectedTalent={selectedTalentData}
            setSelectedTalentByProjectData={setSelectedTalentByProjectData}
          />
        )}

        {activeTab === "selectedTalentsOfQuotes" && (
          <SelectedTalentsOfQuotes
            selectedTalentData={selectedTalentData}
            selectedTalentByProjectData={selectedTalentByProjectData}
          />
        )}

        {/* Footer */}
      </div>
    </>
  );
};

export default Qutations;
