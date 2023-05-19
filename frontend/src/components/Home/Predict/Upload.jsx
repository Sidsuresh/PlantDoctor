import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsFillImageFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import axios from "axios";

import "./Upload.css";

const Upload = () => {
  const navigate = useNavigate();
  const [img, setImg] = useState([]);
  const [preview, setPreview] = useState(false);

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
      setPreview(true);
    },
  });

  const handleSubmit = async () => {
    const formdata = new FormData();
    formdata.append("file", img[0]);
    console.log(formdata);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formdata
      );
      //try use nav over here

      console.log(response.data);
      // navigate("/result");
      navigate("/result", {
        state: {
          cls_ind: response.data.cls_ind,
          conf: response.data.confidence,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="upload-page">
      <Header />
      <div className="upload-container">
        <div className="upload-child">
          <div className="instr-container">
            <div className="instr-top">
              Follow the steps to find the disease affecting your plant:
            </div>
            <div className="instr-point">
              <div>
                1. You can either{" "}
                <span style={{ color: "#7872b9", fontStyle: "italic" }}>
                  Drag a picture of the infected leaf / Click on the top box{" "}
                </span>
                to upload the picture
              </div>
              <div>
                2. Verify the image that you have uploaded from the preview
                panel
              </div>
              <div>3. Click on the Predict button</div>
            </div>
            <div className="instr-bot">Easy as that !!!</div>
          </div>
          <div className="sel-prev-container">
            <div {...getRootProps()} className="sel-container">
              <input {...getInputProps()} className="drop-input" />
              {isDragActive ? (
                <p> Drop the Image here </p>
              ) : (
                <p> Drag 'n' Drop / Click here to upload image </p>
              )}
            </div>
            <div className="prev-container">
              {preview
                ? console.log("HEre: ", img[0].preview)
                : console.log("none")}
              {preview ? (
                <img
                  src={img[0].preview}
                  className="img-preview"
                  alt="preview"
                />
              ) : (
                <BsFillImageFill />
              )}
            </div>
            <button onClick={handleSubmit} className="but-container">
              Predict !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
