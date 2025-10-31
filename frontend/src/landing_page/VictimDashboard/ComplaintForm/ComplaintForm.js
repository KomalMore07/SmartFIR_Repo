import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function ComplaintForm() {
  const [activeTab, setActiveTab] = useState("incident");
  const [text, setText] = useState("");
  const maxChars = 1500;

  // ✅ Added state for incident details
  const [incidentDetails, setIncidentDetails] = useState({
    category: "",
    subCategory: "",
    date: "",
    hour: "",
    minute: "",
    period: "AM",
    delay: "No",
    location: "",
    description: "",
  });

  const handleTabClick = (tab) => setActiveTab(tab);

  const handleTextChange = (e) => {
    if (e.target.value.length <= maxChars) {
      setText(e.target.value);
      setIncidentDetails({ ...incidentDetails, description: e.target.value });
    }
  };

  // ✅ Common handler for select and input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncidentDetails({ ...incidentDetails, [name]: value });
  };

  // ✅ Save & Next handler
  const handleSaveNext = () => {
    setActiveTab("preview");
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
        className="alert text-dark"
        style={{
          backgroundColor: "#d9e7ff",
          borderRadius: "6px",
          padding: "10px 15px",
          marginTop: "30px",
          marginBottom: "20px",
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
                  <select
                    className="form-select"
                    name="category"
                    value={incidentDetails.category}
                    onChange={handleChange}
                  >
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
                  <select
                    className="form-select"
                    name="subCategory"
                    value={incidentDetails.subCategory}
                    onChange={handleChange}
                  >
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
                  Approximate date & time of Incident{" "}
                  <span className="text-danger">*</span>
                </label>
                <div className="col-sm-8 d-flex gap-2">
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={incidentDetails.date}
                    onChange={handleChange}
                  />
                  <select
                    className="form-select w-auto"
                    name="hour"
                    value={incidentDetails.hour}
                    onChange={handleChange}
                  >
                    <option>HH</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <select
                    className="form-select w-auto"
                    name="minute"
                    value={incidentDetails.minute}
                    onChange={handleChange}
                  >
                    <option>MM</option>
                    {[0, 15, 30, 45].map((m) => (
                      <option key={m}>{m.toString().padStart(2, "0")}</option>
                    ))}
                  </select>
                  <select
                    className="form-select w-auto"
                    name="period"
                    value={incidentDetails.period}
                    onChange={handleChange}
                  >
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
                      value="Yes"
                      checked={incidentDetails.delay === "Yes"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="delay"
                      value="No"
                      checked={incidentDetails.delay === "No"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label">
                  Where did the incident occur? <span className="text-danger">*</span>
                </label>
                <div className="col-sm-8">
                  <select
                    className="form-select"
                    name="location"
                    value={incidentDetails.location}
                    onChange={handleChange}
                  >
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
                  Additional information: <span className="text-danger">*</span>
                </label>
                <div className="col-sm-8">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Insert at least 200 characters."
                    value={text}
                    onChange={handleTextChange}
                  ></textarea>
                  <small className="text-muted">
                    Maximum of 1500 characters -{" "}
                    <span className={text.length > maxChars ? "text-danger fw-bold" : "fw-bold"}>
                      {maxChars - text.length}
                    </span>{" "}
                    characters left
                  </small>
                </div>
                <div className="mt-5 d-flex justify-content-center">
                  <button className="btn btn-danger" onClick={handleSaveNext}>
                    Save as Draft & Next
                  </button>
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
            <div className="card shadow-sm">
              <div className="card-header bg-danger text-white fw-bold">
                Complaint Preview
              </div>
              <div className="card-body">
                <p><strong>Category:</strong> {incidentDetails.category}</p>
                <p><strong>Sub-Category:</strong> {incidentDetails.subCategory}</p>
                <p>
                  <strong>Date & Time:</strong>{" "}
                  {incidentDetails.date
                    ? `${incidentDetails.date} ${incidentDetails.hour}:${incidentDetails.minute} ${incidentDetails.period}`
                    : "Not provided"}
                </p>
                <p><strong>Delay in Reporting:</strong> {incidentDetails.delay}</p>
                <p><strong>Location:</strong> {incidentDetails.location}</p>
                <p><strong>Description:</strong></p>
                <p className="border rounded p-2 bg-light">{incidentDetails.description}</p>

                <div className="text-center mt-4">
                  <button className="btn btn-success px-4">
                    Submit Complaint
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ComplaintForm;
