import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Password = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChangePassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const currentPassword = form.currentPassword.value;
    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log({ currentPassword, newPassword });
    // API call here
  };

  return (
    <>
      <form
        onSubmit={handleChangePassword}
        className="p-4"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <h5 className="mb-4 fw-semibold">Change Password</h5>

        {/* Current Password */}
        <div className="mb-3 position-relative">
          <label
            className="form-label"
            style={{ color: "#909090", fontSize: "14px" }}
          >
            Current Password
          </label>
          <input
            type={showCurrent ? "text" : "password"}
            name="currentPassword"
            className="form-control rounded-2 pe-5"
            style={{ backgroundColor: "#f7f7f7", borderColor: "#e0e0e0" }}
            required
          />
          <span
            onClick={() => setShowCurrent(!showCurrent)}
            style={{
              position: "absolute",
              right: "10px",
              top: "38px",
              cursor: "pointer",
              color: "#666",
            }}
          >
            {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {/* New Password */}
        <div className="mb-3 position-relative">
          <label
            className="form-label"
            style={{ color: "#909090", fontSize: "14px" }}
          >
            New Password
          </label>
          <input
            type={showNew ? "text" : "password"}
            name="newPassword"
            className="form-control rounded-2 pe-5"
            style={{ backgroundColor: "#f7f7f7", borderColor: "#e0e0e0" }}
            required
          />
          <span
            onClick={() => setShowNew(!showNew)}
            style={{
              position: "absolute",
              right: "10px",
              top: "38px",
              cursor: "pointer",
              color: "#666",
            }}
          >
            {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {/* Confirm New Password */}
        <div className="mb-4 position-relative">
          <label
            className="form-label"
            style={{ color: "#909090", fontSize: "14px" }}
          >
            Confirm New Password
          </label>
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            className="form-control rounded-2 pe-5"
            style={{ backgroundColor: "#f7f7f7", borderColor: "#e0e0e0" }}
            required
          />
          <span
            onClick={() => setShowConfirm(!showConfirm)}
            style={{
              position: "absolute",
              right: "10px",
              top: "38px",
              cursor: "pointer",
              color: "#666",
            }}
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        <button
          type="submit"
          className="btn"
          style={{
            backgroundColor: "#e15d4f",
            color: "#ffffff",
            padding: "8px 20px",
            borderRadius: "6px",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          Change Password
        </button>
      </form>
    </>
  );
};

export default Password;
