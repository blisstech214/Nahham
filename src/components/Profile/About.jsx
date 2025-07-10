import { useState } from "react";
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap components

const About = ({ profileData, skillsData }) => {

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const about = "Passionate coder and problem-solver Full-stack web developer JavaScript | React | Node.js enthusiast Backend specialist with API expertise Building scalable web apps with clean code and clear logic.Experienced in creating responsive and dynamic user interfaces. Dedicated to solving real-world problems through technology.Love turning ideas into functional software.Full-stack developer with a knack for performance optimization.Constant learner and open-source contributor."

  return (
    <div>
      <p
        className="inter-font"
        style={{ fontSize: "15px", marginTop: "4rem", color: "#939393" }}
      >
        {about ? (
          <>
            {about.substring(0, 150)}...
            <span
              className="text-danger inter-font"
              style={{ cursor: "pointer" }}
              onClick={handleShow}
            >
              {" "}
              Read More
            </span>
          </>
        ) : (
          "No About Data."
        )}
        {/* {profileData?.about ? (
          <>
            {profileData?.about.substring(0, 150)}...
            <span
              className="text-danger inter-font"
              style={{ cursor: "pointer" }}
              onClick={handleShow}
            >
              {" "}
              Read More
            </span>
          </>
        ) : (
          "No About Data."
        )} */}
      </p>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="inter-font">About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-12 mb-3">
                <p className="inter-font" style={{ fontSize: "14px", color: "#595959" }}>
                  {/* {profileData?.about} */}
                  {about}
                </p>
              </div>

              <div className="col-md-6 mb-3">
                <strong className="inter-font" style={{ fontSize: "16px" }}>Experience</strong>
                <p className="inter-font" style={{ fontSize: "14px", color: "#939393" }}>
                  {profileData?.year_experience || "0"} Years
                </p>
              </div>

              <div className="col-md-6 mb-3">
                <strong className="inter-font" style={{ fontSize: "16px" }}>Education and Certification</strong>
                <p className="inter-font" style={{ fontSize: "14px", color: "#939393" }}>
                  Masters in Art and Filming
                </p>
              </div>

              <div className="col-md-6 mb-3">
                <strong className="inter-font" style={{ fontSize: "16px" }}>Skills Area</strong>
                <p className="inter-font" style={{ fontSize: "14px", color: "#939393" }}>
                  {skillsData && skillsData.length > 0
                    ? skillsData.map((skill) => skill.title).join(", ")
                    : "No data"}
                </p>
              </div>

              <div className="col-md-6 mb-3">
                <strong className="inter-font" style={{ fontSize: "16px" }}>Active Job</strong>
                <p className="inter-font" style={{ fontSize: "14px", color: "#939393" }}>
                  {profileData?.active_job || "No Job"}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{
            backgroundColor: "#e15d4f", // Coral red
            color: "#fff",
          }} onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Main Grid Info (if needed outside modal as well) */}
      <div className="row">
        <div className="col-md-6 my-3">
          <strong className="inter-font" style={{ fontSize: "16px", color: "#595959" }}>
            Experience
          </strong>
          <p className="mb-0 inter-font" style={{ fontSize: "14px", color: "#939393" }}>
            {profileData?.year_experience || "0"} Years
          </p>
        </div>

        <div className="col-md-6 my-3">
          <strong className="inter-font" style={{ fontSize: "16px", color: "#595959" }}>
            Education and Certification
          </strong>
          <p className="mb-0 inter-font" style={{ fontSize: "14px", color: "#939393" }}>
            Masters in Art and Filming
          </p>
        </div>

        <div className="col-md-6 my-3">
          <strong className="inter-font" style={{ fontSize: "16px", color: "#595959" }}>
            Skills Area
          </strong>
          <p className="mb-0 inter-font" style={{ fontSize: "14px", color: "#939393" }}>
            {skillsData && skillsData.length > 0
              ? skillsData.map((skill) => skill.title).join(", ")
              : "No data"}
          </p>
        </div>

        <div className="col-md-6 my-3">
          <strong className="inter-font" style={{ fontSize: "16px", color: "#595959" }}>
            Active Job
          </strong>
          <p className="mb-0 inter-font" style={{ fontSize: "14px", color: "#939393" }}>
            {profileData?.active_job || "No Job"}
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
