import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Chart } from "react-google-charts";

import "./Predict.css";

const Imagedrop = () => {
  const [img, setImg] = useState([]);
  const [preview, setPreview] = useState(false);
  const [crop, setCrop] = useState(null);
  const [disease, setDisease] = useState(null);
  const [confidence, setConfidence] = useState(0);
  const [treatment, setTreatment] = useState(null);

  const getData = () => {
    return [
      ["Label", "Value"],
      ["Conf.", Math.round(confidence * 10000) / 100],
    ];
  };

  const [chrtData, setChrtData] = useState(getData());

  useEffect(() => {
    if (confidence !== -1) setChrtData(getData());
  }, [confidence]);

  useEffect(() => {});

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    onDrop: (acceptedFile) => {
      console.log(acceptedFile[0].path);
      setImg(
        acceptedFile.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      setCrop(null);
      setDisease(null);
      setConfidence(0);
      setChrtData(0);
      setPreview(true);
      setTreatment(null);
    },
  });

  const handleSubmit = async () => {
    console.log("Pressed");
    const formdata = new FormData();
    formdata.append("file", img[0]);
    console.log(formdata);
    axios
      .post("http://127.0.0.1:8000/upload", formdata)
      .then((res) => {
        console.log(res.data);
        var cls_name = res.data.cls_name.split("_");
        setCrop(cls_name[0]);
        setDisease(cls_name[1]);
        setConfidence(res.data.confidence);
        var rem = res.data.remedy.split(" __");
        const renderList = rem.map((item, index) => (
          <div key={index}>{item}</div>
        ));
        // let arr = [];
        // Object.values(rem).map((v) => arr.push(v));
        console.log(rem.length);
        setTreatment(renderList);
      })
      .catch((err) => console.log(err));
  };

  const options = {
    width: 150,
    height: 150,
    redFrom: 0,
    redTo: 50,
    yellowFrom: 51,
    yellowTo: 75,
    greenFrom: 76,
    greenTo: 100,
    minorTicks: 5,
  };

  return (
    <div id="Home" className="image-container">
      {/* <div className="home-title">PLANT DOCTOR</div> */}
      <div className="drop-prev-container">
        <div {...getRootProps()} className="drop-container">
          <input {...getInputProps()} className="drop-input" />
          {isDragActive ? (
            <p> Drop the Image here </p>
          ) : (
            <p> Drag 'n' Drop the Image here </p>
          )}
        </div>
        <div className="preview-container">
          {preview
            ? console.log("HEre: ", img[0].preview)
            : console.log("none")}
          {preview ? (
            <img src={img[0].preview} className="img-preview" alt="preview" />
          ) : (
            " "
          )}
        </div>
        <div className="button-container">
          <button onClick={handleSubmit} className="upload-btn">
            Predict
          </button>
        </div>
      </div>

      <div className="cls-conf-container">
        <div className="cls-container">
          <div className="crop-content">
            <div className="title">Crop</div>
            {crop ? (
              <p className="cls-p">{crop}</p>
            ) : (
              <p className="cls-p">NIL</p>
            )}
          </div>
          <div className="disease-content">
            <div className="title">Disease</div>
            {disease ? (
              <p className="cls-p">{disease}</p>
            ) : (
              <p className="cls-p">NIL</p>
            )}
          </div>
        </div>
        <div className="conf-container">
          <div className="title">Confidence</div>
          <div className="conf-content">
            {confidence ? (
              <p className="conf-p">{Math.round(confidence * 10000) / 100} %</p>
            ) : (
              <p className="conf-p">NIL</p>
            )}

            <Chart
              chartType="Gauge"
              className="conf-gauge"
              width="50%"
              height="100px"
              data={chrtData}
              options={options}
            />
          </div>
        </div>
      </div>

      <div className="prevention-container">
        <div className="prevention-box">
          <div className="title">Prevention</div>
          <div className="prevention-content">
            {treatment ? treatment : <p></p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagedrop;
