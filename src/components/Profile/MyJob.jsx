import React, { useEffect, useRef, useState } from 'react';
import profile from "../../assets/images/Abdulluah-Talent.png";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaLocationDot } from 'react-icons/fa6';
import { FaEdit, FaTrash } from "react-icons/fa";
import ApiService from "../../services/ApiService";
import { toast } from "react-toastify";

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
  const [editForm, setEditForm] = useState({ title: "", company: "", location: "" });

  const hasFetchedProfile = useRef(false);

  useEffect(() => {
    if (hasFetchedProfile.current) return;
    hasFetchedProfile.current = true;
    fetchJobData(1);
  }, []);

  useEffect(() => {
    if (confirmDeleteJob || editJobData) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [confirmDeleteJob, editJobData]);

  const fetchJobData = async (page = 1) => {
    try {
      setIsLoading(true);
      const response = await ApiService.request({
        method: "GET",
        url: `jobs/list?page=${page}`,
      });
      const data = response.data;
      if (data.status) {
        // toast.success(data.message);
        setJobData(data.data.jobs);
        setPagination(data.data.pagination);
      } else {
        toast.error(data.message);
        console.error("Failed to fetch Job List:", data.message);
      }
    } catch (error) {
      console.error("Error fetching Job List:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (page !== pagination.current_page && page >= 1 && page <= pagination.total_pages) {
      fetchJobData(page);
    }
  };

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const response = await ApiService.request({
        method: "DELETE",
        url: `jobs/${id}`,
      });

      const data = response.data;
      if (data.status) {
        // toast.success(data.message);
        setOpenMenuId(null);
        setConfirmDeleteJob(null); // close the popup
        await fetchJobData(1);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error Deleting Job:", error);
      toast.error("Something went wrong while deleting the job.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditJob = async () => {
    try {
      setIsLoading(true);

      const response = await ApiService.request({
        method: "POST",
        url: `jobs/createOrUpdate/${editJobData._id}`,
        data: editForm,
      });

      const data = response.data;
      if (data.status) {
        // toast.success(data.message);
        setEditJobData(null);
        setOpenMenuId(null);
        await fetchJobData(1); // reload job list
      } else {
        toast.error(data.message || "Failed to update job");
      }
    } catch (error) {
      console.error("Edit job error:", error);
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">

      {isLoading ? (
        <p>Loading…</p>
      ) : (
        <>
          <div
            style={{
              maxHeight: "400px", // or any height you prefer
              overflowY: "auto",
            }}
          >
            {jobData.length === 0 ? (
              <p className="text-center text-muted mt-4">No job data found.</p>
            ) : (
              jobData.map((job) => (
                <div key={job?._id} className="d-flex justify-content-between align-items-center my-3 border-bottom pb-3">
                  <div className="d-flex align-items-start justify-content-start">
                    <img
                      src={profile}
                      className="rounded-circle mt-1"
                      style={{ width: "54px", height: "54px", objectFit: "cover" }}
                      alt="Profile"
                    />
                    <div className="mt-1 ms-3">
                      <h5 className="inter-font mb-1" style={{ fontSize: "17px" }}>{job?.title}</h5>
                      <p className="m-0 mb-1 inter-font" style={{ fontSize: "16px" }}>{job?.company}</p>
                      <p className="inter-font m-0" style={{ color: "gray" }}>
                        <FaLocationDot className="me-1 text-dark" />
                        {job?.location}
                      </p>
                    </div>
                  </div>
                  <div className="position-relative">
                    <HiOutlineDotsVertical
                      fontSize={23}
                      className="cursor-pointer"
                      onClick={() => toggleMenu(job?._id)}
                    />
                    {openMenuId === job?._id && (
                      <div
                        className="position-absolute bg-white shadow rounded p-2"
                        style={{
                          top: "30px",
                          right: "0",
                          zIndex: 10,
                          minWidth: "120px"
                        }}
                      >
                        <div
                          className="d-flex align-items-center mb-2 cursor-pointer"
                          onClick={() => {
                            setEditJobData(job);
                            setEditForm({
                              title: job.title,
                              company: job.company,
                              location: job.location,
                            });
                          }}
                        >
                          <FaEdit className="me-2 text-primary" />
                          <span>Edit</span>
                        </div>
                        <div
                          className="d-flex align-items-center cursor-pointer"
                          onClick={() => setConfirmDeleteJob({ id: job?._id, title: job?.title })}
                        >
                          <FaTrash className="me-2 text-danger" />
                          <span>Delete</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>


          {/* Pagination Section */}
          {pagination.total_pages > 1 && (
            <div className="pagination-container d-flex justify-content-center mt-4">
              <ul className="pagination-list list-unstyled d-flex gap-2">
                <li
                  className={`page-item inter-font ${pagination.current_page === 1 ? "disabled" : ""}`}
                  onClick={() => handlePageChange(pagination.current_page - 1)}
                  style={{ cursor: "pointer" }}
                >
                  {"<"}
                </li>

                {Array.from({ length: pagination.total_pages }, (_, i) => (
                  <li
                    key={i + 1}
                    className={`page-item inter-font ${pagination.current_page === i + 1 ? "active text-white bg-dark px-2 py-1 rounded" : "px-2 py-1"
                      }`}
                    onClick={() => handlePageChange(i + 1)}
                    style={{ cursor: "pointer" }}
                  >
                    {i + 1}
                  </li>
                ))}

                <li
                  className={`page-item inter-font ${pagination.current_page === pagination.total_pages ? "disabled" : ""
                    }`}
                  onClick={() => handlePageChange(pagination.current_page + 1)}
                  style={{ cursor: "pointer" }}
                >
                  {">"}
                </li>
              </ul>
            </div>
          )}
        </>
      )}

      {confirmDeleteJob && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }
          }
        >
          <div className="modal-dialog modal-dialog-centered" >
            <div
              className="modal-content border-0 shadow-lg rounded-4"
              style={{ backgroundColor: "#fff6f1" }} // light warm background
            >
              <div className="modal-header border-0" >
                <h5 className="modal-title fw-bold text-danger" >
                  <i className="bi bi-exclamation-triangle-fill me-2" > </i>
                  Confirm Delete
                </h5>
                < button
                  type="button"
                  className="btn-close"
                  onClick={() => { setConfirmDeleteJob(null); setOpenMenuId(null); }}
                > </button>
              </div>

              < div className="modal-body" >
                <p className="mb-0 text-dark" >
                  Are you sure you want to delete the job:
                  <strong className="text-danger" > {confirmDeleteJob.title} </strong>?
                </p>
              </div>

              < div className="modal-footer border-0" >
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: "#f2f2f2",
                    color: "#333",
                    border: "1px solid #ccc",
                  }}
                  onClick={() => { setConfirmDeleteJob(null); setOpenMenuId(null); }}
                >
                  Cancel
                </button>
                < button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: "#e15d4f", // Coral red
                    color: "#fff",
                  }}
                  onClick={() => handleDelete(confirmDeleteJob.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {editJobData && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content border-0 shadow-lg rounded-4"
              style={{ backgroundColor: "#fff6f1" }} // soft theme background
            >
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">Edit Job</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => { setEditJobData(null); setOpenMenuId(null); }}
                ></button>
              </div>

              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editForm.title}
                    onChange={(e) =>
                      setEditForm({ ...editForm, title: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editForm.company}
                    onChange={(e) =>
                      setEditForm({ ...editForm, company: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editForm.location}
                    onChange={(e) =>
                      setEditForm({ ...editForm, location: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="modal-footer border-0">
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#f2f2f2",
                    color: "#333",
                    border: "1px solid #ccc",
                  }}
                  onClick={() => { setEditJobData(null); setOpenMenuId(null); }}
                >
                  Cancel
                </button>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#e15d4f", // Coral red
                    color: "#fff",
                  }}
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
}

export default MyJob;
