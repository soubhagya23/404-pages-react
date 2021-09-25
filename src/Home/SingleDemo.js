import React from "react";
import "./styles.css";

function SingleDemo(props) {
  return (
    <div className="col">
      <div
        className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
        style={{ backgroundImage: ` url(${props.image})` }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
            {props.title}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SingleDemo;
