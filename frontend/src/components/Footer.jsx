import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

     <div className="navy-box demo-box">
        <div className="demo-content">
          <h4>Get 15 Days Free Demo</h4>
          <p>All our hotel partners who tried 15 days demo insisted on converting their hotel into a smart hotel</p>
          <div className="buttons">
          <Link to="/scheduler" className="demo-button">SCHEDULE CALL</Link>
          </div>

        </div>
      </div>

      <div className="navy-box important-links">
        <div className="important-text">
          <p>
            Halox is a leader in the smart home segment. It is paving the way with its inventions and innovations in technology and business. Our light year ahead technology is helping customers stay smarter and efficient at an affordable cost.
          </p>
        </div>
        <div className="links">
          <h4>Important Links</h4>
          <ul>
            <li><Link to="/">Smart Hotel</Link></li>
            <li><Link to="/">Smart Home</Link></li>
            <li><Link to="/vroom">IVSR (Demo)</Link></li>
            <li><Link to="/download">Download</Link></li>
            <li><Link to="/partner">Partner with us</Link></li>
            <li><Link to="/package">Package</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/">Halox</Link></li>
            <li><Link to="/community">Community Social</Link></li>
          </ul>
        </div>
        <div className="social-links">
          <h4>Follow Us</h4>
          <div className="icons">
            <Link to="#"><AiFillFacebook /></Link>
            <Link to="#"><AiFillInstagram /></Link>
            <Link to="https://www.youtube.com/@haloxsmart"><AiFillYoutube /></Link>
            <Link to="#"><AiFillTwitterSquare /></Link>
            <Link to="https://www.linkedin.com/company/thelivsmart/?originalSubdomain=in"><AiFillLinkedin /></Link>
          </div>
        </div>
      </div>

      <div className="privacy-links">
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Terms & Conditions</Link>
        <Link to="#">Terms of Use</Link>
        <Link to="#">Sitemap</Link>
      </div>
    </footer>
  );
};

export default Footer;




