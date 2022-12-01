import React from "react";
import { Link } from "react-router-dom";
import "./BookingButton.css";

function BookingButton({ goLink }) {
  return (
    <div className="">
      <Link to={`${goLink}`}>
        <button
          className="px-4 py-2 text-white  border-2 border border-white fs-5 bookingbutton"
        >
          BOOK NOW
        </button>{" "}
      </Link>
    </div>
  );
}

export default BookingButton;
