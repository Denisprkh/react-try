import React from "react";
import CertificateInfoItem from "./CertificateInfoItem";

const CertificateInfoTitles = () => {
  return (
    <div className="info-titles">
      <CertificateInfoItem infoItem={"Name"} />
      <CertificateInfoItem infoItem={"Price"} />
      <CertificateInfoItem infoItem={"Tags"} />
      <CertificateInfoItem infoItem={"Duration"} />
    </div>
  );
};

export default CertificateInfoTitles;
