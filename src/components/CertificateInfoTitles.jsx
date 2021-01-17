import React, { useEffect, useState } from 'react';
import CertificateInfoItem from './CertificateInfoItem';


export default function CertificateInfoTitles(){
    return(
    
        <div className="info-titles">
        <CertificateInfoItem infoItem={"Name"}/>
        <CertificateInfoItem infoItem={"Price"}/>
        <CertificateInfoItem infoItem={"Tags"}/>
        <CertificateInfoItem infoItem={"Duration"}/>
        </div>
    )
}