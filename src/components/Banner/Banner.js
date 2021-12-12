import React, { useEffect } from "react";
// banner scss
import "./banner.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
// component
import Btn from "../Button/Button";
import Header from "../Header/Header";
// import { Link } from "react-router-dom";
// icon
import { FaPlay } from "react-icons/fa";
// fancy box
import Fancybox from "./fancybox.js";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const video = "https://www.youtube.com/watch?v=u6BOC7CDUTQ";
  return (
    <>
      <Header />
      <section id="banner" className="d-flex align-items-center">
        <Container>
          <Row>
            <Col xl={8} lg={8} md={12}>
              <div className="banner_content mt-5" data-aos="zoom-in">
                <h2>
                  Welcome to <span>Restaurantly</span>
                </h2>
                <h3>Delivering great food for more than 18 years!</h3>
                <Btn title={"OUR MENU"} className="menu_Btn" />
                <Btn title={"BOOK A TABLE"} />
              </div>
            </Col>
            <Col xl={4} lg={4} md={12} className="align-self-center">
              <div className="text-right mx-5 px-5 mt-5" data-aos="zoom-in">
                <Fancybox>
                  <a
                    data-fancybox="gallery"
                    href={video}
                    className="play_btn text-right"
                  >
                    <FaPlay />
                  </a>
                </Fancybox>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
