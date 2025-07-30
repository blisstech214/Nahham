import React, { useState, useRef } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import person1 from "../assets/images/person4.png";
import person2 from "../assets/images/person5.png";
import person3 from "../assets/images/person6.png";
import person4 from "../assets/images/person1.png";
import person5 from "../assets/images/person2.png";
import person6 from "../assets/images/person3.png";

import talent1 from "../assets/images/talent1.png";
import talent2 from "../assets/images/talent2.png";
import talent3 from "../assets/images/talent3.png";
import talent4 from "../assets/images/talent4.png";

import whyChoose1 from "../assets/images/whyChoose1.png";
import whyChoose2 from "../assets/images/whyChoose2.png";

import arrowLeft from "../assets/images/arrowLeft.png";
import arrowRight from "../assets/images/ArrowRight.png";

import design from "../assets/images/design.png";
import decoration from "../assets/images/decoration.png";

import rocket from "../assets/images/rocket.png";

import { MdArrowOutward } from "react-icons/md";

import tick from "../assets/images/tick.png";

import CountUp from "react-countup";

import Slider from "react-slick";

import { Helmet } from "react-helmet";

const AboutUs = () => {
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
  ];
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false, // Hide default arrows
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const slides = [
    {
      title: "OUR VISION",
      heading:
        "Experienced Recruiters Specializes In Finding The Right Executive Talent",
      description:
        "Ligula leo ipsum aliquam sem vel fames feugiat consequat platea nec placerat. Bibendum pulvinar taciti dignissim at tempor conubia placerat arcu cursus.",
    },
    {
      title: "OUR MISSION",
      heading: "We Help You Build Strong Teams With the Best Talent",
      description:
        "Nunc dignissim nisi quis est laoreet, nec fringilla ligula pretium. Sed congue sem a nunc aliquam, ut tincidunt turpis faucibus.",
    },
    // Add more slides if needed
  ];

  return (
    <div className="inter-font layout-wrapper">
      <div className="inter-font left-strip">
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
        {/* Navbar */}
        <Header />

        {/* Banner Sec */}
        <div className="inter-font header-banner mb-5" id="home">
          <div
            className="inter-font container-fluid banner-txt"
            style={{ paddingTop: "140px" }}
          >
            <h1
              className="inter-font text-center fw-bolder res-size"
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
          </div>
        </div>

        <div className="inter-font container border-layer1 bg-white main-bg rounded-5">
          <div className="inter-font border-layer2 rounded-bottom-5">
            <div className="inter-font row">
              <div className="inter-font col-md-6">
                <div
                  className="inter-font vision-box p-5 text-white rounded-5 m-5"
                  style={{ backgroundColor: "#6D5F27" }}
                >
                  <Slider ref={sliderRef} {...settings}>
                    {slides.map((slide, index) => (
                      <div key={index}>
                        <h6 className="inter-font fw-lighter">{slide.title}</h6>
                        <h4 className="inter-font fw-bold">{slide.heading}</h4>
                        <p className="inter-font fw-lighter">{slide.description}</p>
                      </div>
                    ))}
                  </Slider>
                  <div className="inter-font d-flex justify-content-end arrows">
                    <img
                      src={arrowLeft}
                      alt="Arrow Left"
                      className="inter-font rounded-5 arrow1"
                      style={{ cursor: "pointer" }}
                      onClick={() => sliderRef.current?.slickPrev()}
                    />
                    <img
                      src={arrowRight}
                      alt="Arrow Right"
                      className="inter-font rounded-5 arrow2 ms-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => sliderRef.current?.slickNext()}
                    />
                  </div>
                </div>
              </div>
              <div className="inter-font col-md-6">
                <div className="inter-font about-us-content p-5">
                  <h4 className="inter-font fw-light" style={{ color: "#E78E7B" }}>
                    About Us
                  </h4>

                  <h2 className="inter-font fw-bold">
                    One Step To Your Future <br /> Starts Here
                  </h2>
                  <p className="inter-font fw-lighter">
                    Dictumst duis ultricies eleifend eu porttitor rutrum ligula
                    nostra mus leo. Odio aptent tempor conubia inceptos sit. Ad
                    sociosqu accumsan nascetur per facilisi.
                  </p>
                  <div className="inter-font d-flex ticks">
                    <img
                      src={tick}
                      alt="Tick"
                      className="inter-font rounded-5 tick me-2"
                    />
                    <p>Thousands of jobs available</p>
                  </div>
                  <div className="inter-font d-flex ticks">
                    <img
                      src={tick}
                      alt="Tick"
                      className="inter-font rounded-5 tick me-2"
                    />
                    <p>The right job for your skills</p>
                  </div>
                </div>
              </div>
              <div className="inter-font nmbs">
                <div
                  className="inter-font details text-white d-flex justify-content-center align-items-center mb-3 py-4 rounded-4 mx-5"
                  style={{ backgroundColor: "#411318" }}
                >
                  <div className="inter-font col-md-3 col-sm-6">
                    <div className="inter-font talents-found">
                      <h2>
                        <CountUp end={8950} duration={3} separator="," />
                      </h2>
                      <p>Talents Found</p>
                    </div>
                  </div>

                  <div className="inter-font col-md-3 col-sm-6">
                    <div className="inter-font talents-found mx-4">
                      <h2>
                        <CountUp end={1650} duration={3} separator="," />
                      </h2>
                      <p>Executive Talent</p>
                    </div>
                  </div>

                  <div className="inter-font col-md-3 col-sm-6 no-longer">
                    <div className="inter-font talents-found mx-4">
                      <h2>
                        <CountUp end={4506} duration={3} separator="," />
                      </h2>
                      <p>Outsource Worker</p>
                    </div>
                  </div>

                  <div className="inter-font col-md-3 col-sm-6 no-longer">
                    <div className="inter-font talents-found mx-4">
                      <h2>
                        <CountUp end={15} duration={3} suffix="Y" />
                      </h2>
                      <p>Business Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}

      <div className="inter-font container main-bg pt-5">
        <div className="inter-font row">
          <div className="inter-font text-center">
            <h1 className="inter-font fw-bold">WHY CHOOSE US</h1>
            <p style={{ color: "#383636", fontSize: "1.1rem" }}>
              Our comprehensive suite of professional services caters to a
              diverse clientele, ranging from homeowners to commercial
              developers.
            </p>
          </div>
          <div className="inter-font col-md-6 mt-5 alignCenter">
            <h4 className="inter-font fw-bold">TRUE TALENTS</h4>
            <p>
              Our platform features a curated selection of professional
              <br className="inter-font break" />
              models, influencers, actors, athletes, & more, offering you{" "}
              <br className="inter-font break" />a seamless way to find & collaborate with
              the perfect.
            </p>
          </div>
          <div className="inter-font col-md-6 mt-5 chooseUs">
            <img src={whyChoose1} className="inter-font w-75" />
          </div>
          <div className="inter-font col-md-6 mt-5 chooseUs">
            <img src={whyChoose2} className="inter-font w-75" />
          </div>
          <div className="inter-font col-md-6 mt-5 chooseUs">
            <div>
              <h3 className="inter-font fw-bold">OUR SERVICES</h3>
              <p>
                Connect with us today and let’s make your next project a
                success!
              </p>
              <div className="inter-font d-flex ticks my-2">
                <img src={tick} alt="Tick" className="inter-font rounded-5 tick me-2" />
                <p>Talent Scouting & Shortlisting</p>
              </div>
              <div className="inter-font d-flex ticks my-2">
                <img src={tick} alt="Tick" className="inter-font rounded-5 tick me-2" />
                <p>Customized Campaigns</p>
              </div>
              <div className="inter-font d-flex ticks my-2">
                <img src={tick} alt="Tick" className="inter-font rounded-5 tick me-2" />
                <p>Photo & Video Production Assistance</p>
              </div>
              <div className="inter-font d-flex ticks my-2">
                <img src={tick} alt="Tick" className="inter-font rounded-5 tick me-2" />
                <p>Event Staffing & Coordination</p>
              </div>
              <div className="inter-font d-flex ticks my-2">
                <img src={tick} alt="Tick" className="inter-font rounded-5 tick me-2" />
                <p>Brand Collaborations & Partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Talents */}

      <div className="inter-font container position-relative" id="talents">
        <div
          className="inter-font top places-main rounded-5 p-4"
          style={{ backgroundColor: "#E98266", minHeight: "500px" }}
          id="places"
        >
          <div
            className="inter-font places-text mb-2 mb-md-0"
            style={{ marginTop: "60px" }}
            data-aos="zoom-out"
          >
            <h1 className="inter-font text-white fw-bold text-center">Meet Our Team</h1>
            <p className="inter-font text-center text-white">
              We are a passionate team of industry professionals dedicated to
              discovering, nurturing, <br /> and representing exceptional talent
              across various fields.
            </p>
          </div>

          <div className="inter-font row g-4 mt-3">
            <div className="inter-font d-flex justify-content-center align-items-center flex-nowrap team-container">
              {talents.map((talent, index) => (
                <div key={index} className="inter-font px-3 card-person me-2 rounded-4">
                  <div className="inter-font d-flex">
                    <div className="inter-font text-center">
                      <div
                        className="inter-font rounded-circle overflow-hidden mx-auto mb-2 meetOurTeam"
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
                      <h6 className="inter-font text-white mb-0 talent-name-size">
                        {talent.name}
                      </h6>
                      <small className="inter-font text-white">{talent.role}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="inter-font design-i">
          <img src={design} />
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
        <div>
          <h1 className="inter-font fw-bolder text-center" style={{ fontSize: "3.5rem" }}>
            Want To Hire Talent <br className="inter-font break" /> People from Us!
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
