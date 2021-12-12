import React, { useEffect } from "react";
// scss
import "./topbar.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
// react icons
import { FaMobileAlt, FaRegClock } from "react-icons/fa";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Topbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <section id="topbar">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="topbar_content">
                <div className="topbar_left">
                  <div className="d-flex align-items-center">
                    <span>
                      <FaMobileAlt />
                      <span className="mobile_no"> +1 5589 55488 55</span>
                    </span>
                    <div className="px-4">
                      <span>
                        <FaRegClock />
                        <span className="time"> Mon-Sat: 11AM - 23PM</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="topbar_right">
                  <a href="#">En / </a>
                  <a href="#" className="de">
                    De
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Topbar;
