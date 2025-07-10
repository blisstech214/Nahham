import React from 'react';
import fb from "../../assets/images/fb.png";
import x from "../../assets/images/x.png";
import instagram from "../../assets/images/instagram.png";
import linkedIn from "../../assets/images/linkedIn.png";
import yt from "../../assets/images/yt.png";
import tiktok from "../../assets/images/tiktok.png";
import snapchat from "../../assets/images/snapchat.png";

const DashboardFooter = () => {
  return (
    <div className="w-100 content">
      <footer
        className="d-flex justify-content-between align-items-center text-muted"
        style={{
          background: "#7B6E43",
          width: "100%",
          height: "50px",
          position: "absolute",
          bottom: "0px",
          left: "0px"
        }}
      >
        <div className="text-white ms-3">
          @2025 Nahham, All rights reserved.
        </div>
        <div className="text-white">
          Privacy Policy | Terms and Conditions
        </div>
        <div className="social-icons-dashboard d-flex justify-content-center align-items-center">
          <img src={fb} />
          <img src={x} />
          <img src={instagram} />
          <img src={linkedIn} />
          <img src={yt} />
          <img src={tiktok} />
          <img src={snapchat} className="me-5" />
        </div>
      </footer>
    </div>
  );
}

export default DashboardFooter;
