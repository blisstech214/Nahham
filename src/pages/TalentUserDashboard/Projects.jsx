import Navbar from "./Navbar";
import DashboardFooter from "./DashboardFooter";
import { FaLocationDot } from "react-icons/fa6";
import profile from "../../assets/images/star-profile-img.png";
import starProfileImg from "../../assets/images/star-profile-img.png";

const Projects = () => {

  return (
    <div className="main-bg" style={{ height: "100vh" }}>
      <div className="flex-grow-1 px-5 inp-login">
        <Navbar />
      </div>

      <div className="bg-white rounded-3 m-5 d-flex flex-column" style={{ height: "79vh", overflow: "hidden" }}>
        <div className="border-bottom py-3 ms-4" >
          <h3 className="inter-font pb-1" style={{ fontSize: "20px" }}>
            My Projects
          </h3>
        </div>

        <div className="scrollable-list flex-grow-1">
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#5F8D73",
                    background: "#D3FDEA",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={starProfileImg}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#CD496D",
                    backgroundColor: "#FCE1E8",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Pending
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#CD496D",
                    background: "#FCE1E8",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Up Coming
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img
                  src={profile}
                  className="rounded-circle mt-3 ms-4"
                  style={{ width: "54px", height: "54px", objectFit: "cover" }}
                  alt="Profile"
                />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p
                  className="inter-font"
                  style={{ fontSize: "14px", color: "#777474" }}
                >
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button
                  className="btn border-0 inter-font"
                  style={{
                    color: "#5F8D73",
                    backgroundColor: "#D3FDEA",
                    width: "85px",
                    height: "27px",
                    fontSize: "12px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button
                  className="rounded-3 inter-font"
                  style={{
                    color: "#E26A52",
                    background: "#FFE7E2",
                    border: "0",
                    fontSize: "12px",
                    width: "87px",
                    height: "28px",
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col-md-5 d-flex justify-content-between align-items-center my-3">
              <div className="d-flex align-items-start justify-content-start">
                <img src={starProfileImg} className="rounded-circle mt-3 ms-4" style={{
                  width: "54px", height: "54px",
                  objectFit: "cover"
                }} alt="Profile" />
                <div className="mt-3 ms-3">
                  <h5 className="inter-font" style={{ fontSize: "17px" }}>
                    Web Series Leading Role plus Singer
                  </h5>
                  <p className="m-0 mb-2 inter-font" style={{ fontSize: "16px" }}>
                    Movie Center Company
                  </p>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className=" inter-font" style={{ fontSize: "18px" }}>
                  Project Dates
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  10 May - 15 May
                </p>
              </div>
            </div>
            <div className="col-md-2 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Earnings
                </h5>
                <p className="inter-font" style={{ fontSize: "14px", color: "#777474" }}>
                  AED 85000
                </p>
              </div>
            </div>
            <div className="col-md-1 my-3">
              <div className="mt-3">
                <h5 className="inter-font" style={{ fontSize: "18px" }}>
                  Payment Status
                </h5>
                <button className="btn border-0 inter-font" style={{
                  color: "#5F8D73", backgroundColor: "#D3FDEA", width: "85px"
                  , height: "27px", fontSize: "12px",
                }}>
                  Completed
                </button>
              </div>
            </div>
            <div className="col-md-2 my-3 text-end pe-5">
              <div className="mt-4">
                <button className="rounded-3 inter-font" style={{
                  color: "#E26A52", background: "#FFE7E2", border: "0",
                  fontSize: "12px", width: "87px", height: "28px",
                }}>
                  Completed
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <ul className="pagination-custom">
            <li><button className="page-btn active">1</button></li>
            <li><button className="page-btn">2</button></li>
            <li><button className="page-btn">3</button></li>
            <li><button className="page-btn">4</button></li>
            <li><button className="page-btn">5</button></li>
            <li><span className="page-ellipsis">...</span></li>
            <li><button className="page-btn">26</button></li>
            <li><button className="page-btn">{`>`}</button></li>
          </ul>
        </div>

      </div>

      <div style={{ height: '30px' }}></div>

      <DashboardFooter />
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

  .pagination-custom li {
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

  .pagination-custom .page-ellipsis {
    font-size: 18px;
    color: #999;
    padding: 0 8px;
  }

  .scrollable-list {
    max-height: 550px;
    overflow-y: auto;
    overflow-x : hidden;
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

export default Projects;
