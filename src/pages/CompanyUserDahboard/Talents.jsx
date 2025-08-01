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
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import validateImageUrl from "../../utils/validateImageUrl";

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
  const [selectedTalentData, setSelectedTalentData] = useState([]);
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
        // setTalents(STATIC_TALENTS);
        setPagination({ current_page: 1, total_pages: 1 });
      }
    } catch (error) {
      // setTalents(STATIC_TALENTS);
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

  const toggleTalent = (id, talent) => {
    setSelectedTalentIds((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id]
    );
    setSelectedTalentData((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, talent]
    );
  };

  console.log(" -selectedTalentIds--- ", selectedTalentIds, selectedTalentData);

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


  const [isImageValid, setIsImageValid] = useState(false)


  const checkImage = async (imageUrl) => {

    const result = await validateImageUrl(imageUrl);
    setIsImageValid(result);
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

  const { current_page, total_pages } = pagination;

  // Generate page numbers (for large datasets show 1,2,3,...,last)
  const getPages = () => {
    const pages = [];

    if (total_pages <= 5) {
      for (let i = 1; i <= total_pages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (current_page > 3) {
        pages.push("...");
      }
      for (
        let i = Math.max(2, current_page - 1);
        i <= Math.min(total_pages - 1, current_page + 1);
        i++
      ) {
        pages.push(i);
      }
      if (current_page < total_pages - 2) {
        pages.push("...");
      }
      pages.push(total_pages);
    }

    return pages;
  };

  const pages = getPages();


  return (
    <div className="inter-font py-4 inter-font">
      {activeTab === "hire" ? (
        <HireTheTalent selectedTalentData={selectedTalentData} />
      ) : (
        <Container fluid className="inter-font px-4">
          {/* Search & Filter */}
          <Row
            className="inter-font mb-4 align-items-center gx-3 d-flex flex-wrap"
            style={{ justifyContent: "center" }}
          >
            <Col xs={12} md={10}>
              <div className="inter-font position-relative" style={{ width: "100%" }}>
                <input
                  type="text"
                  placeholder="Search by Keywords"
                  className="inter-font w-100 p-2 rounded-3 ps-5 inter-font"
                  style={{
                    paddingLeft: "2.5rem",
                    border: "none",
                    height: "44px",
                  }}
                />
                <CiSearch
                  className="inter-font position-absolute"
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
            <Col xs={12} md={2} className="inter-font mt-3 mt-md-0 text-md-end">
              <div
                className="inter-font d-flex justify-content-end align-items-center"
                style={{ marginLeft: "12px" }}
              >
                <Button
                  className="inter-font btn btn-base border-0 inter-font dashboard-btn inter-font"
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

          <Row className="inter-font mb-4 gx-3 flex-wrap inter-font">
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
            <Col xs={12} md={2} className="inter-font mt-3 mt-md-0">
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
            <Col xs={6} md={2} className="inter-font mt-3 mt-md-0">
              <Select options={ageOptions} placeholder="Age" />
            </Col>
            <Col xs={6} md={2} className="inter-font mt-3 mt-md-0">
              <Select
                options={availabilityOptions}
                placeholder="Availability"
              />
            </Col>
            <Col xs={12} md={2} className="inter-font mt-3 mt-md-0 text-md-end ">
              {/* <div className="inter-font d-flex align-items-center position-relative"> */}
              <Button
                className="inter-font btn inter-font px-2 d-flex align-items-center justify-content-center"
                style={{
                  background: "#cd496d",
                  color: "white",
                  // width: "88px",
                  // height: "40px",
                  gap: "2px",
                }}
              >
                <CiSearch size={18} /> Filter
              </Button>
              {/* </div> */}
            </Col>
          </Row>

          <Row className="inter-font mt-3">
            <Col className="inter-font px-0 d-flex justify-content-end align-items-center gap-2 mb-4">
              <Button
                className="inter-font bg-transparent border inter-font clear-btn inter-font"
                style={{
                  color: "rgba(82, 42, 48, 1)",
                  width: "88px",
                  height: "44px",
                }}
              >
                Clear
              </Button>
              <Button
                className="inter-font btn border-0 inter-font d-flex align-items-center justify-content-center gap-1 inter-font"
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

          <Row className="inter-font gx-3 inter-font">
            {talents.map((talent) => {
              return (
                <Col xs={12} key={talent._id} className="inter-font mb-3">
                  <div
                    className="inter-font p-3 bg-white rounded-4 d-flex flex-column flex-md-row shadow-sm inter-font"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="inter-font d-flex flex-column flex-md-row gap-3 inter-font"
                      style={{ width: "100%" }}
                    >
                      <div>
                        {
                          checkImage(talent?.picture) || isImageValid ?
                            <img
                              src={talent?.picture}
                              alt="logo"
                              style={{
                                width: "88px",
                                height: "88px",
                                objectFit: "cover",
                                borderRadius: "50%",
                                border: "2px solid #ddd",
                              }}
                            />
                            :

                            <User className="inter-font rounded-circle " />
                        }


                      </div>
                      <div style={{ width: "100%" }}>
                        <div className="inter-font d-flex flex-column flex-md-row gap-5 justify-content-between align-items-start">
                          <div>
                            <h5 className="inter-font mb-1 fw-bold inter-font">
                              {talent.first_name} {talent.last_name}
                            </h5>
                            <p className="inter-font mb-2 text-muted d-flex align-items-center inter-font">
                              <FaLocationDot className="inter-font me-1" />
                              {talent.city}, {talent.country}
                              {/* <img
                          src={flagUAE}
                          alt="Flag"
                          style={{
                            width: "20px",
                            height: "15px",
                            marginLeft: "8px",
                          }}
                        /> */}
                            </p>
                          </div>
                          <div className="inter-font d-flex flex-column flex-md-row justify-content-between align-items-start inter-font">
                            <div style={{ width: "500px" }}>
                              {talent.about && (
                                <p style={{ maxWidth: "100%", fontSize: "14px" }} className="inter-font inter-font">
                                  {talent.about?.slice(0, 90)}...
                                  <span
                                    className="inter-font text-danger fw-semibold inter-font"
                                    style={{ cursor: "pointer" }}
                                  >
                                    {" "}
                                    Read More...
                                  </span>
                                </p>
                              )}
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                checked={selectedTalentIds.includes(talent._id)}
                                onChange={() => toggleTalent(talent._id, talent)}
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "50%",
                                  border: "2px solid #ccc",
                                  appearance: "none",
                                  WebkitAppearance: "none",
                                  MozAppearance: "none",
                                  outline: "none",
                                  cursor: "pointer",
                                  backgroundColor: selectedTalentIds.includes(
                                    talent._id
                                  )
                                    ? "#6d5e2b"
                                    : "#fff",
                                  backgroundImage: selectedTalentIds.includes(
                                    talent._id
                                  )
                                    ? `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='white'><path d='M20.285 6.709l-11.401 11.401-5.285-5.287 1.414-1.414 3.871 3.873 9.987-9.989z'/></svg>")`
                                    : "none",
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "center",
                                  backgroundSize: "12px 12px",
                                  transition: "0.2s",
                                }}
                              // style={{
                              //   // position: "absolute",
                              //   // top: "15px",
                              //   // right: "15px",
                              //   width: "20px",
                              //   height: "20px",
                              //   borderRadius: "50%",
                              //   border: "2px solid #ccc",
                              //   appearance: "none",
                              //   WebkitAppearance: "none",
                              //   MozAppearance: "none",
                              //   outline: "none",
                              //   cursor: "pointer",
                              //   backgroundColor: selectedTalentIds.includes(
                              //     talent._id
                              //   )
                              //     ? "#6d5e2b"
                              //     : "#fff", // FILL WHEN CHECKED
                              //   transition: "0.2s",
                              // }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="inter-font d-flex flex-column flex-md-row justify-content-between align-items-start">
                          <div className="inter-font d-flex" style={{}}>
                            <div className="inter-font d-flex gap-2 flex-wrap inter-font">
                              {talent.skills?.map((skill, index) => (
                                <span
                                  key={index}
                                  className="inter-font bg-light px-2 py-1 rounded small text-muted border inter-font"
                                >
                                  {skill}
                                </span>
                              ))}
                              <span className="inter-font bg-light px-2 py-1 rounded small text-muted border inter-font">
                                {"talent.year_experience"} Y Ex
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="inter-font d-flex gap-2 justify-content-md-end flex-wrap inter-font">
                              <Button
                                size="sm"
                                style={{
                                  background: "#522a30",
                                  color: "#fff",
                                  borderRadius: "5px",
                                }}
                                className="inter-font inter-font"
                              >
                                <LiaDownloadSolid /> Download
                              </Button>
                              <Button
                                size="sm"
                                style={{
                                  background: "#522a30",
                                  color: "#fff",
                                  borderRadius: "5px",
                                }}
                                className="inter-font inter-font"
                              >
                                View Profile
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
          {/* // <Col xs={12} key={talent._id} className="inter-font mb-3">
            //   <div className="inter-font p-3 bg-white rounded-4 d-flex flex-column flex-md-row justify-content-between align-items-start position-relative shadow-sm">

            //     <input
            //       type="checkbox"
            //       checked={selectedTalentIds.includes(talent._id)}
            //       onChange={() => toggleTalent(talent._id)}
            //       style={{
            //         position: "absolute",
            //         top: "15px",
            //         right: "15px",
            //         width: "20px",
            //         height: "20px",
            //       }}
            //     />

            //     <div className="inter-font d-flex inter-font">
            //       <img
            //         src={dashboardTalent2}
            //         alt="Talent"
            //         style={{
            //           width: "88px",
            //           height: "88px",
            //           objectFit: "cover",
            //           borderRadius: "50%",
            //           border: "2px solid #ddd",
            //         }}
            //       />
            //       <div className="inter-font ms-3">
            //         <h5 className="inter-font mb-1 fw-bold inter-font">
            //           {talent.first_name} {talent.last_name}
            //         </h5>
            //         <p className="inter-font mb-2 text-muted d-flex align-items-center inter-font">
            //           <FaLocationDot className="inter-font me-1" />
            //           {talent.city}, {talent.country}

            //         </p>
            //         <div className="inter-font d-flex gap-2 flex-wrap inter-font">
            //           {talent.skills?.map((skill, index) => (
            //             <span
            //               key={index}
            //               className="inter-font bg-light px-2 py-1 rounded small text-muted border inter-font"
            //             >
            //               {skill}
            //             </span>
            //           ))}
            //           <span className="inter-font bg-light px-2 py-1 rounded small text-muted border inter-font">
            //             {talent.year_experience} Y Ex
            //           </span>
            //         </div>
            //       </div>
            //     </div>

            //     <div className="inter-font mt-3 mt-md-0 d-flex flex-column justify-content-between inter-font">
            //       <p style={{ maxWidth: "600px", fontSize: "14px" }}>
            //         {talent.about?.slice(0, 90)}...
            //         <span
            //           className="inter-font text-danger fw-semibold inter-font"
            //           style={{ cursor: "pointer" }}
            //         >
            //           {" "}
            //           Read More...
            //         </span>
            //       </p>
            //       <div className="inter-font d-flex gap-2 justify-content-md-end flex-wrap inter-font">
            //         <Button
            //           size="sm"
            //           style={{
            //             background: "#522a30",
            //             color: "#fff",
            //             radius: "5px",
            //           }}
            //           className="inter-font inter-font"
            //         >
            //           <LiaDownloadSolid /> Download
            //         </Button>
            //         <Button
            //           size="sm"
            //           style={{ background: "#522a30", color: "#fff" }}
            //           className="inter-font inter-font"
            //         >
            //           View Profile
            //         </Button>
            //       </div>
            //     </div>
            //   </div>
            // </Col> */}

          <Row className="inter-font mt-4">
            <Col className="inter-font d-flex justify-content-center align-items-center gap-5 flex-wrap">
              {/* Pagination Numbers */}

              <Button
                size="sm"
                variant="link"
                disabled={current_page === 1}
                onClick={() => handlePageChange(current_page - 1)}
                style={{
                  width: "36px",
                  height: "36px",
                  padding: 0,
                  borderRadius: "50%",
                  backgroundColor: "#E46D54",
                  color: "#fff",
                  border: "none",
                }}
              >
                <ChevronLeft size={18} />
              </Button>

              {pages.map((page, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant={page === current_page ? "danger" : "link"}
                  style={{
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    padding: 0,
                    backgroundColor:
                      page === current_page ? "#E46D54" : "transparent",
                    color: page === current_page ? "#fff" : "#666",
                    fontWeight: page === current_page ? "600" : "400",
                    border: "none",
                    fontSize: "14px",
                  }}
                  disabled={page === "..."}
                  onClick={() => page !== "..." && handlePageChange(page)}
                >
                  {page}
                </Button>
              ))}

              {/* Next Arrow */}
              <Button
                size="sm"
                variant="link"
                disabled={current_page === total_pages}
                onClick={() => handlePageChange(current_page + 1)}
                style={{
                  width: "36px",
                  height: "36px",
                  padding: 0,
                  borderRadius: "50%",
                  backgroundColor: "#E46D54",
                  color: "#fff",
                  border: "none",
                }}
              >
                <ChevronRight size={18} />
              </Button>

              {/* View All Button */}
              <Button
                size="sm"
                style={{
                  backgroundColor: "#E46D54",
                  border: "none",
                  padding: "6px 20px",
                  borderRadius: "10px",
                  color: "#fff",
                  marginLeft: "10px",
                }}
              // onClick={handleViewAll}
              >
                View All
              </Button>
            </Col>
          </Row>

          {/* <Row className="inter-font mt-4">
            <Col className="inter-font d-flex justify-content-center gap-3">
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
          </Row> */}
        </Container>
      )}
    </div>
  );
};

export default Talents;
