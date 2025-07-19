import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

import { useTranslation } from "react-i18next";
// Navbar Menu
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const languages = [
    { name: "English", code: "en", flag: "https://flagcdn.com/w320/us.png" },
    { name: "العربية", code: "ar", flag: "https://flagcdn.com/w320/sa.png" },
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const currentLang = i18n.language;
    const direction = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", currentLang);
  }, [i18n.language]);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky ${
        scrolled ? "navbar-light md-bg-white bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center justify-content-center mx-0"
          href="#"
        >
          <img src={logo} alt="My Guide" className="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-end custom-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav nav-res">
            <Link to={"/"}>
              <li className="nav-item">
                <a className="nav-link active">{t("home")}</a>
              </li>
            </Link>
            <Link to={"/aboutus"}>
              <li className="nav-item">
                <a className="nav-link">{t("about_us")}</a>
              </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" href="#talents">
                {t("why_choose_us")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#howItWorks">
                {t("contact_us")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                {t("faqs")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                {t("screenshot")}
              </a>
            </li>

            <li>
              <div className="d-flex align-items-center btns-navbar ms-auto">
                <div className="lang-border shadow mx-3">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`lang-item ${
                        i18n.language === lang.code ? "active-lang" : ""
                      }`}
                      style={{
                        cursor: "pointer",
                        padding: "8px 15px",
                        borderRadius: "10px",
                        backgroundColor:
                          i18n.language === lang.code
                            ? "#181515"
                            : "transparent",
                        color: i18n.language === lang.code ? "#fff" : "#000",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                    >
                      {lang.name}
                    </div>
                  ))}
                </div>

                <Link
                  className="btn btn-base btn-lg partner-btn ms-2 mt-0"
                  to="/register"
                >
                  <i className="fas fa-user-circle"></i>
                  {t("become_partner")}
                </Link>
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="d-flex align-items-center btns-navbar ms-auto">
          <div className="lang-border shadow mx-3">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`lang-item ${
                  i18n.language === lang.code ? "active-lang" : ""
                }`}
                style={{
                  cursor: "pointer",
                  padding: "8px 15px",
                  borderRadius: "10px",
                  backgroundColor:
                    i18n.language === lang.code ? "#181515" : "transparent",
                  color: i18n.language === lang.code ? "#fff" : "#000",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                {lang.name}
              </div>
            ))}
          </div>

          <Link
            className="btn btn-base btn-lg partner-btn ms-2 mt-0"
            to="/BecomePartner"
          >
            <i className="fas fa-user-circle"></i>
            {t("become_partner")}
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
