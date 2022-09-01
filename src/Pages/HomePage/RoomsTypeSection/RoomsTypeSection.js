import React from "react";
import BookingButton from "../../../Components/BookingButton/BookingButton";
import "./RoomsTypeSection.css";
import smallRoom from "../../../Assets/simpleRoom.jpg";
import luxuryRoom from "../../../Assets/luxuryRoom.jpg";
import apartmentRoom from "../../../Assets/apartmentRoom.jpg";
import roomTypes from "../../../Assets/roomTypes.jpg";
import { Link } from "react-router-dom";

function RoomsTypeSection() {
  return (
    <main className="roomsTypeSection row d-flex justify-content-center align-items-center p-4">
      <div className="left-image col-lg-7 col-md-12 col-sm-12">
        <h3 className="py-2">EXTRA SERVICES & OFFERS. Best Stay by the Lake</h3>
        <div className="d-flex justify-content-around row align-items-center">
          <div className="col-lg-12 col-md-10 col-sm-10 room-typeContainer ">
            <Link to="/apartmentRoom">
              <img src={apartmentRoom} className="h-100 w-100" alt="" />
              <div className="room-button">
                <button>FROM $83</button>
              </div>

              <h5 className="room-type">Apartment</h5>
            </Link>
          </div>

          <div className="col-lg-6 col-md-10 col-sm-10 room-typeContainer ">
            <Link to="/smallRoom">
              <img src={smallRoom} className="h-100 w-100" alt="" />
              <div className="room-button">
                <button>FROM $56</button>
              </div>

              <h5 className="room-type">Small Room</h5>
            </Link>
          </div>

          <div className="col-lg-6 col-md-10 col-sm-10 room-typeContainer ">
            <Link to="/luxuryRoom">
              <img src={luxuryRoom} className="h-100 w-100" alt="" />
              <div className="room-button">
                <button>FROM $68</button>
              </div>

              <h5 className="room-type">Lurxury Room</h5>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-lg-5 col-md-10 col-sm-10 right-image">
        <img src={roomTypes} alt="" />
      </div>
      <div className="py-5">
        <BookingButton goLink="/booking" />
      </div>
    </main>
  );
}

export default RoomsTypeSection;
