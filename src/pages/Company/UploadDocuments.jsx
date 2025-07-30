import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import ImageDropzone from "./ImageDropzone";
import ImageDropzone1 from "./ImageDropzone1";
import VerifyOTP from "./VerifyOTP";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";

const CompanyForm = () => {
  const [view, setView] = useState("main");

  const [tradeLicenseFile, setTradeLicenseFile] = useState(null);
  const [vatCertificateFile, setVatCertificateFile] = useState(null);
  const [isLoader, setIsLoader] = useState(false);

  const saved = JSON.parse(localStorage.getItem("companyInfo") || "{}");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleUploadDocuments = async () => {
    if (!tradeLicenseFile) {
      toast.error("Please attach your Trade Licence.");
      return;
    }
    if (!vatCertificateFile) {
      toast.error("Please attach your VAT Certificate.");
      return;
    }

    const formData = new FormData();
    formData.append("trade_license", tradeLicenseFile);
    formData.append("vat_certificate", vatCertificateFile);
    Object.entries(saved).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== "") {
        formData.append(key, value);
      }
    });

    try {
      setIsLoader(true);
      const response = await ApiService.request({
        method: "POST",
        url: "/company/register",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { status, message, data } = response.data;
      if (status) {
        const company_id = data?._id;
        // console.log(data);
        localStorage.setItem("company_id", company_id);

        toast.success(message || "Documents uploaded successfully.");
        setView("otp");
      } else {
        toast.error(message || "Upload failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while uploading. Please try again.");
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {view === "main" && (
        <motion.div
          key="main"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="inter-font main-bg min-vh-100 d-flex flex-column md:mt-5 justify-content-center align-items-center position-relative px-3"
        >
          {/* Header with logo and stepper */}
          <Container fluid className="inter-font position-absolute top-0 mt-3">
            <Row className="inter-font align-items-center">
              <Col
                xs={12}
                md={1}
                className="inter-font text-center text-md-start mb-3 mb-md-0"
              >
                <img src={logo} alt="Logo" style={{ height: "50px" }} />
              </Col>
              <Col xs={12} md={11} className="inter-font text-center">
                <div className="inter-font d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
                  <div className="inter-font d-flex align-items-center justify-content-center">
                    <Step>1</Step>
                    <span className="inter-font sofia-font fs-count ms-2">
                      Select your company
                    </span>
                  </div>
                  <Arrow />
                  <div className="inter-font d-flex align-items-center justify-content-center">
                    <Step>2</Step>
                    <span className="inter-font sofia-font fs-count ms-2">
                      Add its information
                    </span>
                  </div>
                  <Arrow />
                  <div className="inter-font d-flex align-items-center justify-content-center">
                    <Step active>3</Step>
                    <span className="inter-font sofia-font fs-count ms-2">
                      Upload Documents
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <div
            className="inter-font container upload-doc-coontainer bg-white p-4 d-flex flex-column justify-content-center align-items-center rounded-4"
            style={{ width: "100%", maxWidth: "700px", marginTop: "300px" }}
          >
            <h2 className="inter-font fw-bold inter-font text-center">
              Upload Company Documents
            </h2>
            <p
              className="inter-font inter-font text-center"
              style={{ color: "rgba(0, 0, 0, 0.3)" }}
            >
              Attach your company documents for verification
            </p>

            <div className="inter-font d-flex flex-column flex-md-row justify-content-center align-items-center mt-3 gap-3 w-100">
              {/* Trade Licence */}
              <div className="inter-font attachImg d-flex justify-content-center align-items-center w-100">
                <ImageDropzone
                  title="Trade Licence"
                  setFiles={(files) => setTradeLicenseFile(files?.[0] || null)}
                />
              </div>

              {/* VAT Certificate */}
              <div className="inter-font attachImg d-flex justify-content-center align-items-center w-100">
                <ImageDropzone1
                  title="VAT Certificate"
                  setFiles={(files) =>
                    setVatCertificateFile(files?.[0] || null)
                  }
                />
              </div>
            </div>

            <button
              className="inter-font btn btn-base mt-4 inter-font"
              onClick={handleUploadDocuments}
              disabled={isLoader}
            >
              {isLoader ? "Uploading…" : "Upload and Continue"}
            </button>
          </div>
        </motion.div>
      )}

      {view === "otp" && (
        <motion.div
          key="otp"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <VerifyOTP />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Step = ({ children, active }) => (
  <div
    className={ `inter-font rounded-circle d-flex num-circle align-items-center justify-content-center fw-bold ${
      active ? "bg-dark text-white" : "bg-light text-muted"
    }`}
    style={{ width: "30px", height: "30px", fontSize: "14px" }}
  >
    {children}
  </div>
);

const Arrow = () => <span className="inter-font text-muted">→</span>;

export default CompanyForm;
