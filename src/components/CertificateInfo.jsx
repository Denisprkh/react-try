import React from "react";
import CertificateInfoItem from "./CertificateInfoItem";

const CertificateInfo = ({ certificate }) => {
  const formatTags = (tags) => {
    return tags.map((tag) => ` ${tag.name} `);
  };

  return (
    <div className="certificate-info">
      <CertificateInfoItem infoItem={certificate.name} />
      <CertificateInfoItem infoItem={certificate.price} />
      <CertificateInfoItem infoItem={formatTags(certificate.tags)} />
      <CertificateInfoItem infoItem={certificate.duration} />
    </div>
  );
};

export default CertificateInfo;
