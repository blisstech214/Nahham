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
      className="inter-font  text-white px-3 py-2"
      style={{
        background: "#7B6E43",
      }}
    >
      <div className="inter-font container-fluid">
        <div className="inter-font row align-items-center text-center text-md-start">
          {/* Left: Copyright */}
          <div className="inter-font col-12 col-md-4 mb-2 mb-md-0">
            <div>@2025 Nahham, All rights reserved.</div>
          </div>

          {/* Center: Links */}
          <div className="inter-font col-12 col-md-4 mb-2 mb-md-0">
            <div>Privacy Policy | Terms and Conditions</div>
          </div>

          {/* Right: Social Icons */}
          <div className="inter-font col-12 col-md-4">
            <div className="inter-font social-icons-dashboard d-flex justify-content-center align-items-center d-flex justify-content-center justify-content-md-end align-items-center flex-wrap">
              {/* <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fb} alt="Facebook" className="inter-font mx-1" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={x} alt="Twitter / X" className="inter-font mx-1" />
              </a> */}
              <a
                href="https://www.instagram.com/nahhamuae?igsh=cjdvNjljbXcza2sw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" className="inter-font mx-1" />
              </a>
              {/* <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="LinkedIn" className="inter-font mx-1" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={yt} alt="YouTube" className="inter-font mx-1" />
              </a> */}
              <a
                href="https://www.tiktok.com/@nahhamuae?_t=ZS-8y6OUT4PWkM&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tiktok} alt="TikTok" className="inter-font mx-1" />
              </a>
              {/* <a
                href="https://www.snapchat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={snapchat} alt="Snapchat" className="inter-font mx-1" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
