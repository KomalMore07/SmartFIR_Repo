import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

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
        otp: "", // Used for both email OTP and phone OTP (cleared upon flow switch to avoid conflict)
    });

    const [emailOtpSent, setEmailOtpSent] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    
    // Phone (TOTP) Verification States
    const [qrSent, setQrSent] = useState(false); 
    const [qrSrc, setQrSrc] = useState("");
    const [phoneOtpVerified, setPhoneOtpVerified] = useState(false); 
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // --- EMAIL VERIFICATION FUNCTIONS ---

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
                // Clear the shared OTP field to prevent conflict with any previous phone OTP
                setFormData(prev => ({ ...prev, otp: "" })); 
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
                // Clear the shared OTP field after successful verification
                setFormData(prev => ({ ...prev, otp: "" }));
            } else {
                alert("Error verifying OTP: " + (data.error || "Invalid OTP"));
            }
        } catch (error) {
            console.error("OTP verification error:", error);
            alert("Error verifying OTP: " + error.message);
        }
    };

    // --- PHONE (TOTP/QR) VERIFICATION FUNCTIONS ---

    // Generate QR for Google Authenticator
    const handleGenerateQR = async () => {
        if (!formData.phone) return alert("Enter phone number first!");
        try {
            // Assuming the backend returns the QR code image data as a blob
            const res = await axios.get(
                `http://127.0.0.1:8000/api/generate-qr/?phone=${formData.phone}`,
                { responseType: "blob" }
            );
            const imgUrl = URL.createObjectURL(res.data);
            setQrSrc(imgUrl);
            setQrSent(true);
            // Clear the shared OTP field to prevent conflict with any previous email OTP
            setFormData(prev => ({ ...prev, otp: "" }));
            alert("📱 Scan this QR in your Google Authenticator app!");
        } catch (err) {
            console.error("QR Generation Error:", err);
            alert("Error generating QR code. Check phone number format or backend status.");
        }
    };

    // Verify OTP from Google Authenticator
    const handleVerifyPhoneOTP = async () => {
        if (!formData.otp) return alert("Enter OTP first!");
        try {
            const res = await axios.post("http://127.0.0.1:8000/api/verify-otp/", {
                phone: formData.phone,
                otp: formData.otp,
            });
            
            if (res.data.message) {
                setPhoneOtpVerified(true);
                alert("Phone verified successfully!");
                setQrSent(false); // Hide QR/OTP input after verification
                // Clear the shared OTP field after successful verification
                setFormData(prev => ({ ...prev, otp: "" }));
            }
        } catch (err) {
            console.error("Phone OTP Verification Error:", err);
            alert(err.response?.data?.error || "OTP verification failed. Check the code and try again.");
        }
    };

    // --- SIGNUP FUNCTION ---

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!emailVerified) {
            alert("Please verify your email before signing up!");
            return;
        }
        if (!phoneOtpVerified) return alert("Please verify your phone number using the Authenticator app first!");

        try {
            const res = await fetch("http://127.0.0.1:8000/api/signup/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
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

                    {/* Aadhaar */}
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
                            // Disable if verified OR if waiting for OTP
                            disabled={emailVerified || emailOtpSent} 
                        />
                        <button
                            type="button"
                            className={`btn ${
                                emailVerified ? "btn-success" : "btn-outline-danger"
                            }`}
                            onClick={handleVerifyEmail}
                            disabled={!formData.email || emailVerified || emailOtpSent}
                        >
                            {emailVerified ? "Verified ✅" : "Send OTP"}
                        </button>
                    </div>

                    {/* OTP with verify (email only) */}
                    {emailOtpSent && !emailVerified && (
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
                                disabled={!formData.otp}
                            >
                                Verify OTP
                            </button>
                        </div>
                    )}

                    {/* Phone with QR generation */}
                    <div className="mb-4 d-flex align-items-center">
                        <input
                            type="text"
                            className="form-control me-2"
                            name="phone"
                            placeholder="Phone Number (for Authenticator)"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            style={{ height: "50px" }}
                            // Disable phone input once verification is started or completed
                            disabled={phoneOtpVerified || qrSent} 
                        />
                        <button
                            type="button"
                            onClick={handleGenerateQR} 
                            className={`btn ${phoneOtpVerified ? "btn-success" : "btn-outline-danger"}`}
                            disabled={!formData.phone || phoneOtpVerified || qrSent}
                        >
                            {phoneOtpVerified ? "Verified ✅" : "Generate QR"}
                        </button>
                    </div>

                    {/* Display QR and Phone OTP Input */}
                    {qrSent && !phoneOtpVerified && (
                        <>
                            {qrSrc && (
                                <div className="mb-3 text-center p-3 border rounded border-gray-300 bg-light">
                                    <p className="mb-2 fw-bold text-dark">📱 Scan this QR in Google Authenticator</p>
                                    <img src={qrSrc} alt="QR Code for TOTP" width="180" height="180" className="shadow-md rounded" />
                                    <p className="mt-2 text-muted small">The OTP changes every 30 seconds.</p>
                                </div>
                            )}
                            
                            <div className="mb-4 d-flex align-items-center">
                                <input
                                    type="text"
                                    className="form-control me-2"
                                    name="otp" // This reuses the main OTP field
                                    placeholder="Enter Authenticator OTP"
                                    value={formData.otp}
                                    onChange={handleChange}
                                    required
                                    style={{ height: "50px" }}
                                />
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={handleVerifyPhoneOTP} // Verify TOTP
                                    disabled={!formData.otp}
                                >
                                    Verify Phone
                                </button>
                            </div>
                        </>
                    )}
                    
                    {/* Submit */}
                    <button
                        type="submit"
                        className="btn btn-danger w-100 mt-3"
                        style={{ height: "50px", fontSize: "18px" }}
                        // Disable until BOTH email and phone are verified
                        disabled={!emailVerified || !phoneOtpVerified} 
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;