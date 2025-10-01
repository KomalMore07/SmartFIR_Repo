import React from "react";
import { Link } from "react-router-dom";


function VictimNavbar() {
  const scrollToCard = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link nav-2 active" to="/VictimDashboard">
            VictimDashboard
          </Link>
        </li>
        <li className="nav-item">
          <button className="nav-link nav-2 active" onClick={() => scrollToCard("UserProfile")}>
            User Profile
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link nav-2 active" onClick={() => scrollToCard("ReportComplaint")}>
            Report Complaint
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link nav-2 active" onClick={() => scrollToCard("CheckStatus")}>
            Check Status
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link nav-2 active" onClick={() => scrollToCard("ComplaintWithdraw")}>
            Complaint Withdraw
          </button>
        </li>
        <li className="nav-item" onClick={() => scrollToCard("Learn")}>
          <button className="nav-link nav-2 active">
            Learn
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link nav-2 active" onClick={() => scrollToCard("Chatbot")}>
            Chatbot
          </button>
        </li>
        <div className="active dropdown">
                      <button
                        className="nav-link nav-2 nav-drop dropdown-toggle"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Languages
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><Link className="dropdown-item">English</Link></li>
                        <li><Link className="dropdown-item">Marathi</Link></li>
                        <li><Link className="dropdown-item">Hindi</Link></li>
                      </ul>
                    </div>
      </ul>
    </div>
  );
}

export default VictimNavbar;
