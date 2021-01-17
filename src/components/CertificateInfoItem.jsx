import React, { useEffect, useState } from 'react';
import '../index.css';

export default function CertificateInfoItem({infoItem}){
    return(
        <div className="info-item">
            {infoItem}
        </div>
    )
}