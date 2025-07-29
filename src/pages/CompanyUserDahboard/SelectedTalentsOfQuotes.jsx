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
import { Check, CheckCircle } from "lucide-react";
import CheckoutForm from "./Stripe";
import CombinedStripeCheckout from "./Stripe";

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
//       <div className="mb-4">
//         <h5 className="fw-bold mb-3">Select Date Range</h5>

//         <div className="row mb-3">
//           <div className="col">
//             <label className="form-label fw-semibold">Start Date</label>
//             <input
//               type="date"
//               className="form-control"
//               value={formatDate(tempStartDate)}
//               onChange={handleStartDateChange}
//               style={{
//                 borderRadius: 8,
//                 padding: "10px 12px",
//                 fontSize: 16,
//               }}
//             />
//           </div>
//           <div className="col">
//             <label className="form-label fw-semibold">End Date</label>
//             <input
//               type="date"
//               className="form-control"
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

//         <div className="mb-3 p-3 bg-light rounded">
//           <strong>Selected Range:</strong>
//           <br />
//           {formatDisplayDate(tempStartDate)} - {formatDisplayDate(tempEndDate)}
//           <br />
//           <small className="text-muted">
//             Duration:{" "}
//             {Math.ceil((tempEndDate - tempStartDate) / (1000 * 60 * 60 * 24))}{" "}
//             days
//           </small>
//         </div>
//       </div>

//       <div className="d-flex justify-content-between align-items-center">
//         <button
//           type="button"
//           className="btn btn-light"
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

//         <div className="d-flex gap-2">
//           <button
//             type="button"
//             className="btn btn-secondary"
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
//             className="btn"
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
    className="d-flex justify-content-center align-items-center mb-5"
    style={{ marginTop: 20 }}
  >
    {/* Step 1 */}
    <div className="d-flex align-items-center">
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
    <div className="d-flex align-items-center">
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
    <div className="d-flex align-items-center">
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

