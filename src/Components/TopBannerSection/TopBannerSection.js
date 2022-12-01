import React from "react";
import BookingButton from "../BookingButton/BookingButton";
import "./TopBannerSection.css";

function TopBannerSection() {
  return (
    <main className="topbanner flex flex-column justify-content-center align-items-center">
      <div style={{ height: "70vh" }} className="mx-auto text-center my-5 py-5 d-flex flex-column justify-content-center align-items-center gap-5">
        <h5 className="text-white banner-quote">LUXURY HOTEL & BEST RESORT</h5>
        <h1 className="text-white banner-quote2">ENJOY A LUXURY <br/> EXPERIENCE</h1>
        <BookingButton goLink="/booking" />
      </div>
    </main>
  );
}

export default TopBannerSection;
