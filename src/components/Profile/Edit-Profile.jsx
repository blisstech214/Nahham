import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { BsCalendar2Check } from "react-icons/bs";
import flag from "../../assets/images/UAE flag.jpeg";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import countries from "world-countries";
import { MultiSelect } from "react-multi-select-component";
import ImageUpload from "../../components/ImageUpload";
import { useDropzone } from "react-dropzone";
import plus from "../../assets/images/plus.png"

// Placeholder ImageDropzone1 component
const ImageDropzone1 = ({ onUpload }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        console.log("ImageDropzone1: File uploaded", acceptedFiles[0]);
        onUpload(acceptedFiles[0]);
      } else {
        console.log("ImageDropzone1: No valid file selected");
      }
    },
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className={`border p-3 text-center rounded-2 ${
        isDragActive ? "bg-light" : ""
      }`}
    >
      <input {...getInputProps()} />
      <img src={plus} style={{ padding: "20px", background: "#F1F1F1", borderRadius: "50%", width: "60px" }} />
      <p className="inter-font mt-3">Upload Photos</p>
      <button
        className="btn text-white inter-font"
        style={{
          background: "#522A30",
          borderRadius: "15px",
          height: "44px",
          width: "107px",
          fontSize: "12px",
        }}
      >
        Browse Files
      </button>
    </div>
  );
};

const ImageDropzone2 = ({ onUpload }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "video/*": [".mp4", ".mov"] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        console.log("ImageDropzone2: File uploaded", acceptedFiles[0]); // Debug log
        onUpload(acceptedFiles[0]);
      } else {
        console.log("ImageDropzone2: No valid file selected");
      }
    },
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className={`border p-3 text-center rounded-2 ${
        isDragActive ? "bg-light" : ""
      }`}
    >
      <input {...getInputProps()} />
      <img
        src={plus}
        style={{
          padding: "20px",
          background: "#F1F1F1",
          borderRadius: "50%",
          width: "60px",
        }}
      />

      <p className="inter-font mt-3">Upload Videos</p>
      <button
        className="btn text-white inter-font"
        style={{
          background: "#522A30",
          borderRadius: "15px",
          height: "44px",
          width: "107px",
          fontSize: "12px",
        }}
      >
        Browse Files
      </button>
    </div>
  );
};

