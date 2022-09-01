import React from "react";
import { useContext } from "react";
import { RegisteredUserInfoContext } from "../../App";
import "./BookingDetailsPage.css";

const BookingDetailsPage = () => {
  const { registered, setRegistered } = useContext(RegisteredUserInfoContext);
  const confirmData = JSON.parse(localStorage.getItem("confirmData"));
  const bookingData = registered;
  console.log(bookingData);
  return (
    <main className="d-flex justify-content-center row bookingDetailsPage m-1 p-2">
      <div className="col-10">
        <div className="d-flex justify-content-center text-center row m-2">
          <div className="tourist-intro-container col-lg-5 py-3 px-1">
            <h3>{bookingData.name}</h3>
            <h6>{bookingData.email}</h6>
          </div>
        </div>
        {bookingData.totalCost > 0 && (
          <div className="check-inout-container d-flex justify-content-center row p-3">
            <div className="col-lg-3 col-md-6 col-sm-10 p-2">
              <h5>
                Check In: <b>{bookingData.checkInDate}</b>
              </h5>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 p-2">
              <h5>
                Check Out: <b>{bookingData.checkOutDate}</b>
              </h5>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 p-2">
              <h5>
                Total Days: <b>{bookingData.totalDays}</b>
              </h5>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-10 p-2">
              <h5>
                Total Cost: <b>${bookingData.totalCost}</b>
              </h5>
            </div>
          </div>
        )}
        {bookingData.totalCost > 0 && (
          <div className="roomImage-container row d-flex justify-content-center py-3">
            <div className="col-lg-9 text-center">
              <img src={bookingData.roomImage} alt="" className="w-100" />
            </div>
            <div className="col-lg-3 align-items-center d-flex align-items-center">
              <div className="w-100">
                <div className="px-4 py-3 my-3 room-details">
                  <h5 className="">Room No: {bookingData.roomNo}</h5>
                </div>
                <div className="px-4 py-3 my-3 room-details">
                  <h5 className="">Type: {bookingData.roomType}</h5>
                </div>
                <div className="px-4 py-3 my-3 room-details">
                  <h5 className="">Room Cost: ${bookingData.roomCost}</h5>
                </div>
              </div>
            </div>
          </div>
        )}

        {bookingData.extraServices.length !== 0 && (
          <div className="extraServices-container">
            <h4>
              Extra Services: <b>${bookingData.extraServicesCost}</b>
            </h4>
            {bookingData.extraServices.map((service) => (
              <button className="px-3 py-1 mx-2 fw-bold service-button">
                {service.serviceName}{" "}
                <sup>
                  $<b>{service.cost}</b>
                </sup>
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default BookingDetailsPage;
