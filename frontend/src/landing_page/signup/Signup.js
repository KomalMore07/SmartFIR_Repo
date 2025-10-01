import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    email: "",
    aadhaar: "",
    phone: "",
    otp: "",
  });

  const [otpSent, setOtpSent] = useState(false);
   const navigate = useNavigate(); 

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Placeholder functions for verify buttons
  const handleVerifyEmail = () => alert("Email verified!");
  const handleVerifyAadhaar = () => alert("Aadhaar verified!");
  const handleVerifyPhone = () => {
    alert("OTP successfully sent!");
    setOtpSent(true); // change button text
  };
  const handleVerifyOTP = () => alert("OTP verified!");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    alert("Signup successful!");

    // Reset form after signup
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
      email: "",
      aadhaar: "",
      phone: "",
      otp: "",
    });
    navigate("/LoginVictim");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="row mb-3">
          <div className="col">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label>State</label>
            <input
              type="text"
              className="form-control"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label>Pin Code</label>
            <input
              type="text"
              className="form-control"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label>Country</label>
            <input
              type="text"
              className="form-control"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* Email with verify */}
        <div className="mb-3 d-flex align-items-center">
          <input
            type="email"
            className="form-control me-2"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleVerifyEmail}
          >
            Verify
          </button>
        </div>
        {/* Aadhaar with verify */}
        <div className="mb-3 d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2"
            name="aadhaar"
            placeholder="Aadhaar Card Number"
            value={formData.aadhaar}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleVerifyAadhaar}
          >
            Verify
          </button>
        </div>
         {/* Phone with verify */}
        <div className="mb-3 d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleVerifyPhone}
          >
            {otpSent ? "OTP Successfully Sent" : "Send OTP"}
          </button>
        </div>
        {/* OTP with verify */}
        <div className="mb-3 d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2"
            name="otp"
            placeholder="OTP"
            value={formData.otp}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleVerifyOTP}
          >
            Verify
          </button>
        </div>
        <button type="submit" className="btn btn-success">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
