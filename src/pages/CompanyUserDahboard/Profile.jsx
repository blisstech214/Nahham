import React, { useEffect, useRef, useState } from 'react';
import profile from "../../assets/images/Abdulluah-Talent.png";
import Navbar from "./Navbar"
import DashboardFooter from "../CompanyUserDahboard/DashboardFooter"
import { FaLocationDot } from "react-icons/fa6";
import UAE from "../../assets/images/UAE flag.jpeg"
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ApiService from '../../services/ApiService';
import { toast } from 'react-toastify';


const Profile = () => {
  const [locationName, setLocationName] = useState("Abu Dhabi, UAE");
  const [profileData, setProfileData] = useState(null);
  const hasFetchedProfile = useRef(false);

  useEffect(() => {
    if (hasFetchedProfile.current) return;
    hasFetchedProfile.current = true;
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await ApiService.request({
        method: "GET",
        url: `/company/getProfile`,
      });
      const data = response.data;
      if (data.status) {
        // toast.success(data.message);
        setProfileData(data.data.company);
        setLocationName(data.data.company.location || "Abu Dhabi, UAE");
      } else {
        toast.error(data.message);
        console.error("Failed to fetch profile:", data.message);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
    }
  };

  const LocationMarker = ({ setLocationName }) => {
    const [position, setPosition] = useState([24.4539, 54.3773]); // Default: Abu Dhabi

    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);

        // Reverse geocode using a free API (e.g. OpenStreetMap Nominatim)
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${e.latlng.lat}&lon=${e.latlng.lng}`
        )
          .then((res) => res.json())
          .then((data) => {
            setLocationName(data.display_name || "Unknown location");
          });
      },
    });

    return position === null ? null : <Marker position={position} />;
  };

    if (!profileData) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className="main-bg py-5" style={{ height: "100vh" }}>
      {/* Navbar */}
      <Navbar />

      {/* Body */}
      <div
        className="container px-5 py-4 bg-white rounded-4 shadow"
        style={{ width: "822px", height: "auto" }}
      >
        <div className="row">
          <div className="col-md-2">
            <img src={profile} />
            {/* <img src={profileData?.logo || profile} /> */}
          </div>
          <div className="col-md-10">
            <h2 className="inter-font">{profileData?.company_name}</h2>
            <p
              className="inter-font"
              style={{ color: "rgba(147, 147, 147, 1)" }}
            >
              <FaLocationDot className="text-dark" /> {profileData?.location}
              <img
                src={UAE}
                className="rounded-1 ms-2"
                style={{ width: "40px" }}
              />
            </p>
            <p
              className="inter-font"
              style={{ color: "rgba(147, 147, 147, 1)", fontSize: "15px" }}
            >
              {profileData?.about}
              <span className="text-danger"> Read More... </span>
            </p>
            <div className="row">
              <div className="col-md-6 profile-details-dashboard">
                <div>
                  <h6>Email Address</h6>
                  <p>{profileData?.email}</p>
                </div>

                <div className="my-4">
                  <h6>Address</h6>
                  <p>{locationName}</p>
                </div>

                <div>
                  <MapContainer
                    center={[24.4539, 54.3773]}
                    zoom={10}
                    style={{
                      height: "200px",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <LocationMarker setLocationName={setLocationName} />
                  </MapContainer>

                  <p className="mt-2 text-center">{locationName}</p>
                </div>
                <div className="mt-4">
                  <button className="btn btn-base inter-font">
                    Edit Profile
                  </button>
                </div>
              </div>
              <div className="col-md-6 profile-details-dashboard">
                <div>
                  <h6>Phone Number</h6>
                  <p>
                    +{profileData?.phone}{" "}
                    {profileData?.secondary_phone && (
                      <>
                        <span className="mx-2">|</span> +{profileData?.secondary_phone}
                      </>
                    )}
                  </p>
                </div>
                <div className="my-4">
                  <h6>Type of Business</h6>
                  <p>ProductionHouse, Studio</p>
                </div>

                <div>
                  <h6 className="mt-2">Categories:</h6>
                  <p>Acting, Production, Casting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <DashboardFooter />
      </div>
    </div>
  );
}

export default Profile;
