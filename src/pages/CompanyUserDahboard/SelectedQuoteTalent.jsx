import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";
import { MdArrowOutward } from "react-icons/md";
import { MultiSelect } from "react-multi-select-component";
import { useLocation, useNavigate } from "react-router-dom";
import dashboardTalent2 from "../../assets/images/dashboardTalent2.png";
import SelectedTalentsOfQuotes from "./SelectedTalentsOfQuotes";

const SelectedQuoteTalent = ({
  selectedTalent,
  setSelectedTalentByProjectData,
}) => {
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

  console.log("selectedTalentData - ", selectedTalentData);

  const getQueryParam = (key) => new URLSearchParams(location.search).get(key);
  const [activeTab, setActiveTab] = useState("");

  const toggleTalent = (id, talent) => {
    console.log(id, talent);
    setSelectedTalentIds((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id]
    );
    setSelectedTalentByProjectData((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, talent]
    );
  };

  useEffect(() => {
    if (selectedTalent?.talents?.length !== 0) {
      setTalents(selectedTalent?.talents);
    } else {
      navigate("/company-dashboard?tab=qutations");
    }
  }, [selectedTalent]);

  useEffect(() => {
    const currentTab = getQueryParam("subTab");
    if (currentTab && currentTab !== activeTab) {
      setActiveTab(currentTab);
    }
  }, [location.search]);

  console.log("activeTab - ", activeTab);

  return (
    <>
      <div className="py-4 inter-font">
        {activeTab === "selectedTalentsOfQuotes" ? (
          // <SelectedTalentsOfQuotes />
          "Hello"
        ) : (
          //   <HireTheTalent selectedTalentData={selectedTalentData} />

          <Container fluid className="px-4">
            {/* Search & Filter */}

            <Row className="mt-3">
              <Col className="px-0 d-flex justify-content-end align-items-center gap-2 mb-4">
                <Button
                  className="bg-transparent border inter-font clear-btn inter-font"
                  style={{
                    color: "rgba(82, 42, 48, 1)",
                    width: "88px",
                    height: "44px",
                  }}
                >
                  Clear
                </Button>
                <Button
                  className="btn border-0 inter-font d-flex align-items-center justify-content-center gap-1 inter-font"
                  style={{
                    background: "rgba(82, 42, 48, 1)",
                    color: "white",
                    width: "88px",
                    height: "44px",
                  }}
                  disabled={selectedTalentIds.length === 0}
                  onClick={() =>
                    // navigate("/company/talent/hire", { state: { selectedTalents } })
                    navigate(
                      "/company-dashboard?tab=qutations&subTab=selectedTalentsOfQuotes"
                    )
                  }
                >
                  Hire
                  <MdArrowOutward fontSize={20} />
                </Button>
              </Col>
            </Row>

            <Row className="gx-3 inter-font">
              {talents?.length === 0 ? (
                <div>Data not found</div>
              ) : (
                talents.map((talent) => (
                  <Col xs={12} key={talent._id} className="mb-3">
                    <div
                      className="p-3 bg-white rounded-4 d-flex flex-column flex-md-row shadow-sm inter-font"
                      style={{ width: "100%" }}
                    >
                      <div
                        className="d-flex flex-column flex-md-row gap-3 inter-font"
                        style={{ width: "100%" }}
                      >
                        <div>
                          <img
                            src={talent?.talent_id?.picture}
                            alt="Talent"
                            style={{
                              width: "88px",
                              height: "88px",
                              objectFit: "cover",
                              borderRadius: "50%",
                              border: "2px solid #ddd",
                            }}
                          />
                        </div>
                        <div style={{ width: "100%" }}>
                          <div className="d-flex flex-column flex-md-row gap-5 justify-content-between align-items-start">
                            <div>
                              <h5 className="mb-1 fw-bold inter-font">
                                {talent?.talent_id?.first_name}{" "}
                                {talent?.talent_id?.last_name}
                              </h5>
                              <p className="mb-2 text-muted d-flex align-items-center inter-font">
                                <FaLocationDot className="me-1" />
                                {talent?.talent_id?.phone}
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
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start inter-font">
                              {/* <div style={{ width: "500px" }}>
                              {talent.about && (
                                <p
                                  style={{ maxWidth: "100%", fontSize: "14px" }}
                                  className="inter-font"
                                >
                                  {talent.about?.slice(0, 90)}...
                                  <span
                                    className="text-danger fw-semibold inter-font"
                                    style={{ cursor: "pointer" }}
                                  >
                                    {" "}
                                    Read More...
                                  </span>
                                </p>
                              )}
                            </div> */}
                              <div>
                                <input
                                  type="checkbox"
                                  checked={selectedTalentIds.includes(
                                    talent._id
                                  )}
                                  onChange={() =>
                                    toggleTalent(talent._id, talent)
                                  }
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
                          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                            <div className="d-flex" style={{}}>
                              <div className="d-flex gap-2 flex-wrap inter-font">
                                {/* {talent.skills?.map((skill, index) => (
                                <span
                                  key={index}
                                  className="bg-light px-2 py-1 rounded small text-muted border inter-font"
                                >
                                  {skill}
                                </span>
                              ))} */}
                                <span className="bg-light px-2 py-1 rounded small text-muted border inter-font">
                                  {talent?.duration}
                                </span>
                              </div>
                            </div>
                            <div>
                              {/* <div className="d-flex gap-2 justify-content-md-end flex-wrap inter-font">
                              <Button
                                size="sm"
                                style={{
                                  background: "#522a30",
                                  color: "#fff",
                                  borderRadius: "5px",
                                }}
                                className="inter-font"
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
                                className="inter-font"
                              >
                                View Profile
                              </Button>
                            </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))
              )}
            </Row>
          </Container>
        )}
      </div>
    </>
  );
};

export default SelectedQuoteTalent;
