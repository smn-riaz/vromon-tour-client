import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { RegisteredUserInfoContext } from "../../App";
import LogoutModal from "../LogoutModal/LogoutModal";
import "./NavBarSection.css";

function NavBarSection() {
  const { registered, setRegistered } = useContext(RegisteredUserInfoContext);

  return (
    <main className="px-2">
      <>
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand} className="">
            <Container fluid className="gx-5">
              <Navbar.Brand className="website-name">
                <Link to="/" className="text-decoration-none fw-bold text-dark">
                  Vromon - Tour
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Vromon - Tour
                  </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-5 ">
                    <Nav.Link className="pe-4">
                      <NavHashLink
                        to="/#aboutUs"
                        className="fw-bold text-dark text-decoration-none"
                      >
                        Home
                      </NavHashLink>
                    </Nav.Link>
                    <Nav.Link className="pe-4">
                      <NavHashLink
                        to="/#aboutUs"
                        className="fw-bold text-dark text-decoration-none"
                      >
                        About
                      </NavHashLink>
                    </Nav.Link>
                    <NavDropdown
                      className="pe-4 fw-bold text-dark"
                      title="Rooms"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item>
                        <Link
                          to="/smallRoom"
                          className="text-decoration-none fw-bold text-dark"
                        >
                          Small Room
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <Link
                          to="/luxuryRoom"
                          className="text-decoration-none fw-bold text-dark"
                        >
                          Luxury Room
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <Link
                          to="/apartmentRoom"
                          className="text-decoration-none fw-bold text-dark"
                        >
                          Apartment
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/* {!(registered.userRole === "admin") &&
                      (registered.extraServices.length > 0) && (
                        <Nav.Link className="pe-4">
                          <Link
                            to="/myBooking"
                            className="text-decoration-none  fw-bold text-dark"
                          >
                            My Booking
                          </Link>
                        </Nav.Link>
                      )} */}

                    {/* {!(registered.userRole === "admin") &&
                     ( registered.extraServices.length === 0) && (
                        <Nav.Link className="pe-4">
                          <Link
                            to="/myBooking"
                            className="text-decoration-none  fw-bold text-dark"
                          >
                            My Booking
                          </Link>
                        </Nav.Link>
                      )} */}

                    <Nav.Link className="pe-4">
                      <NavHashLink
                        to="/#contactUs"
                        className="fw-bold text-dark text-decoration-none"
                      >
                        Blog
                      </NavHashLink>
                    </Nav.Link>
                    <Nav.Link className="pe-4">
                      <NavHashLink
                        to="/#contactUs"
                        className="fw-bold text-dark text-decoration-none"
                      >
                        Contact
                      </NavHashLink>
                    </Nav.Link>
                    {!registered.email && (
                      <Nav.Link className="pe-4 ">
                        <Link
                          to="/login"
                          className="text-decoration-none fw-bold text-dark"
                        >
                          Login
                        </Link>
                      </Nav.Link>
                    )}

                    {registered.userRole === "admin" && (
                      <NavDropdown
                        className="pe-4 fw-bold text-dark"
                        title="Dashboard"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item>
                          <Link
                            to="/admin/allTourist"
                            className="text-decoration-none fw-bold text-dark"
                          >
                            All Touist
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                          <Link
                            to="/admin/updateTourist"
                            className="text-decoration-none fw-bold text-dark"
                          >
                            Update Tourist Info
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                          <Link
                            to="/admin/bookingDetails"
                            className="text-decoration-none fw-bold text-dark"
                          >
                            Booking Details
                          </Link>
                        </NavDropdown.Item>
                      </NavDropdown>
                    )}

                    {registered.email && (
                      <Nav.Link className="pe-4 border-0">
                        <LogoutModal />
                      </Nav.Link>
                    )}

                    {registered.name && (
                      <Nav.Link className="pe-4 fw-bold text-dark">
                        <Link to="/myBooking" className="mybooking">
                          <span className="name-box px-3 py-1">
                            {registered.name.split(" ")[0]}
                          </span>
                        </Link>
                      </Nav.Link>
                    )}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </main>
  );
}

export default NavBarSection;
