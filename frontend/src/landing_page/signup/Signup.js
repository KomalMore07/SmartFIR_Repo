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

  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVerifyEmail = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/send-verification-email/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Verification code sent to your email!");
        setEmailOtpSent(true);
      } else {
        alert("Error: " + (data.error || "Failed to send verification email."));
      }
    } catch (error) {
      console.error("Error sending email verification:", error);
      alert("Error sending verification email: " + error.message);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/verify-email/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Email verified successfully!");
        setEmailVerified(true);
        setEmailOtpSent(false);
      } else {
        alert("Error verifying OTP: " + (data.error || "Invalid OTP"));
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      alert("Error verifying OTP: " + error.message);
    }
  };

  const handleVerifyPhone = () => {
    alert("OTP successfully sent to phone!");
    setPhoneOtpSent(true);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!emailVerified) {
      alert("Please verify your email before signing up!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful!");
        navigate("/LoginVictim");
      } else {
        alert("Signup failed: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error during signup: " + error.message);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center mt-5 mb-5"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="p-5 shadow-lg"
        style={{
          width: "700px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <h2 className="text-center mb-5">Signup</h2>

        <form onSubmit={handleSignup}>
          {/* First & Last Name */}
          <div className="row mb-4">
            <div className="col">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={{ height: "50px" }}
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
                style={{ height: "50px" }}
              />
            </div>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              style={{ height: "50px" }}
            />
          </div>

          {/* City & State */}
          <div className="row mb-4">
            <div className="col">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                style={{ height: "50px" }}
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
                style={{ height: "50px" }}
              />
            </div>
          </div>

          {/* Pincode & Country */}
          <div className="row mb-4">
            <div className="col">
              <label>Pin Code</label>
              <input
                type="text"
                className="form-control"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                style={{ height: "50px" }}
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
                style={{ height: "50px" }}
              />
            </div>
          </div>

          {/* Aadhaar (moved above Email) */}
          <div className="mb-4">
            <label>Aadhaar Card Number</label>
            <input
              type="text"
              className="form-control"
              name="aadhaar"
              placeholder="Aadhaar Card Number"
              value={formData.aadhaar}
              onChange={handleChange}
              required
              style={{ height: "50px" }}
            />
          </div>

          {/* Email with verify */}
          <div className="mb-4 d-flex align-items-center">
            <input
              type="email"
              className="form-control me-2"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ height: "50px" }}
              disabled={emailVerified}
            />
            <button
              type="button"
              className={`btn ${
                emailVerified ? "btn-success" : "btn-outline-danger"
              }`}
              onClick={handleVerifyEmail}
              disabled={!formData.email || emailVerified}
            >
              {emailVerified ? "Verified ✅" : "Send OTP"}
            </button>
          </div>

          {/* OTP with verify (email only) */}
          {emailOtpSent && (
            <div className="mb-4 d-flex align-items-center">
              <input
                type="text"
                className="form-control me-2"
                name="otp"
                placeholder="Enter Email OTP"
                value={formData.otp}
                onChange={handleChange}
                required
                style={{ height: "50px" }}
              />
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handleVerifyOTP}
              >
                Verify OTP
              </button>
            </div>
          )}

          {/* Phone with OTP send */}
          <div className="mb-4 d-flex align-items-center">
            <input
              type="text"
              className="form-control me-2"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ height: "50px" }}
            />
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleVerifyPhone}
            >
              {phoneOtpSent ? "OTP Sent ✅" : "Send OTP"}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-danger w-100 mt-3"
            style={{ height: "50px", fontSize: "18px" }}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
