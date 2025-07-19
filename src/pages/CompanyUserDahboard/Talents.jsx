import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Select from "react-select";
import { MdArrowOutward } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";
import { Container, Row, Col, Button } from "react-bootstrap";
import dashboardTalent2 from "../../assets/images/dashboardTalent2.png";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";
import { MultiSelect } from "react-multi-select-component";
import { useLocation, useNavigate } from "react-router-dom";
import HireTheTalent from "./HireTheTalent";

const STATIC_TALENTS = [
  {
    _id: "1",
    first_name: "Abdullah",
    last_name: "Jamal",
    country: "Abu Dhabi, UAE",
    education: "Camera man, Photographer",
    year_experience: "7",
    about:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    _id: "2",
    first_name: "Shamim",
    last_name: "Bin Saad",
    country: "Sharjah UAE",
    education: "Actor, Producer",
    year_experience: "7",
    about:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    _id: "3",
    first_name: "Mansoor",
    last_name: "Al Masoori",
    country: "Ajman UAE",
    education: "Writer, Musician",
    year_experience: "7",
    about:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    _id: "4",
    first_name: "Ahmed",
    last_name: "Bin Tamimi",
    country: "Abu Dhabi, UAE",
    education: "Casting Actor, Musician",
    year_experience: "7",
    about:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

const Talents = () => {
  const [talents, setTalents] = useState([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
    total_pages: 1,
  });
  const hasFetchedProfile = useRef(false);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [formData, setFormData] = useState({ category: null, subCategory: [] });
  const [selectedTalentIds, setSelectedTalentIds] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const getQueryParam = (key) => new URLSearchParams(location.search).get(key);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (hasFetchedProfile.current) return;
    hasFetchedProfile.current = true;
    fetchTalents(1);
  }, []);

  useEffect(() => {
    const currentTab = getQueryParam("subTab");
    if (currentTab && currentTab !== activeTab) {
      setActiveTab(currentTab);
    }
  }, [location.search]);

  useEffect(() => {
    (async () => {
      try {
        const res = await ApiService.request({
          method: "GET",
          url: "/company/getCategories",
        });
        const categoriesArray = res.data.data.categories;
        setCategoryOptions(
          categoriesArray.map((cat) => ({ value: cat._id, label: cat.title }))
        );
      } catch (err) {
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
          subs.map((s) => ({ value: s._id, label: s.title }))
        );
      } catch (e) {
        toast.error("Failed to load sub‑categories");
      }
    })();
  }, [formData.category]);

  const fetchTalents = async (page) => {
    try {
      const response = await ApiService.request({
        method: "GET",
        url: `/company/getTalents?page=${page}`,
      });
      const data = response.data;
      if (data.status && data.data.talents.length > 0) {
        setTalents(data.data.talents);
        setPagination(data.data.pagination);
      } else {
        setTalents(STATIC_TALENTS);
        setPagination({ current_page: 1, total_pages: 1 });
      }
    } catch (error) {
      setTalents(STATIC_TALENTS);
      setPagination({ current_page: 1, total_pages: 1 });
    }
  };

  const handleSelectChange = (name, selectedOptions) => {
    setFormData((prev) =>
      name === "category"
        ? { ...prev, category: selectedOptions.value, subCategory: [] }
        : { ...prev, subCategory: selectedOptions.map((o) => o.value) }
    );
  };

  const toggleTalent = (id) => {
    setSelectedTalentIds((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id]
    );
  };

  const yearOptions = [
    { value: "", label: "Year of Exp" },
    { value: "1-3", label: "1-3 years" },
    { value: "4-6", label: "4-6 years" },
    { value: "7+", label: "7+ years" },
  ];

  const ageOptions = [
    { value: "", label: "Age" },
    { value: "18-25", label: "18-25" },
    { value: "26-35", label: "26-35" },
    { value: "36+", label: "36+" },
  ];

  const availabilityOptions = [
    { value: "", label: "Availability" },
    { value: "available", label: "Available" },
    { value: "not_available", label: "Not Available" },
  ];

  const handlePageChange = (newPage) => {
    if (
      newPage >= 1 &&
      newPage <= pagination.total_pages &&
      newPage !== pagination.current_page
    ) {
      fetchTalents(newPage);
    }
  };

  return (
    <div className="py-4">
      {activeTab === "hire" ? (
        <HireTheTalent />
      ) : (
        <Container fluid className="px-4">
          {/* Search & Filter */}
          <Row className="mb-4 align-items-center gx-3 flex-wrap">
            <Col xs={12} md={8}>
              <div className="position-relative" style={{}}>
                <input
                  type="text"
                  placeholder="Search by Keywords"
                  className="w-100 p-2 rounded-3 ps-5 inter-font"
                  style={{
                    paddingLeft: "2.5rem",
                    border: "none",
                    height: "44px",
                  }}
                />
                <CiSearch
                  className="position-absolute"
                  style={{
                    left: "25px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}
                  size={20}
                />
              </div>
            </Col>
            <Col xs={12} md={4} className="mt-3 mt-md-0 text-md-end">
              <div
                className="d-flex justify-content-end align-items-center"
                style={{ marginLeft: "12px" }}
              >
                <Button
                  className="btn btn-base border-0 inter-font dashboard-btn"
                  style={{
                    outline: "none",
                    width: "88px",
                    height: "44px",
                    padding: "12px 18px",
                  }}
                >
                  Search
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="mb-4 gx-3 flex-wrap">
            <Col xs={6} md={2}>
              <Select options={yearOptions} placeholder="Year Exp" />
            </Col>
            <Col xs={6} md={2}>
              <Select
                options={categoryOptions}
                value={
                  categoryOptions.find((o) => o.value === formData.category) ||
                  null
                }
                onChange={(opt) => handleSelectChange("category", opt)}
                placeholder="Category"
              />
            </Col>
            <Col xs={12} md={3} className="mt-3 mt-md-0">
              <MultiSelect
                options={subCategoryOptions}
                value={subCategoryOptions.filter((o) =>
                  formData.subCategory.includes(o.value)
                )}
                onChange={(selected) =>
                  handleSelectChange("subCategory", selected || [])
                }
                labelledBy="Sub Category"
              />
            </Col>
            <Col xs={6} md={2} className="mt-3 mt-md-0">
              <Select options={ageOptions} placeholder="Age" />
            </Col>
            <Col xs={6} md={2} className="mt-3 mt-md-0">
              <Select
                options={availabilityOptions}
                placeholder="Availability"
              />
            </Col>
            <Col xs={12} md={1} className="mt-3 mt-md-0 text-md-end ">
              <div className="d-flex justify-content-end align-items-center position-relative">
                <Button
                  className="btn inter-font px-2 d-flex align-items-center justify-content-center"
                  style={{
                    background: "#cd496d",
                    color: "white",
                    // width: "88px",
                    // height: "40px",
                    marginLeft: "10px",
                  }}
                >
                  <CiSearch size={18} /> Filter
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col className="px-0 d-flex justify-content-end align-items-center gap-2 mb-4">
              <Button
                className="bg-transparent border inter-font clear-btn"
                style={{
                  color: "rgba(82, 42, 48, 1)",
                  width: "88px",
                  height: "44px",
                }}
              >
                Clear
              </Button>
              <Button
                className="btn border-0 inter-font d-flex align-items-center justify-content-center gap-1"
                style={{
                  background: "rgba(82, 42, 48, 1)",
                  color: "white",
                  width: "88px",
                  height: "44px",
                }}
                disabled={selectedTalentIds.length === 0}
                onClick={() =>
                  // navigate("/company/talent/hire", { state: { selectedTalents } })
                  navigate("/company-dashboard?tab=talents&subTab=hire")
                }
              >
                Hire
                <MdArrowOutward fontSize={20} />
              </Button>
            </Col>
          </Row>

          <Row className="gx-3">
            {talents.map((talent) => (
              <Col xs={12} key={talent._id} className="mb-3">
                <div className="p-3 bg-white rounded-4 d-flex flex-column flex-md-row justify-content-between">
                  <div className="d-flex">
                    <img
                      src={dashboardTalent2}
                      alt="Talent"
                      style={{
                        width: "88px",
                        height: "88px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="ms-3">
                      <h5>
                        {talent.first_name} {talent.last_name}
                      </h5>
                      <p style={{ color: "#939393" }}>
                        <FaLocationDot /> {talent.country}
                      </p>
                      <div className="d-flex gap-2">
                        <span className="bg-light px-2 py-1 rounded">
                          {talent.education}
                        </span>
                        <span className="bg-light px-2 py-1 rounded">
                          {talent.year_experience} Y Ex
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 mt-md-0">
                    <p style={{ maxWidth: "400px" }}>
                      {talent?.about?.slice(0, 90)}...
                      <span className="text-danger">Read More</span>
                    </p>
                    <div className="d-flex gap-2 justify-content-md-end">
                      <Button
                        size="sm"
                        style={{ background: "#522a30", color: "#fff" }}
                      >
                        <LiaDownloadSolid /> Download
                      </Button>
                      <Button
                        size="sm"
                        style={{ background: "#522a30", color: "#fff" }}
                      >
                        View Profile
                      </Button>
                      <input
                        type="checkbox"
                        checked={selectedTalentIds.includes(talent._id)}
                        onChange={() => toggleTalent(talent._id)}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="mt-4">
            <Col className="d-flex justify-content-center gap-3">
              <Button
                variant="outline-dark"
                size="sm"
                disabled={pagination.current_page === 1}
                onClick={() => handlePageChange(pagination.current_page - 1)}
              >
                Previous
              </Button>
              <span>
                Page {pagination.current_page} of {pagination.total_pages}
              </span>
              <Button
                variant="outline-dark"
                size="sm"
                disabled={pagination.current_page === pagination.total_pages}
                onClick={() => handlePageChange(pagination.current_page + 1)}
              >
                Next
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Talents;
