import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, InfoCircleOutlined, SolutionOutlined, MailOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <img src={`${process.env.PUBLIC_URL}/assets/Halox.png`} alt="Your Logo" className="logo-image" />
        </NavLink>

        <Menu mode="horizontal" className={click ? "nav-menu active" : "nav-menu"}>
        <Menu.Item key="contact" onClick={handleClick}>
            <NavLink exact to="/contact" activeClassName="active" className="nav-links">
              <MailOutlined />
              Contact Us
            </NavLink>
          </Menu.Item>
          <Menu.Item key="about" onClick={handleClick}>
            <NavLink exact to="/about" activeClassName="active" className="nav-links">
              <InfoCircleOutlined />
              About
            </NavLink>
          </Menu.Item>
          <Menu.Item key="solutions" onClick={handleClick}>
            <NavLink exact to="/solutions" activeClassName="active" className="nav-links">
              <SolutionOutlined />
              Solutions
            </NavLink>
          </Menu.Item>
          
        </Menu>

        <div className="nav-icon" onClick={handleClick}>
          {click ? <CloseOutlined className="icon" /> : <MenuOutlined className="icon" />}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


