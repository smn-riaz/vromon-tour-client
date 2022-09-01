import React, { useState } from "react";
import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RegisteredUserInfoContext } from "../../App";
import checkout from "../../Assets/checkout.jpg";

function CheckOutModal({ bookingData }) {
  const navigate = useNavigate();
  const {
    id,
    name,
    email,
    roomNo,
    roomType,
    roomImage,
    totalDays,
    roomCost,
    checkInDate,
    checkOutDate,
    extraServices,
    bookingDate,
  } = bookingData;
  const extraServicesCost = extraServices
    .map((service) => service.cost)
    .reduce((a, b) => a + b, 0);
  const totalCost = roomCost + extraServicesCost;
  const [show, setShow] = useState(false);
  const { registered, setRegistered } = useContext(RegisteredUserInfoContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const confirmBooking = () => {
    const confirmData = {
      id,
      name,
      email,
      roomNo,
      roomType,
      roomImage,
      totalDays,
      roomCost,
      totalCost,
      checkInDate,
      checkOutDate,
      extraServices,
      extraServicesCost,
      bookingDate,
    };


    localStorage.setItem("confirmData", JSON.stringify(confirmData));

    fetch("https://vromon-tour-server.vercel.app/tourist/hotelBooking", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(confirmData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setRegistered(confirmData);
          navigate("/myBooking");
        }
      })
      .catch((err) => alert("Something wrong, please try again"));

  
  };
  return (
    <>
      <button
        type="button"
        className="border-0 btn btn-success px-5 py-2 fw-bold"
        onClick={handleShow}
      >
        BOOK
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        style={{
          backgroundImage: `url("https://i.ibb.co/BZcLbTK/checkout.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Vromon - Tour</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5 py-2">
          <h5 className="text-center text-danger">Please, Check Again !</h5>
          <hr />
          <div>
            <p className="fs-5">
              Name: <b>{name}</b>
            </p>
            <p className="fs-5">
              Email: <b>{email}</b>
            </p>
            <p className="fs-5">
              Room No: <b>{roomNo}</b>
            </p>
            <p className="fs-5">
              Room Type: <b>{roomType}</b>
            </p>
            <p className="fs-5">
              Check In: <b>{checkInDate}</b>
            </p>
            <p className="fs-5">
              Check Out: <b>{checkOutDate}</b>
            </p>
            <p className="fs-5">
              Total Days: <b>{totalDays}</b>
            </p>
            <p className="fs-5">
              Room Cost: <b>${roomCost}</b>
            </p>
            {extraServices.length > 0 && (
              <p className="fs-5">
                Extra Services:
                {extraServices.map((service) => (
                  <ul>
                    <li>
                      <small>
                        {service.serviceName}{" "}
                        <sup>
                          $<b>{service.cost}</b>
                        </sup>
                      </small>
                    </li>
                  </ul>
                ))}
              </p>
            )}
            {extraServices.length === 0 && (
              <p className="fs-5">
                Extra Services: <b>Nothing</b>
              </p>
            )}
            {extraServices.length !== 0 && (
              <p className="fs-5">
                Extra Services Cost: <b>${extraServicesCost}</b>
              </p>
            )}
            <p className="fs-5">
              Total Cost: <b>${totalCost}</b>
            </p>
            <p className="d-flex justify-content-end">
              <small className="text-right">
                Booking date: <b>{bookingDate}</b>
              </small>
            </p>
          </div>
          <div className="d-flex justify-content-center py-3">
            <button
              type="button"
              className="border-0 btn btn-success w-25 py-2  w-50 fw-bold"
              onClick={confirmBooking}
            >
              CONFIRM
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CheckOutModal;
