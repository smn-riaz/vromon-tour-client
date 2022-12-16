import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BookingButton from "../BookingButton/BookingButton.js";
import "./SpecificRooms.css";

function SpecificRooms({ data }) {
  return (
    <main className="d-sm-flex flex-row justify-content-center row gap-0 mx-auto container">
      {data.map((room) => (
        <div className="col-sm-5 specificroom-container m-1 p-3">
          <div className="specificroom-img d-flex flex-row justify-content-center">
            <img src={room.image} className="w-100" height="250" alt="" />
          </div>
          <div className="specificroom-img d-flex flex-row justify-content-around py-3">
            <button className="room-name">${room.price}</button>
            <button className="room-name">{room.name}</button>
          </div>

          <div className="text-center px-4 d-flex justify-content-center">
              <Link to={`/${room.type}/${room.name}`}>
                <button className="px-4 py-2  attraction-btn ">
                  BOOK NOW
                </button>{" "}
              </Link>
            </div>
        </div>
      ))}
    </main>
  );
}

export default SpecificRooms;
