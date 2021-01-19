import React, { useEffect, useState } from "react";
import TitleInfo from "./TitleInfo";
import configData from "../config/config.json";
import CertificateActionButtons from "./CertificateActionButtons";
import CertificateInfo from "./CertificateInfo";

const Certificate = () => {
  const [certificatesData, setCertificatesData] = useState(null);

  useEffect(() => {
    fetch(configData.API_URL)
      .then((response) => response.json())
      .then(setCertificatesData);
  }, []);

  if (!certificatesData) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <TitleInfo />
      {certificatesData._embedded.responseGiftCertificateDtoList.map(
        (certificate) => (
          <div className="certificate" key={certificate.id}>
            <CertificateInfo certificate={certificate} />
            <CertificateActionButtons />
          </div>
        )
      )}
    </>
  );
};

export default Certificate;
