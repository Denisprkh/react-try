import React, { useEffect, useState } from 'react';
import AddNewCertificateButton from './AddNewCertificateButton';
import CertificateInfoItem from './CertificateInfoItem';
import CertificateInfoTitles from './CertificateInfoTitles';
import TitleInfo from './TitleInfo';

export default function Certificate() {

    const [certificatesData, setCertificatesData] = useState(null);
    const certificatesDataUrl = 'http://localhost:8080/giftCertificates';

    useEffect(() => {
        fetch(certificatesDataUrl)
            .then((response) => response.json())
            .then(setCertificatesData);
    }, []);

    if (certificatesData === null) {
        return (
            <h1>Loading</h1>
        )
    }

    const deleteCertificate = (certificateId) => {
        const requestOptions = {
            method: 'DELETE'
        };
        fetch("http://localhost:8080/giftCertificates/"+certificateId, requestOptions);
    }
    

    return (
        <>
        <TitleInfo/>
       { certificatesData._embedded.responseGiftCertificateDtoList.map(certificate =>
            <div className="certificate" key={certificate.id}>
                <div className="certificate-info">
                    <CertificateInfoItem infoItem={certificate.name} />
                    <CertificateInfoItem infoItem={certificate.price} />
                    <CertificateInfoItem infoItem={certificate.tags.map(tag =>
                        " " + tag.name + " ")} />
                    <CertificateInfoItem infoItem={certificate.duration} />
                </div>
                <div className="buttons">
                    <button className="action-button">View</button>
                    <button className="action-button" onClick={deleteCertificate}>Delete</button>
                    <button className="action-button">Update</button>
                </div>
            </div>)
}
        </>
    )

}

