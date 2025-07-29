import React, { useState, useEffect } from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import footer_decoration from "../assets/images/footer-bottom-border.png";

import logo from "../assets/images/footer-img.png";

import fb from "../assets/images/fb.png";
import x from "../assets/images/x.png";
import instagram from "../assets/images/instagram.png";
import linkedIn from "../assets/images/linkedIn.png";
import yt from "../assets/images/yt.png";
import tiktok from "../assets/images/tiktok.png";
import snapchat from "../assets/images/snapchat.png";

const Footer = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language;
    const direction = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", currentLang);
  }, [i18n.language]);

  return (
    <div
      className="inter-font container footer-main position-relative"
      style={{ background: "#6D5F27", height: "410px" }}
    >
      <div className="inter-font container pt-5">
        <div className="inter-font row">
          <div className="inter-font col-md-4 col-sm-5 text-white footer-left">
            <div className="inter-font d-flex align-items-center">
              <img
                alt="Logo"
                src={logo}
                className="inter-font footer-logo"
                width={"300px"}
              />
            </div>
          </div>
          <div className="inter-font col-md-4 col-8 col-sm-2 text-white footer-right">
            <div className="inter-font d-flex footer-res">
              <nav className="inter-font nav footer-nav flex-column py-3">
                <Link to={"/"}>
                  <a className="inter-font nav-link text-white">{t("home")}</a>
                </Link>
                <Link to="/aboutus">
                  <a className="inter-font nav-link text-white">{t("about_us")}</a>
                </Link>
                <a className="inter-font nav-link text-white" href="#talents">
                  {t("why_choose_us")}
                </a>
                <a className="inter-font nav-link text-white" href="#howItWorks">
                  {t("contact_us")}
                </a>
                <a className="inter-font nav-link text-white" href="#faq">
                  {t("faqs")}
                </a>
                <a className="inter-font nav-link text-white" href="#contact">
                  {t("screenshot")}
                </a>
              </nav>
            </div>
          </div>

          <div className="inter-font col-md-4 col-2 col-sm-12 text-white social-icons-main">
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
            {/* <ul className="inter-font list-unstyled d-flex social-icons">
              <li>
                <img src={fb} />
              </li>
              <li>
                <img src={x} />
              </li>
              <li>
                <img src={instagram} />
              </li>
              <li>
                <img src={linkedIn} />
              </li>
              <li>
                <img src={yt} />
              </li>
              <li>
                <img src={tiktok} />
              </li>
              <li>
                <img src={snapchat} />
              </li>
            </ul> */}
          </div>
        </div>
      </div>
      <div class="footer-bottom mt-3">
        <div class="container my-auto d-flex justify-content-between">
          <div class="copyright my-auto text-white">
            <span>{t("copyright")}</span>
          </div>
          <div>
            <ul className="inter-font list-unstyled footer-list d-flex text-white fw-bolder">
              <li>Privacy Policy</li>
              <li className="inter-font mx-4 second-list">Clients Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="inter-font footer-img">
        <img src={footer_decoration} />
      </div>
    </div>
  );
};

export default Footer;
