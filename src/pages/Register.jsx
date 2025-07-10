import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import video from "../assets/images/video.png";
import talent from "../assets/images/talentt.png";
import { MdArrowOutward } from "react-icons/md";

import CompanyForm from "./Company/SelectCompany";
import TalentLogin from "./Talent/TalentLogin";
import Login from "../pages/Company/Login"

import decorationPiece from "../assets/images/decorationPiece.png";

const Register = () => {
  const [view, setView] = useState("main");

  return (
    <div className="layout-wrapper sofia-font">
      <div className="left-strip" style={{ right: "0px", paddingTop: "0px" }}>
        {[...Array(25)].map((_, i) => (
          <img
            key={i}
            src={decorationPiece}
            alt="Decoration"
            className="strip-icon"
          />
        ))}
      </div>
      {view === "main" && (
        <div
          className="sofia-font main-bg d-flex justify-content-center align-items-center flex-column"
          style={{ minHeight: "100vh" }}
        >
          <>
            <div className="text-center mb-4">
              <img src={logo} alt="Logo" />
              <h2 className="fw-bold mt-3 inter-font">
                Start building business stories
              </h2>
            </div>

            <div
              className="container bg-white py-4 rounded-5 main-registration-box"
              style={{ width: "722px", height: "359px" }}
            >
              <div className="row">
                <div className="col-6 col-md-6 text-center company-border mt-4">
                  <div className="company">
                    <img src={video} alt="Video" />
                    <h4 className="mt-4 sofia-font company-font">
                      I'm a Company
                    </h4>
                    <p
                      className="fw-lighter mb-5 sofia-font company-font-para"
                      style={{ color: "rgba(146, 146, 146, 1)" }}
                    >
                      Looking for Talent
                    </p>
                    <button
                      className="btn btn-base sofia-font btns-for-signUp-SignIn"
                      onClick={() => setView("company")}
                    >
                      Continue as a Company
                      <MdArrowOutward
                        className="arrow-top-right"
                        fontSize={20}
                      />
                    </button>
                  </div>
                </div>

                <div className="col-6 col-md-6 text-center mt-4">
                  <div className="talent">
                    <img src={talent} alt="Talent" />
                    <h4 className="mt-4 sofia-font talent-font">
                      I'm a Talent
                    </h4>
                    <p
                      className="fw-lighter mb-5 sofia-font talent-font-para"
                      style={{ color: "rgba(146, 146, 146, 1)" }}
                    >
                      Looking for Projects
                    </p>
                    <button
                      className="btn btn-base btn-bg sofia-font btns-for-signUp-SignIn"
                      onClick={() => setView("talent")}
                    >
                      Continue as a Talent
                      <MdArrowOutward
                        className="arrow-top-right"
                        fontSize={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
      {view === "company" && <Login />}
      {view === "talent" && <TalentLogin />}
    </div>
  );
};

export default Register;