const EditProfile = ({ onBack }) => {
  const navigate = useNavigate();

  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const countryOptions = countries.map((c) => ({
    value: c.cca2,
    label: c.name.common,
  }));
  const uaeOption = countryOptions.find(
    (c) => c.label === "United Arab Emirates"
  );

  const [isLoader, setIsLoader] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: uaeOption || null,
    location: "",
    about: "",
    companyName: "",
    year_experience: "",
    education: "",
    subCategory: [],
    picture: null,
    photos: null,
    videos: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const skillsRes = await ApiService.request({
          method: "GET",
          url: "/getSkills",
        });
        const skills = skillsRes.data?.data?.skills || [];
        setSubCategoryOptions(
          skills.map((s) => ({ value: s._id, label: s.title }))
        );

        const profileRes = await ApiService.request({
          method: "GET",
          url: "/getProfile",
        });
        const profile = profileRes.data?.data?.talent;

        if (profile) {
          console.log("Profile data loaded:", profile); // Debug log
          setFormData((prev) => ({
            ...prev,
            name: `${profile.first_name || ""} ${profile.last_name || ""}`,
            email: profile.email || "",
            phone: profile.phone || "",
            about: profile.about || "",
            location: profile.address || "",
            companyName: profile.companyName || "",
            year_experience: profile.year_experience || "",
            education: profile.education || "",
            picture: profile.picture || null,
            photos: profile.photos || null,
            videos: profile.videos || null,
            subCategory: profile.subCategory || [],
          }));
        }
      } catch (error) {
        console.error("Error loading profile:", error);
        toast.error(
          "Failed to load profile: " + (error.message || "Unknown error")
        );
      }
    })();
  }, []);

  const handleImageUpload = (file) => {
    console.log("Profile picture uploaded:", file); // Debug log
    setFormData((prev) => ({ ...prev, picture: file }));
    if (errors.picture) setErrors((prev) => ({ ...prev, picture: null }));
  };

  const handlePhotoUpload = (file) => {
    console.log("Photo uploaded:", file); // Debug log
    setFormData((prev) => ({ ...prev, photos: file }));
    if (errors.photos) setErrors((prev) => ({ ...prev, photos: null }));
  };

  const handleVideoUpload = (file) => {
    console.log("Video uploaded:", file); // Debug log
    setFormData((prev) => ({ ...prev, videos: file }));
    if (errors.videos) setErrors((prev) => ({ ...prev, videos: null }));
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleCountryChange = (selectedOption) =>
    setFormData((prev) => ({ ...prev, country: selectedOption }));

  const handleSelectChange = (name, selectedOptions) => {
    setFormData((prev) => ({
      ...prev,
      subCategory: selectedOptions.map((o) => o.value),
    }));
    if (errors.subCategory)
      setErrors((prev) => ({ ...prev, subCategory: null }));
  };

  const handleContinue = async () => {
    console.log("Save Profile button clicked, formData:", formData); // Debug log
    const required = [
      "name",
      "email",
      "phone",
      "about",
      "location",
      "companyName",
      "year_experience",
      "education",
    ];
    const errs = {};
    required.forEach((k) => {
      if (!formData[k]) errs[k] = "Required";
    });

    if (!formData.picture) errs.picture = "Picture is required";

    if (Object.keys(errs).length) {
      console.log("Validation errors:", errs); // Debug log
      setErrors(errs);
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setIsLoader(true);
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "country") {
          payload.append(key, value?.value || "");
        } else if (
          (key === "picture" || key === "photos" || key === "videos") &&
          value instanceof File
        ) {
          console.log(`Appending file to payload: ${key}`, value); // Debug log
          payload.append(key, value);
        } else if (key === "subCategory") {
          value.forEach((item, index) =>
            payload.append(`${key}[${index}]`, item)
          );
        } else {
          payload.append(key, value || "");
        }
      });

      console.log("Sending payload to updateProfile"); // Debug log
      const res = await ApiService.request({
        method: "POST",
        url: "/updateProfile",
        data: payload,
        headers: { "Content-Type": "multipart/form-data" },
        // timeout: 10000,
      });
      const data = res.data;

      if (data.status) {
        // toast.success(data.message);
        if (onBack) onBack();
        // navigate("/profile");
      } else {
        console.error("API error:", data.message);
        toast.error(data.message || "Server returned an error.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(
        "Failed to update profile: " + (error.message || "Unknown error")
      );
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <div
      className="container p-5 bg-white rounded-4 shadow mt-4"
      style={{ maxWidth: "900px" }}
    >
      <div className="d-flex justify-content-between align-items-center525">
        <h4 className="mb-4 inter-font" style={{ fontSize: "18px" }}>
          Edit Personal Info
        </h4>
        <Button
          onClick={() => {
            console.log("Button clicked"); // Debug log
            handleContinue();
          }}
          disabled={isLoader}
          className="d-flex align-items-center border-0 mb-3 inter-font"
          style={{
            background: "#522A30",
            borderRadius: "15px",
            height: "44px",
            width: "107px",
            fontSize: "11px",
          }}
        >
          <BsCalendar2Check className="me-2" />
          {isLoader ? "Saving..." : "Save Profile"}
        </Button>
      </div>

      <Row className="mb-4">
        <Col md={2} className="text-center position-relative">
          <div
            className="rounded-circle position-relative"
            style={{
              width: "90px",
              height: "90px",
              overflow: "hidden",
              margin: "0 auto",
              backgroundColor: "#000",
            }}
          >
            <ImageUpload onUpload={handleImageUpload} />
            {errors.picture && (
              <div className="text-danger small">{errors.picture}</div>
            )}
          </div>
        </Col>

        <Col md={5} className="inp-login">
          <label>Name</label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleTextChange}
            isInvalid={!!errors.name}
            className="mb-3 rounded-2 inter-font custom-input px-3"
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
          <label>Nationality</label>
          <Select
            options={countryOptions}
            value={formData.country}
            onChange={handleCountryChange}
          />
        </Col>

        <Col md={5} className="inp-login">
          <label>Email</label>
          <Form.Control
            type="email"
            placeholder="example@email.com"
            name="email"
            value={formData.email}
            onChange={handleTextChange}
            isInvalid={!!errors.email}
            className="mb-3 rounded-2 inter-font custom-input px-3"
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
          <label>Phone Number</label>
          <InputGroup className="inp-login" style={{ width: "94%" }}>
            <InputGroup.Text
              className="inter-font bg-transparent"
              style={{ fontSize: "16px" }}
            >
              <img
                src={flag}
                alt="flag"
                width="25"
                className="me-2 rounded-1"
              />
              <span className="custom-input inter-font"> +971 </span>
            </InputGroup.Text>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleTextChange}
              isInvalid={!!errors.phone}
              className="inter-font px-3"
              style={{
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </InputGroup>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={12} className="inp-login">
          <label style={{ fontSize: "16px" }}>Bio</label>
          <Form.Control
            as="textarea"
            rows={6}
            name="about"
            value={formData.about}
            onChange={handleTextChange}
            isInvalid={!!errors.about}
            className="rounded-2 inter-font custom-input"
          />
          <Form.Control.Feedback type="invalid">
            {errors.about}
          </Form.Control.Feedback>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <label>Experience</label>
          <Form.Control
            type="text"
            placeholder="Experience"
            name="year_experience"
            value={formData.year_experience}
            onChange={handleTextChange}
            isInvalid={!!errors.year_experience}
            className="mb-3 rounded-2 inter-font custom-input px-3"
          />
          <Form.Control.Feedback type="invalid">
            {errors.year_experience}
          </Form.Control.Feedback>
        </Col>

        <Col md={6} className="mt-3">
          <Form.Group>
            <Form.Label className="text-size">Skills</Form.Label>
            <MultiSelect
              className="inter-font"
              options={subCategoryOptions}
              value={subCategoryOptions.filter((option) =>
                formData.subCategory.includes(option.value)
              )}
              onChange={(selected) =>
                handleSelectChange("subCategory", selected || [])
              }
              labelledBy="Select Skills"
              isMulti
            />
            {errors.subCategory && (
              <div className="text-danger small mt-1">{errors.subCategory}</div>
            )}
          </Form.Group>
        </Col>

        <Col md={6}>
          <label>Education</label>
          <Form.Control
            type="text"
            placeholder="Education"
            name="education"
            value={formData.education}
            onChange={handleTextChange}
            isInvalid={!!errors.education}
            className="mb-3 rounded-2 inter-font custom-input px-3"
          />
          <Form.Control.Feedback type="invalid">
            {errors.education}
          </Form.Control.Feedback>
        </Col>
      </Row>

      <h5 className="mb-3 inter-font">My Jobs</h5>
      <Row className="mb-5">
        <Col md={6}>
          <label>Address</label>
          <Form.Control
            name="location"
            value={formData.location}
            onChange={handleTextChange}
            isInvalid={!!errors.location}
            className="rounded-2 inter-font custom-input px-3"
          />
          <Form.Control.Feedback type="invalid">
            {errors.location}
          </Form.Control.Feedback>
        </Col>
        <Col md={6}>
          <label>Company Name</label>
          <Form.Control
            name="companyName"
            value={formData.companyName}
            onChange={handleTextChange}
            isInvalid={!!errors.companyName}
            className="rounded-2 inter-font custom-input px-3"
          />
          <Form.Control.Feedback type="invalid">
            {errors.companyName}
          </Form.Control.Feedback>
        </Col>
      </Row>

      {/* <Row>
        <Col md={6}>
          <h4 className="inter-font" style={{ fontSize: "18px" }}>
            Add Photo
          </h4>
          <ImageDropzone1 onUpload={handlePhotoUpload} />
          {errors.photo && (
            <div className="text-danger small mt-1">{errors.photo}</div>
          )}
        </Col>
        <Col md={6}>
          <h4 className="inter-font" style={{ fontSize: "18px" }}>
            Upload Video
          </h4>
          <ImageDropzone2 onUpload={handleVideoUpload} />
          {errors.video && (
            <div className="text-danger small mt-1">{errors.video}</div>
          )}
        </Col>
      </Row> */}

      <Row>
        <Col md={6}>
          <h4 className="inter-font" style={{ fontSize: "18px" }}>
            Add Photo
          </h4>
          <ImageDropzone1 onUpload={handlePhotoUpload} />
          {errors.photos && (
            <div className="text-danger small mt-1">{errors.photos}</div>
          )}
        </Col>
        <Col md={6}>
          <h4 className="inter-font" style={{ fontSize: "18px" }}>
            Upload Video
          </h4>
          <ImageDropzone2 onUpload={handleVideoUpload} />
          {errors.videos && (
            <div className="text-danger small mt-1">{errors.videos}</div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default EditProfile;
