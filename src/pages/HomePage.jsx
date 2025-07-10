import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

import Footer from "../components/Footer";

import rocket from "../assets/images/rocket.png";

import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
import banner4 from "../assets/images/banner4.png";

import talent1 from "../assets/images/talent1.png";
import talent2 from "../assets/images/talent2.png";
import talent3 from "../assets/images/talent3.png";
import talent4 from "../assets/images/talent4.png";

import works1 from "../assets/images/works1.png";
import works2 from "../assets/images/works2.png";
import works3 from "../assets/images/works3.png";

import num1 from "../assets/images/Number1.png";
import num2 from "../assets/images/Number2.png";
import num3 from "../assets/images/Number3.png";

import line from "../assets/images/Line.png";

import person1 from "../assets/images/person4.png";
import person2 from "../assets/images/person5.png";
import person3 from "../assets/images/person6.png";
import person4 from "../assets/images/person1.png";
import person5 from "../assets/images/person2.png";
import person6 from "../assets/images/person3.png";

import ellipse_1 from "../assets/images/Ellipse 1.png";
import ellipse_2 from "../assets/images/Ellipse 2.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import design from "../assets/images/design.png";
import decoration from "../assets/images/decoration.png";

import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import whoAreWeImg from "../assets/images/whoAreWeImg.png";

import { MdArrowOutward } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { MdCall } from "react-icons/md";

