import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import flag from "../../assets/images/UAE.png";
import UploadDocuments from "./UploadDocuments";
import verifyOTP from "./VerifyOTP";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";

import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";
import { useNavigate } from "react-router-dom";

const CompanyInfoForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    about: "",
    category: null,
    subCategory: [],
    email: "",
    password: "",
    location: "",
    phone: "",
    secondary_phone: "",
    website: "",
    license_no: "",
    reg_year: "",
    check_validation: "",
  });

  // const persist = useCallback(
  //   (next) => localStorage.setItem("companyInfoForm", JSON.stringify(next)),
  //   []
  // );

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await ApiService.request({
          method: "GET",
          url: "/company/getCategories",
        });

        console.log("API Response:", res.data);

        const categoriesArray = res.data.data.categories;
        if (Array.isArray(categoriesArray)) {
          setCategoryOptions(
            categoriesArray.map((cat) => ({
              value: cat._id,
              label: cat.title,
            }))
          );
        } else {
          toast.error("Categories not in expected format");
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        toast.error("Failed to load categories");
      }
    })();
  }, []);

  useEffect(() => {
    if (!formData.category) {
      setSubCategoryOptions([]);
      return;
    }
    (async () => {
      try {
        const res = await ApiService.request({
          method: "GET",
          url: `/company/getSubCategories?category_id=${formData.category}`,
        });
        const subs = res.data.data.categories;
        setSubCategoryOptions(
          Array.isArray(subs)
            ? subs.map((s) => ({ value: s._id, label: s.title }))
            : []
        );
      } catch (e) {
        console.log(e.message);
        toast.error("Failed to load sub‑categories");
      }
    })();
  }, [formData.category]);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      // persist(next);
      return next;
    });
    if (errors[name]) {
      setErrors((p) => ({ ...p, [name]: null }));
    }
  };

  const handleSelectChange = (name, selectedOptions) => {
    setFormData((prev) => {
      const next =
        name === "category"
          ? { ...prev, category: selectedOptions.value, subCategory: [] }
          : { ...prev, subCategory: selectedOptions.map((o) => o.value) };
      // persist(next);
      return next;
    });
  };

  const handleContinue = async () => {
    const required = [
      "about",
      "category",
      "subCategory",
      "email",
      "password",
      "location",
      "phone",
      "secondary_phone",
      "website",
      "license_no",
      "reg_year",
    ];
    const errs = {};
    required.forEach((k) => {
      if (!formData[k]) errs[k] = "Required";
    });
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    try {
      setIsLoader(true);
      const payload = {
        company_name: localStorage.getItem("companyName") || "",
        about: formData.about,
        category_id: formData.category,
        sub_category_ids: formData.subCategory,
        email: formData.email,
        password: formData.password,
        location: formData.location,
        phone: "971" + formData.phone,
        secondary_phone: "971" + formData.secondary_phone,
        website: formData.website,
        license_no: formData.license_no,
        reg_year: formData.reg_year,
        check_validation: true,
      };

      const res = await ApiService.request({
        method: "POST",
        url: "/company/register",
        data: payload,
      });

      const data = res.data;
      console.log(data);

      if (data.status) {
        const company_id = data.data?.company_id || data.data?._id;
        if (company_id) {
          localStorage.setItem("company_id", company_id);
        }
        // toast.success(res.data.message || "Saved!");
        localStorage.setItem("companyInfo", JSON.stringify(payload));
        localStorage.setItem("phone", payload.phone);
        localStorage.setItem("secondary_phone", payload.secondary_phone);
        navigate("/UploadDocuments");
      } else {
        toast.error(res.data.message || "Server returned an error.");
      }
    } catch {
      toast.error("Registration failed, please try again.");
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <div className="sofia-font main-bg min-vh-100 d-flex flex-column align-items-center pt-4">
      <Container className="position-absolute top-0 mt-3">
        <Row className="align-items-center">
          <Col
            xs={12}
            md={1}
            className="text-center text-md-start mb-2 mb-md-0"
          >
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
          </Col>
          <Col xs={12} md={11} className="text-center mt-4">
            <div className="d-flex flex-md-row align-items-center justify-content-center gap-2">
              <div className="d-flex align-items-center justify-content-center">
                <Step>1</Step>
                <span className="sofia-font fs-count ms-2">
                  Select your company
                </span>
              </div>
              <Arrow />
              <div className="d-flex align-items-center justify-content-center">
                <Step active>2</Step>
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

      <div
        className="bg-white p-4 shadow rounded-4 company-registration-form"
        style={{ width: "90%", maxWidth: "677px", marginTop: "100px" }}
      >
        <h4 className="fw-bold inter-font">
          Welcome! Let’s configure your profile
        </h4>
        <p className="fw-lighter text-muted inter-font">
          Define how your company will be seen on Sortlist.
        </p>

        <h4 className="fw-bolder mt-5 inter-font">About</h4>
        <p className="text-size sofia-font">Describe your company</p>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Describe your company..."
            value={formData.about}
            name="about"
            onChange={handleTextChange}
            isInvalid={!!errors.about}
            className="inp-bg text-size p-1 rounded-3 inp-login sofia-font"
          />
          <Form.Control.Feedback type="invalid">
            {errors.about}
          </Form.Control.Feedback>
        </Form.Group>

        <Row>
          <Col md={6} className="mt-3">
            <Form.Group>
              <Form.Label className="text-size">Business Category</Form.Label>
              <Select
                options={categoryOptions}
                value={
                  categoryOptions.find((o) => o.value === formData.category) ||
                  null
                }
                onChange={(opt) => handleSelectChange("category", opt)}
                placeholder="Select category"
              />
              {errors.category && (
                <div className="text-danger small mt-1">{errors.category}</div>
              )}
            </Form.Group>
          </Col>

          <Col md={6} className="mt-3">
            <Form.Group>
              <Form.Label className="text-size">Select Sub Category</Form.Label>
              {/* <pre>{JSON.stringify(formData.subCategory)}</pre> */}
              <MultiSelect
                className="inter-font"
                options={subCategoryOptions}
                value={subCategoryOptions.filter((option) =>
                  formData.subCategory.includes(option.value)
                )}
                onChange={(selected) =>
                  handleSelectChange("subCategory", selected || [])
                }
                labelledBy="Select Sub Category"
                isMulti
              />

              {errors.subCategory && (
                <div className="text-danger small mt-1">
                  {errors.subCategory}
                </div>
              )}
            </Form.Group>
          </Col>
        </Row>

        <h4 className="fw-bolder mt-4 inter-font">Signup Information</h4>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="example123@gmail.com"
                value={formData.email}
                name="email"
                onChange={handleTextChange}
                isInvalid={!!errors.email}
                className="inp-bg sofia-font inp-login"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="eg.123456"
                value={formData.password}
                name="password"
                onChange={handleTextChange}
                isInvalid={!!errors.password}
                className="inp-bg sofia-font inp-login"
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Location Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location Address"
            name="location"
            value={formData.location}
            onChange={handleTextChange}
            isInvalid={!!errors.location}
            className="inp-bg sofia-font inp-login"
          />
          <Form.Control.Feedback type="invalid">
            {errors.location}
          </Form.Control.Feedback>
        </Form.Group>

        <h6 className="mt-4 inter-font">Company phone number</h6>
        <Row>
          <Col md={6}>
            <InputGroupWithFlag
              placeholder="5-MOBILE NUMBER"
              name="phone"
              value={formData.phone}
              onChange={handleTextChange}
              isInvalid={!!errors.phone}
            />
          </Col>
          <Col md={6}>
            <InputGroupWithFlag
              placeholder="02 COMPANY PHONE"
              name="secondary_phone"
              value={formData.secondary_phone}
              onChange={handleTextChange}
              isInvalid={!!errors.secondary_phone}
            />
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Company website</Form.Label>
          <Form.Control
            type="text"
            placeholder="www.example.com"
            name="website"
            value={formData.website}
            onChange={handleTextChange}
            isInvalid={!!errors.website}
            className="inp-bg sofia-font inp-login"
          />
          <Form.Control.Feedback type="invalid">
            {errors.website}
          </Form.Control.Feedback>
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Trade License No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="TL12345"
                name="license_no"
                value={formData.license_no}
                onChange={handleTextChange}
                isInvalid={!!errors.license_no}
                className="inp-bg sofia-font inp-login"
              />
              <Form.Control.Feedback type="invalid">
                {errors.license_no}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Register Since</Form.Label>
              <Form.Control
                type="text"
                placeholder="Example 2025"
                name="reg_year"
                value={formData.reg_year}
                onChange={handleTextChange}
                isInvalid={!!errors.reg_year}
                className="inp-bg sofia-font inp-login"
              />
              <Form.Control.Feedback type="invalid">
                {errors.reg_year}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button
            className="px-5 btn btn-base border-0 inter-font"
            onClick={handleContinue}
            disabled={isLoader}
          >
            {isLoader ? "Saving..." : "Continue"}
          </Button>
        </div>
      </div>
    </div>
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

const InputGroupWithFlag = ({
  placeholder,
  name,
  value,
  onChange,
  isInvalid,
}) => (
  <div
    className={`d-flex align-items-center mb-3 border rounded px-2 ${
      isInvalid ? "border-danger" : ""
    }`}
  >
    <img
      src={flag}
      alt="UAE"
      style={{ width: "25px", height: "18px", marginRight: "6px" }}
    />
    <span className="text-muted pe-2 inter-font">(+971)</span>
    <Form.Control
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      isInvalid={isInvalid}
      className="border-0 ps-1 sofia-font"
      style={{ boxShadow: "none" }}
    />
  </div>
);

export default CompanyInfoForm;
