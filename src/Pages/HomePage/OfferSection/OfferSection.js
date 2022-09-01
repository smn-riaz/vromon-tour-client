import React from "react";
import "./OfferSection.css";
import image2 from "../../../Assets/topbanner2.jpg";

function OfferSection() {
  return (
    <main
      className="offerSection d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${image2})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="offer-div w-50 h-50 text-center align-items-center d-flex justify-content-center">
        <div>
          <h2 className="p-1">SUMMER OFFER</h2>
          <h1 className="fs-1 fw-bold p-1">20% OFF</h1>
          <h6>ON A MINIMUM OF 3 NIGHTS</h6>
        </div>
      </div>
    </main>
  );
}

export default OfferSection;
