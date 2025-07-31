import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import DashboardFooter from "../CompanyUserDahboard/DashboardFooter";
import { CiSearch } from "react-icons/ci";
import Select from "react-select";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";

const Recruitment = () => {
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
      name: "Muhammad Abdullah",
      email: "m.abdullah@.com",
      category: "Casting Actor",
      contract: "Active",
      period: "10 April - 15 April",
      duration: "5 Days",
      amount: "2500 AED",
      project: "Film Production",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Subhan Bin Zaidi",
      email: "subhan.zaidi@.com",
      category: "Camera Man",
      contract: "Expired",
      experience: "4 years",
      nationality: "Dubai, UAE",
      contact: "+971 25 365 6589",
      project: "Film Production",
      img: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
      name: "Shaista Tamimi",
      email: "shaista.tamimi@.com",
      category: "Producer",
      contract: "Active",
      experience: "2.5 years",
      nationality: "Dubai, UAE",
      contact: "+971 25 365 6589",
      project: "Film Production",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Sohail Al Mansori",
      email: "m.abdullah@.com",
      category: "Casting Actor",
      contract: "Active",
      experience: "4 years",
      nationality: "Dubai, UAE",
      contact: "+971 25 365 6589",
      project: "Film Production",
      img: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      name: "Muhammad Abdullah",
      email: "m.abdullah@.com",
      category: "Casting Actor",
      contract: "Expired",
      experience: "4 years",
      nationality: "Dubai, UAE",
      contact: "+971 25 365 6589",
      project: "Film Production",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];


  const [recruitmentData, setRecruitmentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    total_pages: 1,
    current_page: 1,
  });

  useEffect(() => {
    fetchDashboardData(1);
  }, []);

  console.log("Dashboard Data:", recruitmentData);

  const fetchDashboardData = async (page = 1) => {
    try {
      setIsLoading(true);
      const res = await ApiService.request({
        method: "GET",
        url: `company/getAcceptedProjects?page=${page}`,
      });

      const data = res.data;
      if (data.status) {
        setRecruitmentData(data?.data?.projects);
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
    <div className="inter-font " style={{ minHeight: "100vh" }}>
      <div className="inter-font d-flex justify-content-between align-items-center flex-wrap px-3">
        <h2 className="inter-font inter-font" style={{ fontSize: "19px" }}>
          Recruitment History
        </h2>
      </div>

      {/* Filters */}
      <div className="inter-font px-3 mt-4">
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

        <div className="inter-font d-flex flex-wrap gap-2">
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
      </div>

      {/* Recruitment Table */}
      <Container
        className="inter-font bg-white rounded-4 mt-4 p-0 overflow-hidden scrollable-list flex-grow-1"
        style={{ marginTop: "30px" }}
      >
        {isLoading ? (
          <p>Loading…</p>
        ) : recruitmentData?.length === 0 ? (
          <p className="inter-font text-center text-muted mt-4">
            No data found.
          </p>
        ) : (recruitmentData.map((talent, idx) => {
          return (
            <Row
              key={idx}
              className="inter-font align-items-start py-3 px-3 border-bottom"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Col
                xs={12}
                sm={6}
                md={3}
                className="inter-font d-flex align-items-center gap-3 mb-3 mb-md-0"
              >
                <Image
                  src={talent?.talent_id?.picture}
                  roundedCircle
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                />
                <div>
                  <div className="inter-font fw-semibold"> {talent?.talent_id?.first_name}{" "}
                    {talent?.talent_id?.last_name}</div>
                  <div style={{ fontSize: "14px", color: "#888" }}>
                    {talent?.talent_id?.email}
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={2} className="inter-font mb-3 mb-md-0">
                <div className="inter-font fw-semibold">Category</div>
                <div style={{ fontSize: "14px", color: "#555" }}>
                  {talent?.job_type}
                </div>
              </Col>

              <Col xs={12} sm={6} md={2} className="inter-font mb-3 mb-md-0">
                <div className="inter-font fw-semibold mb-1">Contract</div>
                <span
                  style={{
                    background:
                      talent?.status === "Accepted"
                        ? "rgba(0,194,95,1)"
                        : "rgba(233,123,110,1)",
                    color: "white",
                    borderRadius: "10px",
                    padding: "4px 12px",
                    fontSize: "13px",
                  }}
                >
                  {talent?.status === "Accepted" ? "Active" : "Expired/Closed"}
                </span>
              </Col>

              <Col xs={12} sm={6} md={2} className="inter-font mb-3 mb-md-0">

                <div className="inter-font fw-semibold mb-1">Period</div>
                <div style={{ fontSize: "14px", color: "#555" }}>
                  {formatSingleDate(talent?.start_date)} - {formatSingleDate(talent?.end_date)}
                </div>
              </Col>

              <Col xs={12} sm={6} md={1} className="inter-font mb-3 mb-md-0">
                <div className="inter-font fw-semibold mb-1">Duration</div>
                <span style={{ fontSize: "14px", color: "#555" }}>
                  {talent?.duration}
                </span>
                {/* {talent?.start_date ? (
                  <>
                    <div className="inter-font fw-semibold mb-1">Period</div>
                    <div style={{ fontSize: "14px", color: "#555" }}>
                      {formatSingleDate(talent?.start_date)} - {formatSingleDate(talent?.end_date)}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="inter-font fw-semibold mb-1">Experience</div>
                    <div style={{ fontSize: "14px", color: "#555" }}>
                      {person.experience}
                    </div>
                  </>
                )} */}
              </Col>

              <Col xs={12} sm={6} md={2}>
                {/* {person.project ? (
                  <>
                    <div className="inter-font fw-semibold mb-1">Project</div>
                    <div className="inter-font fw-bold" style={{ color: "#999" }}>
                      {person.project}
                    </div>person
                  </>
                ) : ( */}
                <>
                  <div className="inter-font fw-semibold mb-1">Project</div>
                  <div style={{ fontSize: "14px", color: "#555" }}>
                    {talent?.project_id?.title || "N/A"}
                  </div>

                </>
                {/* )} */}
              </Col>
            </Row>
          )
        }))}
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
    </div>
  );
};

export default Recruitment;
