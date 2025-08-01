import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import DashboardFooter from "./DashboardFooter";
import {
  FaLocationDot,
  FaRightFromBracket,
  FaRightLong,
} from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import dashboardTalent2 from "../../assets/images/dashboardTalent2.png";
import Sidebar from "./Sidebar";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import StripeCheckoutForm from "./Stripe";
import { Check, CheckCircle, User } from "lucide-react";
import CheckoutForm from "./Stripe";
import CombinedStripeCheckout from "./Stripe";
import validateImageUrl from "../../utils/validateImageUrl";

const USE_API = false;

const STATIC_DURATIONS = [
  { value: "1 Month", label: "1 Month" },
  { value: "3 Months", label: "3 Months" },
  { value: "6 Months", label: "6 Months" },
];
const STATIC_JOB_TYPES = [
  { value: "Full Time", label: "Full Time" },
  { value: "Part Time", label: "Part Time" },
  { value: "Contract", label: "Contract" },
];

const useFormOptions = () => {
  const [durationOptions, setDurationOptions] = useState([]);
  const [jobTypeOptions, setJobTypeOptions] = useState([]);

  useEffect(() => {
    if (USE_API) {
      (async () => {
        try {
          // Example endpoints, replace with your actual endpoints
          const durationRes = await ApiService.get("/company/getDurations");
          const jobTypeRes = await ApiService.get("/company/getJobTypes");
          setDurationOptions(
            Array.isArray(durationRes.data.data)
              ? durationRes.data.data.map((d) => ({
                value: d.value,
                label: d.label,
              }))
              : []
          );
          setJobTypeOptions(
            Array.isArray(jobTypeRes.data.data)
              ? jobTypeRes.data.data.map((j) => ({
                value: j.value,
                label: j.label,
              }))
              : []
          );
        } catch (err) {
          toast.error("Failed to load form options");
          setDurationOptions([]);
          setJobTypeOptions([]);
        }
      })();
    } else {
      setDurationOptions(STATIC_DURATIONS);
      setJobTypeOptions(STATIC_JOB_TYPES);
    }
  }, []);

  return { durationOptions, jobTypeOptions };
};

// Post form data to API or simulate
const postFormData = async (formData) => {
  if (USE_API) {
    const formPayload = new FormData();
    try {
      const res = await ApiService.post("/company/stepForm", formPayload); // Replace with actual endpoint
      if (res.data.status) {
        toast.success("Step data submitted successfully!");
        return true;
      } else {
        toast.error(res.data.message || "Failed to submit step data");
        return false;
      }
    } catch (err) {
      toast.error("Error submitting step data");
      return false;
    }
  } else {
    toast.success("Step data submitted! (static)");
    return true;
  }
};

// Request for quote API
const requestQuote = async (formData) => {
  if (USE_API) {
    const formPayload = new FormData();
    try {
      const res = await ApiService.post("/company/requestQuote", formPayload);
      if (res.data.status) {
        toast.success("Quote requested successfully!");
        return true;
      } else {
        toast.error(res.data.message || "Failed to request quote");
        return false;
      }
    } catch (err) {
      toast.error("Error submitting quote request");
      return false;
    }
  } else {
    toast.success("Quote requested successfully! (static)");
    return true;
  }
};

// View quote API
const viewQuote = async (formData) => {
  if (USE_API) {
    try {
      const res = await ApiService.get(
        `/company/viewQuote?projectId=${formData.projectId}`
      ); // Replace with actual param
      if (res.data.status) {
        toast.success("Quote loaded!");
        // You can handle the quote data here
        return res.data.data;
      } else {
        toast.error(res.data.message || "Failed to load quote");
        return null;
      }
    } catch (err) {
      toast.error("Error loading quote");
      return null;
    }
  } else {
    toast.success("Quote loaded! (static)");
    return { quote: "Sample quote data" };
  }
};

// Custom Date Range Picker Component
// const CustomDateRangePicker = ({
//   startDate,
//   endDate,
//   onDateChange,
//   onClose,
// }) => {
//   const [tempStartDate, setTempStartDate] = useState(startDate);
//   const [tempEndDate, setTempEndDate] = useState(endDate);

//   const formatDate = (date) => {
//     return date.toISOString().split("T")[0];
//   };

//   const formatDisplayDate = (date) => {
//     return date.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     });
//   };

//   const handleStartDateChange = (e) => {
//     const newStartDate = new Date(e.target.value);
//     setTempStartDate(newStartDate);

