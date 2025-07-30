import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import video from "../assets/images/video.png";
import talent from "../assets/images/talentt.png";
import { MdArrowOutward } from "react-icons/md";

import CompanyForm from "./Company/SelectCompany";
import TalentLogin from "./Talent/TalentLogin";
import Login from "../pages/Company/Login";

import decorationPiece from "../assets/images/decorationPiece.png";

const Register = () => {
  const [view, setView] = useState("main");

  return (
    <div className="inter-font layout-wrapper sofia-font">
      <div className="inter-font left-strip" style={{ right: "0px", paddingTop: "0px" }}>
        {[...Array(25)].map((_, i) => (
          <img
            key={i}
            src={decorationPiece}
            alt="Decoration"
            className="inter-font strip-icon"
          />
        ))}
      </div>
      {view === "main" && (
        <div
          className="inter-font sofia-font main-bg d-flex justify-content-center align-items-center flex-column"
          style={{ minHeight: "100vh", padding: "20px" }}
        >
          <div className="inter-font text-center mb-4">
            <img
              src={logo}
              alt="Logo"
              style={{ maxWidth: "180px", width: "100%" }}
            />
            <h2
              className="inter-font fw-bold mt-3 inter-font"
              style={{ fontSize: "20px" }}
            >
              Start building business stories
            </h2>
          </div>

          <div
            className="inter-font container bg-white py-4 rounded-5"
            style={{
              maxWidth: "722px",
              width: "100%",
              boxShadow: "0px 0px 15px rgba(0,0,0,0.05)",
            }}
          >
            <div className="inter-font row">
              <div className="inter-font col-12 col-md-6 text-center company-border mt-4">
                <div className="inter-font company">
                  <img
                    src={video}
                    alt="Video"
                    // style={{ maxWidth: "120px", width: "100%", height: "auto" }}
                  />
                  <h4
                    className="inter-font mt-4 sofia-font company-font"
                    style={{ fontSize: "18px" }}
                  >
                    I'm a Company
                  </h4>
                  <p
                    className="inter-font fw-lighter mb-4 sofia-font company-font-para"
                    style={{
                      color: "rgba(146, 146, 146, 1)",
                      fontSize: "14px",
                    }}
                  >
                    Looking for Talent
                  </p>
                  <button
                    className="inter-font btn btn-base sofia-font btns-for-signUp-SignIn w-100"
                    style={{
                      background: "rgba(205, 73, 109, 1)",
                      color: "white",
                      padding: "10px 15px",
                      borderRadius: "8px",
                    }}
                    onClick={() => setView("company")}
                  >
                    Continue as a Company{" "}
                    <MdArrowOutward
                      fontSize={20}
                      style={{ marginLeft: "8px" }}
                    />
                  </button>
                </div>
              </div>

              <div className="inter-font col-12 col-md-6 text-center mt-4">
                <div className="inter-font talent">
                  <img
                    src={talent}
                    alt="Talent"
                    // style={{ maxWidth: "120px", width: "100%", height: "auto" }}
                  />
                  <h4
                    className="inter-font mt-4 sofia-font talent-font"
                    style={{ fontSize: "18px" }}
                  >
                    I'm a Talent
                  </h4>
                  <p
                    className="inter-font fw-lighter mb-4 sofia-font talent-font-para"
                    style={{
                      color: "rgba(146, 146, 146, 1)",
                      fontSize: "14px",
                    }}
                  >
                    Looking for Projects
                  </p>
                  <button
                    className="inter-font btn btn-base btn-bg sofia-font btns-for-signUp-SignIn w-100"
                    style={{
                      background: "#000",
                      color: "white",
                      padding: "10px 15px",
                      borderRadius: "8px",
                    }}
                    onClick={() => setView("talent")}
                  >
                    Continue as a Talent{" "}
                    <MdArrowOutward
                      fontSize={20}
                      style={{ marginLeft: "8px" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {view === "company" && <Login />}
      {view === "talent" && <TalentLogin />}
    </div>
  );
};

export default Register;
