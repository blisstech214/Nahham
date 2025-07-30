import React, { useEffect, useRef, useState } from "react";
import profile from "../../assets/images/Abdulluah-Talent.png";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { FaEdit, FaTrash } from "react-icons/fa";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";
import { Button, Col, Row } from "react-bootstrap";
import { ChevronRight, ChevronLeft } from "lucide-react";

const MyJob = () => {
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [pagination, setPagination] = useState({
    total_pages: 1,
    current_page: 1,
  });

  const [confirmDeleteJob, setConfirmDeleteJob] = useState(null);
  const [editJobData, setEditJobData] = useState(null);
  const [createJobData, setCreateJobData] = useState(false);
  const [editForm, setEditForm] = useState({
    title: "",
    company: "",
    location: "",
  });
  const [createForm, setCreateForm] = useState({
    title: "",
    company: "",
    location: "",
  });

  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    fetchJobData(1);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      confirmDeleteJob || editJobData ? "hidden" : "auto";
  }, [confirmDeleteJob, editJobData]);

  const fetchJobData = async (page = 1) => {
    try {
      setIsLoading(true);
      const res = await ApiService.request({
        method: "GET",
        url: `jobs/list?page=${page}`,
      });

      const data = res.data;
      if (data.status) {
        setJobData(data.data.jobs);
        setPagination(data.data.pagination);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error("Fetch Job Error:", err);
      toast.error("Failed to fetch jobs.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (
      page !== pagination.current_page &&
      page >= 1 &&
      page <= pagination.total_pages
    ) {
      fetchJobData(page);
    }
  };

  const handleDeleteJob = async () => {
    try {
      setIsLoading(true);
      const res = await ApiService.request({
        method: "DELETE",
        url: `jobs/${confirmDeleteJob.id}`,
      });

      if (res.data.status) {
        setConfirmDeleteJob(null);
        setOpenMenuId(null);
        await fetchJobData(1);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error("Delete Error:", err);
      toast.error("Failed to delete job.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateJob = async () => {
    try {
      setIsLoading(true);
      const res = await ApiService.request({
        method: "POST",
        url: `jobs/createOrUpdate`,
        data: createForm,
      });

      if (res.data.status) {
        setCreateJobData(false);
        await fetchJobData(1);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error("Edit Error:", err);
      toast.error("Failed to update job.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditJob = async () => {
    try {
      setIsLoading(true);
      const res = await ApiService.request({
        method: "POST",
        url: `jobs/createOrUpdate/${editJobData._id}`,
        data: editForm,
      });

      if (res.data.status) {
        setEditJobData(null);
        setOpenMenuId(null);
        await fetchJobData(1);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error("Edit Error:", err);
      toast.error("Failed to update job.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderJobCard = (job) => {
    console.log("job ---- ", job);
    return (
      <div
        key={job._id}
        className="inter-font d-flex justify-content-between align-items-center my-3 border-bottom pb-3"
      >
        <div className="inter-font d-flex align-items-start">
          <img
            src={profile}
            className="inter-font rounded-circle mt-1"
            style={{ width: 54, height: 54, objectFit: "cover" }}
            alt="Profile"
          />
          <div className="inter-font mt-1 ms-3">
            <h5 className="inter-font inter-font mb-1" style={{ fontSize: "17px" }}>
              {job.title}
            </h5>
            <p className="inter-font m-0 mb-1 inter-font" style={{ fontSize: "16px" }}>
              {job.company}
            </p>
            <p className="inter-font inter-font m-0 text-muted">
              <FaLocationDot className="inter-font me-1 text-dark" />
              {job.location}
            </p>
          </div>
        </div>
        <div className="inter-font position-relative">
          <HiOutlineDotsVertical
            fontSize={23}
            className="inter-font cursor-pointer"
            onClick={() =>
              setOpenMenuId(openMenuId === job._id ? null : job._id)
            }
          />
          {openMenuId === job._id && (
            <div
              className="inter-font position-absolute bg-white shadow rounded p-2"
              style={{ top: "30px", right: 0, zIndex: 10 }}
            >
              <div
                className="inter-font d-flex align-items-center mb-2 cursor-pointer"
                onClick={() => {
                  setEditJobData(job);
                  setEditForm({
                    title: job.title,
                    company: job.company,
                    location: job.location,
                  });
                }}
              >
                <FaEdit className="inter-font me-2 text-primary" />
                <span>Edit</span>
              </div>
              <div
                className="inter-font d-flex align-items-center cursor-pointer"
                onClick={() =>
                  setConfirmDeleteJob({ id: job._id, title: job.title })
                }
              >
                <FaTrash className="inter-font me-2 text-danger" />
                <span>Delete</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // const handlePageChange = (newPage) => {
  //   if (
  //     newPage >= 1 &&
  //     newPage <= pagination.total_pages &&
  //     newPage !== pagination.current_page
  //   ) {
  //     fetchProjectData(newPage);
  //   }
  // };

  const { current_page, total_pages } = pagination;

  // Generate page numbers (for large datasets show 1,2,3,...,last)
  const getPages = () => {
    const pages = [];

    if (total_pages <= 5) {
      for (let i = 1; i <= total_pages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (current_page > 3) {
        pages.push("...");
      }
      for (
        let i = Math.max(2, current_page - 1);
        i <= Math.min(total_pages - 1, current_page + 1);
        i++
      ) {
        pages.push(i);
      }
      if (current_page < total_pages - 2) {
        pages.push("...");
      }
      pages.push(total_pages);
    }

    return pages;
  };

  const pages = getPages();

  return (
    <div className="inter-font container">
      {isLoading ? (
        <p>Loading…</p>
      ) : (
        <>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
            }}
          >
            <button
              className="inter-font btn inter-font"
              style={{ backgroundColor: "#e15d4f", color: "#fff" }}
              onClick={() => setCreateJobData(true)}
            >
              Create Job
            </button>
          </div>
          <div style={{ maxHeight: "400px", overflowY: "auto" }}>
            {jobData.length === 0 ? (
              <p className="inter-font text-center text-muted mt-4">No job data found.</p>
            ) : (
              jobData.map(renderJobCard)
            )}
          </div>

          <Row className="inter-font mt-4">
            <Col className="inter-font d-flex justify-content-center align-items-center gap-5 flex-wrap inter-font">
              {/* Pagination Numbers */}
              <Button
                size="sm"
                variant="link"
                disabled={current_page === 1}
                onClick={() => handlePageChange(current_page - 1)}
                style={{
                  width: "36px",
                  height: "36px",
                  padding: 0,
                  borderRadius: "50%",
                  backgroundColor: "#E46D54",
                  color: "#fff",
                  border: "none",
                }}
              >
                <ChevronLeft size={18} />
              </Button>

              {pages.map((page, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant={page === current_page ? "danger" : "link"}
                  style={{
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    padding: 0,
                    backgroundColor:
                      page === current_page ? "#E46D54" : "transparent",
                    color: page === current_page ? "#fff" : "#666",
                    fontWeight: page === current_page ? "600" : "400",
                    border: "none",
                    fontSize: "14px",
                  }}
                  disabled={page === "..."}
                  onClick={() => page !== "..." && handlePageChange(page)}
                >
                  {page}
                </Button>
              ))}

              {/* Next Arrow */}
              <Button
                size="sm"
                variant="link"
                disabled={current_page === total_pages}
                onClick={() => handlePageChange(current_page + 1)}
                style={{
                  width: "36px",
                  height: "36px",
                  padding: 0,
                  borderRadius: "50%",
                  backgroundColor: "#E46D54",
                  color: "#fff",
                  border: "none",
                }}
              >
                <ChevronRight size={18} />
              </Button>

              {/* View All Button */}
              <Button
                size="sm"
                style={{
                  backgroundColor: "#E46D54",
                  border: "none",
                  padding: "6px 20px",
                  borderRadius: "10px",
                  color: "#fff",
                  marginLeft: "10px",
                }}
                // onClick={handleViewAll}
              >
                View All
              </Button>
            </Col>
          </Row>

          {/* Pagination */}
          {/* {pagination.total_pages > 1 && (
            <div className="inter-font d-flex justify-content-center mt-4">
              <ul className="inter-font list-unstyled d-flex gap-2">
                <li
                  className={inter-font `inter-font ${
                    pagination.current_page === 1
                      ? "text-muted"
                      : "cursor-pointer"
                  }`}
                  onClick={() => handlePageChange(pagination.current_page - 1)}
                >
                  {"<"}
                </li>
                {Array.from({ length: pagination.total_pages }, (_, i) => (
                  <li
                    key={i + 1}
                    className={inter-font `inter-font px-2 py-1 rounded ${
                      pagination.current_page === i + 1
                        ? "bg-dark text-white"
                        : "cursor-pointer"
                    }`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </li>
                ))}
                <li
                  className={inter-font `inter-font ${
                    pagination.current_page === pagination.total_pages
                      ? "text-muted"
                      : "cursor-pointer"
                  }`}
                  onClick={() => handlePageChange(pagination.current_page + 1)}
                >
                  {">"}
                </li>
              </ul>
            </div>
          )} */}
        </>
      )}

      {/* Delete Confirmation Modal */}
      {confirmDeleteJob && (
        <div
          className="inter-font modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="inter-font modal-dialog modal-dialog-centered">
            <div
              className="inter-font modal-content border-0 shadow-lg rounded-4"
              style={{ backgroundColor: "#fff6f1" }}
            >
              <div className="inter-font modal-header border-0">
                <h5 className="inter-font modal-title fw-bold text-danger">
                  Confirm Delete
                </h5>
                <button
                  type="button"
                  className="inter-font btn-close"
                  onClick={() => {
                    setConfirmDeleteJob(null);
                    setOpenMenuId(null);
                  }}
                ></button>
              </div>
              <div className="inter-font modal-body">
                <p className="inter-font mb-0 text-dark">{`Are you sure you want to delete the job: ${confirmDeleteJob.title}`}</p>
              </div>
              <div className="inter-font modal-footer border-0">
                <button
                  className="inter-font btn btn-light"
                  onClick={() => {
                    setConfirmDeleteJob(null);
                    setOpenMenuId(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="inter-font btn"
                  style={{ backgroundColor: "#e15d4f", color: "#fff" }}
                  onClick={handleDeleteJob}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* create Job Modal */}
      {createJobData && (
        <div
          className="inter-font modal fade show d-block inter-font"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="inter-font modal-dialog modal-dialog-centered">
            <div
              className="inter-font modal-content border-0 shadow-lg rounded-4"
              style={{ backgroundColor: "#fff6f1" }}
            >
              <div className="inter-font modal-header border-0">
                <h5 className="inter-font modal-title fw-bold inter-font">Create Job</h5>
                <button
                  type="button"
                  className="inter-font btn-close"
                  onClick={() => {
                    setCreateJobData(false);
                  }}
                ></button>
              </div>
              <div className="inter-font modal-body">
                {["title", "company", "location"].map((field) => (
                  <div className="inter-font mb-3" key={field}>
                    <label className="inter-font form-label inter-font">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type="text"
                      className="inter-font form-control"
                      value={createForm?.[field]}
                      onChange={(e) =>
                        setCreateForm({
                          ...createForm,
                          [field]: e.target.value,
                        })
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="inter-font modal-footer border-0">
                <button
                  className="inter-font btn btn-light inter-font"
                  onClick={() => {
                    setCreateJobData(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="inter-font btn inter-font"
                  style={{ backgroundColor: "#e15d4f", color: "#fff" }}
                  onClick={handleCreateJob}
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Job Modal */}
      {editJobData && (
        <div
          className="inter-font modal fade show d-block inter-font"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="inter-font modal-dialog modal-dialog-centered">
            <div
              className="inter-font modal-content border-0 shadow-lg rounded-4"
              style={{ backgroundColor: "#fff6f1" }}
            >
              <div className="inter-font modal-header border-0">
                <h5 className="inter-font modal-title fw-bold inter-font">Edit Job</h5>
                <button
                  type="button"
                  className="inter-font btn-close"
                  onClick={() => {
                    setEditJobData(null);
                    setOpenMenuId(null);
                  }}
                ></button>
              </div>
              <div className="inter-font modal-body">
                {["title", "company", "location"].map((field) => (
                  <div className="inter-font mb-3" key={field}>
                    <label className="inter-font form-label inter-font">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type="text"
                      className="inter-font form-control"
                      value={editForm?.[field]}
                      onChange={(e) =>
                        setEditForm({ ...editForm, [field]: e.target.value })
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="inter-font modal-footer border-0">
                <button
                  className="inter-font btn btn-light inter-font"
                  onClick={() => {
                    setEditJobData(null);
                    setOpenMenuId(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="inter-font btn inter-font"
                  style={{ backgroundColor: "#e15d4f", color: "#fff" }}
                  onClick={handleEditJob}
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyJob;
