import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "react-bootstrap";
import plus from "../../assets/images/plus.png"

const ImageDropzone = ({ oldImages = [], setFiles, updateOldImages }) => {
  const [acceptedFiles, setAcceptedFiles] = useState([]);

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop: (acceptedFilesList) => {
      // Just set the raw file without preview
      const filesWithPreviews = acceptedFilesList.map((file) => ({
        file,
        preview: URL.createObjectURL(file), // Create object URL for preview
      }));
      setAcceptedFiles((prev) => [...prev, ...filesWithPreviews]);
      setFiles([...acceptedFiles, ...filesWithPreviews.map((file) => file.file)]); 
    },
    multiple: true,
    accept: "image/*",
  });

  // Handle removing a file (from the preview list)
  const removeFile = (index) => {
    const updatedFiles = [...acceptedFiles];
    updatedFiles.splice(index, 1);
    setAcceptedFiles(updatedFiles);
    setFiles([...acceptedFiles, ...updatedFiles.map((file) => file.file)]); 
  };

  // Handle removing a file from the DB
  const removeDBFile =  (nameToRemove) => {
    const updatedOldImages = oldImages.filter((image) => image !== nameToRemove);

      updateOldImages(updatedOldImages); // Emit updated old images
  };

  return (
    <div>
      <div
        {...getRootProps()}
        className=" dropzone d-flex justify-content-center align-items-center flex-column rounded-2"
        style={{ border: "1px solid #D7D7D7" }}
      >
        <input {...getInputProps()} />
        <p className=" plus-img">
          {isDragActive ? (
            "Drop the files here ..."
          ) : (
            <img src={plus} className=" plus" />
          )}
        </p>
        <h5 className=" inter-font doc-font custom-input fw-light">Upload Videos</h5>
        <Button
          className=" inter-font"
          style={{ background: "#522A30", border: "none", fontSize: "13px" }}
        >
          Browse Files
        </Button>
      </div>

      <div className=" previews bg-light">
        {/* Display old images */}
        {oldImages.map((image, index) => (
          <div key={index} className=" preview-item">
            <img src={image} alt="Preview" className=" preview-image" />
            <button
              type="button"
              onClick={() => removeDBFile(image)}
              className=" remove-button"
            >
              X
            </button>
          </div>
        ))}

        {/* Display newly accepted files (without preview) */}
        {acceptedFiles.map((file, index) => (
          <div key={index} className=" preview-item">
            <img src={file.preview} alt="Preview" className=" preview-image" />
            <button
              type="button"
              onClick={() => removeFile(index)}
              className=" remove-button"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDropzone;
