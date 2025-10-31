import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function ComplaintForm() {
  const [activeTab, setActiveTab] = useState("incident");
  const [text, setText] = useState("");
  const maxChars = 1500;

  const handleTabClick = (tab) => setActiveTab(tab);
  const handleTextChange = (e) => {
    if (e.target.value.length <= maxChars) {
      setText(e.target.value);
    }
  };

  return (
    <div className="container mt-4 mb-4">
      
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "incident" ? "active btn-danger text-black" : ""}`}
            onClick={() => handleTabClick("incident")}
          >
            <i className="bi bi-exclamation-circle"></i> Incident Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "suspect" ? "active" : ""}`}
            onClick={() => handleTabClick("suspect")}
          >
            <i className="bi bi-person-badge"></i> Suspect Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "complainant" ? "active" : ""}`}
            onClick={() => handleTabClick("complainant")}
          >
            <i className="bi bi-person"></i> Complainant Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "preview" ? "active" : ""}`}
            onClick={() => handleTabClick("preview")}
          >
            <i className="bi bi-pencil-square"></i> Preview & Submit
          </button>
        </li>
      </ul>
     
     <div
  className="alert  text-dark"
  style={{
    backgroundColor: "#d9e7ff",
    borderRadius: "6px",
    padding: "10px 15px",
    marginTop: "30px",
    marginBottom:"20px",
    border: "1px solid #b0cfff",
  }}
  role="alert"
>
  Complaint / Incident Details
</div>


      
      <div className="card mt-5 mb-5">
        

        <div className="card-body">
          {activeTab === "incident" && (
            <>
              
              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label">
                  Category of complaint <span className="text-danger">*</span>
                </label>
                <div className="col-sm-8">
                  <select className="form-select">
                    <option>---Select---</option>
                    <option>Theft</option>
                    <option>Fraud</option>
                    <option>Cyber Crime</option>
                  </select>
                </div>
              </div>

             
              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label">
                  Sub-Category of complaint <span className="text-danger">*</span>
                </label>
                <div className="col-sm-8">
                  <select className="form-select">
                    <option>--Select--</option>
                    <option>ATM Fraud</option>
                    <option>Online Scam</option>
                    <option>Data Breach</option>
                  </select>
                </div>
              </div>

              <hr />

            
              <div className="mb-3 row align-items-center">
                <label className="col-sm-4 col-form-label">
                  Approximate date & time of Incident/receiving/viewing of content{" "}
                  <span className="text-danger">*</span>
                </label>
                <div className="col-sm-8 d-flex gap-2">
                  <input type="date" className="form-control" />
                  <select className="form-select w-auto">
                    <option>HH</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <select className="form-select w-auto">
                    <option>MM</option>
                    {[0, 15, 30, 45].map((m) => (
                      <option key={m}>{m.toString().padStart(2, "0")}</option>
                    ))}
                  </select>
                  <select className="form-select w-auto">
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>

              
              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label">
                  Is there any delay in reporting? <span className="text-danger">*</span>
                </label>
                <div className="col-sm-8 d-flex align-items-center gap-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="delay"
                      id="delayYes"
                    />
                    <label className="form-check-label" htmlFor="delayYes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="delay"
                      id="delayNo"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="delayNo">
                      No
                    </label>
                  </div>
                </div>
              </div>

              
              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label">
                  Where did the incident occur? <span className="text-danger">*</span>
                </label>
                <div className="col-sm-8">
                  <select className="form-select">
                    <option>---Select---</option>
                    <option>Social Media</option>
                    <option>Banking App</option>
                    <option>Email</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              
              <div className="mb-3 row align-items-start">
                <label className="col-sm-4 col-form-label">
                  Please provide any additional information about the incident:{" "}
                  <span className="text-danger">*</span>
                </label>
                <div className="col-sm-8">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Insert at least 200 characters. Special characters like ~!@#$%^*`|<> are not allowed."
                    value={text}
                    onChange={handleTextChange}
                  ></textarea>

                  <small className="text-muted ">
                    Maximum of 1500 characters -{" "}
                    <span className={text.length > maxChars ? "text-danger fw-bold" : "fw-bold"}>
                      {maxChars - text.length}
                    </span>{" "}
                    characters left
                  </small>

                </div>
                <div className="mt-5 d-flex justify-content-center">
                    <button className="btn btn-danger">Save as Draft & Next</button>
                  </div>
              </div>
            </>
          )}

          {activeTab === "suspect" && (
            <p className="text-secondary">Suspect details section...</p>
          )}
          {activeTab === "complainant" && (
            <p className="text-secondary">Complainant details section...</p>
          )}
          {activeTab === "preview" && (
            <p className="text-secondary">Preview and submit section...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ComplaintForm;
