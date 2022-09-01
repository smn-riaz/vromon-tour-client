import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BookingButton from "../BookingButton/BookingButton.js";
import "./SpecificRooms.css";

function SpecificRooms({ data }) {
  return (
    <main className="d-flex justify-content-center row align-items-center p-3">
      {data.map((room) => (
        <div className="col-lg-5 col-md-5 col-sm-10 specificRoomContainer m-1">
          <img src={room.image} className="h-100 w-100" alt="" />
          <div className="price-btn">
            <button>${room.price}</button>
          </div>
          <h5 className="room-name">{room.name}</h5>
          <div className="book-btn">
            <BookingButton goLink={`/${room.type}/${room.name}`} />
          </div>
        </div>
      ))}
    </main>
  );
}

export default SpecificRooms;
