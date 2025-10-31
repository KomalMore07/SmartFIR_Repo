import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FIRList() {
  const firData = [
    { id: "CMP001", complaint: "Email Fraud", date: "2025-10-31" },
    { id: "CMP002", complaint: "Cyberbullying", date: "2025-10-30" },
    { id: "CMP003", complaint: "Bank Scam", date: "2025-10-29" },
  ];

  return (
    <div className="container mt-5 mb-5" style={{width:"80%"}}>
      <h4 className="text-center text-danger mb-5 fw-bold">
        FIR Complaint List
      </h4>

      <table className="table table-bordered text-center align-middle shadow-sm">
        <thead className="table-danger">
          <tr>
            <th>Sr. No.</th>
            <th>Complaint ID</th>
            <th>View Complaint</th>
            <th>Date</th>
            <th>Accept / Reject</th>
          </tr>
        </thead>
        <tbody>
          {firData.map((fir, index) => (
            <tr key={fir.id}>
              <td>{index + 1}</td>
              <td>{fir.complaint}</td>
              <td>
                <button className="btn btn-danger btn-sm text-white">
                  View
                </button>
              </td>
              <td>{fir.date}</td>
              <td>
                <button className="btn btn-success btn-sm me-2">
                  Accept
                </button>
                <button className="btn btn-danger btn-sm">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FIRList;