//     // If start date is after end date, adjust end date
//     if (newStartDate > tempEndDate) {
//       const newEndDate = new Date(newStartDate);
//       newEndDate.setDate(newEndDate.getDate() + 7);
//       setTempEndDate(newEndDate);
//     }
//   };

//   const handleEndDateChange = (e) => {
//     const newEndDate = new Date(e.target.value);
//     setTempEndDate(newEndDate);
//   };

//   const handleProceed = () => {
//     onDateChange(tempStartDate, tempEndDate);
//     onClose();
//   };

//   const handleToday = () => {
//     const today = new Date();
//     const nextWeek = new Date();
//     nextWeek.setDate(today.getDate() + 7);
//     setTempStartDate(today);
//     setTempEndDate(nextWeek);
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         zIndex: 1000,
//         top: "50%",
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//         width: 800,
//         maxWidth: "150%",
//         background: "#fff",
//         borderRadius: 18,
//         boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
//         padding: 32,
//         maxHeight: "90vh",
//         overflowY: "auto",
//       }}
//     >
//       <div className="inter-font mb-4">
//         <h5 className="inter-font fw-bold mb-3">Select Date Range</h5>

//         <div className="inter-font row mb-3">
//           <div className="inter-font col">
//             <label className="inter-font form-label fw-semibold">Start Date</label>
//             <input
//               type="date"
//               className="inter-font form-control"
//               value={formatDate(tempStartDate)}
//               onChange={handleStartDateChange}
//               style={{
//                 borderRadius: 8,
//                 padding: "10px 12px",
//                 fontSize: 16,
//               }}
//             />
//           </div>
//           <div className="inter-font col">
//             <label className="inter-font form-label fw-semibold">End Date</label>
//             <input
//               type="date"
//               className="inter-font form-control"
//               value={formatDate(tempEndDate)}
//               onChange={handleEndDateChange}
//               min={formatDate(tempStartDate)}
//               style={{
//                 borderRadius: 8,
//                 padding: "10px 12px",
//                 fontSize: 16,
//               }}
//             />
//           </div>
//         </div>

//         <div className="inter-font mb-3 p-3 bg-light rounded">
//           <strong>Selected Range:</strong>
//           <br />
//           {formatDisplayDate(tempStartDate)} - {formatDisplayDate(tempEndDate)}
//           <br />
//           <small className="inter-font text-muted">
//             Duration:{" "}
//             {Math.ceil((tempEndDate - tempStartDate) / (1000 * 60 * 60 * 24))}{" "}
//             days
//           </small>
//         </div>
//       </div>

//       <div className="inter-font d-flex justify-content-between align-items-center">
//         <button
//           type="button"
//           className="inter-font btn btn-light"
//           style={{
//             borderRadius: 8,
//             fontWeight: 500,
//             fontSize: 16,
//             padding: "8px 24px",
//           }}
//           onClick={handleToday}
//         >
//           Today
//         </button>

