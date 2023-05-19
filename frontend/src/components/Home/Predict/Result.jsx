import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import sampPht from "../../../Assets/Images/backimg13.avif";
import Header from "../../Header/Header";
import axios from "axios";

import "./Result.css";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [resp, setResp] = useState();

  const [crop, setCrop] = useState(null);
  const [disease, setDisease] = useState(null);
  const [abt, setAbt] = useState(null);
  const [temp, setTemp] = useState(null);
  const [humid, setHumid] = useState(null);
  const [treatment, setTreatment] = useState(null);

  console.log(location.state);

  var cls_ind = location.state.cls_ind;
  // console.log(typeof cls_ind);
  var conf = location.state.conf;
  console.log(conf);

  const style = {
    transform: `rotate(${conf / 2}turn)`,
    background:
      conf > 0.75
        ? conf > 0.9
          ? "#009578"
          : "#3BA99C"
        : conf > 0.5
        ? "#FFCF56"
        : "#EF6461",
  };

  const handleSubmit = async () => {
    navigate("/");
  };

  useEffect((e) => {
    try {
      const response = axios.get(`http://127.0.0.1:8000/getCrop/${cls_ind}`);

      response.then((res) => {
        console.log(res.data);
        setCrop(res.data.crop);
        setDisease(res.data.disease);
        setAbt(res.data.about);
        setTemp(res.data.opttemp);
        setHumid(res.data.optmst);

        var rem = res.data.remedy.split(" __");
        const renderList = rem.map((item, index) => (
          <div className="prevention-points" key={index}>
            {item}
          </div>
        ));
        setTreatment(renderList);

        console.log(resp);
      });
    } catch (e) {
      console.log(e);
    }
  });

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
            <div className="result-prediction">
              <div className="result-crop">
                <div className="title">CROP</div>
                <div className="content">
                  <div className="crop-info">{crop ? crop : ""}</div>
                  <div className="crop-vector"></div>
                </div>
              </div>
              <div className="result-disease">
                <div className="title">DISEASE</div>
                <div className="content">
                  <div className="disease-info">{disease ? disease : ""}</div>
                  <div className="disease-vector"></div>
                </div>
              </div>
            </div>

            <div className="result-gauge">
              <div className="title">CONFIDENCE</div>
              <div class="gauge_body">
                <div class="gauge_fill" style={style}></div>
                <div class="gauge_cover">
                  {((conf * 10000) / 100).toFixed(2)}%
                </div>
              </div>
            </div>

            <div className="result-abtdis">
              <div className="abtdis-title">ABOUT THE DISEASE</div>
              <div className="abtdis-content">
                <div className="abtdis-info">{abt ? abt : ""}</div>
                <div className="abtdis-vector"></div>
              </div>
            </div>
          </div>

          <div className="result-row-one">
            <div className="result-crop-facts">
              <div className="result-temp">
                <div className="title">OPTIMUM TEMPERATURE</div>
                <div className="content">
                  <div className="temp-info">{temp ? temp : ""}</div>
                  <div className="temp-vector"></div>
                </div>
              </div>
              <div className="result-humidity">
                <div className="title">OPTIMUM HUMIDITY</div>
                <div className="content">
                  <div className="humid-info">{humid ? humid : ""}</div>
                  <div className="humid-vector"></div>
                </div>
              </div>
            </div>

            <div className="result-prevention">
              <div className="prevention-title">PREVENTION AND TREATMENT</div>
              <div className="prevention-content">
                <div className="prevention-info">
                  {treatment ? treatment : ""}
                </div>
                <div className="prevention-vector"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
