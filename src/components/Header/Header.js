import React, { useState, useEffect } from "react";
// scss
import "./header.scss";
// react bootstrap
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import Topbar from "../Topbar/Topbar";
// react icons
import { FaBars } from "react-icons/fa";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", hideTopBar);
    return () => window.removeEventListener("scroll", hideTopBar);
  }, [hide]);

  const hideTopBar = () => {
    if (window.pageYOffset > 100) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      {!hide && <Topbar />}

      {/* navbar  */}

      <header id="header">
        <Navbar
          expand="lg"
          className={`${hide ? "nav-fixed" : "fixed-top"}`}
          data-aos="fade-down"
        >
          <Container>
            <Navbar.Brand href="#banner" className="text-uppercase text-light">
              Restaurantly
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              style={{ color: "#fff", boxShadow: "none", fontSize: "1.9rem" }}
            >
              <FaBars />
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll">
              <Nav className="mx-auto my-2 my-lg-0">
                <Nav.Link href="#banner">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#menuItem">Menu</Nav.Link>
                <Nav.Link href="#special">Specials</Nav.Link>
                <Nav.Link href="#event">Events</Nav.Link>
                <Nav.Link href="#chefs">Chefs</Nav.Link>
                <Nav.Link href="#photos">Gallery</Nav.Link>

                <NavDropdown title="Drop Down" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action4">
                    Drop Down 1
                  </NavDropdown.Item>
                  {/* deep dropdown */}

                  <div className="mb-2 text-center">
                    {["start"].map((direction) => (
                      <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        title={` Deep Drop Down  `}
                      >
                        <Dropdown.Item eventKey="1">Drop Down 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Drop Down 2</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Drop Down 3</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Drop Down 4</Dropdown.Item>

                        <Dropdown.Item eventKey="4">Drop Down 5</Dropdown.Item>
                      </DropdownButton>
                    ))}
                  </div>
                  {/* end of deep dropdown */}
                  <NavDropdown.Item href="#action4">
                    Drop Down 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Drop Down 3
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Drop Down 4
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#contactUs">Contact</Nav.Link>
              </Nav>
              {/* Btn  */}
              <a href="#booking" type="button" className="book_btn">
                Book a table
              </a>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
