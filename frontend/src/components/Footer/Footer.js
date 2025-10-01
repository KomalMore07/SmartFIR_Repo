import React from "react";

function Footer() {
  return (
    <div className="container-expand-lg border-top mt-5" style={{backgroundColor:"skyblue"}}>
      <div className="row mt-2 p-5">
        <div className="col">
          <img src="media/images/logo.png" style={{ width: "20%" }} /> 
          <p><br/>
            &copy;  Content Owned by National Crime Records Bureau(NCRB), Government of India Site Maintained by National Informatics Centre.
          </p>
          <div>
            <i class="fa fa-twitter p-2" aria-hidden="true"></i>
            <i class="fa fa-facebook-official p-2" aria-hidden="true"></i>
            <i class="fa fa-instagram p-2" aria-hidden="true"></i>
            <i class="fa fa-linkedin-square p-2" aria-hidden="true"></i>
            <i class="fa fa-telegram p-2" aria-hidden="true"></i>
          </div>
        </div>
        <div className="col">
          <p className="fw-bold">QUICK LINKS</p>
          <a href=""className="text-muted text-decoration-none d-block">Ministry of Home Affairs (MHA) </a> <br/>
          <a href=""className="text-muted text-decoration-none d-block">National Crime Records Bureau (NCRB) </a><br/>
          <a href=""className="text-muted text-decoration-none d-block">Central Bureau of Investigation (CBI) </a><br/>
          <a href=""className="text-muted text-decoration-none d-block">National Investigation Agency(NIA)</a><br/>
          <a href=""className="text-muted text-decoration-none d-block">E-Courts </a><br/>
          <a href=""className="text-muted text-decoration-none d-block"> MeitY </a><br/>
          <a href=""className="text-muted text-decoration-none d-block">Central Police Organizations</a><br/>
          <a href=""className="text-muted text-decoration-none d-block"> Other Links </a><br/>
          <a href=""className="text-muted text-decoration-none d-block">Vahan Samanvay </a><br/>
          <a href=""className="text-muted text-decoration-none d-block"> A Video on Digital Police Portal</a><br/>
        </div>
        <div className="col">
          <p className="fw-bold">REACH US</p>
         <p>Ministry of Home Affairs, North Block Central Secretariat New Delhi -
          110001 </p><br/>
          <p>Police Modernisation Division, MHA Women Safety Division,
          MHA,North Block, New Delhi –Pin code: 110011
          </p><br/>
        </div>
        <div className="col">
            <br/><br/>
         <p>National Crime Records Bureau National </p>
          <p>Highway-8, Near SSB, Mahipalpur - 110037
          </p><br/>
          <p>Email: shraddhagaikwad725@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
