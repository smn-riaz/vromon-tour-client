import React, { useState } from "react";
import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { RegisteredUserInfoContext } from "../../App";

function LogoutModal() {
  const [show, setShow] = useState(false);
  const { registered, setRegistered } = useContext(RegisteredUserInfoContext);
  const handleLogOut = () => {
    setRegistered({})
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button variant="primary" className="border-0 fw-semibold bg-light" onClick={handleShow}>
        Logout
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vromon - Tour</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center text-center">
          <div>
            <img src={registered.profile} alt="" className="rounded-circle"/>
            <h5>{registered.name}</h5>
            <hr />
            <h6 className="">Are you sure want to Log out?</h6>
            <button className="px-3 py-1 border-0 fw-semibold bg-secondary" onClick={handleLogOut}>Log out</button>
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

export default LogoutModal;
