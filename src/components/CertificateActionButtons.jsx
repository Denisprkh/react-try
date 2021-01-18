import React from "react";
import configData from "../config/config.json";

const CertificateActionButtons = () => {
  const deleteCertificate = (certificateId) => {
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`${configData.API_URL}/${certificateId}`, requestOptions);
  };

  return (
    <div className="buttons">
      <button className="action-button">View</button>
      <button className="action-button" onClick={deleteCertificate}>
        Delete
      </button>
      <button className="action-button">Update</button>
    </div>
  );
};

export default CertificateActionButtons;
