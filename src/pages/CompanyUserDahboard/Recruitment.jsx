import React, { useState } from "react";
import Navbar from "./Navbar";
import DashboardFooter from "../CompanyUserDahboard/DashboardFooter";
import { CiSearch } from "react-icons/ci";
import Select from "react-select";
import { Container, Row, Col, Image } from "react-bootstrap";

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

  return (
    <div className="" style={{ minHeight: "100vh" }}>
      <div className="d-flex justify-content-between align-items-center flex-wrap px-3">
        <h2 className="inter-font" style={{ fontSize: "19px" }}>
          Recruitment History
        </h2>
      </div>

      {/* Filters */}
      <div className="px-3 mt-4">
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

        <div className="d-flex flex-wrap gap-2">
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
      </div>

      {/* Recruitment Table */}
      <Container
        className="bg-white rounded-4 mt-4 p-0 overflow-hidden"
        style={{ marginTop: "30px" }}
      >
        {data.map((person, idx) => (
          <Row
            key={idx}
            className="align-items-center py-3 px-3 border-bottom"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <Col
              xs={12}
              sm={6}
              md={3}
              className="d-flex align-items-center gap-3 mb-3 mb-md-0"
            >
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

            <Col xs={12} sm={6} md={2} className="mb-3 mb-md-0">
              <div className="fw-semibold">Category</div>
              <div style={{ fontSize: "14px", color: "#555" }}>
                {person.category}
              </div>
            </Col>

            <Col xs={12} sm={6} md={2} className="mb-3 mb-md-0">
              <div className="fw-semibold mb-1">Contract</div>
              <span
                style={{
                  background:
                    person.contract === "Active"
                      ? "rgba(0,194,95,1)"
                      : "rgba(233,123,110,1)",
                  color: "white",
                  borderRadius: "10px",
                  padding: "4px 12px",
                  fontSize: "13px",
                }}
              >
                {person.contract === "Active" ? "Active" : "Expired/Closed"}
              </span>
            </Col>

            <Col xs={12} sm={6} md={1} className="mb-3 mb-md-0">
              <div className="fw-semibold mb-1">Duration</div>
              <span style={{ fontSize: "14px", color: "#555" }}>5 Days</span>
            </Col>

            <Col xs={12} sm={6} md={2} className="mb-3 mb-md-0">
              {person.period ? (
                <>
                  <div className="fw-semibold mb-1">Period</div>
                  <div style={{ fontSize: "14px", color: "#555" }}>
                    {person.period}
                  </div>
                </>
              ) : (
                <>
                  <div className="fw-semibold mb-1">Experience</div>
                  <div style={{ fontSize: "14px", color: "#555" }}>
                    {person.experience}
                  </div>
                </>
              )}
            </Col>

            <Col xs={12} sm={6} md={2}>
              {person.project ? (
                <>
                  <div className="fw-semibold mb-1">Project</div>
                  <div className="fw-bold" style={{ color: "#999" }}>
                    {person.project}
                  </div>
                </>
              ) : (
                <>
                  <div className="fw-semibold mb-1">Contact</div>
                  <div style={{ fontSize: "14px", color: "#555" }}>
                    {person.contact}
                  </div>
                  project:'Film Production',
                </>
              )}
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
    </div>
  );
};

export default Recruitment;
