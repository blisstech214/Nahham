import React, { useState, useEffect } from "react";
import Select from "react-select";
import countries from "world-countries";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ApiService from "../../services/ApiService.js";
import { toast } from "react-toastify";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import flag from "../../assets/images/UAE.png";

const TalentRegistration = ({ onSwitchToLogin }) => {
  const countryOptions = countries.map((c) => ({
    value: c.cca2,
    label: c.name.common,
  }));

  const uaeOption = countryOptions.find(
    (c) => c.label === "United Arab Emirates"
  );

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    country: null,
    terms: false,
    country: uaeOption || null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCountryChange = (selectedOption) =>
    setFormData((prev) => ({ ...prev, country: selectedOption }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoader(true);

    const payload = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
      // phone: formData.phone,
      phone: `971${formData.phone.replace(/^0+/, "")}`,
      country: formData.country?.label || "",
      terms: formData.terms,
    };

    try {
      const response = await ApiService.request({
        method: "POST",
        url: `register`,
        data: payload,
      });

      const data = response.data;
      console.log(data);

      if (data.status) {
        toast.success(data.message);

        const talent_id = data.data?._id;
        const authToken = data.data?.auth_token;

        console.log(authToken);

        localStorage.setItem("talent_id", talent_id);
        localStorage.setItem("auth_token", authToken);
        localStorage.setItem("user", JSON.stringify(data.data));
        localStorage.setItem("phone", data.data.phone);

        navigate("/talent/verify-otp");
      } else {
        toast.error(data.message);
      }
      setIsLoader(false);
    } catch (error) {
      console.log(error.message);
      toast.error("Registration failed!");
      setIsLoader(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="inter-font container">
      <div className="inter-font d-flex flex-column justify-content-center align-items-center position-relative w-100 min-vh-100 px-3">
        <form
          className="inter-font bg-white p-4 rounded-4 shadow talent-reg-form w-100"
          style={{ maxWidth: "605px" }}
          onSubmit={handleSubmit}
        >
          <div className="inter-font d-flex flex-column justify-content-center align-items-center">
            <h2 className="inter-font inter-font mb-3" style={{ fontSize: "25px" }}>
              Registration for Talent
            </h2>

            <div className="inter-font row w-100">
              <div className="inter-font col-12 col-md-6 d-flex flex-column pe-md-2 mb-3">
                <label>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  className="inter-font p-2 rounded-2 w-100 fw-light"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "#f8f8f8" }}
                />
              </div>
              <div className="inter-font col-12 col-md-6 d-flex flex-column ps-md-2 mb-3">
                <label>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  className="inter-font p-2 rounded-2 w-100 fw-light"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "#f8f8f8" }}
                />
              </div>
            </div>

            <div className="inter-font mb-3 w-100">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="inter-font p-2 rounded-2 w-100"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ backgroundColor: "#f8f8f8" }}
              />
            </div>

            <div className="inter-font mb-3 w-100">
              <label>Password</label>
              <div className="inter-font position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="inter-font p-2 rounded-2 w-100 pe-5"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "#f8f8f8" }}
                />
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#aaa",
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="inter-font mb-3 w-100">
              <label>Phone Number</label>
              <InputGroupWithFlag
                placeholder=""
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="inter-font p-2 rounded-2 w-100"
              />
              {formErrors.phone && (
                <span className="inter-font text-danger small">{formErrors.phone}</span>
              )}
            </div>

            <div className="inter-font mb-3 w-100">
              <label>Nationality</label>
              <Select
                options={countryOptions}
                value={formData.country}
                onChange={handleCountryChange}
              />
            </div>

            <div className="inter-font mb-3 w-100">
              <div className="inter-font d-flex align-items-start">
                <input
                  type="checkbox"
                  name="terms"
                  className="inter-font me-2 mt-1"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                />
                <span
                  className="inter-font sofia-font text-size"
                  style={{ fontSize: "14px" }}
                >
                  I agree with Nahham’s
                  <span
                    className="inter-font ms-1 text-decoration-underline"
                    style={{ color: "rgb(255, 98, 55)", cursor: "pointer" }}
                  >
                    Terms of Services, Privacy Policy
                  </span>
                </span>
              </div>
              {formErrors.terms && (
                <div className="inter-font text-danger small mt-1">{formErrors.terms}</div>
              )}
            </div>

            <div className="inter-font text-center mt-4 w-100">
              <button
                type="submit"
                className="inter-font btn btn-base inter-font w-100"
                style={{ maxWidth: "270px", height: "50px" }}
                disabled={isLoader}
              >
                {isLoader ? "Creating..." : "Create Account"}
              </button>
            </div>

            <p
              className="inter-font mt-3 text-center sofia-font"
              style={{ fontSize: "15px" }}
            >
              Already have an account?
              <span
                className="inter-font ms-2 sofia-font"
                style={{ cursor: "pointer", color: "#FF6237" }}
                onClick={onSwitchToLogin}
              >
                Sign In
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

const InputGroupWithFlag = ({
  placeholder,
  name,
  value,
  onChange,
  isInvalid,
}) => (
  <div
    className={ `inter-font d-flex align-items-center border rounded ps-2 ${
      isInvalid ? "border-danger" : ""
    }`}
  >
    <img
      src={flag}
      alt="UAE"
      style={{ width: "25px", height: "18px", marginRight: "6px" }}
    />
    <span className="inter-font text-muted pe-2 inter-font">(+971)</span>
    <Form.Control
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      isInvalid={isInvalid}
      className="inter-font border-0 ps-1 sofia-font w-100"
      style={{
        boxShadow: "none",
        height: "33px",
      }}
    />
  </div>
);

export default TalentRegistration;
