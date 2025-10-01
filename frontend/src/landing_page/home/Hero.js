import React from 'react';

function Hero() {
    return ( 
        <div className='container-flex container-expand-lg border-bottom text-center ' >  
                <img src='media/images/homeHero.png' alt='Hero Image' />
            
                <div className='row text-center p-5'>
                <p> This portal is a platform for Citizens to file crime related complaints online and seek antecedent verification of prospective employees (including for domestic help, drivers etc.), tenants or for any other purpose. Citizens can also seek certification of their own antecedents.
                </p>

                <p>The portal would also provide access to authorized persons to use National Database of crime records for the purpose of investigation, policy making, data analytics, research and providing citizen services.
                </p>

                <p>The portal consolidates data of current and past Crime occurrences across the country. This data has information pertaining to persons accused or convicted in criminal cases along with associated information such as property stolen/recovered, missing persons, recovered/unidentified dead bodies and so on. This information would help expedite Police investigations to solve crime as well as to provide antecedent verification services to citizens.
                    </p>

                <p>The portal also generates various thematic reports of trends of incidence of crime across the country to facilitate policy analysis and interventions. To illustrate, reports such as those pertaining to crime against women & children, societal trends of crimes, patterns of crime involving groups belonging to a particular age or educational qualification and so on, crimes which are more prevalent in certain areas, can be generated from data in this portal.
                    </p>

                <p>The portal also generates various thematic reports of trends of incidence of crime across the country to facilitate policy analysis and interventions. To illustrate, reports such as those pertaining to crime against women & children, societal trends of crimes, patterns of crime involving groups belonging to a particular age or educational qualification and so on, crimes which are more prevalent in certain areas, can be generated from data in this portal.
                    </p>

                <p>To protect privacy of individuals concerned and for National security reasons the Crime and Criminal data and reports can be searched by authorized Police officers only. Citizens who seek criminal antecedent verification services will be provided responses through email.
                    </p>.

                <p>The DIGITAL POLICE portal is a SMART Policing initiative of Ministry of Home Affairs as enunciated by Hon’ble Prime Minister, to provide services to citizens and aid efficient Police investigations. </p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
                </div>
            </div>
     );
}

export default Hero;