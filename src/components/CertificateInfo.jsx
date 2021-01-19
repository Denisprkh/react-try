import React from "react";
import Certificate from "./Certificate";
import CertificateInfoItem from "./CertificateInfoItem";
import PropTypes from "prop-types";

const CertificateInfo = ({ certificate }) => {
  const formatedTags = (tags) => {
    return tags.map((tag) => ` ${tag.name} `);
  };

  Certificate.prototype = {
      certificate : PropTypes.object
  };

  return (
    <div className="certificate-info">
      <CertificateInfoItem infoItem={certificate.name} />
      <CertificateInfoItem infoItem={certificate.price} />
      <CertificateInfoItem infoItem={formatedTags} />
      <CertificateInfoItem infoItem={certificate.duration} />
    </div>
  );
};

export default CertificateInfo;
