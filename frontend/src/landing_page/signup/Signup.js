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
  const [emailVerified, setEmailVerified] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Simplified Email Verification (with 3-second delay before marking verified)
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
        alert("Verification email sent successfully!");
        // ⏳ Wait 3 seconds before marking verified (simulate backend confirmation)
        setTimeout(() => {
          setEmailVerified(true);
          alert("Email verified successfully!");
        }, 3000);
      } else {
        alert("Error: " + (data.error || "Failed to send verification email."));
        console.error(data);
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      alert("Error verifying email: " + error.message);
    }
  };


  // Aadhaar verification (dummy for now)
  const handleVerifyAadhaar = () => alert("Aadhaar verified!");

  // Phone verification (dummy for now)
  const handleVerifyPhone = () => {
    alert("OTP successfully sent!");
    setOtpSent(true);
  };

  // OTP verification (dummy for now)
  const handleVerifyOTP = () => alert("OTP verified!");

  // Final Signup Submit
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
    <div className="container container-sign mt-4">
      <h2 className="mb-2" style={{ textAlign: "center" }}>
        Signup
      </h2>
      <div className="border">
        <form onSubmit={handleSignup}>
          {/* First + Last Name */}
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

          {/* Address */}
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

          {/* City + State */}
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

          {/* Pin Code + Country */}
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

          {/* Email + Verify Button */}
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
              className={`btn ${
                emailVerified ? "btn-success" : "btn-outline-danger"
              }`}
              onClick={handleVerifyEmail}
              disabled={!formData.email || emailVerified}
            >
              {emailVerified ? "Verified ✅" : "Verify"}
            </button>
          </div>

          {/* Aadhaar */}
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
              className="btn btn-outline-danger"
              onClick={handleVerifyAadhaar}
            >
              Verify
            </button>
          </div>

          {/* Phone */}
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
              className="btn btn-outline-danger"
              onClick={handleVerifyPhone}
            >
              {otpSent ? "OTP Sent ✅" : "Send OTP"}
            </button>
          </div>

          {/* OTP */}
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
              className="btn btn-outline-danger"
              onClick={handleVerifyOTP}
            >
              Verify
            </button>
          </div>

          {/* Signup Button */}
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-danger">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
