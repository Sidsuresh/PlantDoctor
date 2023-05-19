import { useNavigate } from "react-router-dom";
import React from "react";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  function getStarted() {
    navigate("/");
  }

  return (
    <div className="landing-container">
      <div className="child">
        <div className="child-one">
          <div className="landing-title">WELCOME TO PLANT-DOCTOR</div>
          <div className="content">
            Revolutionize your gardening game with our app's plant disease
            recognition which will diagnose your plant's ailments before it's
            too late.
          </div>
          <button className="proceed" onClick={getStarted}>
            Get Started!
          </button>
        </div>
        <div className="child-two"></div>
      </div>
    </div>
  );
};

export default Landing;
