import React from "react";
import "./ContactSection.css";
import contact from "../../../Assets/contact.jpg";

function ContactSection() {
  return (
    <main
      id="contactUs"
      className="contactSection d-flex row justify-content-center align-items-center  p-5"
      style={{
        backgroundImage: `url(${contact})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="contact-div d-flex row justify-content-between col-lg-8 p-5 align-items-center text-light">
        <div className="col-lg-5 col-md-8 col-sm-10">
          <h1>OUR TIMING</h1>
          <hr />
          <div className="py-2">
            <h5>MONDAY - THURSDAY</h5>
            <small>07:00 - 22:00</small>
          </div>
          <br />
          <div className="py-2">
            <h5>FRIDAY - SUNDAY</h5>
            <small>07:00 - 20:00</small>
          </div>
          <div className="py-2">
            <h5>+8801793370000</h5>
            <h5>vromontour@gmail.com</h5>
          </div>
        </div>
        <div className="col-lg-5 col-md-8 col-sm-10">
          <h4 className="px-3 py-1">STAY IN CONTACT</h4>
          <h1 className="px-3 py-1">Get in Touch</h1>
          <div className="form-div">
            <div className="p-3 m-1">
              <input
                type="text"
                className="px-3 py-2 w-100"
                placeholder="Name" required
              />
            </div>
            <div className="p-3 m-1">
              <input
                type="email"
                className="px-3 py-2 w-100"
                placeholder="Email" required
              />
            </div>
            <div className="p-3 m-1">
              <input
                type="text"
                className="px-3 py-2 w-100"
                placeholder="Comment" required
              />
            </div>
            <div className="p-3 m-1">
              <button
                type="submit"
                className="border-0 w-100 py-2 mx-auto fw-bold"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactSection;
