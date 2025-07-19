import React, { useState, useEffect, useRef } from "react";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";
import { FaPlay } from "react-icons/fa";

const Video = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const hasFetchedOnce = useRef(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  useEffect(() => {
    fetchMedia(currentPage);
  }, [currentPage]);

  const fetchMedia = async (page) => {
    if (hasFetchedOnce.current && page === currentPage) return;
    hasFetchedOnce.current = true;

    try {
      setIsLoading(true);
      const res = await ApiService.request({
        method: "GET",
        url: "/getMedia",
        params: { type: "video", page },
      });

      const payload = res.data?.data;
      setMediaFiles(payload?.media_files || []);
      setTotalPages(payload?.pagination?.total_pages || 1);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to load videos");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (page !== currentPage && page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const openModal = (index) => {
    setSelectedVideoIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const showPrevVideo = () => {
    if (selectedVideoIndex > 0) {
      setSelectedVideoIndex(selectedVideoIndex - 1);
    }
  };

  const showNextVideo = () => {
    if (selectedVideoIndex < mediaFiles.length - 1) {
      setSelectedVideoIndex(selectedVideoIndex + 1);
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
        <li key={1} className="page-item" onClick={() => handlePageChange(1)}>
          1
        </li>
      );
      if (startPage > 2) {
        pages.push(
          <li key="ellipsis-start" className="page-item">
            ...
          </li>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <li key="ellipsis-end" className="page-item">
            ...
          </li>
        );
      }
      pages.push(
        <li
          key={totalPages}
          className="page-item"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </li>
      );
    }

    return pages;
  };

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading Videos…</p>
      ) : (
        <>
          <div className="row g-3">
            {mediaFiles.length === 0 && (
              <p className="text-center">No videos found.</p>
            )}

            {mediaFiles.map((m, index) => (
              <div key={m._id} className="col-md-4">
                <div className="card border-0 shadow-sm position-relative rounded-3 overflow-hidden">
                  <div className="ratio ratio-16x9">
                    <video
                      id={`video-${m._id}`}
                      src={m.file}
                      className="w-100 h-100"
                      style={{ objectFit: "cover", borderRadius: "12px" }}
                      controls={false}
                      onError={(e) =>
                        (e.currentTarget.src = "/placeholder.png")
                      }
                    />
                  </div>

                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                    onClick={() => openModal(index)}
                    style={{
                      background: "rgba(0, 0, 0, 0.3)",
                      cursor: "pointer",
                      transition: "background 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(0,0,0,0.5)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "rgba(0,0,0,0.3)")
                    }
                  >
                    <FaPlay size={30} color="white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination-container mt-4 d-flex justify-content-center">
              <ul className="pagination-list d-flex gap-2 list-unstyled">
                <li
                  className="page-item arrow"
                  onClick={() => handlePageChange(currentPage - 1)}
                  style={{ cursor: "pointer" }}
                >
                  &lt;
                </li>
                {renderPagination()}
                <li
                  className="page-item arrow"
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

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal-backdrop"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
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
              marginTop: "80px",
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
                padding: "6px 10px",
                borderRadius: "50%",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              ✕
            </button>

            <video
              key={mediaFiles[selectedVideoIndex]?._id}
              src={mediaFiles[selectedVideoIndex]?.file || "/placeholder.png"}
              controls
              autoPlay
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                borderRadius: "12px",
                backgroundColor: "#000",
                width: "100%",
                height: "100%",
              }}
              onError={(e) => (e.currentTarget.src = "/placeholder.png")}
            />

            {selectedVideoIndex > 0 && (
              <button
                onClick={showPrevVideo}
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

            {selectedVideoIndex < mediaFiles.length - 1 && (
              <button
                onClick={showNextVideo}
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

export default Video;
