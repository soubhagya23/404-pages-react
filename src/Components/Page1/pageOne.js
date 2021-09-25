import React from "react";
import Lottie from "react-lottie";
import Animation from "./animation.json";
import "../../Home/styles.css";

import { Link } from "react-router-dom";

const pageAnimation = {
  loop: true,
  autoplay: true,
  animationData: Animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const style = {
  height: "50vh",
  width: "50vh",
};

function pageOne() {
  return (
    <div
      className="container"
      style={{ textAlign: "center", marginTop: "20vh" }}
    >
      <Lottie options={pageAnimation} style={style} />
      <h1>Oops! Lost in Amazon!</h1>
      <Link to="/">
        {" "}
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 me-md-2 github-btn my-3"
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default pageOne;
