import React, { useEffect } from "react";
// scss
import "./chefs.scss";
// react bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";
import Heading from "../Heading/Heading";
// react router dom
import { Link } from "react-router-dom";
// data
import { ChefsData } from "../../Data/Data";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Chefs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <section id="chefs">
        <Container>
          <Heading titleOne={"Chefs"} titleTwo={"Our Proffesional Chefs"} />

          <Row>
            {ChefsData.map((chef) => {
              const { id, name, imgSrc, pos, icon1, icon2, icon3, icon4 } =
                chef;
              return (
                <Col
                  xl={4}
                  lg={6}
                  md={6}
                  sm={12}
                  key={id}
                  data-aos="zoom-in-up"
                  className="mx-auto mb-4 mb-xl-0"
                >
                  <div className="member">
                    <Image src={imgSrc} alt={name} fluid />
                    <div className="content text-center">
                      <h6>{name}</h6>
                      <p>{pos}</p>
                      <div className="social_icon">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <Link to="#">{icon1}</Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="#">{icon2}</Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="#">{icon3}</Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="#">{icon4}</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Chefs;
