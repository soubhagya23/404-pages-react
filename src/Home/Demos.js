import React from "react";
import "./styles.css";
import SingleDemo from "./SingleDemo";
import Image from "../Assets/photo.jpg"
import {Link} from "react-router-dom"

function Demos(props) {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Demos</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <Link to="/one">
          <SingleDemo title="Light" image={Image} />
         </Link>

      </div>
    </div>
  );
}

export default Demos;
