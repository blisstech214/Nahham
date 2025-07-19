import React, { useEffect, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi2";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

import profile from "../../assets/images/Abdulluah-Talent.png";
import UAE from "../../assets/images/UAE flag.jpeg";

import Navbar from "./Navbar";
import DashboardFooter from "../TalentUserDashboard/DashboardFooter";

import AboutTab from "../../components/Profile/About";
import MyJob from "../../components/Profile/MyJob";
import Photos from "../../components/Profile/Photos";
import Videos from "../../components/Profile/Videos";
import EditProfile from "../../components/Profile/Edit-Profile";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [skillsData, setSkillsData] = useState(null);
  const hasFetchedProfile = useRef(false);

  const location = useLocation();

  const getQueryParam = (key) => {
    return new URLSearchParams(location.search).get(key);
  };

  const [activeTab, setActiveTab] = useState(
    getQueryParam("subTab") || "about"
  );

  useEffect(() => {
    const currentTab = getQueryParam("subTab");
    if (currentTab && currentTab !== activeTab) {
      setActiveTab(currentTab);
    }
  }, [location.search]);

  useEffect(() => {
    if (hasFetchedProfile.current) return;
    hasFetchedProfile.current = true;
    fetchProfile();
    fetchSkillsData();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await ApiService.request({
        method: "GET",
        url: `getProfile`,
      });
      const data = response.data;

      if (data.status) {
        setProfileData(data.data.talent);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const fetchSkillsData = async () => {
    try {
      const response = await ApiService.request({
        method: "GET",
        url: `getSkills`,
      });
      const data = response.data;

      if (data.status) {
        setSkillsData(data.data.skills);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching skills data:", error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBack = async () => {
    setIsEditing(false);
    await fetchProfile();
  };

  return (
    <div className="" style={{ minHeight: "100vh" }}>
      {isEditing ? (
        <EditProfile onBack={handleBack} />
      ) : (
        <div
          className="container ps-5 py-4 bg-white rounded-4 shadow mt-4"
          style={{ maxWidth: "900px" }}
        >
          <div className="row align-items-start">
            {/* Left: Profile + Tabs */}
            <div className="col-md-2 text-center">
              <img
                src={profile}
                className="rounded-circle"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                alt="Profile"
              />
              <div className="mb-3">
                {[
                  { id: "about", label: "About" },
                  { id: "jobs", label: "My Jobs" },
                  { id: "photos", label: "Photos" },
                  { id: "videos", label: "Videos" },
                ].map((tab) => (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`my-5 d-flex flex-column align-items-start ${
                      activeTab === tab.id ? "text-dark" : "text-muted"
                    }`}
                    style={{
                      cursor: "pointer",
                      width: "fit-content",
                    }}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <div
                        style={{
                          marginTop: "6px",
                          width: "25px",
                          height: "3px",
                          backgroundColor: "#CD496D",
                          borderRadius: "4px",
                          alignSelf: "flex-start",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Content */}
            <div className="col-md-10">
              <div className="d-flex align-items-start justify-content-between">
                <div>
                  <h3 className="fw-bold inter-font">
                    {profileData?.first_name} {profileData?.last_name}
                  </h3>
                  <p className="inter-font" style={{ color: "gray" }}>
                    <FaLocationDot className="me-1 text-dark" />
                    {profileData?.country}
                    <img
                      src={UAE}
                      className="ms-2 rounded-1"
                      style={{ width: "35px", objectFit: "cover" }}
                      alt="UAE Flag"
                    />
                  </p>
                </div>

                {activeTab === "about" && (
                  <button
                    className="btn text-white inter-font"
                    style={{
                      background: "#522A30",
                      borderRadius: "15px",
                      height: "44px",
                      width: "107px",
                      fontSize: "12px",
                    }}
                    onClick={handleEditClick}
                  >
                    <HiPencil /> Edit Profile
                  </button>
                )}
              </div>

              <div className="tab-content mt-4">
                {activeTab === "about" && (
                  <AboutTab profileData={profileData} skillsData={skillsData} />
                )}
                {activeTab === "jobs" && <MyJob />}
                {activeTab === "photos" && <Photos />}
                {activeTab === "videos" && <Videos />}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
