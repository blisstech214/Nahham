import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import ApiService from "../../services/ApiService.js";

import { toast } from "react-toastify";

const Login = () => {
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
        url: `/company/login`,
        data: formData,
      });
      const data = response.data;
      if (data.status) {
        toast.success(data.message);
        let user = data.data.company;
        user.auth_token = data.data.auth_token;
        localStorage.setItem("user", JSON.stringify(data.data.company));
        navigate("/company-dashboard");
        // window.location.href = basePath + "/";
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
    <>
      <div className="inter-font main-bg min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative w-100 px-3">
        {/* Logo - top left */}
        <div className="inter-font position-absolute top-0 start-0 mt-4 ms-4">
          <img src={logo} alt="Logo" style={{ height: 50, maxWidth: "100%" }} />
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="inter-font bg-white p-4 p-md-5 rounded-4 shadow w-100"
          style={{ maxWidth: "500px" }}
        >
          <h2 className="inter-font fw-bold mb-1 inter-font" style={{ fontSize: "25px" }}>
            Company Login
          </h2>
          <p
            className="inter-font text-muted mb-4 inter-font"
            style={{ fontSize: "16px" }}
          >
            Login in to Company.
          </p>

          <div className="inter-font mb-4 inp-login">
            <label className="inter-font mb-1 inter-font">Company Email</label>
            <input
              type="email"
              className="inter-font form-control p-3 inter-font w-100"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{ backgroundColor: "#f8f8f8", borderRadius: "8px" }}
            />
          </div>

          <div className="inter-font mb-4 inp-login">
            <label className="inter-font mb-1 inter-font">Password</label>
            <input
              type="password"
              className="inter-font form-control p-3 inter-font w-100"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={{ backgroundColor: "#f8f8f8", borderRadius: "8px" }}
            />
          </div>

          <div className="inter-font d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
            <button
              type="submit"
              className="inter-font btn text-white inter-font"
              style={{
                backgroundColor: "#ff5722",
                padding: "10px 30px",
                borderRadius: "20px",
                fontSize: "18px",
                whiteSpace: "nowrap",
              }}
            >
              Login
            </button>

            <p className="inter-font mb-0 inter-font" style={{ fontSize: "14px" }}>
              Don’t have an account?{" "}
              <Link to="/company" className="inter-font text-dark fw-semibold inter-font">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
