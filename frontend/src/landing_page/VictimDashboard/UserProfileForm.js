import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function UserProfileForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loginId: "",
    title: "",
    name: "",
    mobile: "",
    dob: "",
    gender: "",
    email: "",
    relationType: "",
    relationName: "",
    address: {
      houseNo: "",
      street: "",
      colony: "",
      city: "",
      tehsil: "",
      country: "India",
      state: "Maharashtra",
      district: "",
      policeStation: "",
      pincode: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.address) {
      setFormData({
        ...formData,
        address: { ...formData.address, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/VictimDashboard/UserProfile"); // Navigate to /VictimDashboard/profile
  };
  


  return (
    <div className="container mt-5 mb-5 p-4 shadow-sm bg-light rounded" style={{ maxWidth: "900px" }}>
      <h4 className="mb-4 text-black border-bottom pb-2">User Profile Details</h4>

      <form onSubmit={handleSubmit}>
        {/* Login ID */}
        <div className="mb-3">
          <label className="form-label">Login ID:</label>
          <input
            type="email"
            className="form-control"
            name="loginId"
            placeholder="Enter email"
            value={formData.loginId}
            onChange={handleChange}
          />
        </div>

        {/* Title */}
        <div className="mb-3">
          <label className="form-label me-3">Title:</label>
          {["Mr", "Mrs", "Miss", "Dr", "Prof", "Shri", "Smt"].map((title) => (
            <div className="form-check form-check-inline" key={title}>
              <input
                className="form-check-input"
                type="radio"
                name="title"
                value={title}
                checked={formData.title === title}
                onChange={handleChange}
              />
              <label className="form-check-label">{title}</label>
            </div>
          ))}
        </div>

        {/* Name, Mobile, DOB */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Mobile:</label>
            <input
              type="tel"
              className="form-control"
              name="mobile"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Date of Birth:</label>
            <input
              type="date"
              className="form-control"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Gender:</label>
            <select
              className="form-select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Relation */}
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">Father/Mother/Spouse:</label>
            <select
              className="form-select"
              name="relationType"
              value={formData.relationType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Father</option>
              <option>Mother</option>
              <option>Spouse</option>
            </select>
          </div>
          <div className="col-md-8">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              name="relationName"
              placeholder="Enter name"
              value={formData.relationName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Present Address */}
        <h5 className="text-black mt-4 mb-3">Present Address</h5>
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">House No.</label>
            <input
              type="text"
              className="form-control"
              name="houseNo"
              value={formData.address.houseNo}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-8">
            <label className="form-label">Street Name</label>
            <input
              type="text"
              className="form-control"
              name="street"
              value={formData.address.street}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Colony</label>
            <input
              type="text"
              className="form-control"
              name="colony"
              value={formData.address.colony}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Village/Town/City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={formData.address.city}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Tehsil</label>
            <input
              type="text"
              className="form-control"
              name="tehsil"
              value={formData.address.tehsil}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Country</label>
            <select
              className="form-select"
              name="country"
              value={formData.address.country}
              onChange={handleChange}
            >
              <option>India</option>
              <option>Other</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">State</label>
            <select
              className="form-select"
              name="state"
              value={formData.address.state}
              onChange={handleChange}
            >
              <option>Maharashtra</option>
              <option>Goa</option>
              <option>Karnataka</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">District</label>
            <select
              className="form-select"
              name="district"
              value={formData.address.district}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Pune</option>
              <option>Mumbai</option>
              <option>Nashik</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Police Station</label>
            <select
              className="form-select"
              name="policeStation"
              value={formData.address.policeStation}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Shivaji Nagar</option>
              <option>Hadapsar</option>
              <option>Wakad</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Pincode</label>
            <input
              type="text"
              className="form-control"
              name="pincode"
              value={formData.address.pincode}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Save button */}
        <div className="text-center mt-5">
          <button type="submit" className="btn btn-danger px-4 py-2">
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserProfileForm;
