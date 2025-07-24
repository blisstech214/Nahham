import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import DashboardFooter from "./DashboardFooter";
import { FaLocationDot } from "react-icons/fa6";
import profile from "../../assets/images/star-profile-img.png";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";
import { Button, Col, Row } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HistoryCard = ({ item }) => {
  const statusStyles = {
    Pending: { color: "#CD496D", bg: "#FCE1E8" },
    Completed: { color: "#5F8D73", bg: "#D3FDEA" },
    "In Progress": { color: "#5F8D73", bg: "#D3FDEA" },
    "Up Coming": { color: "#CD496D", bg: "#FCE1E8" },
  };

  const [isLoading, setIsLoading] = useState(false);

  const { color, bg } =
    statusStyles[item.paymentStatus] || statusStyles["Pending"];

  const handleUpdateStatus = async (id, status) => {
    try {
      setIsLoading(true);

      const formdata = new FormData();
      formdata.append("project_id", id);
      formdata.append("status", status);

      const res = await ApiService.request({
        method: "POST",
        url: `projects/updateStatus`,
        data: formdata,
      });

      if (res.data.status) {
        // setCreateJobData(false);
        // await fetchJobData(1);

        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error("Edit Error:", err);
      toast.error("Failed to update job.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="row border-bottom">
      <div className="col-md-5 d-flex my-3">
        <img
          src={item.image}
          className="rounded-circle mt-3 ms-4"
          style={{ width: "54px", height: "54px", objectFit: "cover" }}
          alt="Profile"
        />
        <div className="mt-3 ms-3">
          <h5 className="inter-font" style={{ fontSize: "17px" }}>
            {item.title}
          </h5>
          <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
            {item.description}
          </p>
          {/* <p className="inter-font" style={{ color: "gray" }}>
            <FaLocationDot className="me-1 text-dark" />
            {item.location}
          </p> */}
        </div>
      </div>
      <div className="col-md-2 my-3">
        <h5 className="inter-font" style={{ fontSize: "18px" }}>
          Project Dates
        </h5>
        <p
          className="inter-font"
          style={{ fontSize: "14px", color: "#777474" }}
        >
          {item.start_date} - {item.end_date}
        </p>
      </div>
      <div className="col-md-1 my-3">
        <h5 className="inter-font" style={{ fontSize: "18px" }}>
          Earnings
        </h5>
        <p
          className="inter-font"
          style={{ fontSize: "14px", color: "#777474" }}
        >
          {item.total_amount}
        </p>
      </div>
      <div className="col-md-2 my-3">
        <h5 className="inter-font" style={{ fontSize: "18px" }}>
          Status
        </h5>
        <button
          className="btn border-0 inter-font"
          style={{
            color: color,
            backgroundColor: bg,
            width: "85px",
            height: "27px",
            fontSize: "12px",
          }}
        >
          {item.status}
        </button>
      </div>
      <div className="col-md-2 my-3">
        <h5 className="inter-font" style={{ fontSize: "18px" }}>
          Action
        </h5>
        <div className="d-flex gap-2">
          <button
            onClick={() => handleUpdateStatus(item?._id, "Accepted")}
            className="btn border-0 inter-font"
            style={{
              color: "#5F8D73",
              backgroundColor: "#D3FDEA",
              width: "85px",
              height: "27px",
              fontSize: "12px",
            }}
          >
            Accept
          </button>
          <button
            onClick={() => handleUpdateStatus(item?._id, "Rejected")}
            className="btn border-0 inter-font"
            style={{
              color: "#CD496D",
              backgroundColor: "#FCE1E8",
              width: "85px",
              height: "27px",
              fontSize: "12px",
            }}
          >
            Decline
          </button>
        </div>
      </div>
      {/* <div className="col-md-2 my-3 text-end pe-5">
        <div className="mt-4">
          <button
            className="rounded-3 inter-font"
            style={{
              color: item.projectStatusColor,
              background: item.projectStatusBg,
              border: "0",
              fontSize: "12px",
              width: "87px",
              height: "28px",
            }}
          >
            {item.projectStatus}
          </button>
        </div>
      </div> */}
    </div>
  );
};

const History = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const historyData = [
    {
      image: profile,
      title: "Web Series Leading Role plus Singer",
      company: "Movie Center Company",
      location: "Sharjah, UAE",
      dates: "10 May - 15 May",
      earnings: "AED 85000",
      paymentStatus: "Pending",
      projectStatus: "In Progress",
      projectStatusColor: "#5F8D73",
      projectStatusBg: "#D3FDEA",
    },
    {
      image: profile,
      title: "Web Series Leading Role plus Singer",
      company: "Movie Center Company",
      location: "Sharjah, UAE",
      dates: "10 May - 15 May",
      earnings: "AED 85000",
      paymentStatus: "Pending",
      projectStatus: "Up Coming",
      projectStatusColor: "#CD496D",
      projectStatusBg: "#FCE1E8",
    },
    {
      image: profile,
      title: "Web Series Leading Role plus Singer",
      company: "Movie Center Company",
      location: "Sharjah, UAE",
      dates: "10 May - 15 May",
      earnings: "AED 85000",
      paymentStatus: "Completed",
      projectStatus: "Completed",
      projectStatusColor: "#E26A52",
      projectStatusBg: "#FFE7E2",
    },
    {
      image: profile,
      title: "Web Series Leading Role plus Singer",
      company: "Movie Center Company",
      location: "Sharjah, UAE",
      dates: "10 May - 15 May",
      earnings: "AED 85000",
      paymentStatus: "Completed",
      projectStatus: "Completed",
      projectStatusColor: "#E26A52",
      projectStatusBg: "#FFE7E2",
    },
    {
      image: profile,
      title: "Web Series Leading Role plus Singer",
      company: "Movie Center Company",
      location: "Sharjah, UAE",
      dates: "10 May - 15 May",
      earnings: "AED 85000",
      paymentStatus: "Completed",
      projectStatus: "Completed",
      projectStatusColor: "#E26A52",
      projectStatusBg: "#FFE7E2",
    },
    {
      image: profile,
      title: "Web Series Leading Role plus Singer",
      company: "Movie Center Company",
      location: "Sharjah, UAE",
      dates: "10 May - 15 May",
      earnings: "AED 85000",
      paymentStatus: "Completed",
      projectStatus: "Completed",
      projectStatusColor: "#E26A52",
      projectStatusBg: "#FFE7E2",
    },
    {
      image: profile,
      title: "Web Series Leading Role plus Singer",
      company: "Movie Center Company",
      location: "Sharjah, UAE",
      dates: "10 May - 15 May",
      earnings: "AED 85000",
      paymentStatus: "Completed",
      projectStatus: "Completed",
      projectStatusColor: "#E26A52",
      projectStatusBg: "#FFE7E2",
    },
    {
      image: profile,
      title: "Web Series Leading Role plus Singer",
      company: "Movie Center Company",
      location: "Sharjah, UAE",
      dates: "10 May - 15 May",
      earnings: "AED 85000",
      paymentStatus: "Completed",
      projectStatus: "Completed",
      projectStatusColor: "#E26A52",
      projectStatusBg: "#FFE7E2",
    },
    {
      image: profile,
      title: "Web Series Leading Role plus Singer",
      company: "Movie Center Company",
      location: "Sharjah, UAE",
      dates: "10 May - 15 May",
      earnings: "AED 85000",
      paymentStatus: "Completed",
      projectStatus: "Completed",
      projectStatusColor: "#E26A52",
      projectStatusBg: "#FFE7E2",
    },
    {
      image: profile,
      title: "Web Series Leading Role plus Singer",
      company: "Movie Center Company",
      location: "Sharjah, UAE",
      dates: "10 May - 15 May",
      earnings: "AED 85000",
      paymentStatus: "Completed",
      projectStatus: "Completed",
      projectStatusColor: "#E26A52",
      projectStatusBg: "#FFE7E2",
    },
    {
      image: profile,
      title: "Web Series Leading Role plus Singer",
      company: "Movie Center Company",
      location: "Sharjah, UAE",
      dates: "10 May - 15 May",
      earnings: "AED 85000",
      paymentStatus: "Completed",
      projectStatus: "Completed",
      projectStatusColor: "#E26A52",
      projectStatusBg: "#FFE7E2",
    },
    {
      image: profile,
      title: "Web Series Leading Role plus Singer",
      company: "Movie Center Company",
      location: "Sharjah, UAE",
      dates: "10 May - 15 May",
      earnings: "AED 85000",
      paymentStatus: "Completed",
      projectStatus: "Completed",
      projectStatusColor: "#E26A52",
      projectStatusBg: "#FFE7E2",
    },
    {
      image: profile,
      title: "Web Series Leading Role plus Singer",
      company: "Movie Center Company",
      location: "Sharjah, UAE",
      dates: "10 May - 15 May",
      earnings: "AED 85000",
      paymentStatus: "Completed",
      projectStatus: "Completed",
      projectStatusColor: "#E26A52",
      projectStatusBg: "#FFE7E2",
    },
    {
      image: profile,
      title: "Web Series Leading Role plus Singer",
      company: "Movie Center Company",
      location: "Sharjah, UAE",
      dates: "10 May - 15 May",
      earnings: "AED 85000",
      paymentStatus: "Completed",
      projectStatus: "Completed",
      projectStatusColor: "#E26A52",
      projectStatusBg: "#FFE7E2",
    },
    // Add more as needed
  ];

  const totalPages = 5;

  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    total_pages: 1,
    current_page: 1,
  });
  const [projectData, setProjectData] = useState([]);

  const fetchProjectData = async (page = 1) => {
    try {
      setIsLoading(true);
      const res = await ApiService.request({
        method: "GET",
        url: `getProjectQuotes?page=${page}`,
      });

      const data = res.data;
      if (data.status) {
        console.log("data -", data);
        setProjectData(data.data.projects);
        setPagination(data.data.pagination);
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

  const handlePageChange = (newPage) => {
    if (
      newPage >= 1 &&
      newPage <= pagination.total_pages &&
      newPage !== pagination.current_page
    ) {
      fetchProjectData(newPage);
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

  useEffect(() => {
    fetchProjectData(1);
  }, []);

  return (
    <div className="main-bg" style={{ minHeight: "100vh" }}>
      <div
        className="bg-white rounded-3 m-5 d-flex flex-column"
        style={{ minHeight: "79vh", overflow: "hidden" }}
      >
        <div className="border-bottom py-3 ms-4">
          <h3 className="inter-font pb-1" style={{ fontSize: "20px" }}>
            My History
          </h3>
        </div>

        <div className="scrollable-list flex-grow-1">
          {projectData.map((item, index) => (
            <HistoryCard key={index} item={item} />
          ))}
        </div>

        <Row className="mt-4">
          <Col className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
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

        <div className="d-flex justify-content-center mt-4">
          <ul className="pagination-custom">
            {[...Array(totalPages)].map((_, idx) => (
              <li key={idx}>
                <button
                  className={`page-btn ${
                    currentPage === idx + 1 ? "active" : ""
                  }`}
                  onClick={() => setCurrentPage(idx + 1)}
                >
                  {idx + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                className="page-btn"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              >
                {`>`}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .pagination-custom {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          padding: 0;
          list-style: none;
        }

        .pagination-custom .page-btn {
          background-color: transparent;
          border: none;
          font-size: 16px;
          color: #333;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          transition: 0.3s;
          cursor: pointer;
        }

        .pagination-custom .page-btn:hover {
          background-color: #f1f1f1;
        }

        .pagination-custom .page-btn.active {
          background-color: #e57c66;
          color: white;
          font-weight: bold;
        }

        .scrollable-list {
          max-height: 550px;
          overflow-y: auto;
          overflow-x: hidden;
          padding-right: 10px;
        }

        .scrollable-list::-webkit-scrollbar {
          width: 6px;
        }

        .scrollable-list::-webkit-scrollbar-thumb {
          background-color: #c1c1c1;
          border-radius: 3px;
        }

        .scrollable-list::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default History;
