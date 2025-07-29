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
      className={`inter-font navbar navbar-expand-lg sticky ${
        scrolled ? "navbar-light md-bg-white bg-white shadow" : " bg-white"
      }`}
    >
      <div className="inter-font container">
        <a
          className="inter-font navbar-brand d-flex align-items-center justify-content-center mx-0"
          href="#"
        >
          <img src={logo} alt="My Guide" className="inter-font logo" />
        </a>

        <button
          className="inter-font navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="inter-font navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="inter-font collapse navbar-collapse justify-content-end custom-collapse"
          id="navbarNav"
        >
          <ul className="inter-font navbar-nav nav-res">
            <Link to={"/"}>
              <li className="inter-font nav-item">
                <a className="inter-font nav-link active">{t("home")}</a>
              </li>
            </Link>
            <Link to={"/aboutus"}>
              <li className="inter-font nav-item">
                <a className="inter-font nav-link">{t("about_us")}</a>
              </li>
            </Link>
            <li className="inter-font nav-item">
              <a className="inter-font nav-link" href="#talents">
                {t("why_choose_us")}
              </a>
            </li>
            <li className="inter-font nav-item">
              <a className="inter-font nav-link" href="#howItWorks">
                {t("contact_us")}
              </a>
            </li>
            <li className="inter-font nav-item">
              <a className="inter-font nav-link" href="#faq">
                {t("faqs")}
              </a>
            </li>
            <li className="inter-font nav-item">
              <a className="inter-font nav-link" href="#contact">
                {t("screenshot")}
              </a>
            </li>

            <li>
              <div className="inter-font d-flex align-items-center btns-navbar ms-auto">
                <div className="inter-font lang-border shadow mx-3">
                  <div
                    onClick={() =>
                      handleLanguageChange(i18n.language === "en" ? "ar" : "en")
                    }
                    // className={inter-font `lang-item ${
                    //   i18n.language === lang.code ? "active-lang" : ""
                    // }`}
                    style={{
                      cursor: "pointer",
                      padding: "8px 15px",
                      borderRadius: "10px",
                      backgroundColor: "#6d5f27",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    {i18n.language === "en" ? "العربية" : "English"}
                  </div>

                  {/* {languages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={inter-font `lang-item ${
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
                  ))} */}
                </div>

                <Link
                  className="inter-font btn btn-base btn-lg partner-btn ms-2 mt-0"
                  to="/register"
                >
                  <i className="inter-font fas fa-user-circle"></i>
                  {t("become_partner")}
                </Link>
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="inter-font d-flex align-items-center btns-navbar ms-auto">
          <div className="inter-font lang-border shadow mx-3">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={inter-font `lang-item ${
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
            className="inter-font btn btn-base btn-lg partner-btn ms-2 mt-0"
            to="/BecomePartner"
          >
            <i className="inter-font fas fa-user-circle"></i>
            {t("become_partner")}
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