const ProjectInfoScreen = ({
  formData,
  setFormData,
  errors = {},
  setErrors,
  onNext,
  durationOptions,
  jobTypeOptions,
  selectedTalents = [],
  selectedTalentData,
  setSelectedTalentsUpdatedData,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const formatDisplayDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (setErrors)
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleDateChange = (newStartDate, newEndDate) => {
    setFormData({
      ...formData,
      startDate: newStartDate,
      endDate: newEndDate,
      dateSlot: `${formatDisplayDate(newStartDate)} - ${formatDisplayDate(
        newEndDate
      )}`,
    });
    if (setErrors) setErrors((prev) => ({ ...prev, dateSlot: undefined }));
  };

  const [data, setData] = useState(
    selectedTalentData.map((person) => ({
      ...person,
      title: "",
      description: "",
      job_type: "",
      duration: "",
      start_date: null,
      end_date: null,
    }))
  );

  const [isLoadingCreateQuotes, setIsLoadingCreateQuotes] = useState(false);

  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  const handleSubmit = () => {
    console.log("Project Title:", projectTitle);
    console.log("Project Description:", projectDescription);
    console.log("Full Data:", data);
    // You can send this data to backend here
  };

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const handleApply = (event, picker, index) => {
    const start = picker.startDate.format("YYYY-MM-DD");
    const end = picker.endDate.format("YYYY-MM-DD");
    setDateRange({ startDate: start, endDate: end });
    console.log("datepicker ---- ", start, end);

    handleChange(index, "start_date", start);
    handleChange(index, "end_date", end);
    // onChange({ from: start, to: end });
  };

  const calculateDuration = (startStr, endStr) => {
    // const [startStr, endStr] = dateRange.split(" - ");
    const startDate = new Date(startStr);
    const endDate = new Date(endStr);

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const parts = [];
    if (years) parts.push(`${years} year${years > 1 ? "s" : ""}`);
    if (months) parts.push(`${months} month${months > 1 ? "s" : ""}`);
    if (days) parts.push(`${days} day${days > 1 ? "s" : ""}`);

    return `${parts.join(", ")}`;
  };

  const handleCreateQuotes = async (data) => {
    try {
      setIsLoadingCreateQuotes(true);
      const res = await ApiService.request({
        method: "POST",
        url: `company/postProject`,
        data: { projects: data },
      });

      if (res.data.status) {
        // setCreateJobData(false);
        // await fetchJobData(1);
        toast.success(res.data.message);
        return res.data;
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error("Edit Error:", err);
      toast.error("Failed to update job.");
    } finally {
      setIsLoadingCreateQuotes(false);
    }
  };

  const handleProceed = async () => {
    if (projectTitle !== "" && projectDescription !== "") {
      const mergedData = data.map((person) => ({
        // ...person,
        title: projectTitle,
        description: projectDescription,
        job_type: person?.job_type,
        duration: calculateDuration(person?.start_date, person?.end_date),
        start_date: person?.start_date,
        end_date: person?.end_date,
        talent_id: person?._id,
      }));
      console.log("data ------- ", data, mergedData);
      const resData = await handleCreateQuotes(mergedData);
      if (resData?.status) {
        const mergedData = data.map((person) => ({
          ...person,
          title: projectTitle,
          description: projectDescription,
          job_type: person?.job_type,
          duration: calculateDuration(person?.start_date, person?.end_date),
          start_date: person?.start_date,
          end_date: person?.end_date,
          talent_id: person?._id,
        }));
        setSelectedTalentsUpdatedData(mergedData);
        onNext();
      }
    }
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{
        paddingTop: 30,
        paddingBottom: 40,
        boxSizing: "border-box",
      }}
    >
      <div
        className="bg-white rounded-4 shadow p-3 position-relative"
        style={{ width: 800, maxWidth: "100%" }}
      >
        {/* Selected Talents List (inside card) */}
        {/* {selectedTalents.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>
              Selected Talent list
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {selectedTalents.map((t) => (
                <div
                  key={t._id}
                  style={{
                    background: "#F8F3F0",
                    borderRadius: 12,
                    padding: 12,
                    display: "flex",
                    alignItems: "center",
                    minWidth: 200,
                  }}
                >
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
                    <div style={{ fontWeight: 600 }}>
                      {t.first_name} {t.last_name}
                    </div>
                    <div style={{ fontSize: 14, color: "#7A7A7A" }}>
                      {t.education}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )} */}

        <div className="mb-4" style={{ paddingRight: 260 }}>
          {/* <div className="fw-bold" style={{ fontSize: 30, marginBottom: 2 }}>
            Hire the talent
          </div> */}
          <div style={{ color: "#B0B0B0", fontSize: 18, fontWeight: 500 }}>
            Fill this form and hire talent for work
          </div>
        </div>
        {/* Form */}
        <form>
          {/* <div style={{ maxWidth: "800px", margin: "", padding: "20px" }}> */}
          {/* <Form.Group className="mb-3 inter-font">
              <Form.Label>Project Title</Form.Label>
              <Form.Control
                type="text"
                // value={projectTitle}
                // onChange={(e) => setProjectTitle(e.target.value)}
              />
            </Form.Group> */}

          {/* <Form.Group className="mb-4 inter-font">
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                // value={projectDescription}
                // onChange={(e) => setProjectDescription(e.target.value)}
              />
            </Form.Group> */}

          {/* <p className="mb-3 text-muted ">
              Select your project duration and work dates
            </p> */}

          {/* <Button
                  // onClick={handleSubmit}
                  style={{
                    backgroundColor: "#FF6B2C",
                    border: "none",
                    borderRadius: "10px",
                    padding: "8px 25px",
                    fontWeight: "500",
                    marginTop: "20px",
                  }}
                >
                  Proceed
                </Button> */}
          {/* </div> */}

          <div className="mb-2">
            {/* <label className="fw-semibold mb-2" style={{ fontSize: 16 }}>
              Enter your Project Information
            </label> */}
            <Form.Group className="mb-3 inter-font">
              <Form.Label>Project Title</Form.Label>
              <Form.Control
                type="text"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
              />
            </Form.Group>
            {errors.projectInfo && (
              <div style={{ color: "red", fontSize: 13, marginTop: 2 }}>
                {errors.projectInfo}
              </div>
            )}
          </div>
          <div className="mb-2">
            <label
              className="fw-semibold mb-2 inter-font"
              style={{ fontSize: 16 }}
            >
              Enter your Project Information
            </label>
            <textarea
              className="form-control inter-font"
              name="projectInfo"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              // value={formData.projectInfo}
              // onChange={handleInputChange}
              style={{
                minHeight: 80,
                fontSize: 18,
                borderRadius: 10,
                borderColor: "#E6E6E6",
                marginBottom: 12,
              }}
              placeholder="Describe your project..."
            />
            {errors.projectInfo && (
              <div style={{ color: "red", fontSize: 13, marginTop: 2 }}>
                {errors.projectInfo}
              </div>
            )}
          </div>

          {data.map((person, index) => (
            <Row
              key={person._id}
              className="align-items-center mb-4 inter-font"
              style={{
                borderBottom: "1px solid #eee",
                paddingBottom: "15px",
              }}
            >
              <Col
                xs={12}
                md={3}
                className="d-flex align-items-center mb-2 mb-md-0"
              >
                <img
                  src={dashboardTalent2}
                  alt="Talent"
                  style={{
                    width: "44px",
                    height: "44px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    border: "2px solid #ddd",
                  }}
                />
                <div>
                  <h5
                    className="mb-1 fw-bold inter-font"
                    style={{ fontSize: "14px" }}
                  >
                    {person.first_name} {person.last_name}
                  </h5>
                  <p
                    className="mb-0 text-muted d-flex align-items-center inter-font"
                    style={{ fontSize: "11px" }}
                  >
                    {person.city}, {person.country}
                  </p>
                </div>
              </Col>

              <Col xs={12} md={3} className="mb-2 mb-md-0">
                <label
                  className="fw-semibold mb-2 inter-font"
                  style={{ fontSize: 16 }}
                >
                  Job Type
                </label>
                <Form.Select
                  value={person.job_type}
                  onChange={(e) =>
                    handleChange(index, "job_type", e.target.value)
                  }
                >
                  <option value="">Job Type</option>
                  <option value="Shooting">Shooting</option>
                  <option value="Editing">Editing</option>
                  <option value="Direction">Direction</option>
                </Form.Select>
              </Col>

              <Col xs={12} md={3} className="mb-2 mb-md-0">
                <div className="col">
                  <label className="fw-semibold mb-2" style={{ fontSize: 16 }}>
                    Select Date Slot
                  </label>
                  <div style={{ position: "relative" }}>
                    {/* <input
                      className="form-control"
                      placeholder="Select Date Slot"
                      type="text"
                      name="dateSlot"
                      value={formData.dateSlot}
                      readOnly
                      onClick={() => setShowCalendar(true)}
                      style={{
                        cursor: "pointer",
                        background: "#fff",
                        fontSize: 18,
                        borderRadius: 10,
                        borderColor: "#E6E6E6",
                        height: 54,
                        paddingRight: 44,
                      }}
                    /> */}
                    <DateRangePicker
                      onApply={(e, piker) => handleApply(e, piker, index)}
                      autoUpdateInput={false}
                    >
                      <Form.Control
                        type="text"
                        placeholder="Select date"
                        value={
                          dateRange.startDate && dateRange.endDate
                            ? `${dateRange.startDate} to ${dateRange.endDate}`
                            : ""
                        }
                        readOnly
                        style={{
                          maxWidth: "300px",
                          maxHeight: "40px",
                          borderRadius: "5px",
                        }}
                        className="inter-font"
                      />
                    </DateRangePicker>
                    {/* {errors.dateSlot && (
                      <div style={{ color: "red", fontSize: 13, marginTop: 2 }}>
                        {errors.dateSlot}
                      </div>
                    )} */}
                    {dateRange.startDate && dateRange.endDate ? (
                      ""
                    ) : (
                      <span
                        style={{
                          position: "absolute",
                          right: 16,
                          top: 8,
                          pointerEvents: "none",
                        }}
                      >
                        <svg
                          width="22"
                          height="22"
                          fill="none"
                          stroke="#B0B0B0"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="4" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </Col>

              <Col xs={12} md={3} className="mb-2 mb-md-0">
                <label
                  className="fw-semibold mb-2 inter-font"
                  style={{ fontSize: 16 }}
                >
                  Duration
                </label>
                <Form.Control
                  className="fw-semibold  inter-font"
                  type="text"
                  placeholder="Duration"
                  value={calculateDuration(
                    person?.start_date,
                    person?.end_date
                  )}
                  disabled
                  onChange={(e) =>
                    handleChange(
                      index,
                      "duration",
                      calculateDuration(person?.start_date, person?.end_date)
                    )
                  }
                />
                {/* <Form.Select
                  value={person.duration}
                  // onChange={(e) =>
                  //   handleChange(index, "duration", e.target.value)
                  // }
                >
                  <option value="">Duration</option>
                  <option value="1 Day">1 Day</option>
                  <option value="1 Week">1 Week</option>
                  <option value="1 Month">1 Month</option>
                </Form.Select> */}
              </Col>

              {/* <Col xs={12} md={3}>
                      

                      <Row className="inter-font">
                        <Col md={12}>
                          <DateRangePicker
                            onApply={handleApply}
                            autoUpdateInput={false}
                          >
                            <Form.Control
                              type="text"
                              placeholder="Select date range"
                              value={
                                dateRange.startDate && dateRange.endDate
                                  ? `${dateRange.startDate} to ${dateRange.endDate}`
                                  : ""
                              }
                              readOnly
                              style={{
                                maxWidth: "300px",
                                maxHeight: "40px",
                                borderRadius: "5px",
                              }}
                              className="inter-font"
                            />
                          </DateRangePicker>
                        </Col>
                      </Row>
                    </Col> */}
            </Row>
          ))}

          <div className="row mb-4">
            {/* <div className="col">
              <label className="fw-semibold mb-2" style={{ fontSize: 16 }}>
                Required Duration
              </label>
              <select
                className="form-select"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                style={{
                  height: 54,
                  fontSize: 18,
                  borderRadius: 10,
                  borderColor: "#E6E6E6",
                }}
              >
                <option value="">Select Duration</option>
                {durationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.duration && (
                <div style={{ color: "red", fontSize: 13, marginTop: 2 }}>
                  {errors.duration}
                </div>
              )}
            </div> */}
            {/* <div className="col">
              <label className="fw-semibold mb-2" style={{ fontSize: 16 }}>
                Job Type
              </label>
              <select
                className="form-select"
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
                style={{
                  height: 54,
                  fontSize: 18,
                  borderRadius: 10,
                  borderColor: "#E6E6E6",
                }}
              >
                <option value="">Select Job Type</option>
                {jobTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.jobType && (
                <div style={{ color: "red", fontSize: 13, marginTop: 2 }}>
                  {errors.jobType}
                </div>
              )}
            </div> */}
            {/* <div className="col">
              <label className="fw-semibold mb-2" style={{ fontSize: 16 }}>
                Select Date Slot
              </label>
              <div style={{ position: "relative" }}>
                <input
                  className="form-control"
                  placeholder="Select Date Slot"
                  type="text"
                  name="dateSlot"
                  value={formData.dateSlot}
                  readOnly
                  onClick={() => setShowCalendar(true)}
                  style={{
                    cursor: "pointer",
                    background: "#fff",
                    fontSize: 18,
                    borderRadius: 10,
                    borderColor: "#E6E6E6",
                    height: 54,
                    paddingRight: 44,
                  }}
                />
                <DateRangePicker onApply={handleApply} autoUpdateInput={false}>
                  <Form.Control
                    type="text"
                    placeholder="Select date range"
                    value={
                      dateRange.startDate && dateRange.endDate
                        ? `${dateRange.startDate} to ${dateRange.endDate}`
                        : ""
                    }
                    readOnly
                    style={{
                      maxWidth: "300px",
                      maxHeight: "40px",
                      borderRadius: "5px",
                    }}
                    className="inter-font"
                  />
                </DateRangePicker>
                {errors.dateSlot && (
                  <div style={{ color: "red", fontSize: 13, marginTop: 2 }}>
                    {errors.dateSlot}
                  </div>
                )}
                <span
                  style={{
                    position: "absolute",
                    right: 16,
                    top: 16,
                    pointerEvents: "none",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="#B0B0B0"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="4" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </span>
              </div>
            </div> */}
          </div>
          {/* Custom Date Range Picker */}
          {/* {showCalendar && (
                  <CustomDateRangePicker
                    startDate={formData.startDate}
                    endDate={formData.endDate}
                    onDateChange={handleDateChange}
                    onClose={() => setShowCalendar(false)}
                  />
                )} */}
          <button
            className="fw-bold mt-2"
            style={{
              background: "#FF6B35",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              fontSize: 20,
              padding: "14px 40px",
              minWidth: 160,
            }}
            type="button"
            onClick={handleProceed}
            disabled={isLoadingCreateQuotes}
          >
            {isLoadingCreateQuotes ? "Loading..." : "Proceed"}
          </button>
        </form>
      </div>
    </div>
  );
};

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
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        paddingTop: 40,
        paddingBottom: 120,
        boxSizing: "border-box",
      }}
    >
      <div
        className="bg-white rounded-4 shadow p-5 position-relative"
        style={{ width: 900, maxWidth: "100%" }}
      >
        <div className="mb-4" style={{ width: "100%" }}>
          {/* <div className="fw-bold" style={{ fontSize: 30, marginBottom: 2 }}>
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
        <div className="mb-3 fw-semibold" style={{ fontSize: 20 }}>
          Project Title
        </div>
        <div className="text-secondary mb-4" style={{ fontSize: 15 }}>
          {selectedTalents?.title || (
            <span style={{ color: "#ccc" }}>
              No project information provided.
            </span>
          )}
        </div>
        <div className="mb-3 fw-semibold" style={{ fontSize: 20 }}>
          Project Information
        </div>
        <div className="text-secondary mb-4" style={{ fontSize: 15 }}>
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
              <div className="row mb-4" style={{ fontSize: 16 }} key={index}>
                <Col
                  xs={12}
                  md={3}
                  className="d-flex align-items-center mb-2 mb-md-0"
                >
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
                  <div>
                    <h5
                      className="mb-1 fw-bold inter-font"
                      style={{ fontSize: "14px" }}
                    >
                      {item?.talent_id?.first_name} {item?.talent_id?.last_name}
                    </h5>
                    <p
                      className="mb-0 text-muted d-flex align-items-center inter-font"
                      style={{ fontSize: "11px" }}
                    >
                      {item?.talent_id?.phone}
                    </p>
                  </div>
                </Col>
                <div className="col">
                  <div
                    className="fw-semibold text-secondary"
                    style={{ fontSize: 15 }}
                  >
                    Duration
                  </div>
                  <div style={{ color: "#111", fontWeight: 500 }}>
                    {item?.duration || "-"}
                  </div>
                </div>
                <div className="col">
                  <div
                    className="fw-semibold text-secondary"
                    style={{ fontSize: 15 }}
                  >
                    Job Type
                  </div>
                  <div style={{ color: "#111", fontWeight: 500 }}>
                    {item?.job_type || "-"}
                  </div>
                </div>
                <div className="col">
                  <div
                    className="fw-semibold text-secondary"
                    style={{ fontSize: 15 }}
                  >
                    Date Slot
                  </div>
                  <div style={{ color: "#111", fontWeight: 500 }}>
                    {formatSingleDate(item?.start_date) || "-"} -{" "}
                    {formatSingleDate(item?.end_date) || "-"}
                  </div>
                </div>
                <div className="col">
                  <div
                    className="fw-semibold text-secondary"
                    style={{ fontSize: 15 }}
                  >
                    Total
                  </div>
                  <div style={{ color: "#111", fontWeight: 500 }}>
                    {selectedTalents?.total_amount || "-"}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>Data not found</div>
        )}
        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn"
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
      className="d-flex justify-content-center"
      style={{
        paddingTop: 40,
        paddingBottom: 120,
        boxSizing: "border-box",
      }}
    >
      <div
        className="bg-white rounded-4 shadow p-5 position-relative"
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
                  className="d-flex align-items-center bg-light rounded-3 px-3 py-2"
                  style={{
                    background: "#F8F3F0",
                    minWidth: 200,
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="d-flex align-items-center">
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
                      <div className="fw-bold" style={{ fontSize: 18 }}>
                        {t.first_name} {t.last_name}
                      </div>
                      <div style={{ fontSize: 14, color: "#7A7A7A" }}>
                        {t.education}
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn ms-3"
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
          className="mb-3 fw-semibold inter-font p-2"
          style={{ background: "#12cb71", borderRadius: "50%", color: "white" }}
        >
          <Check />
        </div>
        <div className="mb-3 fw-semibold inter-font" style={{ fontSize: 20 }}>
          Payment Successful!
        </div>
        <div
          className="text-secondary mb-4 inter-font"
          style={{ fontSize: 15 }}
        >
          Congratulation, your payment has been processed successfully.
        </div>
        {/* Details Row */}
        <div
          className="mb-4 inter-font"
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
            className="my-2 inter-font"
            style={{
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              // gap: "100px",
            }}
          >
            <div
              className="fw-semibold inter-font"
              style={{ fontSize: 15, color: "#111" }}
            >
              Payment Details
            </div>
          </div>
          <div
            className="my-2 inter-font"
            style={{
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              className="fw-semibold inter-font"
              style={{ fontSize: 15, color: "#111" }}
            >
              Amount:
            </div>
            <div
              style={{ fontWeight: 500 }}
              className="fw-semibold text-secondary inter-font"
            >
              {paymentInfo.amount / 100} AED
            </div>
          </div>
          <div
            className="my-2"
            style={{
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              className="fw-semibold inter-font"
              style={{ fontSize: 15, color: "#111" }}
            >
              Payment Method:
            </div>
            <div
              style={{ fontWeight: 500 }}
              className="fw-semibold text-secondary inter-font"
            >
              {paymentInfo.payment_method_types[0]}
            </div>
          </div>
          <div
            className="my-2 inter-font"
            style={{
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",

              width: "100%",
            }}
          >
            <div
              className="fw-semibold inter-font"
              style={{ fontSize: 15, color: "#111" }}
            >
              Transaction ID:
            </div>
            <div
              style={{ fontWeight: 500 }}
              className="fw-semibold text-secondary inter-font"
            >
              {paymentInfo.id}
            </div>
          </div>
        </div>
        {/* Status Row */}
        <div className="row mb-4" style={{ fontSize: 16 }}>
          <div className="col d-flex justify-content-end align-items-end inter-font">
            <button
              className="btn inter-font"
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
    <div className="main-bg" style={{ minHeight: "100vh" }}>
      {/* <div className="container-fluid"> */}
      <div
        className="row"
        style={{
          height: "100vh",
          overflow: "auto",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div
          className="col-md-10 content px-4 py-3"
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
              className="d-flex justify-content-center bg-white rounded-4 shadow p-5"
              style={{
                paddingTop: 40,
                paddingBottom: 120,
                boxSizing: "border-box",
              }}
            >
              <div className="" style={{ width: 400, maxWidth: "100%" }}>
                <div className="mb-4" style={{ width: "100%" }}>
                  {/* <div className="fw-bold" style={{ fontSize: 30, marginBottom: 2 }}>
            Hire the talent
          </div> */}
                  <div
                    style={{
                      color: "#000",
                      fontSize: 25,
                      fontWeight: 500,
                      textAlign: "start",
                    }}
                    className="mb-5"
                  >
                    NGI Film
                  </div>
                </div>
                {/* Project Info */}
                <div
                  className="mb-2 fw-semibold d-flex"
                  style={{
                    fontSize: 20,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Leading Role Plus Singer
                  <span className="text-secondary">4000.00</span>
                </div>
                <div className="text-secondary mb-4" style={{ fontSize: 15 }}>
                  <span style={{ color: "#ccc" }}>lipsum dummy text.</span>
                </div>
                <div
                  className="mb-2 fw-semibold d-flex"
                  style={{
                    fontSize: 20,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Leading Role Plus Singer
                  <span className="text-secondary">4000.00</span>
                </div>
                <div className="text-secondary mb-4" style={{ fontSize: 15 }}>
                  <span style={{ color: "#ccc" }}>lipsum dummy text.</span>
                </div>
                <div
                  className="mb-2 fw-semibold d-flex"
                  style={{
                    fontSize: 20,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Leading Role Plus Singer
                  <span className="text-secondary">4000.00</span>
                </div>
                <div className="text-secondary mb-4" style={{ fontSize: 15 }}>
                  <span style={{ color: "#ccc" }}>lipsum dummy text.</span>
                </div>
                

                <div className=" mt-4" style={{borderTop :'1px solid gray'}}>
              <div
                  className="mb-2 fw-semibold d-flex"
                  style={{
                    fontSize: 22,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  VAT 5%
                  <span className="text-secondary">1200.00</span>
                </div><div
                  className="mb-2 fw-semibold d-flex"
                  style={{
                    fontSize: 22,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  Total
                  <span className="text-secondary">12000.00</span>
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
    </div>
  );
};

export default SelectedTalentsOfQuotes;
