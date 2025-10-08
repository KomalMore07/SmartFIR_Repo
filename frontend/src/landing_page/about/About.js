import React from "react";

function About() {
  return (
    <>
      <div className="about" style={{
          marginRight: "150px",
          paddingLeft: "50px",
          paddingTop: "20px",
        }}>
        <h3>About the Initiative</h3>
        <p>
          The PoliNova project was conceptualized with the goal of bridging the
          gap between citizens and police services through digital
          transformation. It serves as a smart policing network that digitizes
          every layer of law enforcement, ensuring that critical data — such as
          FIRs, case updates, criminal records, and vehicle or person
          verifications — is readily available to both officers and citizens in
          a secure and efficient manner.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Key components of PoliNova include:
        </p>
        <ul>
          <li>
            Crime Data Management System – Allows seamless registration,
            updating, and tracking of cases at the police station level.
          </li>
          <li>
            Citizen Portal – Empowers citizens to file online complaints, report
            crimes, or check case status without visiting a police station.
          </li>
          <li>
            Criminal & Evidence Tracking – Enables quick search and linkage
            between crimes, suspects, and evidence through a national database.
          </li>
          <li>
            Digital Verification Services – Facilitates tenant, employee, and
            vehicle verification online for safer communities.
          </li>
          <li>
            Predictive Crime Analytics (AI-based) – Uses machine learning to
            identify crime patterns, hotspots, and potential threats to assist
            in preventive policing.
          </li>
          <li>
            Officer Dashboard – Provides police personnel with real-time
            updates, case statistics, and inter-departmental communication
            tools.
          </li>
        </ul>
      </div>
      <hr/>
    </>
  );
}

export default About;
