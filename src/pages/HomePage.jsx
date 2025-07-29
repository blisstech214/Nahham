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
    <div className="inter-font layout-wrapper inter-font">
      <div className="inter-font left-strip" style={{ marginLeft: "2%" }}>
        {[...Array(25)].map((_, i) => (
          <img
            key={i}
            src={decoration}
            alt="Decoration"
            className="inter-font strip-icon"
          />
        ))}
      </div>
      <div
        className="inter-font main-bg"
        style={{
          minHeight: "100vh",
        }}
      >
        <Header />
        {/* Banner Sec */}
        <div className="inter-font header-banner" id="home">
          <div
            className="inter-font container-fluid banner-txt"
            style={{ paddingTop: "140px" }}
          >
            <h1
              className="inter-font text-center fw-bolder res-size inter-font"
              style={{ fontFamily: "auto", fontSize: "70px" }}
            >
              Unlock the Power <br className="inter-font break" /> of Talent
              <img
                src={rocket}
                className="inter-font ms-2 rocket-animation"
                style={{ width: "35px" }}
                alt="rocket"
              />
            </h1>
            <p className="inter-font text-center fw-bold p-size">
              Whether you're building a team or building a career — we’ve
              <br className="inter-font break" />
              got you covered.
            </p>
            <div className="inter-font banner-btn d-flex justify-content-center">
              <button className="inter-font btn btn-base fw-bold me-2 mt-3">
                Hire Talent <MdArrowOutward fontSize={20} />
              </button>
              <button className="inter-font btn btn-op-base fw-bold mt-3">
                Become a Talent <MdArrowOutward fontSize={20} />
              </button>
            </div>
          </div>

          <div className="inter-font d-flex flex-wrap justify-content-center align-items-center mt-5">
            <div className="inter-font p-2" style={{ maxWidth: "200px" }}>
              <img src={banner1} className="inter-font img-fluid" />
            </div>
            <div className="inter-font p-2" style={{ maxWidth: "200px" }}>
              <img src={banner2} className="inter-font img-fluid" />
            </div>
            <div className="inter-font p-2" style={{ maxWidth: "200px" }}>
              <img src={banner3} className="inter-font img-fluid" />
            </div>
            <div className="inter-font p-2" style={{ maxWidth: "200px" }}>
              <img src={banner4} className="inter-font img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Who Are We */}
      <div
        className="inter-font border-layer1 container rounded-5 bg-white"
        id="about"
      >
        <div className="inter-font top border-layer2 p-3 rounded-5 position-relative pt-5">
          <div className="inter-font text-start">
            <h1 className="inter-font fw-bold res-size">
              Who We Are and What We Stand For
            </h1>
          </div>
          <div className="inter-font row my-5" data-aos="zoom-out">
            <div className="inter-font col-md-6 col-sm-12">
              <div className="inter-font ">
                <img
                  src={whoAreWeImg}
                  className="inter-font rounded-5 whoAreWe-img-size"
                />
              </div>
            </div>
            <div className="inter-font col-md-6 col-sm-12 d-flex align-items-center">
              <div className="inter-font fw-bold">
                <p className="inter-font mt-4 p-size">
                  We are a team of passionate innovators, designers, and
                  strategists committed to helping businesses grow and succeed.
                  With years of industry experience, we blend creativity with
                  technology to deliver solutions that truly make a difference
                  process.
                </p>
                <p className="inter-font p-size">
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution
                </p>
                <button className="inter-font btn btn-base fw-bold me-2 mt-3">
                  Hire Talent <MdArrowOutward fontSize={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Talents */}

      <div className="inter-font container position-relative" id="talents">
        <div
          className="inter-font top places-main rounded-5 p-4"
          style={{ backgroundColor: "#411318", minHeight: "500px" }}
          id="places"
        >
          <div className="inter-font d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
            <div
              className="inter-font places-text mb-3 mb-md-0"
              style={{ marginTop: "60px" }}
              data-aos="zoom-out"
            >
              <h1 className="inter-font text-white fw-bold">Our Talents</h1>
            </div>

            {/* Categories Bar */}
            <div className="inter-font bar mt-5">
              <ul
                className="inter-font d-flex flex-wrap gap-2 list-unstyled m-0 p-2"
                style={{
                  borderRadius: "50px",
                }}
              >
                {tabs.map((tab, index) => (
                  <li
                    key={tab}
                    className={`inter-font fw-bold tabs-size d-flex justify-content-center align-items-center rounded-pill ${
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

          <div className="inter-font row g-4">
            <Slider {...imageSliderSettings}>
              {filteredTalents.map((talent, index) => (
                <div key={index} className="inter-font px-3">
                  <div className="inter-font text-center">
                    <div
                      className="inter-font rounded-circle overflow-hidden mx-auto mb-2"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img
                        src={talent.img}
                        alt={talent.name}
                        className="inter-font img-fluid"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    <h6 className="inter-font text-white mb-0 talent-name-size">
                      {talent.name}
                    </h6>
                    <small className="inter-font text-white">
                      {talent.role}
                    </small>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="inter-font design-i">
          <img src={design} />
        </div>
      </div>

      <div
        className="inter-font container top rounded-5"
        id="howItWorks"
        style={{
          height: "auto",
        }}
      >
        <div className="inter-font row p-3">
          <div className="inter-font col-md-3">
            <h2 className="inter-font fw-bold" style={{ fontSize: "2.4rem" }}>
              How it Works?
            </h2>
          </div>
          <div className="inter-font col-md-5" style={{ marginTop: "50px" }}>
            <div className="inter-font d-flex">
              <img src={num1} style={{ width: "50px", height: "50px" }} />
              <div className="inter-font ms-4">
                <h3 className="inter-font fw-bold mt-2">Select Talent</h3>
                <p className="inter-font me-4 p-size">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout...
                </p>
              </div>
            </div>
            <div className="inter-font d-flex flex-column flex-md-row">
              <img
                src={works1}
                className="inter-font img-fluid d-block d-md-none mb-3"
                style={{ width: "100%", height: "50px" }}
              />
              {/* <img
                src={works1}
                className="inter-font d-none d-md-block"
                style={{ width: "90%" }}
              /> */}
            </div>
            <br />

            <div className="inter-font d-flex">
              <img src={num2} style={{ width: "50px", height: "50px" }} />
              <div className="inter-font ms-4">
                <h3 className="inter-font fw-bold mt-2">Sign Up</h3>
                <p className="inter-font me-4 p-size">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout...
                </p>
              </div>
            </div>
            <img
              src={works2}
              className="inter-font d-block d-md-none mt-3"
              style={{ width: "100%" }}
            />
            <br />
            <img
              src={line}
              className="inter-font ms-4 line"
              // style={{ marginTop: "-96px" }}
            />
            <br />

            {/* Step 3 */}
            <div className="inter-font d-flex">
              <img src={num3} style={{ width: "50px", height: "50px" }} />
              <div className="inter-font ms-4">
                <h3 className="inter-font fw-bold mt-2">Request for Talent</h3>
                <p className="inter-font me-4 p-size">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout...
                </p>
              </div>
            </div>
            {/* Mobile Only Image */}
            <img
              src={works3}
              className="inter-font d-block d-md-none mt-3"
              style={{ width: "100%" }}
            />
            <br />
          </div>

          {/* Desktop Side Images */}
          <div className="inter-font col-md-4 d-none d-md-block">
            <img src={works1} style={{ width: "60%" }} />
            <img
              src={works2}
              className="inter-font mt-5"
              style={{ width: "60%" }}
            />
            <img
              src={works3}
              className="inter-font mt-5"
              style={{ width: "60%" }}
            />
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div
        className="inter-font container top rounded-5 faq"
        id="faq"
        data-aos="zoom-in"
        style={{
          backgroundColor: "#E98266",
          height: "690px",
        }}
      >
        <div className="inter-font row">
          <div className="inter-font col-md-4">
            <div className="inter-font text-start text-white p-3">
              <h1 className="inter-font fw-bold pt-5 faq-heading">
                Frequently Asked Questions
              </h1>
            </div>
          </div>
          <div className="inter-font col-md-8">
            <div
              className="inter-font bg-white mt-5 rounded-5 main-faq p-3 p-md-5"
              style={{ maxWidth: "800px" }}
            >
              <div
                className="inter-font accordion border-bottom-0"
                style={{ border: "1.5px solid" }}
              >
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="inter-font mb-3 "
                    style={{ borderBottom: "1.5px solid" }}
                  >
                    <button
                      className="inter-font d-flex justify-content-between align-items-center w-100 p-3 bg-transparent border-0"
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
                      <h5 className="inter-font mb-0 text-start fw-bolder text-dark">
                        {index + 1}. {faq.question}
                      </h5>
                      {activeIndex === index ? (
                        <FiChevronUp size={20} />
                      ) : (
                        <FiChevronDown size={20} />
                      )}
                    </button>

                    {activeIndex === index && (
                      <div className="inter-font p-3 pt-0">
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
      <div className="inter-font container top" id="contact" data-aos="zoom-in">
        <div className="inter-font row">
          <div className="inter-font col-md-4 left-space">
            <h1 className="inter-font fw-bolder">Get In Touch</h1>
            <ul className="inter-font list-unstyled">
              <li>
                <FaLocationDot fontSize={17} />
                <span className="inter-font ms-2 fw-bolder">
                  Dubai, United Arab Emirates
                </span>
              </li>
              <li className="inter-font my-2">
                <FaEnvelope fontSize={17} />
                <span className="inter-font ms-2 fw-bolder">
                  info@nahham.ae
                </span>
              </li>
              <li>
                <MdCall fontSize={20} />
                <span className="inter-font ms-1 fw-bolder">
                  (+971) 54 365 5595
                </span>
              </li>
            </ul>
          </div>
          <div className="inter-font col-md-8 left-space">
            <Form className="inter-font bg-white p-3 rounded-5">
              <Form.Group className="inter-font mb-3">
                <Form.Label>
                  <strong className="inter-font fw-bold">Your Name</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name...."
                  className="inter-font rounded-2 bg-light border shadow-sm"
                />
              </Form.Group>

              <Form.Group className="inter-font mb-3">
                <Form.Label>
                  <strong>Email</strong>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email..."
                  className="inter-font rounded-2 bg-light border shadow-sm"
                />
              </Form.Group>

              <Form.Group className="inter-font mb-3">
                <Form.Label>
                  <strong>Message</strong>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Text here..."
                  className="inter-font rounded-2 bg-light border shadow-sm fw-bold"
                />
              </Form.Group>

              <button className="inter-font btn btn-base fw-bold me-2 mt-3">
                Submit <MdArrowOutward fontSize={20} />
              </button>
            </Form>
          </div>
        </div>
      </div>

      {/* Want To Hire */}
      <div
        className="inter-font container top want-hire p-4 d-flex justify-content-center align-items-center position-relative text-white"
        style={{
          backgroundColor: "#411318",
          minHeight: "404px",
          flexDirection: "column",
          height: "405px",
        }}
        id="places"
      >
        <div
          className="inter-font text-center w-100 mt-5" 
          style={{ padding: "2rem", minHeight: "auto" }}
        >
          <h1 className="inter-font fw-bold display-6 d-md-none">
            Want To Hire Talent?
          </h1>
          <h1 className="inter-font fw-bold display-3 d-none d-md-block">
            Want To Hire Talent?
          </h1>
        </div>

        <button className="inter-font btn btn-base fw-bold me-2 mt-3">
          Sign Up Now <MdArrowOutward fontSize={20} />
        </button>
        <div className="inter-font design-i">
          <img src={design} />
        </div>

        <div className="inter-font talents">
          <img src={person1} className="inter-font person1" />
          <img src={person2} className="inter-font person2" />
          <img src={person3} className="inter-font person3" />
        </div>
        <div className="inter-font hireTalents">
          <img src={person5} className="inter-font person1" />
          <img src={person5} className="inter-font person2" />
          <img src={person6} className="inter-font person3" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
