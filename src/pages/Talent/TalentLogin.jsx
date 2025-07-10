import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import login_img from "../../assets/images/login-img.png";
import Signup from "./TalentRegistration";

import { useNavigate } from "react-router-dom";

import ApiService from "../../services/ApiService.js";

import { toast } from "react-toastify";

const TalentLogin = () => {
  const [showSignup, setShowSignup] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [isLoader, setIsLoader] = useState(false);
  // const basePath = process.env.REACT_APP_BASE_PATH;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoader(true);

    try {
      const response = await ApiService.request({
        method: "POST",
        url: `login`,
        data: formData,
      });
      const data = response.data;
      console.log("loginlogin", data);
      if (data.status) {
        toast.success(data.message);

        const talent = data.data.talent;
        const authToken = data.data.auth_token;

        const userData = { ...talent, auth_token: authToken };
        localStorage.setItem("user", JSON.stringify(userData));
        console.log("Auth Token:", authToken);
        // window.location.href = basePath + "/talent/dashboard";
        window.location.href = "/talent/dashboard";
      } else {
        toast.error(data.message);
      }
      setIsLoader(false);
    } catch (error) {
      // toast.error("Login failed!");
      setIsLoader(false);
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-bg min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative w-100">
      <div className="position-absolute top-0 start-0 mt-5 ms-5">
        <img src={logo} alt="Logo" style={{ height: "50px" }} />
      </div>

      {!showSignup ? (
        <div className="container talent-login" style={{ width: "850px" }}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-0 shadow-lg rounded-4 overflow-hidden">
                <div
                  className="col-md-6 d-none d-md-block"
                  style={{ height: "550px" }}
                >
                  <img
                    src={login_img}
                    className="w-100 h-100 object-fit-cover"
                    alt="Login visual"
                  />
                </div>

                {/* Right side content */}
                <div className="col-md-6 bg-white p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="text-center text-md-start">
                      <h3
                        className="fw-bold mt-5 mb-2 inter-font talent-login-heading"
                        style={{ fontSize: "25px" }}
                      >
                        Sign in to your account
                      </h3>
                      <p className="text-muted mb-5 inter-font">
                        Login in to talent
                      </p>
                    </div>

                    <div className="group d-flex flex-column inp-login">
                      <label className="fs-5">Email</label>
                      <input
                        type="email"
                        className="p-2 rounded-2"
                        style={{ width: "283px" }}
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="group d-flex flex-column inp-login mt-3">
                      <label className="fs-5">Password</label>
                      <input
                        type="password"
                        className="p-2 rounded-2"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        style={{ width: "283px" }}
                      />
                    </div>

                    <div className="login-btn text-center mt-4">
                      <button
                        type="submit"
                        className="btn btn-base px-5 sofia-font"
                        disabled={isLoader}
                      >
                        {isLoader ? "Please wait..." : "Login"}
                      </button>
                    </div>

                    <p
                      className="mt-3 text-center sofia-font"
                      style={{ fontSize: "14px" }}
                    >
                      Don’t have an account?
                      <span
                        className="text-decoration-underline ms-1 sofia-font"
                        style={{ cursor: "pointer", color: "#FF6237" }}
                        onClick={() => setShowSignup(true)}
                      >
                        Sign Up
                      </span>
                    </p>

                    <p
                      className="small text-start mt-3 inter-font text-size"
                      style={{ color: "rgba(0, 0, 0, 0.4)" }}
                    >
                      By joining, you agree to the Nahham
                      <strong
                        className="mx-1 sofia-font"
                        style={{ color: "rgb(255, 98, 55)" }}
                      >
                        Terms of Service
                      </strong>
                      and to occasionally receive emails from us. Please read
                      our
                      <strong
                        className="mx-1 sofia-font"
                        style={{ color: "rgb(255, 98, 55)" }}
                      >
                        Privacy Policy
                      </strong>
                      to learn how we use your personal data.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Signup onSwitchToLogin={() => setShowSignup(false)} />
      )}
    </div>
  );
};

export default TalentLogin;
