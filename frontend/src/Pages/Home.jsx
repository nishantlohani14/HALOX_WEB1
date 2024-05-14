import React from "react";
import "./Pages.css"; // Import CSS file
import Amazing from "../components/amazing";
import Hero from "../components/Hero";
import Loved from "../components/loved";
import { Link } from "react-router-dom";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Halox the masters of electronics"
        }
      />
      <div className="space"></div> {/* Add space here */}
      <Amazing />
      <div className="space"></div> {/* Add space here */}
      <Loved />
    </>    
  );
};

export default Home;