import { Form } from "react-bootstrap";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What to expect during the donation?",
      answer:
        "Your first session is about getting to know you. We'll explore your concerns, goals, and what brought you to therapy in a safe and welcoming space. This is also a time for you to ask questions and see if we're the right fit for your journey.",
    },
    {
      question: "What's the pricing and insurance policies?",
      answer: "",
    },
    {
      question: "Do you have cancellation/rescheduling policies?",
      answer: "",
    },
    {
      question: "Tell me Confidentiality details",
      answer: "",
    },
    {
      question: "What if I don't know what to talk about?",
      answer: "",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [activeTab, setActiveTab] = useState("Design");

  const tabs = ["Design", "Development", "Marketing", "AI", "Consultancy"];

  const navigate = useNavigate();
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const moveX = scrollPosition * 0.5;
      setScrollX(moveX);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    if (!svg || !path) return;

    const scroll = () => {
      const distance = window.scrollY;
      const totalDistance = svg.clientHeight - window.innerHeight;
      console.log(totalDistance);
      const percentage = distance / totalDistance;
      const pathLength = path.getTotalLength();

      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
    };

    scroll();
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language;
    const direction = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", currentLang);
  }, [i18n.language]);

  const imageSliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const talents = [
    {
      name: "Muhammad Salman",
      role: "Product Designer",
      img: talent1,
      category: "Design",
    },
    {
      name: "Muhammad Abou",
      role: "Software Developer",
      img: talent2,
      category: "Development",
    },
    {
      name: "Muhammad Salman",
      role: "UIUX Designer",
      img: talent3,
      category: "Design",
    },
    {
      name: "Musa Janat",
      role: "Web Developer",
      img: talent4,
      category: "Development",
    },
    {
      name: "Zara Malik",
      role: "Digital Marketer",
      img: talent1,
      category: "Marketing",
    },
    {
      name: "Ali Khan",
      role: "AI Researcher",
      img: talent2,
      category: "AI",
    },
    {
      name: "Sara Imran",
      role: "Business Consultant",
      img: talent3,
      category: "Consultancy",
    },
  ];

  let filteredTalents = talents.filter((t) => t.category === activeTab);
  while (filteredTalents.length < 4) {
    filteredTalents = [...filteredTalents, ...filteredTalents];
  }
  filteredTalents = filteredTalents.slice(0, 4);

  return (
    <div className="layout-wrapper">
      <div className="left-strip">
        {[...Array(25)].map((_, i) => (
          <img
            key={i}
            src={decoration}
            alt="Decoration"
            className="strip-icon"
          />
        ))}
      </div>
      <div
        className="main-bg"
        style={{
          minHeight: "100vh",
        }}
      >
        <Header />
        {/* Banner Sec */}
        <div className="header-banner" id="home">
          <div
            className="container-fluid banner-txt"
            style={{ paddingTop: "140px" }}
          >
            <h1
              className="text-center fw-bolder res-size"
              style={{ fontFamily: "auto", fontSize: "70px" }}
            >
              Unlock the Power <br className="break" /> of Talent
              <img
                src={rocket}
                className="ms-2 rocket-animation"
                style={{ width: "35px" }}
                alt="rocket"
              />
            </h1>
            <p className="text-center fw-bold p-size">
              Whether you're building a team or building a career — we’ve
              <br className="break" />
              got you covered.
            </p>
            <div className="banner-btn d-flex justify-content-center">
              <button className="btn btn-base fw-bold me-2 mt-3">
                Hire Talent <MdArrowOutward fontSize={20} />
              </button>
              <button className="btn btn-op-base fw-bold mt-3">
                Become a Talent <MdArrowOutward fontSize={20} />
              </button>
            </div>
          </div>

          <div className="anta-habibi d-flex justify-content-center align-items-center mt-5">
            <div className="image-wrapper">
              <img src={banner1} />
            </div>
            <div className="image-wrapper image-wrapper2 mx-4">
              <img src={banner2} />
            </div>
            <div className="image-wrapper image-wrapper3 me-4 p-size">
              <img src={banner3} />
            </div>
            <div className="image-wrapper image-wrapper4">
              <img src={banner4} />
            </div>
          </div>
        </div>
      </div>

      {/* Who Are We */}
      <div className="border-layer1 container rounded-5 bg-white" id="about">
        <div className="top border-layer2 p-3 rounded-5 position-relative pt-5">
          <div className="text-start">
            <h1 className="fw-bold res-size">
              Who We Are and What We Stand For
            </h1>
          </div>
          <div className="row my-5" data-aos="zoom-out">
            <div className="col-md-6 col-sm-12">
              <div className="">
                <img
                  src={whoAreWeImg}
                  className="rounded-5 whoAreWe-img-size"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 d-flex align-items-center">
              <div className="fw-bold">
                <p className="mt-4 p-size">
                  We are a team of passionate innovators, designers, and
                  strategists committed to helping businesses grow and succeed.
                  With years of industry experience, we blend creativity with
                  technology to deliver solutions that truly make a difference
                  process.
                </p>
                <p className="p-size">
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution
                </p>
                <button className="btn btn-base fw-bold me-2 mt-3">
                  Hire Talent <MdArrowOutward fontSize={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Talents */}

      <div className="container position-relative" id="talents">
        <div
          className="top places-main rounded-5 p-4"
          style={{ backgroundColor: "#411318", minHeight: "500px" }}
          id="places"
        >
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
            <div
              className="places-text mb-3 mb-md-0"
              style={{ marginTop: "60px" }}
              data-aos="zoom-out"
            >
              <h1 className="text-white fw-bold">Our Talents</h1>
            </div>

            {/* Categories Bar */}
            <div className="bar mt-5">
              <ul
                className="d-flex flex-wrap gap-2 list-unstyled m-0 p-2"
                style={{
                  borderRadius: "50px",
                }}
              >
                {tabs.map((tab, index) => (
                  <li
                    key={tab}
                    className={`fw-bold tabs-size d-flex justify-content-center align-items-center rounded-pill ${
                      index > 2 ? "d-none d-sm-block" : ""
                    }`}
                    style={{
                      backgroundColor:
                        activeTab === tab ? "#fff" : "rgb(98, 33, 40)",
                      color: activeTab === tab ? "#411318" : "#fff",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row g-4">
            <Slider {...imageSliderSettings}>
              {filteredTalents.map((talent, index) => (
                <div key={index} className="px-3">
                  <div className="text-center">
                    <div
                      className="rounded-circle overflow-hidden mx-auto mb-2"
                      style={{ width: "200px", height: "200px" }}
                    >
                      <img
                        src={talent.img}
                        alt={talent.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <h6 className="text-white mb-0 talent-name-size">
                      {talent.name}
                    </h6>
                    <small className="text-white">{talent.role}</small>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="design-i">
          <img src={design} />
        </div>
      </div>

      <div
        className="container top rounded-5"
        id="howItWorks"
        style={{
          height: "auto",
        }}
      >
        <div className="row p-3">
          <div className="col-md-3">
            <h2 className="fw-bold" style={{ fontSize: "2.4rem" }}>
              How it Works?
            </h2>
          </div>
          <div className="col-md-5" style={{ marginTop: "50px" }}>
            <div className="d-flex">
              <img src={num1} style={{ width: "50px", height: "50px" }} />
              <div className="ms-4">
                <h3 className="fw-bold mt-2">Select Talent</h3>
                <p className="me-4 p-size">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout...
                </p>
              </div>
            </div>
            <img
              src={works1}
              className="d-block d-md-none mt-3"
              style={{ width: "100%" }}
            />
            <br />
            <img
              src={line}
              className="ms-4 line"
              style={{ marginTop: "-125px" }}
            />
            <br />

            <div className="d-flex">
              <img src={num2} style={{ width: "50px", height: "50px" }} />
              <div className="ms-4">
                <h3 className="fw-bold mt-2">Sign Up</h3>
                <p className="me-4 p-size">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout...
                </p>
              </div>
            </div>
            <img
              src={works2}
              className="d-block d-md-none mt-3"
              style={{ width: "100%" }}
            />
            <br />
            <img
              src={line}
              className="ms-4 line"
              style={{ marginTop: "-96px" }}
            />
            <br />

            {/* Step 3 */}
            <div className="d-flex">
              <img src={num3} style={{ width: "50px", height: "50px" }} />
              <div className="ms-4">
                <h3 className="fw-bold mt-2">Request for Talent</h3>
                <p className="me-4 p-size">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout...
                </p>
              </div>
            </div>
            {/* Mobile Only Image */}
            <img
              src={works3}
              className="d-block d-md-none mt-3"
              style={{ width: "100%" }}
            />
            <br />
          </div>

          {/* Desktop Side Images */}
          <div className="col-md-4 d-none d-md-block">
            <img src={works1} style={{ width: "90%" }} />
            <img src={works2} className="mt-5" style={{ width: "90%" }} />
            <img src={works3} className="mt-5" style={{ width: "90%" }} />
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div
        className="container top rounded-5 faq"
        id="faq"
        data-aos="zoom-in"
        style={{ backgroundColor: "#E98266", height: "690px" }}
      >
        <div className="row">
          <div className="col-md-4">
            <div className="text-start text-white p-3">
              <h1 className="fw-bold pt-5 faq-heading">
                Frequently Asked Questions
              </h1>
            </div>
          </div>
          <div className="col-md-8">
            <div
              className="bg-white mt-5 rounded-5 main-faq"
              style={{ maxWidth: "800px", padding: "60px" }}
            >
              <div
                className="accordion border-bottom-0"
                style={{ border: "1.5px solid" }}
              >
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="mb-3 "
                    style={{ borderBottom: "1.5px solid" }}
                  >
                    <button
                      className="d-flex justify-content-between align-items-center w-100 p-3 bg-transparent border-0"
                      onClick={() => toggleFAQ(index)}
                      style={{
                        cursor: "pointer",
                        outline: "none",
                        backgroundColor:
                          activeIndex === index
                            ? "rgba(65, 19, 24, 0.05)"
                            : "transparent",
                      }}
                    >
                      <h5 className="mb-0 text-start fw-bolder text-dark">
                        {index + 1}. {faq.question}
                      </h5>
                      {activeIndex === index ? (
                        <FiChevronUp size={20} />
                      ) : (
                        <FiChevronDown size={20} />
                      )}
                    </button>

                    {activeIndex === index && (
                      <div className="p-3 pt-0">
                        <p style={{ color: "#555" }}>
                          {faq.answer || "Details coming soon..."}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get In Touch */}
      <div className="container top" id="contact" data-aos="zoom-in">
        <div className="row">
          <div className="col-md-4 left-space">
            <h1 className="fw-bolder">Get In Touch</h1>
            <ul className="list-unstyled">
              <li>
                <FaLocationDot fontSize={17} />
                <span className="ms-2 fw-bolder">
                  Dubai, United Arab Emirates
                </span>
              </li>
              <li className="my-2">
                <FaEnvelope fontSize={17} />
                <span className="ms-2 fw-bolder">Info@trufit.com</span>
              </li>
              <li>
                <MdCall fontSize={20} />
                <span className="ms-1 fw-bolder">(208) 964-6992</span>
              </li>
            </ul>
          </div>
          <div className="col-md-8 left-space">
            <Form className="bg-white p-3 rounded-5">
              <Form.Group className="mb-3">
                <Form.Label>
                  <strong className="fw-bold">Your Name</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name...."
                  className="rounded-2 bg-light border shadow-sm"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  <strong>Email</strong>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email..."
                  className="rounded-2 bg-light border shadow-sm"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  <strong>Message</strong>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Text here..."
                  className="rounded-2 bg-light border shadow-sm fw-bold"
                />
              </Form.Group>

              <button className="btn btn-base fw-bold me-2 mt-3">
                Submit <MdArrowOutward fontSize={20} />
              </button>
            </Form>
          </div>
        </div>
      </div>

      {/* Want To Hire */}
      <div
        className="container top want-hire p-4 d-flex justify-content-center align-items-center position-relative text-white"
        style={{
          backgroundColor: "#411318",
          minHeight: "404px",
          flexDirection: "column",
          height: "405px",
        }}
        id="places"
      >
        <div>
          <h1 className="fw-bolder text-center" style={{ fontSize: "3.5rem" }}>
            Want To Hire Talent <br className="break" /> People from Us!
          </h1>
        </div>

        <button className="btn btn-base fw-bold me-2 mt-3">
          Sign Up Now <MdArrowOutward fontSize={20} />
        </button>
        <div className="design-i">
          <img src={design} />
        </div>

        <div className="talents">
          <img src={person1} className="person1" />
          <img src={person2} className="person2" />
          <img src={person3} className="person3" />
        </div>
        <div className="hireTalents">
          <img src={person5} className="person1" />
          <img src={person5} className="person2" />
          <img src={person6} className="person3" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
