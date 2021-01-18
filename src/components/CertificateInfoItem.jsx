import React, { useEffect, useState } from 'react';
import '../index.css';
import CertificateActionButtons from './CertificateActionButtons';

const CertificateInfoItem = ({infoItem}) => {
    return(
        <div className="info-item">
            {infoItem}
        </div>
    )
}

export default CertificateInfoItem;