import React from 'react';
import Hero from './Hero'
import About from './About';
import Vision from './Vision';
import Mission from './Mission';
import Future from './Future';
import DigitalPortal from './DigitalPortal';


function AboutPage() {
    return ( 
        <>
            <Hero />
            <About />
            <Vision/>
            <Mission />
            <Future/>
            <DigitalPortal/>
         </>
     );
}

export default AboutPage;