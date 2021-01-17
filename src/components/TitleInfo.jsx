import React, { useEffect, useState } from 'react';
import AddNewCertificateButton from './AddNewCertificateButton';
import CertificateInfoTitles from './CertificateInfoTitles';
import '../index.css';

export default function TitleInfo(){
    return (
        <div className="certificate-title">
            <CertificateInfoTitles/>
            <AddNewCertificateButton/>
        </div>
    )
}