import React, { useState, useEffect } from "react";
import blank from "../assets/images/edit-profile-img.png";

const ImageUpload = ({ name, onImageChange, defaultPreviewUrl }) => {
  const [previewUrl, setPreviewUrl] = useState(defaultPreviewUrl || null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      if (onImageChange) onImageChange(name, file); // Notify parent with file
    }
  };

  const handleRemoveImage = () => {
    setPreviewUrl(null);
    if (onImageChange) onImageChange(name, null); // Notify parent to remove image
  };

  useEffect(() => {
    // Clean up URL object when component unmounts or previewUrl changes
    return () => {
      if (previewUrl && previewUrl !== defaultPreviewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl, defaultPreviewUrl]);

  return (
    <div className="inter-font image-upload">
      <div
        className="inter-font image-input image-input-outline image-input-placeholder"
        data-kt-image-input="true"
      >
        <div
          className="inter-font image-input-wrapper w-100px h-100px"
          style={{
            backgroundImage: `url(${previewUrl || defaultPreviewUrl || blank})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <label
          className="inter-font btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
          data-kt-image-input-action="change"
          data-bs-toggle="tooltip"
          aria-label="Change avatar"
        >
          <i className="inter-font bi bi-pencil-fill fs-7"></i>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handleImageChange}
          />
        </label>

        {(previewUrl || defaultPreviewUrl) && (
          <span
            className="inter-font btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
            data-kt-image-input-action="remove"
            data-bs-toggle="tooltip"
            aria-label="Remove avatar"
            onClick={handleRemoveImage}
            style={{ cursor: "pointer" }}
          >
            <i className="inter-font bi bi-x-circle-fill fs-2"></i>
          </span>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
