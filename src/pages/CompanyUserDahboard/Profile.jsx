import React, { useEffect, useRef, useState } from "react";
import profile from "../../assets/images/Abdulluah-Talent.png";
import UAE from "../../assets/images/UAE flag.jpeg";
import { FaLocationDot } from "react-icons/fa6";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";

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
        setProfileData(data.data.company);
        setLocationName(data.data.company.location || "Abu Dhabi, UAE");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const LocationMarker = ({ setLocationName }) => {
    const [position, setPosition] = useState([24.4539, 54.3773]);

    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${e.latlng.lat}&lon=${e.latlng.lng}`
        )
          .then((res) => res.json())
          .then((data) => {
            setLocationName(data.display_name || "Unknown location");
          });
      },
    });

    return <Marker position={position} />;
  };

  if (!profileData) {
    return (
      <div
        className="inter-font d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className="inter-font py-4 px-3" style={{ minHeight: "100vh" }}>
      <div
        className="inter-font mx-auto bg-white rounded-4 shadow p-4"
        style={{ maxWidth: "850px", width: "100%" }}
      >
        <div className="inter-font row align-items-start">
          {/* Profile Image */}
          <div className="inter-font col-12 col-md-2 text-center mb-3 mb-md-0">
            <img
              src={profile}
              className="inter-font img-fluid rounded-circle"
              alt="Profile"
            />
          </div>

          {/* Profile Info */}
          <div className="inter-font col-12 col-md-10">
            <h2 className="inter-font inter-font">{profileData?.company_name}</h2>
            <p className="inter-font inter-font text-muted d-flex align-items-center flex-wrap">
              <FaLocationDot className="inter-font me-2 text-dark" />
              {profileData?.location}
              <img
                src={UAE}
                className="inter-font rounded-1 ms-2"
                style={{ width: "30px", height: "20px" }}
                alt="UAE"
              />
            </p>

            <p className="inter-font inter-font text-muted" style={{ fontSize: "15px" }}>
              {profileData?.about}
              <span className="inter-font text-danger"> Read More...</span>
            </p>

            <div className="inter-font row">
              {/* Left Column */}
              <div className="inter-font col-12 col-md-6 mb-4">
                <h6 style={{ color: "#595959" }}>Email Address</h6>
                <p style={{ color: "#939393" }}>{profileData?.email}</p>

                <h6 style={{ color: "#595959" }} className="inter-font mt-3">
                  Address
                </h6>
                <p style={{ color: "#939393" }}>{locationName}</p>

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

                <p className="inter-font mt-2 text-center">{locationName}</p>

                <button className="inter-font btn btn-base inter-font w-100 mt-3">
                  Edit Profile
                </button>
              </div>

              {/* Right Column */}
              <div className="inter-font col-12 col-md-6">
                <h6 style={{ color: "#595959" }}>Phone Number</h6>
                <p style={{ color: "#939393" }}>
                  +{profileData?.phone}
                  {profileData?.secondary_phone && (
                    <>
                      <span className="inter-font mx-2">|</span> +
                      {profileData?.secondary_phone}
                    </>
                  )}
                </p>

                <h6 className="inter-font mt-3" style={{ color: "#595959" }}>
                  Type of Business
                </h6>
                <p style={{ color: "#939393" }}>Production House, Studio</p>

                <h6 style={{ color: "#595959" }} className="inter-font mt-3">
                  Categories
                </h6>
                <p style={{ color: "#939393" }}>Acting, Production, Casting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
