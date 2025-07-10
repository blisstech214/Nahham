import React, { useState, useEffect, useRef } from "react";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";

const Photos = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const hasFetchedProfile = useRef(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (hasFetchedProfile.current) return;
    hasFetchedProfile.current = true;
    const fetchMedia = async () => {
      try {
        setIsLoading(true);
        const res = await ApiService.request({
          method: "GET",
          url: `/getMedia`,
          params: { type: "photo", page: currentPage },
        });

        // Full response for debugging
        console.log("MEDIA‑API", res.data);

        const payload = res.data?.data;
        // toast.success(res.data.message)
        setMediaFiles(payload?.media_files || []);
        setTotalPages(payload?.pagination?.total_pages || 1);
      } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.message || "Failed to load photos");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMedia();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page !== currentPage && page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(
        <li
          key={1}
          className="page-item inter-font"
          onClick={() => handlePageChange(1)}
        >
          1
        </li>
      );
      if (startPage > 2) {
        pages.push(
          <li key="ellipsis-start" className="page-item inter-font">
            ...
          </li>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item inter-font ${currentPage === i ? "active" : ""
            }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <li key="ellipsis-end" className="page-item inter-font">
            ...
          </li>
        );
      }
      pages.push(
        <li
          key={totalPages}
          className="page-item inter-font"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </li>
      );
    }

    return pages;
  };

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showPrevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const showNextImage = () => {
    if (selectedImageIndex < mediaFiles.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading Photos…</p>
      ) : (
        <>
          <div className="row g-2">
            {mediaFiles.length === 0 && <p>No photos found.</p>}

            {mediaFiles.map((m, index) => (
              <div key={m._id} className="col-md-4">
                <img
                  src={m.file || "/placeholder.png"}
                  alt={m.name || "photo"}
                  crossOrigin="anonymous"
                  className="rounded-3 mb-2"
                  style={{ width: 220, height: 200, objectFit: "cover", cursor: "pointer" }}
                  onClick={() => openModal(index)}
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination-container">
              <ul className="pagination-list">
                <li
                  className="page-item arrow"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  &lt;
                </li>
                {renderPagination()}
                <li
                  className="page-item arrow"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  &gt;
                </li>
              </ul>
            </div>
          )}
        </>
      )}

      {isModalOpen && (
        <div
          className="modal-backdrop"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", maxWidth: "90%", maxHeight: "90%" }}
          >

            {/* Close Icon */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "white",
                color: "black",
                border: "none",
                fontSize: "25px",
                height: "50px",
                width: "50px",
                padding: "6px 10px",
                borderRadius: "50%",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              ✕
            </button>

            <img
              src={mediaFiles[selectedImageIndex]?.file || "/placeholder.png"}
              alt="Selected"
              style={{ maxHeight: "80vh", maxWidth: "100%", borderRadius: "10px" }}
              onError={(e) => (e.currentTarget.src = "/placeholder.png")}
            />

            {/* Left Button */}
            {selectedImageIndex > 0 && (
              <button
                onClick={showPrevImage}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "-40px",
                  fontSize: "2rem",
                  color: "white",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transform: "translateY(-50%)",
                }}
              >
                ‹
              </button>
            )}

            {/* Right Button */}
            {selectedImageIndex < mediaFiles.length - 1 && (
              <button
                onClick={showNextImage}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "-40px",
                  fontSize: "2rem",
                  color: "white",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transform: "translateY(-50%)",
                }}
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}

    </div>

  );



};

export default Photos;
