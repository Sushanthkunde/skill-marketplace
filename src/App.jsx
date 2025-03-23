import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

// Import components
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/navbar/Navbar";
import Footer from "./container/footer/Footer"; // ✅ Import Footer

// Import containers for the home page
import { Header, WhatGPT3, Features, Possibility, Blog } from "./container";

// Import pages for separate routes
import Jobs from "./pages/Jobs";
import PostJob from "./pages/post-job";
import Portfolio from "./pages/Portfolio";
import MyJobs from "./pages/my-job";
import SavedJobs from "./pages/saved-job";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/job-listing"; // ✅ Import Job Listing Page

// Home Page Component (✅ Fixed: Footer added)
const Home = () => (
  <>
    <Navbar /> {/* Navbar only in Home */}
    <div className="gradient-bg">
      <Header />
    </div>
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Blog />
    <Footer /> {/* ✅ Footer added at the bottom */}
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job" element={<Jobs />} />
        <Route path="/job-listing" element={<JobListing />} />{" "}
        {/* ✅ Added Job Listing Route */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/my-job" element={<MyJobs />} />
        <Route path="/saved-job" element={<SavedJobs />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </Router>
  );
};

export default App;
