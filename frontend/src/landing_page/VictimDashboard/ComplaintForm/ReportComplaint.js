import React from "react";
import { Link } from "react-router-dom";
import "./ReportComplaint.css";

function ReportComplaint() {
  return (
  <>
  <div className="portal-section">
      <h2>Filing a Complaint on National Cyber Crime Reporting Portal</h2>
      <hr />
      <p>
        This portal is an initiative of Government of India to facilitate
        victims/complainants to report cyber crime complaints online. This
        portal caters to complaints pertaining to cyber crimes only with special
        focus on cyber crimes against women and children. Complaints reported on
        this portal are dealt by law enforcement agencies/police based on the
        information available in the complaints. It is imperative to provide
        correct and accurate details while filing complaint for prompt action.
      </p>
      <p>
        Please contact local police in case of an emergency or for reporting
        crimes other than cyber crimes. National police helpline number is 112.
        National women helpline number is 181 and Cyber Crime Helpline is 1930.
      </p>

      <div className="buttons">
        <Link to="/VictimDashboard/Rules_Regulations" className="btn btn-danger">
          File a Complaint
        </Link>
      </div>
    </div>
 
  </>  
  );
}

export default ReportComplaint;
