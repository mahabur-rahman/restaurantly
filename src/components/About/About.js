import React, { useEffect } from "react";
// about scss
import "./about.scss";
// react bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";
// img
import aboutImg from "../../images/about.jpg";
// data
import { ListItem } from "../../Data/Data";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <section id="about">
        <Container>
          <Row>
            <Col
              xl={6}
              lg={6}
              md={12}
              className="mx-auto order-last order-lg-first"
            >
              <div
                className="about_content"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p className="fst_p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                {/* list */}
                <div className="about_List">
                  <ul>
                    {ListItem.map((list) => {
                      return (
                        <li key={list.id}>
                          <span className="mx">{list.icon}</span>
                          {list.title}
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-3">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
            </Col>
            <Col
              xl={6}
              lg={6}
              md={10}
              className="align-self-center mx-auto order-first order-lg-last"
            >
              <div className="about_img mb-4 mb-lg-0" data-aos="zoom-in">
                <Image src={aboutImg} fluid thumbnail />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
