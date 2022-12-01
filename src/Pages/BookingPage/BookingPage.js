import React from "react";
import { Link } from "react-router-dom";
import "./BookingPage.css";
import smallRoom from "../../Assets/simpleRoom.jpg";
import luxuryRoom from "../../Assets/luxuryRoom.jpg";
import apartment from "../../Assets/apartmentRoom.jpg";
import NavBarSection from "../../Components/NavBarSection/NavBarSection";

function BookingPage() {
  return (
    <main className="bookingPage">
      <div className="d-flex row justify-content-center align-items-center py-5 px-2">

        <div className="col-lg-3 col-md-6 col-sm-10 m-1 room-typeContainer">
          <Link to="/smallRoom">
            <img src={smallRoom} className="h-100 w-100" alt="" />
            <div className="room-button">
              <button>FROM $56</button>
            </div>

            <h5 className="room-type">Small Room</h5>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-10 m-1 room-typeContainer">
          <Link to="/luxuryRoom">
            <img src={luxuryRoom} className="h-100 w-100" alt="" />
            <div className="room-button">
              <button>FROM $68</button>
            </div>

            <h5 className="room-type">Lurxury Room</h5>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-10 m-1 room-typeContainer">
          <Link to="/apartment">
            <img src={apartment} className="h-100 w-100" alt="" />
            <div className="room-button">
              <button>FROM $83</button>
            </div>

            <h5 className="room-type">Apartment</h5>
          </Link>
        </div>

      </div>
    </main>
  );
}

export default BookingPage;
