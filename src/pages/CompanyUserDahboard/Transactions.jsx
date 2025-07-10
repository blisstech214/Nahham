import React from "react";

import Navbar from "./Navbar";
import DashboardFooter from "../CompanyUserDahboard/DashboardFooter";

import { CiSearch } from "react-icons/ci";

import Select from "react-select";

import { Container, Row, Col, Image } from "react-bootstrap";

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
      invoiceNo: "NH00112",
      name: "Nadeem Tamimi",
      contract: "Expired",
      project: "NGI Film",
      duration: "5 Days",
      amount: "2500 AED",
      status: "Paid",
    },
    {
      date: "10 April",
      invoiceNo: "NH00112",
      name: "Nadeem Tamimi",
      contract: "Expired",
      project: "NGI Film",
      duration: "5 Days",
      amount: "2500 AED",
      status: "Paid",
    },
    {
      date: "10 April",
      invoiceNo: "NH00112",
      name: "Nadeem Tamimi",
      contract: "Expired",
      project: "NGI Film",
      duration: "5 Days",
      amount: "2500 AED",
      status: "Paid",
    },
    {
      date: "10 April",
      invoiceNo: "NH00112",
      name: "Nadeem Tamimi",
      contract: "Expired",
      project: "NGI Film",
      duration: "5 Days",
      amount: "2500 AED",
      status: "Paid",
    },
  ];


  return (
    <div className="main-bg py-5" style={{ height: "100vh" }}>
      <div className="d-flex justify-content-between align-items-center px-5">
        <h2 className="inter-font" style={{ fontSize: "19px" }}>
          Transactions History
        </h2>
        {/* Navbar */}
        <Navbar />
      </div>

      {/* Body */}
      <div>
        <div className="position-relative mb-3 mx-5">
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
      </div>

      <div className="d-flex mx-5">
        <div className="d-flex" style={{ width: "1030px" }}>
          <div style={{ width: "206px", marginRight: "8px" }}>
            <Select options={yearOptions} />
          </div>
          <div style={{ width: "206px", marginRight: "8px" }}>
            <Select options={categoryOptions} />
          </div>
          <div style={{ width: "206px", marginRight: "8px" }}>
            <Select options={subCategoryOptions} />
          </div>
          <div style={{ width: "206px", marginRight: "8px" }}>
            <Select options={ageOptions} />
          </div>
          <div style={{ width: "206px", marginRight: "10px" }}>
            <Select options={availabilityOptions} />
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn inter-font d-flex align-items-center justify-content-center gap-1"
            style={{
              background: "rgba(205, 73, 109, 1)",
              color: "white",
              width: "88px",
              height: "44px",
              padding: 0,
              border: "none",
              marginLeft: "33px"
            }}
          >
            <CiSearch size={18} style={{ marginBottom: "2px" }} />
            Search
          </button>
        </div>
      </div>

      {/*  */}
      <Container className="bg-white rounded-4 mt-4 p-0 mx-5 overflow-hidden">
        {data.map((item, idx) => (
          <Row
            key={idx}
            className="align-items-center py-3 px-4 border-bottom"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <Col md={1}>
              <div className="fw-semibold mt-2 mb-3">Date</div>
              <div className="recruitment-table">{item.date}</div>
            </Col>

            <Col md={2}>
              <div className="fw-semibold mt-2 mb-3">Invoice No</div>
              <div className="recruitment-table">{item.invoiceNo}</div>
            </Col>

            <Col md={2}>
              <div className="fw-semibold mt-2 mb-3">Talent Name</div>
              <div className="recruitment-table">{item.name}</div>
            </Col>

            <Col md={2}>
              <div className="fw-semibold mt-2 mb-3">Contract Status</div>
              <span
                className="inter-font"
                style={{
                  background:
                    item.contract === "Active" ? "#00C25F" : "#E97B6E",
                  color: "white",
                  borderRadius: "10px",
                  padding: "4px 12px",
                  fontSize: "14px",
                  height: "23px"
                }}
              >
                {item.contract === "Active" ? "Active" : "Expired/Closed"}
              </span>
            </Col>

            <Col md={1}>
              <div className="fw-semibold mt-2 mb-3">Project</div>
              <div className="recruitment-table">{item.project}</div>
            </Col>

            <Col md={1}>
              <div className="fw-semibold mt-2 mb-3">Duration</div>
              <div className="recruitment-table">{item.duration}</div>
            </Col>

            <Col md={1}>
              <div className="fw-semibold mt-2 mb-3">Amount</div>
              <div
                style={{ fontSize: "14px", color: "rgba(154, 154, 154, 1)" }}
              >
                {item.amount}
              </div>
            </Col>

            <Col md={2}>
              <div className="fw-semibold mt-2 mb-3">Status</div>
              <div className="d-flex align-items-center gap-3 text-white">
                <span className="inter-font d-flex justify-content-center align-items-center rounded-3" style={{ background: "#00C25F", fontWeight: 500, width: "45px", height: "20px", fontSize: "9px" }}>
                  {item.status}
                </span>
                <LuDownload
                  className="ms-4"
                  fontSize={23}
                  style={{ cursor: "pointer", color: "gray" }}
                />
                <FaEye
                  fontSize={23}
                  style={{ cursor: "pointer", color: "gray" }}
                />
              </div>
            </Col>
          </Row>
        ))}
      </Container>

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
        {/* <button className="view-all-btn inter-font fw-lighter py-3">
          View All
        </button> */}
      </div>

      {/* Footer */}
      <DashboardFooter />
    </div>
  );
};

export default Transaction;
