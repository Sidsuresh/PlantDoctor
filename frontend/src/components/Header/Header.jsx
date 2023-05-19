import React from "react";
import "./Header.css";

//React Icons
import { AiOutlineGithub } from "react-icons/ai";
import { MdInfo } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header">
      <div className="header-name-logo">
        <div className="header-name">PlantDoctor</div>
        <div className="header-logo"></div>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <a href="/">
              <ImHome /> <h7>Home</h7>
            </a>
          </li>
          <li>
            <a href="/about">
              <MdInfo /> <h7>About</h7>
            </a>
          </li>
          <li>
            <a href="https://github.com/Sidsuresh/PlantDoctor">
              <AiOutlineGithub /> <h7>Github</h7>
            </a>
          </li>
          <li>
            <a href="/contact">
              <FiPhoneCall /> <h7>Contact</h7>
            </a>
          </li>
        </ul>
      </div>
      {/* <nav className="navbar">
        <h2></h2>

        
      </nav> */}
    </header>
  );
};

export default Header;
