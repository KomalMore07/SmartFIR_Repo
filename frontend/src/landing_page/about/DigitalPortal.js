import React from "react";

function DigitalPortal() {
  return (
    <>
      <div
        className="digitalPortal"
        style={{
          marginRight: "150px",
          paddingLeft: "50px",
          paddingTop: "20px",
          marginBottom: "40px",
        }}
      >
        <h3>Central Citizen Services – PoliNova Digital Portal</h3>
        <p>
          The PoliNova Citizen Portal provides user-friendly, transparent
          services to the public, including:
        </p>
        <ul>
          <li>
            Online Crime Reporting – File complaints or report missing persons
            directly through the platform.
          </li>
          <li>
            Track Case Progress – Get live updates on complaint or FIR status.
          </li>
          <li>
            Vehicle & Identity Verification – Check if a vehicle or ID is
            associated with any criminal record.
          </li>
          <li>
            Locate Nearest Police Station – Use geolocation-based navigation to
            reach the nearest police help center.
          </li>
          <li>
            Emergency Help (SOS) – A one-click alert feature that immediately
            connects to local authorities in critical situations.
          </li>
        </ul>
        <p>
          These services promote the Ease of Living and empower citizens to
          actively participate in maintaining law and order through digital
          collaboration.
        </p>
      </div>
    </>
  );
}

export default DigitalPortal;
