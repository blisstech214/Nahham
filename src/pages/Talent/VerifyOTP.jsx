import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ApiService from "../../services/ApiService.js";
import { toast } from "react-toastify";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const [isResending, setIsResending] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  const [isLoader, setIsLoader] = useState(false);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const talent_id = localStorage.getItem("talent_id");
  console.log(talent_id);

  const phone = localStorage.getItem("phone");
  console.log(phone);

  const deviceToken = localStorage.getItem("deviceToken");

  useEffect(() => {
    if (!resendTimer) return;
    const id = setInterval(() => setResendTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [resendTimer]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!talent_id) {
      toast.error("Missing registration data. Please register again.");
      navigate("/");
    }
    if (!talent_id) {
      toast.error("No user ID found – please sign‑up again.");
    }
  }, [talent_id, navigate]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5 && inputsRef.current[index + 1]) {
        inputsRef.current[index + 1].focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
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
      const res = await ApiService.request({
        method: "POST",
        url: "verifyOTP",
        data: {
          otp: otpCode,
          talent_id,
        },
      });

      const data = res.data;
      if (data.status) {
        toast.success(data.message);
        const talent = data.data.talent;
        talent.auth_token = data.data.auth_token;
        localStorage.setItem("user", JSON.stringify(talent));
        navigate("/talent/dashboard");
      } else {
        setOtp(["", "", "", "", "", ""]);
        toast.error(data.message);
      }
    } catch (err) {
      console.error("OTP verification failed:", err);
      toast.error("OTP verification failed. Please try again.");
    } finally {
      setIsLoader(false);
    }
  };

  const handleResendOTP = async () => {
    // block clicks while counting down
    if (isResending || resendTimer > 0) return;

    setIsResending(true);
    try {
      const res = await ApiService.request({
        method: "POST",
        url: "resendOTP",
        data: {
          talent_id,
          phone,
        },
      });

      const data = res.data;
      if (data.status) {
        toast.success(data.message || "A new code has been sent.");
        setResendTimer(60);
      } else {
        toast.error(data.message || "Unable to resend OTP.");
      }
    } catch (err) {
      console.error("Resend OTP failed:", err);
      toast.error("Failed to resend OTP. Please try again.");
    } finally {
      setIsResending(false);
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
        className="inter-font main-bg min-vh-100 d-flex flex-column justify-content-center align-items-center"
      >
        <Container className="inter-font position-absolute top-0 mt-3">
          <Row className="inter-font align-items-start">
            <Col xs={12} className="inter-font text-center text-md-start mb-2 mb-md-0">
              <img src={logo} alt="Logo" style={{ height: "50px" }} />
            </Col>
          </Row>
        </Container>

        <div
          className="inter-font container upload-doc-coontainer bg-white p-4 d-flex flex-column justify-content-center align-items-center rounded-4"
          style={{ width: "90%", maxWidth: "700px" }}
        >
          <h2
            className="inter-font fw-bold inter-font mt-4 text-center"
            style={{ fontSize: "25px" }}
          >
            Verify OTP
          </h2>

          <p
            className="inter-font inter-font text-center"
            style={{ color: "rgba(0, 0, 0, 0.3)" }}
          >
            Enter the 6‑digit code we just sent you.
          </p>

          <Form onSubmit={handleSubmit} className="inter-font w-100">
            <div className="inter-font d-flex flex-column align-items-center w-100">
              <div className="inter-font d-flex gap-2 gap-md-4 mb-3 flex-wrap justify-content-center">
                {[...Array(6)].map((_, i) => (
                  <Form.Control
                    key={i}
                    type="text"
                    maxLength="1"
                    className="inter-font text-center fs-4 inter-font my-2"
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

              <p className="inter-font mb-0 text-center inter-font">
                Didn’t receive it?
                <span
                  className="inter-font inter-font ms-2"
                  style={{
                    color: resendTimer ? "gray" : "#5e4b00",
                    fontWeight: 500,
                    cursor: resendTimer ? "default" : "pointer",
                  }}
                  onClick={resendTimer ? undefined : handleResendOTP}
                >
                  {resendTimer
                    ? `Resend in ${resendTimer}s`
                    : isResending
                    ? "Sending…"
                    : "Resend OTP"}
                </span>
              </p>
            </div>

            <div className="inter-font d-flex justify-content-center mt-4">
              <Button
                type="submit"
                className="inter-font btn btn-base inter-font border-0"
                style={{ width: "100%", maxWidth: "200px", height: "55px" }}
                disabled={isLoader}
              >
                {isLoader ? "Verifying…" : "Continue"}
              </Button>
            </div>
          </Form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VerifyOTP;
