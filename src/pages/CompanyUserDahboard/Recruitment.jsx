import React, { useState } from "react";

import Navbar from "./Navbar";
import DashboardFooter from "../CompanyUserDahboard/DashboardFooter";

import { CiSearch } from "react-icons/ci";

import Select from "react-select";

import { Container, Row, Col, Badge, Image } from "react-bootstrap";

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
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  return (
    <div className="main-bg py-5" style={{ height: "100vh" }}>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="inter-font" style={{ fontSize: "19px" }}>
          Recruitment History
        </h2>
        {/* Navbar */}
        <Navbar />
      </div>

      {/* Body */}
      <div className="px-5">
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
      </div>

      <div className="d-flex px-5">
        <div className="d-flex" style={{ width: "1025px" }}>
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
              marginLeft: "33px",
            }}
          >
            <CiSearch size={18} style={{ marginBottom: "2px" }} />
            Search
          </button>
        </div>
      </div>

      {/*  */}
      <Container className="bg-white rounded-4 mt-4 p-0 overflow-hidden mx-5">
        {data.map((person, idx) => (
          <Row
            key={idx}
            className="align-items-center py-3 px-4 border-bottom"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <Col md={3} className="d-flex align-items-center gap-3">
              <Image
                src={person.img}
                roundedCircle
                width={50}
                height={50}
                style={{ objectFit: "cover" }}
              />
              <div>
                <div className="fw-semibold">{person.name}</div>
                <div style={{ fontSize: "14px", color: "#888" }}>
                  {person.email}
                </div>
              </div>
            </Col>

            <Col md={2}>
              <div className="fw-semibold">Category</div>
              <div className="mt-2 recruitment-table fw-lighter">
                {person.category}
              </div>
            </Col>

            <Col md={2}>
              <div className="fw-semibold mb-2">Contract Status</div>
              <span
                className="inter-font"
                style={{
                  background:
                    person.contract === "Active"
                      ? "rgba(0, 194, 95, 1)"
                      : "rgba(233, 123, 110, 1)",
                  color: "white",
                  borderRadius: "10px",
                  padding: "4px 12px",
                  fontSize: "14px",
                  height: "23px",
                }}
              >
                {person.contract === "Active" ? "Active" : "Expired/Closed"}
              </span>
            </Col>

            <Col md={2}>
              {person.period ? (
                <>
                  <div className="fw-semibold mb-2">Period</div>
                  <div className="recruitment-table fw-lighter">
                    {person.period}
                  </div>
                </>
              ) : (
                <>
                  <div className="fw-semibold">Experience</div>
                  <div className="recruitment-table fw-lighter">
                    {person.experience}
                  </div>
                </>
              )}
            </Col>

            <Col md={1}>
              {person.duration ? (
                <>
                  <div className="fw-semibold mb-2">Duration</div>
                  <div className="recruitment-table fw-lighter">
                    {person.duration}
                  </div>
                </>
              ) : (
                <>
                  <div className="fw-semibold mb-2">Nationality</div>
                  <div className="recruitment-table fw-lighter">
                    {person.nationality}
                  </div>
                </>
              )}
            </Col>

            <Col md={2}>
              {person.amount ? (
                <div className="ms-4">
                  <div className="fw-semibold mb-2">Amount Paid</div>
                  <div className="fw-bold" style={{ color: "#999" }}>
                    {person.amount}
                  </div>
                </div>
              ) : (
                <div className="ms-4">
                  <div className="fw-semibold" style={{ marginTop: "-25px" }}>
                    Contact
                  </div>
                  <div className="recruitment-table fw-lighter">
                    {person.contact}
                  </div>
                </div>
              )}
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

export default Recruitment;
