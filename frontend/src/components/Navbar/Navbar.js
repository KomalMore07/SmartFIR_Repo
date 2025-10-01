import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "skyblue" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.png" alt="Logo" style={{ width: "60px",marginLeft:"20px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {/* Left side links */}
          <div className="navbar-nav">
            <Link className="nav-link mt-2" to="/">Home</Link>
            <Link className="nav-link mt-2" to="/AboutPage">About</Link>
            <Link className="nav-link mt-2" to="/ContactPage">Contact</Link>
            
            {/* Dropdown */}
            <div className="mt-2 active dropdown">
              <button
                className="nav-link nav-drop dropdown-toggle"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Role
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><Link className="dropdown-item" to="/Signup">Victim</Link></li>
                <li><Link className="dropdown-item" to="/LoginPolice">Police</Link></li>
              </ul>
            </div>
          </div>

          {/* Right side Logout */}
          <div style={{ marginLeft: "900px" }}>
            <Link className="btn logout-btn" to="/Logout" >Logout</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