//         <div className="inter-font d-flex gap-2">
//           <button
//             type="button"
//             className="inter-font btn btn-secondary"
//             style={{
//               borderRadius: 8,
//               fontWeight: 500,
//               fontSize: 16,
//               padding: "8px 24px",
//             }}
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             className="inter-font btn"
//             style={{
//               background: "#FF6B35",
//               color: "#fff",
//               border: "none",
//               borderRadius: 12,
//               fontSize: 18,
//               padding: "10px 32px",
//               minWidth: 120,
//               fontWeight: 600,
//             }}
//             onClick={handleProceed}
//           >
//             Proceed
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// Stepper Section (interactive)
const HorizontalStepper = ({ step, setStep }) => (
  <div
    className="inter-font d-flex justify-content-center align-items-center mb-5"
    style={{ marginTop: 20 }}
  >
    {/* Step 1 */}
    <div className="inter-font d-flex align-items-center">
      <div
        onClick={() => step > 1 && setStep(1)}
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: step === 1 ? "#111" : "#fff",
          color: step === 1 ? "#fff" : "#111",
          border: step === 1 ? "2px solid #111" : "2px solid #E6E6E6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: 18,
          cursor: step > 1 ? "pointer" : "default",
          transition: "all 0.2s",
        }}
      >
        1
      </div>
      <span
        onClick={() => step > 1 && setStep(1)}
        style={{
          fontWeight: step === 1 ? 600 : 400,
          color: step === 1 ? "#111" : "#B0B0B0",
          marginLeft: 10,
          fontSize: 18,
          cursor: step > 1 ? "pointer" : "default",
        }}
      >
        Quotation Details
      </span>
    </div>
    {/* Arrow 1 */}
    <span style={{ color: "#B0B0B0", fontSize: 28, margin: "0 24px" }}>
      &#8594;
    </span>
    {/* Step 2 */}
    <div className="inter-font d-flex align-items-center">
      <div
        onClick={() => step > 2 && setStep(2)}
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: step === 2 ? "#111" : "#fff",
          color: step === 2 ? "#fff" : "#111",
          border: step === 2 ? "2px solid #111" : "2px solid #E6E6E6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: 18,
          cursor: step > 2 ? "pointer" : "default",
          transition: "all 0.2s",
        }}
      >
        2
      </div>
      <span
        onClick={() => step > 2 && setStep(2)}
        style={{
          fontWeight: step === 2 ? 600 : 400,
          color: step === 2 ? "#111" : "#B0B0B0",
          marginLeft: 10,
          fontSize: 18,
          cursor: step > 2 ? "pointer" : "default",
        }}
      >
        Payment Info
      </span>
    </div>
    {/* Arrow 2 */}
    <span style={{ color: "#B0B0B0", fontSize: 28, margin: "0 24px" }}>
      &#8594;
    </span>
    {/* Step 3 */}
    <div className="inter-font d-flex align-items-center">
      <div
        onClick={() => step > 3 && setStep(3)}
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: step === 3 ? "#111" : "#fff",
          color: step === 3 ? "#fff" : "#111",
          border: step === 3 ? "2px solid #111" : "2px solid #E6E6E6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: 18,
          cursor: step > 3 ? "pointer" : "default",
          transition: "all 0.2s",
        }}
      >
        3
      </div>
      <span
        onClick={() => step > 3 && setStep(3)}
        style={{
          fontWeight: step === 3 ? 600 : 400,
          color: step === 3 ? "#111" : "#B0B0B0",
          marginLeft: 10,
          fontSize: 18,
          cursor: step > 3 ? "pointer" : "default",
        }}
      >
        Success
      </span>
    </div>
  </div>
);

