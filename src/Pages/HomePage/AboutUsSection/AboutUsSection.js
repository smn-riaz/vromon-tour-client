import React from "react";
import "./AboutUsSection.css";
import map from "../../../Assets/map.png";
import about1 from "../../../Assets/about1.jpg";
import about2 from "../../../Assets/about2.jpg";
import AboutUsBtn from "../../../Components/AboutUsBtn/AboutUsBtn";

function AboutUsSection() {
  return (
    <main
      className="d-flex flex-row align-items-center justify-content-center aboutUsSection p-5 my-5 row container mx-auto"
      id="aboutUs"
    >
      <div className="col-lg-5 col-sm-10 col-md-6 px-3 d-flex flex-column align-items-center justify-content-center">
        <div>
          <h6 className="text-center text-secondary">VROMON TOUR</h6>
          <h1 className="py-2 text-center">Relax in our Resort</h1>
          <p className="py-3 text-center about-text text-secondary px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quos
            libero ut voluptates minima unde ab quo. Corrupti minus illo culpa.
            Suscipit architecto optio eaque voluptatibus at quisquam fuga.
            Nihil?
          </p>
          <div className="text-center">
            <AboutUsBtn />
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-sm-12 col-md-6 p-2">
        <div className="d-flex row justify-content-center p-2">
          <div className="col-lg-6 col-md-6 col-sm-10 p-2">
            <img src={about1} className="w-100 h-100" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-10 p-2">
            <img src={about2} className="w-100 h-100" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUsSection;
