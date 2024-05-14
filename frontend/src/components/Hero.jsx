import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="hero container">
        <div className="banner">
          <div className="text-content">
            <p>Turn your hotel into</p>
            <h2>Smart Hotel with Halox</h2>
            <p>Powered by World's first cloudless technology</p>
            <p>Now at just ₹2999 ₹999 per month</p>
            <div className="buttons">
              <Link to="/qr" className="demo-button">
                TRY VIRTUAL DEMO
              </Link>
              <Link to="/contact" className="contact-button">
                CONTACT US
              </Link>
            </div>
          </div>
          <div className="image-content">
            <img src="/interior.png" alt="Interior" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;


