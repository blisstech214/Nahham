import React, { useState ,useEffect } from "react";
import { t } from "i18next";
import { Link } from "react-router-dom"

import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import footer_decoration from "../assets/images/footer-bottom-border.png"

import logo from "../assets/images/footer-img.png"

import fb from "../assets/images/fb.png"
import x from "../assets/images/x.png"
import instagram from "../assets/images/instagram.png"
import linkedIn from "../assets/images/linkedIn.png"
import yt from "../assets/images/yt.png"
import tiktok from "../assets/images/tiktok.png"
import snapchat from "../assets/images/snapchat.png"

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
      className="container footer-main position-relative"
      style={{ background: "#6D5F27", height: "410px" }}
    >
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-4 col-sm-5 text-white footer-left">
            <div className="d-flex align-items-center">
              <img
                alt="Logo"
                src={logo}
                className="footer-logo"
                width={"300px"}
              />
            </div>
          </div>
          <div className="col-md-4 col-8 col-sm-2 text-white footer-right">
            <div className="d-flex footer-res">
              <nav className="nav footer-nav flex-column py-3">
                <Link to={"/"}>
                  <a className="nav-link text-white">{t("home")}</a>
                </Link>
                <Link to="/aboutus">
                  <a className="nav-link text-white">{t("about_us")}</a>
                </Link>
                <a className="nav-link text-white" href="#talents">
                  {t("why_choose_us")}
                </a>
                <a className="nav-link text-white" href="#howItWorks">
                  {t("contact_us")}
                </a>
                <a className="nav-link text-white" href="#faq">
                  {t("faqs")}
                </a>
                <a className="nav-link text-white" href="#contact">
                  {t("screenshot")}
                </a>
              </nav>
            </div>
          </div>

          <div className="col-md-4 col-2 col-sm-12 text-white social-icons-main">
            <ul className="list-unstyled d-flex social-icons">
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
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom mt-3">
        <div class="container my-auto d-flex justify-content-between">
          <div class="copyright my-auto text-white">
            <span>{t("copyright")}</span>
          </div>
          <div>
            <ul className="list-unstyled footer-list d-flex text-white fw-bolder">
              <li>Privacy Policy</li>
              <li className="mx-4 second-list">Clients Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-img">
        <img src={footer_decoration} />
      </div>
    </div>
  );
};

export default Footer;
