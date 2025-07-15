import React from "react";
import fb from "../../assets/images/fb.png";
import x from "../../assets/images/x.png";
import instagram from "../../assets/images/instagram.png";
import linkedIn from "../../assets/images/linkedIn.png";
import yt from "../../assets/images/yt.png";
import tiktok from "../../assets/images/tiktok.png";
import snapchat from "../../assets/images/snapchat.png";

const DashboardFooter = () => {
  return (
    <div
      className="w-100 content"
      style={{
        height: "5vh",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <footer
        className="d-flex justify-content-between align-items-center text-muted"
        style={{
          background: "#7B6E43",
          width: "100%",
          height: "50px",
          position: "absolute",
          bottom: "0px",
          left: "0px",
        }}
      >
        <div className="text-white ms-3">
          @2025 Nahham, All rights reserved.
        </div>
        <div className="text-white">Privacy Policy | Terms and Conditions</div>
        <div className="social-icons-dashboard d-flex justify-content-center align-items-center">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fb} alt="Facebook" className="mx-2" />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={x} alt="Twitter / X" className="mx-2" />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" className="mx-2" />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn} alt="LinkedIn" className="mx-2" />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={yt} alt="YouTube" className="mx-2" />
          </a>

          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tiktok} alt="TikTok" className="mx-2" />
          </a>

          <a
            href="https://www.snapchat.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={snapchat} alt="Snapchat" className="mx-2 me-5" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default DashboardFooter;
