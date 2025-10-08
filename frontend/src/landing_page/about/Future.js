import React from 'react';

function Future() {
    return ( 
        <>
       <div className='future'style={{
          marginRight: "150px",
          paddingLeft: "50px",
          paddingTop: "20px",
        }}>
         <h3>Future Roadmap</h3>
        <ul>
            <li>1.AI & Analytics Integration – Incorporating deep learning models for crime prediction, facial recognition, and forensic analysis.</li>
        <li>2.ICJS Integration – Linking PoliNova with the Interoperable Criminal Justice System (ICJS) for seamless data sharing among police, courts, and prisons.</li>
        <li>3.Nationwide Expansion – Scaling PoliNova to connect all police stations and administrative offices under a unified platform.</li>
        <li>4.Mobile Accessibility – Launching PoliNova Mobile App to allow instant citizen reporting, location-based police station discovery, and SOS emergency services.</li>
        <li>5.Cybercrime Integration – Extending the platform to include a cybercrime complaint portal for digital frauds and cyber offenses.</li>
        </ul>
       </div>
       <hr/>
        </>
     );
}

export default Future;