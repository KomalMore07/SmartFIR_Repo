import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ContactPage from "./landing_page/contact/ContactPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./landing_page/NotFound";
import Logout from "./components/Logout/Logout";
import Signup from "./landing_page/signup/Signup";
import LoginPolice from "./landing_page/login/LoginPolice";
import LoginVictim from "./landing_page/login/LoginVictim";
import PoliceDashboard from "./landing_page/PoliceDashboard/PoliceDashboard";
import VictimDashboard from "./landing_page/VictimDashboard/VictimDashboard";
import Chatbot from "./landing_page/VictimDashboard/Chatbot";
import UserProfileForm from "./landing_page/VictimDashboard/UserProfileForm";
import ReportComplaint from "./landing_page/VictimDashboard/ComplaintForm/ReportComplaint";
import CheckStatus from "./landing_page/VictimDashboard/ComplaintStatus/CheckStatus";
import ComplaintWithdraw from "./landing_page/VictimDashboard/ComplaintWithdraw";
import MultiLanguageSupport from "./landing_page/VictimDashboard/MultiLanguageSupport";
import Learn from "./landing_page/VictimDashboard/Learn";
import UserProfile from "./landing_page/VictimDashboard/UserProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      {/* Main pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/AboutPage" element={<AboutPage />} />
      <Route path="/ContactPage" element={<ContactPage />} />
      <Route path="/Logout" element={<Logout />} />

      <Route path="/Signup" element={<Signup />} />
      <Route path="/LoginPolice" element={<LoginPolice />} />
      <Route path="/LoginVictim" element={<LoginVictim />} />
      <Route path="/PoliceDashboard" element={<PoliceDashboard />} />
      <Route path="/NotFound" element={<NotFound />} />

      <Route path="/VictimDashboard" element={<VictimDashboard />}>
        <Route index element={<UserProfileForm />} />
        <Route path="Chatbot" element={<Chatbot />} />
        <Route path="UserProfileForm" element={<UserProfileForm />} />
        <Route path="ReportComplaint" element={<ReportComplaint />} />
        <Route path="CheckStatus" element={<CheckStatus />} />
        <Route path="ComplaintWithdraw" element={<ComplaintWithdraw />} />
        <Route path="Learn" element={<Learn />} />
        <Route path="MultiLanguageSupport" element={<MultiLanguageSupport />} />
        <Route index element={<UserProfileForm />} />
        <Route path="UserProfileForm" element={<UserProfileForm />} />
        <Route path="UserProfile" element={<UserProfile />} />
      </Route>
      
    </Routes>

    <Footer />
  </BrowserRouter>
);
