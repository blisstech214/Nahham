import React, { useEffect, useRef, useState } from "react";
import profile from "../../assets/images/Abdulluah-Talent.png";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
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
  const [editForm, setEditForm] = useState({
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

  const renderJobCard = (job) => (
    <div
      key={job._id}
      className="d-flex justify-content-between align-items-center my-3 border-bottom pb-3"
    >
      <div className="d-flex align-items-start">
        <img
          src={profile}
          className="rounded-circle mt-1"
          style={{ width: 54, height: 54, objectFit: "cover" }}
          alt="Profile"
        />
        <div className="mt-1 ms-3">
          <h5 className="inter-font mb-1" style={{ fontSize: "17px" }}>
            {job.title}
          </h5>
          <p className="m-0 mb-1 inter-font" style={{ fontSize: "16px" }}>
            {job.company}
          </p>
          <p className="inter-font m-0 text-muted">
            <FaLocationDot className="me-1 text-dark" />
            {job.location}
          </p>
        </div>
      </div>
      <div className="position-relative">
        <HiOutlineDotsVertical
          fontSize={23}
          className="cursor-pointer"
          onClick={() => setOpenMenuId(openMenuId === job._id ? null : job._id)}
        />
        {openMenuId === job._id && (
          <div
            className="position-absolute bg-white shadow rounded p-2"
            style={{ top: "30px", right: 0, zIndex: 10 }}
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
              onClick={() =>
                setConfirmDeleteJob({ id: job._id, title: job.title })
              }
            >
              <FaTrash className="me-2 text-danger" />
              <span>Delete</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading…</p>
      ) : (
        <>
          <div style={{ maxHeight: "400px", overflowY: "auto" }}>
            {jobData.length === 0 ? (
              <p className="text-center text-muted mt-4">No job data found.</p>
            ) : (
              jobData.map(renderJobCard)
            )}
          </div>

          {/* Pagination */}
          {pagination.total_pages > 1 && (
            <div className="d-flex justify-content-center mt-4">
              <ul className="list-unstyled d-flex gap-2">
                <li
                  className={`inter-font ${
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
                    className={`inter-font px-2 py-1 rounded ${
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
                  className={`inter-font ${
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
          )}
        </>
      )}

      {/* Delete Confirmation Modal */}
      {confirmDeleteJob && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content border-0 shadow-lg rounded-4"
              style={{ backgroundColor: "#fff6f1" }}
            >
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold text-danger">
                  Confirm Delete
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setConfirmDeleteJob(null);
                    setOpenMenuId(null);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <p className="mb-0 text-dark">{`Are you sure you want to delete the job: ${confirmDeleteJob.title}`}</p>
              </div>
              <div className="modal-footer border-0">
                <button
                  className="btn btn-light"
                  onClick={() => {
                    setConfirmDeleteJob(null);
                    setOpenMenuId(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="btn"
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

      {/* Edit Job Modal */}
      {editJobData && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content border-0 shadow-lg rounded-4"
              style={{ backgroundColor: "#fff6f1" }}
            >
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">Edit Job</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setEditJobData(null);
                    setOpenMenuId(null);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                {["title", "company", "location"].map((field) => (
                  <div className="mb-3" key={field}>
                    <label className="form-label">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={editForm.location}
                      onChange={(e) =>
                        setEditForm({ ...editForm, location: e.target.value })
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="modal-footer border-0">
                <button
                  className="btn btn-light"
                  onClick={() => {
                    setEditJobData(null);
                    setOpenMenuId(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="btn"
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
