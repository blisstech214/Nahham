import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ApiService from "../../services/ApiService.js";
import { toast } from "react-toastify";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoader, setIsLoader] = useState(false);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const [resendTimer, setResendTimer] = useState(0);

  const company_id = localStorage.getItem("company_id");
  console.log(company_id);

  const deviceToken = localStorage.getItem("deviceToken");

  const phone = localStorage.getItem("phone");
  console.log(phone);

  useEffect(() => {
    if (!resendTimer) return;
    const id = setInterval(() => setResendTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [resendTimer]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!company_id) {
      toast.error("Missing registration data. Please register again.");
      navigate("/");
    }
    if (!company_id) {
      toast.error("No user ID found – please sign‑up again.");
    }
  }, [company_id, navigate]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value === "") {
      // Allow deletion
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      return;
    }

    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 5 && inputsRef.current[index + 1]) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoader(true);

    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      toast.error("Please enter the 6‑digit OTP");
      setIsLoader(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("otp", otpCode);
      formData.append("company_id", company_id);
      if (deviceToken) formData.append("deviceToken", deviceToken);

      const res = await ApiService.request({
        method: "POST",
        url: "company/verifyOTP",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { status, message, data } = res.data;
      if (status) {
        toast.success(message);
        const company = { ...data.company, auth_token: data.auth_token };
        localStorage.setItem("company", JSON.stringify(company));
        navigate("/company-dashboard");
      } else {
        toast.error(message);
      }
    } catch (err) {
      console.error("OTP verification failed:", err);
      toast.error("OTP verification failed. Please try again.");
    } finally {
      setIsLoader(false);
    }
  };

  const handleResendOTP = async () => {
    if (resendTimer > 0) return;
    if (!company_id) {
      toast.error("Missing company ID. Please register again.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("company_id", company_id);
      if (deviceToken) formData.append("deviceToken", deviceToken);

      const res = await ApiService.request({
        method: "POST",
        url: "company/resendOTP",
        data: { company_id, phone },
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { status, message } = res.data;
      if (status) {
        toast.success(message || "OTP has been resent successfully.");
        setResendTimer(60);
      } else {
        toast.error(message || "Failed to resend OTP.");
      }
    } catch (err) {
      console.error("Resend OTP failed:", err);
      toast.error("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="main"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="main-bg min-vh-100 d-flex flex-column justify-content-center align-items-center"
      >
        <Container className="position-absolute top-0 mt-3">
          <Row className="align-items-start">
            <Col xs={12} className="text-center text-md-start mb-2 mb-md-0">
              <img src={logo} alt="Logo" style={{ height: "50px" }} />
            </Col>
          </Row>
        </Container>

        <div
          className="container upload-doc-coontainer bg-white p-4 d-flex flex-column justify-content-center align-items-center rounded-4"
          style={{ width: "90%", maxWidth: "700px" }}
        >
          <h2 className="fw-bold inter-font mt-4 fs-4 fs-md-3">Verify OTP</h2>
          <p
            className="inter-font text-center"
            style={{ color: "rgba(0, 0, 0, 0.3)" }}
          >
            Enter the 6‑digit code we just sent you.
          </p>

          <Form onSubmit={handleSubmit}>
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex gap-2 gap-md-4 mb-3 flex-wrap justify-content-center">
                {[...Array(6)].map((_, i) => (
                  <Form.Control
                    key={i}
                    type="text"
                    maxLength="1"
                    className="text-center fs-4 inter-font my-2"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#f5f5f5",
                      border: "none",
                      boxShadow: "inset 0 0 0 1px #ccc",
                      borderRadius: "5px",
                    }}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    ref={(el) => (inputsRef.current[i] = el)}
                    value={otp[i]}
                  />
                ))}
              </div>

              <p className="mb-0 text-center inter-font">
                Didn’t receive it?
                <span
                  className="inter-font ms-2"
                  style={{
                    color: resendTimer ? "gray" : "#5e4b00",
                    fontWeight: 500,
                    cursor: resendTimer ? "not-allowed" : "pointer",
                  }}
                  onClick={resendTimer ? undefined : handleResendOTP}
                >
                  {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend OTP"}
                </span>
              </p>
            </div>

            <Button
              type="submit"
              className="btn btn-base mt-4 inter-font border-0"
              style={{ width: "100%", maxWidth: "200px", height: "55px" }}
              disabled={isLoader}
            >
              {isLoader ? "Verifying…" : "Continue"}
            </Button>
          </Form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VerifyOTP;
