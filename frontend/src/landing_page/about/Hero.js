import React from "react";

function Hero() {
  return (
    <>
      <div
        className="hero"
        style={{
          marginRight: "150px",
          paddingLeft: "50px",
          paddingTop: "30px",
        }}
      >
        <h3>PoliNova:Smart FIR And Forensic Sketch Assistant</h3>
        <p>
          The PoliNova project is a modern initiative designed to transform the
          landscape of law enforcement and public safety using advanced
          technology. Developed using React and Django, PoliNova aims to create
          a comprehensive, secure, and intelligent platform that enhances the
          efficiency, transparency, and connectivity of policing activities
          across various jurisdictions.
        </p>
        <p>
          PoliNova integrates multiple facets of police operations — from crime
          reporting and data management to criminal tracking and citizen
          services — into a single, unified digital ecosystem. The system
          focuses on reducing manual errors, speeding up investigations, and
          strengthening coordination between law enforcement agencies.
        </p>
        <p>
          As of 2025, PoliNova has been successfully deployed in multiple pilot
          regions, connecting police stations, investigation units, and public
          complaint portals through a centralized digital platform. The
          initiative aligns with India’s vision of Digital Policing, promoting
          real-time data access, predictive analytics, and citizen empowerment
          through technology-driven solutions.
        </p>
      </div>
      <hr/>
    </>
  );
}

export default Hero;