// Add Back button to steps 2, 3, 4
const ProjectSummaryScreen = ({
  formData,
  onNext,
  onBack,
  selectedTalents = {},
  selectedTalentsUpdatedData,
}) => {
  function formatSingleDate(isoDate) {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" }); // or "long" for full month name
    return `${day} ${month}`;
  }

  const [isImageValid, setIsImageValid] = useState(false)


  const checkImage = async (imageUrl) => {

    const result = await validateImageUrl(imageUrl);
    setIsImageValid(result);
  };


  return (
    <div
      className="inter-font d-flex justify-content-center"
      style={{
        paddingTop: 40,
        paddingBottom: 120,
        boxSizing: "border-box",
      }}
    >
      <div
        className="inter-font bg-white rounded-4 shadow p-5 position-relative"
        style={{ width: 900, maxWidth: "100%" }}
      >
        <div className="inter-font mb-4" style={{ width: "100%" }}>
          {/* <div className="inter-font fw-bold" style={{ fontSize: 30, marginBottom: 2 }}>
            Hire the talent
          </div> */}
          <div
            style={{
              color: "#000",
              fontSize: 18,
              fontWeight: 500,
              textAlign: "end",
            }}
          >
            Quote # {selectedTalents?.project_code}
          </div>
        </div>
        {/* Project Info */}
        <div className="inter-font mb-3 fw-semibold" style={{ fontSize: 20 }}>
          Project Title
        </div>
        <div className="inter-font text-secondary mb-4" style={{ fontSize: 15 }}>
          {selectedTalents?.title || (
            <span style={{ color: "#ccc" }}>
              No project information provided.
            </span>
          )}
        </div>
        <div className="inter-font mb-3 fw-semibold" style={{ fontSize: 20 }}>
          Project Information
        </div>
        <div className="inter-font text-secondary mb-4" style={{ fontSize: 15 }}>
          {selectedTalents?.description || (
            <span style={{ color: "#ccc" }}>
              No project information provided.
            </span>
          )}
        </div>
        {/* Details Row */}
        {selectedTalents?.talents?.length !== 0 ? (
          selectedTalents?.talents?.map((item, index) => {
            return (
              <div className="inter-font row mb-4" style={{ fontSize: 16 }} key={index}>
                <Col
                  xs={12}
                  md={3}
                  className="inter-font d-flex align-items-center mb-2 mb-md-0 gap-2"
                >
                  {
                    checkImage(item?.talent_id?.picture) && isImageValid ?
                      <img
                        src={item?.talent_id?.picture}
                        alt="Talent"
                        style={{
                          width: "33px",
                          height: "33px",
                          objectFit: "cover",
                          borderRadius: "50%",
                          border: "2px solid #ddd",
                        }}
                      />
                      :

                      <User className="inter-font rounded-circle " />
                  }

                  <div>
                    <h5
                      className="inter-font mb-1 fw-bold inter-font"
                      style={{ fontSize: "14px" }}
                    >
                      {item?.talent_id?.first_name ? item?.talent_id?.first_name : "N/A"} {item?.talent_id?.last_name ? item?.talent_id?.last_name : "N/A"}
                    </h5>
                    <p
                      className="inter-font mb-0 text-muted d-flex align-items-center inter-font"
                      style={{ fontSize: "11px" }}
                    >
                      {item?.talent_id?.phone ? item?.talent_id?.phone : "-"}
                    </p>
                  </div>
                </Col>
                <div className="inter-font col">
                  <div
                    className="inter-font fw-semibold text-secondary"
                    style={{ fontSize: 15 }}
                  >
                    Duration
                  </div>
                  <div style={{ color: "#111", fontWeight: 500 }}>
                    {item?.duration || "-"}
                  </div>
                </div>
                <div className="inter-font col">
                  <div
                    className="inter-font fw-semibold text-secondary"
                    style={{ fontSize: 15 }}
                  >
                    Job Type
                  </div>
                  <div style={{ color: "#111", fontWeight: 500 }}>
                    {item?.job_type || "-"}
                  </div>
                </div>
                <div className="inter-font col">
                  <div
                    className="inter-font fw-semibold text-secondary"
                    style={{ fontSize: 15 }}
                  >
                    Date Slot
                  </div>
                  <div style={{ color: "#111", fontWeight: 500 }}>
                    {formatSingleDate(item?.start_date) || "-"} -{" "}
                    {formatSingleDate(item?.end_date) || "-"}
                  </div>
                </div>
                <div className="inter-font col">
                  <div
                    className="inter-font fw-semibold text-secondary"
                    style={{ fontSize: 15 }}
                  >
                    Total
                  </div>
                  <div style={{ color: "#111", fontWeight: 500 }}>
                    {item?.total_amount || "-"}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>Data not found</div>
        )}
        <div className="inter-font d-flex justify-content-between mt-4">
          <button
            className="inter-font btn"
            style={{
              background: "#FF6B35",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              fontWeight: 600,
              fontSize: 18,
              padding: "12px 36px",
            }}
            onClick={onNext}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

const StatusScreen = ({
  formData,
  onBack,
  onViewQuote,
  selectedTalents = [],
  paymentInfo,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="inter-font d-flex justify-content-center"
      style={{
        paddingTop: 40,
        paddingBottom: 120,
        boxSizing: "border-box",
      }}
    >
      <div
        className="inter-font bg-white rounded-4 shadow p-5 position-relative"
        style={{
          width: 700,
          maxWidth: "100%",
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Selected Talents List (inside card) */}
        {/* {selectedTalents.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {selectedTalents.map((t) => (
                <div
                  key={t._id}
                  className="inter-font d-flex align-items-center bg-light rounded-3 px-3 py-2"
                  style={{
                    background: "#F8F3F0",
                    minWidth: 200,
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="inter-font d-flex align-items-center">
                    <img
                      src={dashboardTalent2}
                      alt="profile"
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 8,
                        marginRight: 12,
                      }}
                    />
                    <div>
                      <div className="inter-font fw-bold" style={{ fontSize: 18 }}>
                        {t.first_name} {t.last_name}
                      </div>
                      <div style={{ fontSize: 14, color: "#7A7A7A" }}>
                        {t.education}
                      </div>
                    </div>
                  </div>
                  <button
                    className="inter-font btn ms-3"
                    style={{
                      background: "#4B2E2B",
                      color: "#fff",
                      borderRadius: 14,
                      fontWeight: 500,
                      fontSize: 16,
                      padding: "10px 24px",
                    }}
                  >
                    <LiaDownloadSolid
                      style={{ marginRight: 8, fontSize: 20 }}
                    />{" "}
                    Download Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        )} */}
        {/* Project Info */}
        <div
          className="inter-font mb-3 fw-semibold inter-font p-2"
          style={{ background: "#12cb71", borderRadius: "50%", color: "white" }}
        >
          <Check />
        </div>
        <div className="inter-font mb-3 fw-semibold inter-font" style={{ fontSize: 20 }}>
          Payment Successful!
        </div>
        <div
          className="inter-font text-secondary mb-4 inter-font"
          style={{ fontSize: 15 }}
        >
          Congratulation, your payment has been processed successfully.
        </div>
        {/* Details Row */}
        <div
          className="inter-font mb-4 inter-font"
          style={{
            fontSize: 16,
            width: "80%",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #E9E9E9",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <div
            className="inter-font my-2 inter-font"
            style={{
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              // gap: "100px",
            }}
          >
            <div
              className="inter-font fw-semibold inter-font"
              style={{ fontSize: 15, color: "#111" }}
            >
              Payment Details
            </div>
          </div>
          <div
            className="inter-font my-2 inter-font"
            style={{
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              className="inter-font fw-semibold inter-font"
              style={{ fontSize: 15, color: "#111" }}
            >
              Amount:
            </div>
            <div
              style={{ fontWeight: 500 }}
              className="inter-font fw-semibold text-secondary inter-font"
            >
              {paymentInfo.amount / 100} AED
            </div>
          </div>
          <div
            className="inter-font my-2"
            style={{
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              className="inter-font fw-semibold inter-font"
              style={{ fontSize: 15, color: "#111" }}
            >
              Payment Method:
            </div>
            <div
              style={{ fontWeight: 500 }}
              className="inter-font fw-semibold text-secondary inter-font"
            >
              {paymentInfo.payment_method_types[0]}
            </div>
          </div>
          <div
            className="inter-font my-2 inter-font"
            style={{
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",

              width: "100%",
            }}
          >
            <div
              className="inter-font fw-semibold inter-font"
              style={{ fontSize: 15, color: "#111" }}
            >
              Transaction ID:
            </div>
            <div
              style={{ fontWeight: 500 }}
              className="inter-font fw-semibold text-secondary inter-font"
            >
              {paymentInfo.id}
            </div>
          </div>
        </div>
        {/* Status Row */}
        <div className="inter-font row mb-4" style={{ fontSize: 16 }}>
          <div className="inter-font col d-flex justify-content-end align-items-end inter-font">
            <button
              className="inter-font btn inter-font"
              style={{
                background: "#FF6237",
                color: "white",
                border: "none",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 18,
                padding: "12px 50px",
              }}
              onClick={() => {
                navigate("/company-dashboard?tab=qutations");
                window.location.reload();
              }}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectedTalentsOfQuotes = ({
  selectedTalentData,
  selectedTalentByProjectData,
}) => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    projectInfo: "",
    projectAttachment: null,
    duration: "",
    jobType: "",
    dateSlot: "",
    startDate: new Date(),
    endDate: (() => {
      const date = new Date();
      date.setDate(date.getDate() + 7);
      return date;
    })(),
    projectId: "demoProjectId", // For viewQuote
  });
  const [errors, setErrors] = React.useState({});
  const navigate = useNavigate();
  const { durationOptions, jobTypeOptions } = useFormOptions();
  const location = useLocation();
  const selectedTalents = location.state?.selectedTalents || [];

  const [selectedTalentsUpdatedData, setSelectedTalentsUpdatedData] = useState(
    []
  );
  const [paymentInfo, setPaymentInfo] = useState();

  console.log(
    "selectedTalentsUpdatedData - ",
    selectedTalentData,
    selectedTalentByProjectData
  );
  useEffect(() => {
    if (selectedTalentData?.length === 0) {
      navigate("/company-dashboard?tab=qutations");
      window.location.reload();
    }
  }, [selectedTalentData]);
  // useEffect(() => {
  //   navigate("/company-dashboard?tab=talents");
  // }, []);

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.projectInfo.trim()) {
      newErrors.projectInfo = "Project information is required.";
    }
    if (!formData.duration) {
      newErrors.duration = "Duration is required.";
    }
    if (!formData.jobType) {
      newErrors.jobType = "Job type is required.";
    }
    // if (!formData.startDate) {
    //   newErrors.startDate = "Date slot is required.";
    // }
    return newErrors;
  };

  return (
    <div className="inter-font main-bg" style={{ minHeight: "100vh" }}>
      {/* <div className="inter-font container-fluid"> */}
      <div
        className="inter-font row"
        style={{
          height: "100vh",
          overflow: "auto",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div
          className="inter-font col-md-10 content px-4 py-3"
          style={{
            height: "100vh",
            width: "100%",
            overflowY: "scroll",
            overflowX: "hidden",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <HorizontalStepper step={step} setStep={setStep} />
          {step === 1 && (
            <>
              <ProjectSummaryScreen
                formData={formData}
                setFormData={setFormData}
                onNext={async () => {
                  // const ok = await requestQuote(formData);
                  setStep(2);
                }}
                onBack={() => navigate("/company-dashboard?tab=talents")}
                selectedTalents={selectedTalentData}
                selectedTalentsUpdatedData={selectedTalentByProjectData}
              />
            </>
          )}
          {step === 2 && (
            // <StripeCheckoutForm />
            // <StripePaymentPage
            <div
              className="inter-font d-flex justify-content-center bg-white rounded-4 shadow p-5"
              style={{
                paddingTop: 40,
                paddingBottom: 120,
                boxSizing: "border-box",
              }}
            >
              <div className="inter-font " style={{ width: 400, maxWidth: "100%" }}>
                <div
                  style={{
                    color: "#000",
                    fontSize: 25,
                    fontWeight: 500,
                    textAlign: "start",
                  }}
                  className="inter-font mb-5"
                >
                  {selectedTalentData?.title}
                </div>
                {selectedTalentData?.talents?.map((talent) => {
                  return (
                    <div>
                      <div className="inter-font mb-4" style={{ width: "100%" }}>

                      </div>
                      {/* Project Info */}
                      <div
                        className="inter-font mb-2 fw-semibold d-flex"
                        style={{
                          fontSize: 20,
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {/* Leading Role Plus Singer */}
                        {talent?.talent_id?.first_name ? talent?.talent_id?.first_name : 'N/A'}{" "}
                        {talent?.talent_id?.last_name}
                        <span className="inter-font text-secondary">{talent?.total_amount} AED
                        </span>
                      </div>
                      <div className="inter-font text-secondary mb-4" style={{ fontSize: 15 }}>
                        <span style={{ color: "#ccc" }}>{selectedTalentData?.description}
                        </span>
                      </div>
                      {/* <div
                      className="inter-font mb-2 fw-semibold d-flex"
                      style={{
                        fontSize: 20,
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {selectedTalentData?.description}
                      <span className="inter-font text-secondary">
                        {selectedTalentData?.total_amount}

                      </span>
                    </div> */}
                      {/* <div className="inter-font text-secondary mb-4" style={{ fontSize: 15 }}>
                      <span style={{ color: "#ccc" }}>lipsum dummy text.</span>
                    </div> */}
                      {/* <div
                      className="inter-font mb-2 fw-semibold d-flex"
                      style={{
                        fontSize: 20,
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      Leading Role Plus Singer
                      <span className="inter-font text-secondary">4000.00</span>
                    </div> */}
                      {/* <div className="inter-font text-secondary mb-4" style={{ fontSize: 15 }}>
                      <span style={{ color: "#ccc" }}>lipsum dummy text.</span>
                    </div> */}


                    </div>

                  )
                })}
                <div className="inter-font  mt-4" style={{ borderTop: '1px solid gray' }}>
                  {/* <div
                    className="inter-font mb-2 fw-semibold d-flex"
                    style={{
                      fontSize: 22,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    VAT 5%
                    <span className="inter-font text-secondary">1200.00</span>
                  </div> */}
                  <div
                    className="inter-font mb-2 fw-semibold d-flex"
                    style={{
                      fontSize: 22,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    Total
                    <span className="inter-font text-secondary">
                      {selectedTalentData?.total_amount} AED

                    </span>
                  </div>
                </div>

              </div>
              <CombinedStripeCheckout
                onNext={async () => {
                  // const ok = await requestQuote(formData);
                  setStep(3);
                }}
                selectedTalentData={selectedTalentData}
                setPaymentInfo={setPaymentInfo}
              />
            </div>
          )}
          {step === 3 && (
            <StatusScreen
              formData={formData}
              setFormData={setFormData}
              onBack={() => setStep(2)}
              onViewQuote={async () => {
                await viewQuote(formData);
              }}
              selectedTalents={selectedTalents}
              paymentInfo={paymentInfo}
            />
          )}
        </div>
      </div>
    </div >
  );
};

export default SelectedTalentsOfQuotes;
