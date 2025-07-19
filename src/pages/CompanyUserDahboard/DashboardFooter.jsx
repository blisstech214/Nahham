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
    <footer
      className=" text-white px-3 py-2"
      style={{
        background: "#7B6E43",
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center text-center text-md-start">
          {/* Left: Copyright */}
          <div className="col-12 col-md-4 mb-2 mb-md-0">
            <div>@2025 Nahham, All rights reserved.</div>
          </div>

          {/* Center: Links */}
          <div className="col-12 col-md-4 mb-2 mb-md-0">
            <div>Privacy Policy | Terms and Conditions</div>
          </div>

          {/* Right: Social Icons */}
          <div className="col-12 col-md-4">
            <div className="social-icons-dashboard d-flex justify-content-center align-items-center d-flex justify-content-center justify-content-md-end align-items-center flex-wrap">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fb} alt="Facebook" className="mx-1" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={x} alt="Twitter / X" className="mx-1" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" className="mx-1" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="LinkedIn" className="mx-1" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={yt} alt="YouTube" className="mx-1" />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tiktok} alt="TikTok" className="mx-1" />
              </a>
              <a
                href="https://www.snapchat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={snapchat} alt="Snapchat" className="mx-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
