import React, { useEffect, useState } from 'react';
import Certificate from './Certificate';
import Form from './Form';

export default function Page() {
    return (
        <div className="container">
            <div className="main-info">
                <Certificate />
                <Form/>
            </div>
        </div>
    )
}