import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import building from "../../assets/images/building.png";
import logo from "../../assets/images/logo.png";
import RegistrationForm from "./RegisterForm";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CompanyForm = () => {
  const [view, setView] = useState("main");
  const [isLoader, setIsLoader] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const navigate = useNavigate();

  const handleLocalSubmit = (e) => {
    e.preventDefault();
    if (companyName.trim()) {
      localStorage.setItem("companyName", companyName.trim());
      setView("company");
    }
  };

  const handleApiSubmit = async () => {
    const payload = {
      company_name: companyName.trim(),
    };

    if (!payload.company_name) {
      toast.error("Company name is required.");
      return;
    }

    try {
      setIsLoader(true);
      const response = await ApiService.request({
        method: "POST",
        url: `/company/register`,
        data: payload,
      });

      const data = response.data;
      if (data.status) {
        // toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Registration failed! Please try again.");
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {view === "main" ? (
        <motion.div
          key="main-view"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="main-bg min-vh-100 d-flex flex-column justify-content-center align-items-center"
        >
          <Container className="position-absolute top-0 mt-3">
            <Row className="align-items-center">
              {/* Logo */}
              <Col
                xs={12}
                md={1}
                className="text-center text-md-start mb-2 mb-md-0"
              >
                <img src={logo} alt="Logo" style={{ height: "50px" }} />
              </Col>

              {/* Steps */}
              <Col xs={12} md={11} className="text-center mt-4">
                <div className="d-flex flex-md-row align-items-center justify-content-center gap-2">
                  <div className="d-flex align-items-center justify-content-center mb-md-0">
                    <Step active>1</Step>
                    <span className="sofia-font fs-count ms-2">
                      Select your company
                    </span>
                  </div>
                  <Arrow />
                  <div className="d-flex align-items-center justify-content-center mb-md-0">
                    <Step>2</Step>
                    <span className="sofia-font fs-count ms-2">
                      Add its information
                    </span>
                  </div>
                  <Arrow />
                  <div className="d-flex align-items-center justify-content-center">
                    <Step>3</Step>
                    <span className="sofia-font fs-count ms-2">
                      Upload Documents
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="text-center mt-5 pt-5" style={{ maxWidth: "600px" }}>
            <div
              className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center mb-3"
              style={{ width: "60px", height: "60px" }}
            >
              <img src={building} className="w-100" alt="Building" />
            </div>
            <h2 className="fw-bold inter-font">
              What is the name of your company?
            </h2>
            <p className="sofia-font mb-5" style={{ color: "#929292" }}>
              Select an entity, or create a new one, to list it on NAHHAM
            </p>

            <Form onSubmit={handleLocalSubmit}>
              <Form.Group className="mb-4" controlId="companyName">
                <Form.Control
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  name="company_name"
                  placeholder="Enter your company name"
                  className="py-3 rounded-3 sofia-font inp-login"
                  required
                  style={{ margin: "0 22px", width: "90%" }}
                />
              </Form.Group>
              <Button
                type="submit"
                className="btn btn-base px-5 border-0 inter-font mt-3"
              >
                Continue
              </Button>
            </Form>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="company-view"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <RegistrationForm
            onNext={() => handleApiSubmit()}
            isLoading={isLoader}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Step = ({ children, active }) => (
  <div
    className={`rounded-circle d-flex num-circle align-items-center justify-content-center fw-bold ${
      active ? "bg-dark text-white" : "bg-light text-muted"
    }`}
    style={{ width: "30px", height: "30px", fontSize: "14px" }}
  >
    {children}
  </div>
);

const Arrow = () => <span className="text-muted">→</span>;

export default CompanyForm;
