import React from "react";
import AddNewCertificateButton from "./AddNewCertificateButton";
import CertificateInfoTitles from "./CertificateInfoTitles";
import "../index.css";

const TitleInfo = () => {
  return (
    <div className="certificate-title">
      <CertificateInfoTitles />
      <AddNewCertificateButton />
    </div>
  );
};

export default TitleInfo;
