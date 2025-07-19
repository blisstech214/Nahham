import React, { useState } from "react";
import Navbar from "./Navbar";
import DashboardFooter from "./DashboardFooter";
import { FaLocationDot } from "react-icons/fa6";
import profile from "../../assets/images/star-profile-img.png";

const HistoryCard = ({ item }) => {
  const statusStyles = {
    Pending: { color: "#CD496D", bg: "#FCE1E8" },
    Completed: { color: "#5F8D73", bg: "#D3FDEA" },
    "In Progress": { color: "#5F8D73", bg: "#D3FDEA" },
    "Up Coming": { color: "#CD496D", bg: "#FCE1E8" },
  };

  const { color, bg } =
    statusStyles[item.paymentStatus] || statusStyles["Pending"];

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
            {item.company}
          </p>
          <p className="inter-font" style={{ color: "gray" }}>
            <FaLocationDot className="me-1 text-dark" />
            {item.location}
          </p>
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
          {item.dates}
        </p>
      </div>
      <div className="col-md-2 my-3">
        <h5 className="inter-font" style={{ fontSize: "18px" }}>
          Earnings
        </h5>
        <p
          className="inter-font"
          style={{ fontSize: "14px", color: "#777474" }}
        >
          {item.earnings}
        </p>
      </div>
      <div className="col-md-1 my-3">
        <h5 className="inter-font" style={{ fontSize: "18px" }}>
          Payment
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
          {item.paymentStatus}
        </button>
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
          {historyData.map((item, index) => (
            <HistoryCard key={index} item={item} />
          ))}
        </div>

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
