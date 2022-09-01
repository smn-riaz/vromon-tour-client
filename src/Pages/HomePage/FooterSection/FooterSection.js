import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./FooterSection.css";

function FooterSection() {
  return (
    <footer className="footerSection">
      <div className="row mx-auto footer-link-container text-justify container-fluid">
        <div className="col-md-3 py-2  align-self-center">
          <HashLink to="/#" className="navbar-brand text-center">
            <h3 className="text-dark">Vromon - Tour</h3>
          </HashLink>
        </div>

        <div className="col-md-3 text-center py-2">
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="footer-link">
                {" "}
                <u>Facebook</u>
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
               <u> Instagram</u>
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                <u>YouTube</u>
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                <u>Twitter</u>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3 text-center py-2">
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="footer-link">
                Privacy Policy &middot;
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Cookie Policy &middot;
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Read FAQ &middot;
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Terms of Use &middot;
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3 text-center py-2">
          <ul className="list-unstyled">
            <li className="footer-link">vromon-tour@gmail.com</li>
            <li className="footer-link">0000000000</li>
            <li className="footer-link">California, USA</li>
          </ul>
        </div>
      </div>
      <div className="row footer-bottom">
        <div className="col-12">
          <p className="text-center py-1">
            © {new Date().getFullYear()} <b>vromon-tour.com</b>
            <br />
            All rights reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
