import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import DashboardFooter from "../CompanyUserDahboard/DashboardFooter";
import { CiSearch } from "react-icons/ci";
import Select from "react-select";
import { MdArrowOutward } from "react-icons/md";
import UAE from "../../assets/images/UAE flag.jpeg";
import { FaLocationDot } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";
import { Container, Row, Col, Button } from "react-bootstrap";
import dashboardTalent2 from "../../assets/images/dashboardTalent2.png";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";
import { MultiSelect } from "react-multi-select-component";
import { useLocation, useNavigate } from "react-router-dom";
import HireTheTalent from "./HireTheTalent";

// --- STATIC TALENTS FALLBACK ---
const STATIC_TALENTS = [
  {
    _id: "1",
    first_name: "Abdullah",
    last_name: "Jamal",
    country: "Abu Dhabi, UAE",
    education: "Camera man, Photographer",
    year_experience: "7",
    about:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque",
  },
  {
    _id: "2",
    first_name: "Shamim",
    last_name: "Bin Saad",
    country: "Sharjah UAE",
    education: "Actor, Producer",
    year_experience: "7",
    about:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque",
  },
  {
    _id: "3",
    first_name: "Mansoor",
    last_name: "Al Masoori",
    country: "Ajman UAE",
    education: "Writer, Musician",
    year_experience: "7",
    about:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque",
  },
  {
    _id: "4",
    first_name: "Ahmed",
    last_name: "Bin Tamimi",
    country: "Abu Dhabi, UAE",
    education: "Casting Actor, Musician",
    year_experience: "7",
    about:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque",
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
  const [formData, setFormData] = useState({
    category: null,
    subCategory: [],
  });
  const [selectedTalentIds, setSelectedTalentIds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasFetchedProfile.current) return;
    hasFetchedProfile.current = true;
    fetchTalents(1); // Fetch first page initially
  }, []);

  const location = useLocation();

  const getQueryParam = (key) => {
    return new URLSearchParams(location.search).get(key);
  };

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const currentTab = getQueryParam("subTab");
    if (currentTab && currentTab !== activeTab) {
      setActiveTab(currentTab);
    }

    console.log("curentTab --- ", currentTab);
  }, [location.search]);

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

  const fetchTalents = async (page) => {
    try {
      const response = await ApiService.request({
        method: "GET",
        url: `/company/getTalents?page=${page}`,
      });

      const data = response.data;
      if (
        data.status &&
        data.data &&
        data.data.talents &&
        data.data.talents.length > 0
      ) {
        setTalents(data.data.talents);
        setPagination(data.data.pagination);
      } else {
        // Fallback to static data if API returns no data
        setTalents(STATIC_TALENTS);
        setPagination({ current_page: 1, total_pages: 1 });
      }
    } catch (error) {
      // Fallback to static data if API fails
      setTalents(STATIC_TALENTS);
      setPagination({ current_page: 1, total_pages: 1 });
      console.error("Error fetching talents, using static fallback:", error);
    }
  };

  const handlePageChange = (newPage) => {
    if (
      newPage >= 1 &&
      newPage <= pagination.total_pages &&
      newPage !== pagination.current_page
    ) {
      fetchTalents(newPage);
    }
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

  const handleSelectChange = (name, selectedOptions) => {
    setFormData((prev) => {
      const next =
        name === "category"
          ? { ...prev, category: selectedOptions.value, subCategory: [] }
          : { ...prev, subCategory: selectedOptions.map((o) => o.value) };
      return next;
    });
  };

  const toggleTalent = (id) => {
    setSelectedTalentIds((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id]
    );
  };
  const selectedTalents = talents.filter((t) =>
    selectedTalentIds.includes(t._id)
  );

  return (
    <div className="main-bg py-5" style={{ height: "100vh" }}>
      {/* Navbar */}
      <Navbar />

      {activeTab === "hire" ? (
        <HireTheTalent />
      ) : (
        <Container className="my-5 px-5">
          {/* Search Section */}
          <div className="d-flex position-relative mb-4 align-items-center">
            <div style={{ width: "1065px" }}>
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
          </div>

          {/* Filter Section */}
          <div className="container mb-4 pe-0">
            <div className="d-flex align-items-center flex-wrap">
              <div className="d-flex" style={{ width: "850px" }}>
                <div style={{ width: "170px", marginRight: "8px" }}>
                  <Select options={yearOptions} />
                </div>
                <div style={{ width: "170px", marginRight: "8px" }}>
                  <Select
                    options={categoryOptions}
                    value={
                      categoryOptions.find(
                        (o) => o.value === formData.category
                      ) || null
                    }
                    onChange={(opt) => handleSelectChange("category", opt)}
                    placeholder="Select"
                  />
                </div>
                <div style={{ width: "170px", marginRight: "8px" }}>
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
                </div>
                <div style={{ width: "170px", marginRight: "8px" }}>
                  <Select options={ageOptions} />
                </div>
                <div style={{ width: "170px", marginRight: "10px" }}>
                  <Select options={availabilityOptions} />
                </div>
              </div>

              <div className="d-flex justify-content-end align-items-center position-relative">
                <button
                  className="btn inter-font d-flex align-items-center justify-content-center"
                  style={{
                    background: "rgba(205, 73, 109, 1)",
                    color: "white",
                    width: "88px",
                    height: "44px",
                    marginLeft: "0px",
                  }}
                >
                  <CiSearch className=" text-white" size={18} />
                  Filter
                </button>
              </div>
            </div>
            <Row className="mt-3">
              <Col className="px-0 d-flex justify-content-end align-items-center gap-2">
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
          </div>

          {/* Talent Listings */}
          <div style={{ overflowY: "auto" }}>
            {talents.map((talent) => (
              <div
                key={talent?._id}
                className="bg-white rounded-4 p-3 mb-3 position-relative"
                style={{ width: "100%", height: "auto" }}
              >
                <div className="d-flex">
                  <div className="d-flex">
                    <img
                      src={dashboardTalent2}
                      // src={talent?.picture}
                      alt="Profile"
                      style={{
                        width: "88px",
                        height: "88px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="ms-3 mt-2">
                      <h5 className="inter-font">
                        {talent?.first_name} {talent?.last_name}
                      </h5>
                      <p
                        className="inter-font"
                        style={{ color: "rgba(147, 147, 147, 1)" }}
                      >
                        <FaLocationDot className="text-dark" />{" "}
                        {talent?.country}
                      </p>
                      <div className="d-flex">
                        <div
                          className="d-flex justify-content-center align-items-center rounded-1"
                          style={{
                            background: "rgba(242, 242, 242, 1)",
                            width: "69px",
                            height: "23px",
                            fontSize: "9px",
                          }}
                        >
                          {talent?.education || "No Title"}
                        </div>
                        <div
                          className="d-flex justify-content-center align-items-center rounded-1 mx-2"
                          style={{
                            background: "rgba(242, 242, 242, 1)",
                            width: "49px",
                            height: "23px",
                            fontSize: "9px",
                          }}
                        >
                          {talent?.year_experience || "0"} Y Ex
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="inter-font" style={{ width: "85%" }}>
                      {talent?.about?.slice(0, 90) || "No description"}...
                      <span className="text-danger inter-font">
                        Read More...
                      </span>
                    </p>
                    <div className="d-flex justify-content-end align-items-center">
                      <button
                        className="btn me-2 text-white inter-font"
                        style={{ background: "rgba(82, 42, 48, 1)" }}
                      >
                        <LiaDownloadSolid /> Download
                      </button>
                      <button
                        className="btn text-white inter-font"
                        style={{ background: "rgba(82, 42, 48, 1)" }}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
                <div className="tick-dashboard">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    style={{
                      width: "17px",
                      height: "17px",
                      borderRadius: "50px",
                    }}
                    checked={selectedTalentIds.includes(talent._id)}
                    onChange={() => toggleTalent(talent._id)}
                  />
                </div>
              </div>
            ))}

            {/* Pagination Controls */}
            <div className="d-flex justify-content-center align-items-center my-4">
              <button
                className="btn btn-sm btn-outline-dark me-2"
                disabled={pagination.current_page === 1}
                onClick={() => handlePageChange(pagination.current_page - 1)}
              >
                Previous
              </button>
              <span className="mx-2">
                Page {pagination.current_page} of {pagination.total_pages}
              </span>
              <button
                className="btn btn-sm btn-outline-dark ms-2"
                disabled={pagination.current_page === pagination.total_pages}
                onClick={() => handlePageChange(pagination.current_page + 1)}
              >
                Next
              </button>
            </div>
          </div>
          <br />
          <br />
        </Container>
      )}

      {/* Footer */}
      <div className="mt-5">
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Talents;
