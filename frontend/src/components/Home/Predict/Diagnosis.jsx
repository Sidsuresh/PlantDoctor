import React from "react";
import sampPht from "../../../Assets/Images/backimg13.avif";
import Header from "../../Header/Header";
import { BiArrowBack } from "react-icons/bi";

import "./Result.css";

const Diagnosis = () => {
  const handleSubmit = async () => {
    console.log("Pressed");
  };

  return (
    <div className="result-page">
      <Header />
      <div className="result-container">
        <div className="result-child">
          <div className="result-title-back">
            <div className="result-back">
              <BiArrowBack onClick={handleSubmit} />
            </div>
            <div className="result-title">RESULTS</div>
          </div>
          <div className="result-row-one">
            <div className="result-image">
              <div className="img-center">
                <img src={sampPht} />
              </div>
            </div>
            <div className="result-prediction">
              <div className="result-crop">
                <div className="title">CROP</div>
                <div className="content">
                  <div className="crop-info">APPLE</div>
                  <div className="crop-vector"></div>
                </div>
              </div>
              <div className="result-disease">
                <div className="title">DISEASE</div>
                <div className="content">
                  <div className="disease-info">CEDAR RUST</div>
                  <div className="disease-vector"></div>
                </div>
              </div>
            </div>
            <div className="result-abtdis">
              <div className="abtdis-title">ABOUT THE DISEASE</div>
              <div className="abtdis-content">
                <div className="abtdis-info">
                  Laborum excepteur irure elit est nisi eiusmod est cupidatat
                  minim sunt eu.Commodo deserunt enim voluptate Lorem culpa
                  officia id.Eu aute pariatur deserunt amet quis commodo nisi
                  pariatur magna excepteur dolor velit.
                </div>
                <div className="abtdis-vector"></div>
              </div>
            </div>
          </div>
          <div className="result-row-one">
            <div className="result-crop-facts">
              <div className="result-temp">
                <div className="title">OPTIMUM TEMPERATURE</div>
                <div className="content">
                  <div className="temp-info">APPLE</div>
                  <div className="temp-vector"></div>
                </div>
              </div>
              <div className="result-humidity">
                <div className="title">OPTIMUM HUMIDITY</div>
                <div className="content">
                  <div className="humid-info">APPLE</div>
                  <div className="humid-vector"></div>
                </div>
              </div>
            </div>
            <div className="result-prevention">
              <div className="prevention-title">PREVENTION AND TREATMENT</div>
              <div className="prevention-content">
                <div className="prevention-info">lskdbfak sdk</div>
                <div className="prevention-vector"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
