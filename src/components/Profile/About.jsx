import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const About = ({ profileData, skillsData }) => {
  const [showModal, setShowModal] = useState(false);

  console.log("profileData --- , ", profileData);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const aboutText =
    profileData?.about +
    "Vel quasi provident Vel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi providentVel quasi provident" ||
    "No About Data.";
  const displayText =
    aboutText.length > 150 ? `${aboutText?.substring(0, 150)}...` : aboutText;

  const experience = profileData?.year_experience || "0";
  // const activeJob = profileData?.active_job || "No Job";
  const activeJob = `${profileData?.active_job !== null
      ? `${profileData?.active_job[0]?.title} | ${profileData?.active_job[0]?.joining_date} ${profileData?.active_job[0]?.company}`
      : "No Job"
    }`;
  const education = profileData?.education || "Masters in Art and Filming"; // You can replace this if dynamic

  const skills =
    skillsData && skillsData.length > 0
      ? skillsData.map((skill) => skill?.title).join(", ")
      : "No data";

  return (
    <div>
      <p
        className="inter-font"
        style={{ fontSize: "15px", marginTop: "4rem", color: "#939393" }}
      >
        {displayText}
        {aboutText?.length > 150 && (
          <span
            className="text-danger inter-font"
            style={{ cursor: "pointer" }}
            onClick={handleShow}
          >
            {" "}
            Read More
          </span>
        )}
      </p>

      {/* Modal for full about section */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="inter-font">About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p
            className="inter-font"
            style={{ fontSize: "14px", color: "#595959" }}
          >
            {aboutText}
          </p>

          <div className="row mt-4">
            <div className="col-md-6 mb-3">
              <strong className="inter-font" style={{ fontSize: "16px" }}>
                Experience
              </strong>
              <p
                className="inter-font"
                style={{ fontSize: "14px", color: "#939393" }}
              >
                {experience} Years
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <strong className="inter-font" style={{ fontSize: "16px" }}>
                Education and Certification
              </strong>
              <p
                className="inter-font"
                style={{ fontSize: "14px", color: "#939393" }}
              >
                {education}
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <strong className="inter-font" style={{ fontSize: "16px" }}>
                Skills Area
              </strong>
              <p
                className="inter-font"
                style={{ fontSize: "14px", color: "#939393" }}
              >
                {skills}
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <strong className="inter-font" style={{ fontSize: "16px" }}>
                Active Job
              </strong>
              <p
                className="inter-font"
                style={{ fontSize: "14px", color: "#939393" }}
              >
                {activeJob}
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: "#e15d4f",
              color: "#fff",
              border: "none",
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Info Grid (outside modal) */}
      <div className="row mt-4">
        <div className="col-md-6 my-3">
          <strong
            className="inter-font"
            style={{ fontSize: "16px", color: "#595959" }}
          >
            Experience
          </strong>
          <p
            className="mb-0 inter-font"
            style={{ fontSize: "14px", color: "#939393" }}
          >
            {experience} Years
          </p>
        </div>

        <div className="col-md-6 my-3">
          <strong
            className="inter-font"
            style={{ fontSize: "16px", color: "#595959" }}
          >
            Education and Certification
          </strong>
          <p
            className="mb-0 inter-font"
            style={{ fontSize: "14px", color: "#939393" }}
          >
            {education}
          </p>
        </div>

        <div className="col-md-6 my-3">
          <strong
            className="inter-font"
            style={{ fontSize: "16px", color: "#595959" }}
          >
            Skills Area
          </strong>
          <p
            className="mb-0 inter-font"
            style={{ fontSize: "14px", color: "#939393" }}
          >
            {skills}
          </p>
        </div>

        <div className="col-md-6 my-3">
          <strong
            className="inter-font"
            style={{ fontSize: "16px", color: "#595959" }}
          >
            Active Job
          </strong>
          <p
            className="mb-0 inter-font"
            style={{ fontSize: "14px", color: "#939393" }}
          >
            {activeJob}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
