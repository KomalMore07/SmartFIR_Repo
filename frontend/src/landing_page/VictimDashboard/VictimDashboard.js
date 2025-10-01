import React from "react";
import { Outlet } from "react-router-dom";
import VictimNavbar from "./VictimNavbar";


function VictimDashboard() {
  return (
    <>
      <VictimNavbar />
      <div className="container mt-3">
        <Outlet />
      </div>
      
      
    </>
  );
}

export default VictimDashboard;
