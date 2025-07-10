import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "react-bootstrap";
import plus from "../../assets/images/plus.png";

const ImageDropzone1 = ({
  oldImages = [],
  setFiles,
  updateOldImages,
  onDrop,
}) => {
  const [acceptedFiles, setAcceptedFiles] = useState([]);

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop: (acceptedFilesList) => {
      const filesWithPreviews = acceptedFilesList.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      const newAcceptedFiles = [...acceptedFiles, ...filesWithPreviews];
      setAcceptedFiles(newAcceptedFiles);
      setFiles(newAcceptedFiles.map((item) => item.file)); // Update parent files state
      if (onDrop) onDrop(acceptedFilesList); // Call the upload function
    },
    multiple: true,
    accept: "image/*",
  });

  const removeFile = (index) => {
    const updatedFiles = [...acceptedFiles];
    updatedFiles.splice(index, 1);
    setAcceptedFiles(updatedFiles);
    setFiles(updatedFiles.map((item) => item.file));
  };

  const removeDBFile = (nameToRemove) => {
    const updatedOldImages = oldImages.filter(
      (image) => image !== nameToRemove
    );
    updateOldImages(updatedOldImages);
  };

  return (
    <div>
      <div
        {...getRootProps()}
        className="dropzone d-flex justify-content-center align-items-center flex-column rounded-2"
        style={{ border: "1px solid #D7D7D7" }}
      >
        <input {...getInputProps()} />
        <p className="plus-img">
          {isDragActive ? (
            "Drop the files here ..."
          ) : (
            <img src={plus} className="Plus" />
          )}
        </p>
        <h5 className="inter-font doc-font custom-input fw-light">
          Upload Photos
        </h5>
        <Button
          className="inter-font"
          style={{ background: "#522A30", border: "none", fontSize: "13px" }}
          onClick={open}
        >
          Browse Files
        </Button>
      </div>

      <div className="previews bg-light">
        {oldImages.map((image, index) => (
          <div key={index} className="preview-item">
            <img src={image} alt="Preview" className="preview-image" />
            <button
              type="button"
              onClick={() => removeDBFile(image)}
              className="remove-button"
            >
              X
            </button>
          </div>
        ))}

        {acceptedFiles.map((file, index) => (
          <div key={index} className="preview-item">
            <img src={file.preview} alt="Preview" className="preview-image" />
            <button
              type="button"
              onClick={() => removeFile(index)}
              className="remove-button"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDropzone1;
