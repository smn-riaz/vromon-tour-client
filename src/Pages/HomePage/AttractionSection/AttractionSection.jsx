import React from "react";
import BookingButton from "../../../Components/BookingButton/BookingButton";
import "./AttractionSection.css";
import spa from "../../../Assets/spa.jpg";
import swimming from "../../../Assets/swimmingpool.jpg";
import { Link } from "react-router-dom";

const AttractionSection = () => {
  return (
    <main className="p-5 attraction-container">
      <div className="p-md-5 container">
        <div className="attraction-section d-sm-flex flex-row-reverse justify-content-center align-items-center row">
          
        <div className="col-lg-6 p-0">
            <img src={spa} alt="" className="w-100 h-100" />
          </div>
          <div className="col-lg-6 px-2 py-4">
            <h6 className="text-center text-secondary">WELLNESS</h6>
            <h2 className="py-2 text-center">Spa and Beauty</h2>
            <p className="px-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              voluptates, voluptatum inventore neque quibusdam quo nemo cumque
              temporibus cum fugit explicabo ipsa eligendi eius necessitatibus
              ratione debitis, aut minus autem!
            </p>
            <div className="text-center">
              <Link to="/booking">
                <button className="px-4 py-2  attraction-btn">
                  BOOK NOW
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="attraction-section d-sm-flex justify-content-center align-items-center row">
          <div className="col-lg-6 p-0">
            <img src={swimming} alt="" className="w-100 h-100" />
          </div>

          <div className="col-lg-6 px-2 py-4">
            <h6 className="text-center text-secondary">WELLNESS</h6>
            <h2 className="py-2 text-center">Swimming Pool</h2>
            <p className="px-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              voluptates, voluptatum inventore neque quibusdam quo nemo cumque
              temporibus cum fugit explicabo ipsa eligendi eius necessitatibus
              ratione debitis, aut minus autem!
            </p>
            <div className="text-center">
              <Link to="/booking">
                <button className="px-4 py-2  attraction-btn">
                  BOOK NOW
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AttractionSection;
