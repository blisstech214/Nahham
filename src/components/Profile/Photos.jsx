import React, { useState, useEffect } from "react";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";

const Photos = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    fetchMedia(currentPage);
  }, [currentPage]);

  const fetchMedia = async (page) => {
    try {
      setIsLoading(true);
      const res = await ApiService.request({
        method: "GET",
        url: `/getMedia`,
        params: { type: "photo", page },
      });

      const payload = res.data?.data;
      setMediaFiles(payload?.media_files || []);
      setTotalPages(payload?.pagination?.total_pages || 1);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to load photos");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

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

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start < maxVisiblePages - 1) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    if (start > 1) {
      pages.push(<li key={1} onClick={() => handlePageChange(1)}>1</li>);
      if (start > 2) pages.push(<li key="dots-start">…</li>);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <li
          key={i}
          onClick={() => handlePageChange(i)}
          className={ i === currentPage ? "active" : ""}
          style={{ cursor: "pointer" }}
        >
          {i}
        </li>
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push(<li key="dots-end">…</li>);
      pages.push(<li key={totalPages} onClick={() => handlePageChange(totalPages)}>{totalPages}</li>);
    }

    return pages;
  };

  return (
    <div className="inter-font container">
      {isLoading ? (
        <p>Loading Photos…</p>
      ) : (
        <>
          <div className="inter-font row g-2">
            {mediaFiles.length === 0 && <p>No photos found.</p>}

            {mediaFiles.map((m, index) => (
              <div key={m._id} className="inter-font col-md-4">
                <img
                  src={m.file || "/placeholder.png"}
                  alt={m.name || "photo"}
                  crossOrigin="anonymous"
                  className="inter-font rounded-3 mb-2"
                  style={{
                    width: 220,
                    height: 200,
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => openModal(index)}
                  onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                />
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="inter-font pagination-container mt-3 d-flex justify-content-center">
              <ul className="inter-font pagination d-flex gap-2 list-unstyled">
                <li
                  onClick={() => handlePageChange(currentPage - 1)}
                  style={{ cursor: "pointer" }}
                >
                  &lt;
                </li>
                {renderPagination()}
                <li
                  onClick={() => handlePageChange(currentPage + 1)}
                  style={{ cursor: "pointer" }}
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
          className="inter-font modal-backdrop"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "90%",
              width: "60%",
              height: "70%",
              marginTop:'80px'
            }}
          >
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
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "10px",
              }}
              onError={(e) => (e.currentTarget.src = "/placeholder.png")}
            />

            {selectedImageIndex > 0 && (
              <button
                onClick={showPrevImage}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "-40px",
                  fontSize: "2.5rem",
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

            {selectedImageIndex < mediaFiles.length - 1 && (
              <button
                onClick={showNextImage}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "-40px",
                  fontSize: "2.5rem",
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
