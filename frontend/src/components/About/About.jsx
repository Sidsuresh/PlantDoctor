import React from "react";
import "./About.css";
import Header from "../Header/Header";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="about-container">
        <div className="proj-container">
          <div className="exp-container">
            <div className="title">About the project</div>
            <div className="exp-content">
              The project involves developing a Convolutional Neural Network
              (CNN) model from scratch using the Keras API from the TensorFlow
              2.0 library for predicting diseases in plant leaves with a high
              accuracy of 98%. The model is trained using the augmented
              PlantVillage dataset on a large dataset of images of healthy and
              diseased plant leaves, and it learns the unique features that
              distinguish healthy leaves from diseased ones. The model is built
              using various layers of convolution, pooling, and dense layers to
              extract and classify the features in the images. Early Stopping
              Callback, which tracks the performance of the loss value on
              validation split, was employed to prevent overfitting of the
              model.
            </div>
          </div>
          <div className="lbl-container">
            <div className="title">Different crops and their diseases</div>

            <div className="row-one">
              <div className="cont-one">
                <div className="card-one">
                  <div className="front-apple"></div>
                  <div className="back">
                    <div className="lbl-title">Apple</div>
                    <div className="lbl-cell-content">
                      <ul>
                        <li>Apple Scab</li>

                        <li>Black Rot</li>

                        <li>Cedar Apple Rust</li>

                        <li>Healthy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cont-one">
                <div className="card-one">
                  <div className="front-blueberry"></div>
                  <div className="back">
                    <div className="lbl-title">Blueberry</div>
                    <div className="lbl-cell-content">
                      <ul>
                        <li>Healthy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cont-one">
                <div className="card-one">
                  <div className="front-cherry"></div>
                  <div className="back">
                    <div className="lbl-title">Cherry</div>
                    <div className="lbl-cell-content">
                      <ul>
                        <li>Powdery Mildew</li>
                        <li>Healthy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cont-one">
                <div className="card-one">
                  <div className="front-corn"></div>
                  <div className="back">
                    <div className="lbl-title">Corn</div>
                    <div className="lbl-cell-content">
                      <ul>
                        <li>Cercospora Leaf Spot</li>

                        <li>Common Rust</li>

                        <li>Northern Leaf Blight</li>

                        <li>Healthy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row-one">
              <div className="cont-one">
                <div className="card-one">
                  <div className="front-grape"></div>
                  <div className="back">
                    <div className="lbl-title">Grape</div>
                    <div className="lbl-cell-content">
                      <ul>
                        <li>Black Rot</li>
                        <li>Esca (Black Measles)</li>
                        <li>Isariopsis Leaf Spot</li>
                        <li>Healthy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont-one">
                <div className="card-one">
                  <div className="front-orange"></div>
                  <div className="back">
                    <div className="lbl-title">Orange</div>
                    <div className="lbl-cell-content">
                      <ul>
                        <li>Haunglongbing (Citrus Greening)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont-one">
                <div className="card-one">
                  <div className="front-peach"></div>
                  <div className="back">
                    <div className="lbl-title">Peach</div>
                    <div className="lbl-cell-content">
                      <ul>
                        <li>Bacterial Spot</li>

                        <li>Healthy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont-one">
                <div className="card-one">
                  <div className="front-bellpepper"></div>
                  <div className="back">
                    <div className="lbl-title">Bell Pepper</div>
                    <div className="lbl-cell-content">
                      <ul>
                        <li>Bacterial Spot</li>
                        <li>Healthy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row-one">
              <div className="cont-one">
                <div className="card-one">
                  <div className="front-potato"></div>
                  <div className="back">
                    <div className="lbl-title">Potato</div>
                    <div className="lbl-cell-content">
                      <ul>
                        <li>Early Blight</li>
                        <li>Late Blight</li>
                        <li>Healthy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont-one">
                <div className="card-one">
                  <div className="front-raspberry"></div>
                  <div className="back">
                    <div className="lbl-title">Raspberry</div>
                    <div className="lbl-cell-content">
                      <ul>
                        <li>Healthy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont-one">
                <div className="card-one">
                  <div className="front-soybean"></div>
                  <div className="back">
                    <div className="lbl-title">Soybean</div>
                    <div className="lbl-cell-content">
                      <ul>
                        <li>Healthy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont-one">
                <div className="card-one">
                  <div className="front-squash"></div>
                  <div className="back">
                    <div className="lbl-title">Squash</div>
                    <div className="lbl-cell-content">
                      <ul>
                        <li>Powdery Mildew</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row-one">
              <div className="cont-two">
                <div className="card-one">
                  <div className="front-strawberry"></div>
                  <div className="back">
                    <div className="lbl-title">Strawberry</div>
                    <div className="lbl-cell-content">
                      <ul>
                        <li>Leaf Scorch</li>
                        <li>Healthy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cont-two">
                <div className="card-one">
                  <div className="front-tomato"></div>
                  <div className="back">
                    <div className="lbl-title">Tomato</div>
                    <div className="lbl-cell-content">
                      <ul>
                        <li>Bacterial Spot</li>

                        <li>Early Blight</li>

                        <li>Late Blight</li>

                        <li>Leaf Mold</li>

                        <li>Leaf Spot</li>

                        <li>Spider Mites</li>

                        <li>Target Spot</li>

                        <li>Yellow Leaf Curl Virus</li>

                        <li>Mosaic Virus</li>

                        <li>Healthy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
