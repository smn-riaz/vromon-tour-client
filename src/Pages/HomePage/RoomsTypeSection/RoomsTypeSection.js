import React from "react";
import BookingButton from "../../../Components/BookingButton/BookingButton";
import "./RoomsTypeSection.css";
import smallRoom from "../../../Assets/simpleRoom.jpg";
import luxuryRoom from "../../../Assets/luxuryRoom.jpg";
import apartmentRoom from "../../../Assets/apartmentRoom.jpg";
import roomTypes from "../../../Assets/roomTypes.jpg";
import { Link } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";
import { BiArea } from "react-icons/bi";

function RoomsTypeSection() {
  return (
    <main className="roomsTypeSection row d-flex justify-content-center align-items-center  p-5 my-5 ">
      <h6 className="text-center text-secondary">LUXURY HOTEL</h6>
      <h1 className="py-2 text-center">Best Rooms</h1>

      <div className="d-flex flex-row flex-lg-row-reverse justify-content-center row gap-0">
        

        <div className="col-lg-5 col-sm-10 p-0">
          <div className="room-typeContainer mx-1 my-2">
            <div>
              <Link to="/smallRoom">
                <img src={smallRoom} className="h-100 w-100" alt="" />
                <div className="room-button">
                  <button className="rounded-end">FROM $56</button>
                </div>
              </Link>
            </div>
            <div className="room-type">
              <h5>Small Room</h5>
            </div>
          </div>

          <div className="room-typeContainer mx-1 my-2">
            <div>
              <Link to="/apartmentRoom">
                <img src={apartmentRoom} className="h-100 w-100" alt="" />
                <div className="room-button">
                  <button className="rounded-end">FROM $56</button>
                </div>
              </Link>
            </div>
            <div className="room-type">
              <h5>Apartemnt</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-5 p-0 col-sm-10">
          <div className="room-typeContainer mx-1 my-2">
            <div>
              <Link to="/luxuryRoom">
                <img src={luxuryRoom} className="h-100 w-100" alt="" />
                <div className="room-button">
                  <button className="rounded-end">FROM $56</button>
                </div>
              </Link>
            </div>
            <div className="room-type">
              <h5>Luxury Room</h5>
            </div>
          </div>

          <div className="mx-1 my-2">
            <div>
              <h3>Comfortable Place</h3>
            </div>
            <div className="d-flex jusity-content-start row">
              <div className="col-5 d-flex">
                <div className="">
                  <p className="bg-dark text-white fw-bold px-1">9.5</p>
                </div>
                <div className="px-1">
                  <p className="text-secondary fw-semibold">300+ Reviews</p>
                </div>
              </div>

              <div className="col-4 d-flex">
                <div className="">
                  <BsPeopleFill />
                </div>
                <div className="px-1">
                  <p className="text-secondary fw-semibold">5K+ Guests</p>
                </div>
              </div>

              <div className="col-3 d-flex">
                <div className="">
                  <BiArea />
                </div>
                <div className="px-1">
                  <p className="text-secondary fw-semibold">
                    80 M <sup>2</sup>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-secondary py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                voluptatem error ratione assumenda consectetur quisquam. Ea
                nemo, modi, saepe quae fugiat tempora dolor voluptas doloribus
                accusantium assumenda culpa harum error?
              </p>
            </div>

            <div className="">
              <Link to="/">
                <button className="px-4 py-2 text-white  border-2 border border-white fs-5 aboutusbtn">
                  BOOK NOW
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
}

export default RoomsTypeSection;
