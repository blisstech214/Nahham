import React from "react";
import Navbar from "./Navbar";
import DashboardFooter from "../CompanyUserDahboard/DashboardFooter";
import { CiSearch } from "react-icons/ci";
import Select from "react-select";
import { Container, Row, Col } from "react-bootstrap";
import { LuDownload } from "react-icons/lu";
import { FaEye } from "react-icons/fa";

const Transaction = () => {
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

  return (
    <div className="" style={{ minHeight: "100vh" }}>
      <div className="d-flex justify-content-between align-items-center flex-wrap px-3">
        <h2 className="inter-font" style={{ fontSize: "19px" }}>
          Transactions History
        </h2>
      </div>

      {/* Search */}
      <div className="position-relative mb-3">
        <input
          type="text"
          placeholder="Search by Keywords"
          className="w-100 p-2 rounded-3 ps-5 py-3 inter-font"
          style={{ paddingLeft: "2.5rem", border: "none" }}
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

      {/* Filters */}
      <div className="d-flex flex-wrap gap-2 px-3">
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
          className="btn inter-font d-flex align-items-center justify-content-center gap-1"
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
      <Container className="bg-white rounded-4 mt-4 p-0 px-0 overflow-hidden">
        {data.map((item, idx) => (
          <Row
            key={idx}
            className="align-items-center py-3 px-3 border-bottom"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <Col xs={12} sm={6} md={1} className="mb-3 mb-md-0">
              <div className="fw-semibold">Date</div>
              <div>{item.date}</div>
            </Col>

            <Col xs={12} sm={6} md={2} className="mb-3 mb-md-0">
              <div className="fw-semibold">Invoice No</div>
              <div>{item.invoiceNo}</div>
            </Col>

            <Col xs={12} sm={6} md={2} className="mb-3 mb-md-0">
              <div className="fw-semibold">Talent Name</div>
              <div>{item.name}</div>
            </Col>

            <Col xs={12} sm={6} md={2} className="mb-3 mb-md-0">
              <div className="fw-semibold">Contract</div>
              <span
                style={{
                  background:
                    item.contract === "Active" ? "#00C25F" : "#E97B6E",
                  color: "white",
                  borderRadius: "10px",
                  padding: "4px 12px",
                  fontSize: "13px",
                }}
              >
                {item.contract === "Active" ? "Active" : "Expired/Closed"}
              </span>
            </Col>

            <Col xs={12} sm={6} md={1} className="mb-3 mb-md-0">
              <div className="fw-semibold">Project</div>
              <div>{item.project}</div>
            </Col>

            <Col xs={12} sm={6} md={1} className="mb-3 mb-md-0">
              <div className="fw-semibold">Duration</div>
              <div>{item.duration}</div>
            </Col>

            <Col xs={12} sm={6} md={1} className="mb-3 mb-md-0">
              <div className="fw-semibold">Amount</div>
              <div style={{ fontSize: "14px", color: "#999" }}>
                {item.amount}
              </div>
            </Col>

            <Col xs={12} sm={6} md={2}>
              <div className="fw-semibold">Status / Actions</div>
              <div className="d-flex flex-wrap align-items-center gap-2 mt-2">
                <span
                  style={{
                    background: "#00C25F",
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
                  {item.status}
                </span>
                <LuDownload
                  fontSize={20}
                  style={{ cursor: "pointer", color: "gray" }}
                />
                <FaEye
                  fontSize={20}
                  style={{ cursor: "pointer", color: "gray" }}
                />
              </div>
            </Col>
          </Row>
        ))}
      </Container>

      {/* Pagination */}
      <div className="d-flex justify-content-center my-5">
        <ul className="pagination-list d-flex gap-2 list-unstyled">
          <li className="page-item active inter-font">1</li>
          <li className="page-item inter-font">2</li>
          <li className="page-item inter-font">3</li>
          <li className="page-item inter-font">4</li>
          <li className="page-item inter-font">5</li>
          <li className="page-item inter-font">...</li>
          <li className="page-item inter-font">26</li>
          <li className="page-item inter-font">{">"}</li>
        </ul>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Transaction;
