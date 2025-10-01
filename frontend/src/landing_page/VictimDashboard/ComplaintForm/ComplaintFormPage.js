import React from 'react';
import InfoNeedToFillForm from './InfoNeedToFillForm';
import Portal_Info from './Portal_Info';
import ReportComplaint from './ReportComplaint';
import Rules_Regulations from './Rules_Regulations';

function ComplaintFormPage() {
    return ( 
        <>
        <InfoNeedToFillForm/>
        <Portal_Info/>
        <ReportComplaint/>
        <Rules_Regulations/>
        </>
     );
}

export default ComplaintFormPage;