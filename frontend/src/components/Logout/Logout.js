import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(true);

 
  const handleClose = () => {
    setShowAlert(false);
    navigate("/"); 
  };

  return (
    <div className="container mt-4">
      {showAlert && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong> You have successfully logged out.</strong>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </div>
      )}
    </div>
  );
}
