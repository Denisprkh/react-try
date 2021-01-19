import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../index.css";

const CertificateInfoItem = ({ infoItem }) => {
  return <div className="info-item">{infoItem}</div>;
};

export default CertificateInfoItem;
