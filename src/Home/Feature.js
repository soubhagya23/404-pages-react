import React from 'react';
import "./styles.css";
import IconOne from "../Assets/food.png"
import IconTwo from "../Assets/weather.png";
import IconThree from "../Assets/smile.png"

function Feature() {
return(
<div className="bg-light py-5 service-1">
  <div className="container">
    {/* Row  */}
    <div className="row">
      {/* Column */}
      <div className="col-md-4 wrap-service1-box">
        <div className="card border-0 card-shadow mb-4">
          <div className="card-body text-center">
            <div className="my-3"><img src={IconOne} alt="food" /></div>
            <h6 className="font-weight-medium">Slice of a Pizza</h6>
            <p className="mt-3">They are too an important part of the website! Don't Ignore them🥺</p>
          </div>
        </div>
      </div>
      {/* Column */}
      <div className="col-md-4 wrap-service1-box">
        <div className="card border-0 card-shadow mb-4">
          <div className="card-body text-center">
            <div className="my-3"><img src={IconTwo} alt="weather" /></div>
            <h6 className="font-weight-medium">The Traffic Saver</h6>
            <p className="mt-3">An effective 404 page will guide the users back to relevant pages of the site</p>
          </div>
        </div>
      </div>
      {/* Column */}
      <div className="col-md-4 wrap-service1-box">
        <div className="card border-0 card-shadow mb-4">
          <div className="card-body text-center">
            <div className="my-3"><img src={IconThree} alt="smile" /></div>
            <h6 className="font-weight-medium">No Negativity</h6>
            <p className="mt-3">People forget about all negative emotions with non-existent pages</p>
          </div>
        </div>
      </div>
      <div className="col-md-12 mt-3 text-center">
        <a className="btn btn-success-gradiant text-white btn-md border-0" href="#f1"><span>View Details</span></a>
      </div>
    </div>
  </div>
</div>

    )
}

export default Feature
