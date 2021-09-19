import React from "react";
import "./styles.css"
import Lottie from "react-lottie";
import animationData from "../Animations/home.json";

function Hero() {
  const animationOption = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container col-xxl-8 px-4">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <Lottie options={animationOption} height={400} width={700} />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 lh-1 mb-3">
            404 Pages are <strike>not</strike> boring!
          </h1>
          <p className="lead">
            Introducing a ton of predesigned 404 pages which will engage your users even on amy error😎
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2 github-btn"
            >
              Check Out
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Say Thanks😍
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
