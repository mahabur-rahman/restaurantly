import React, { useState } from "react";
// scss
import "./footer.scss";
// react bootstrap
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
// react icons
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";

// data
import { FooterUsefulLinks, FooterServices } from "../../Data/Data";

const Footer = () => {
  const [arrow, setArrow] = useState(false);

  // top arrow
  const backToTop = () => {
    if (window.scrollY >= 400) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };

  window.addEventListener("scroll", backToTop);

  return (
    <>
      {/* main footer part  */}
      <section id="footer">
        <Container>
          <Row>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={11}
              className="mx-auto my-3 my-lg-0"
            >
              <div className="logo_part">
                <h2>Restaurantly</h2>
                <div>
                  <h6>A108 Adam Street </h6>
                  <h6>NY 535022, USA</h6>
                </div>
                <div className="my-4">
                  <p>
                    <strong>Phone:</strong>
                    <span> +1 5589 55488 55</span>
                  </p>
                  <p>
                    <strong>Email: </strong> <span> info@example.com</span>
                  </p>
                </div>
                <div className="social_icon">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <FaSkype />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col
              xl={2}
              lg={2}
              md={6}
              sm={6}
              xs={11}
              className="mx-auto my-3 my-lg-0"
            >
              <div className="links">
                <h6>Useful Links</h6>
                <div className="links_list">
                  <ul>
                    {FooterUsefulLinks.map((list) => (
                      <li key={list.id}>
                        <span>{list.icon}</span>
                        <a href={list.url}>{list.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            <Col
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={11}
              className="mx-auto my-3 my-lg-0"
            >
              <div className="links">
                <h6>Our Services</h6>
                <div className="links_list">
                  <ul>
                    {FooterServices.map((data) => (
                      <li key={data.id}>
                        <span>{data.icon}</span>
                        <a href="#">{data.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            <Col
              xl={4}
              lg={4}
              md={6}
              sm={6}
              xs={11}
              className="mx-auto my-3 my-lg-0"
            >
              <div className="newsletter">
                <h6>Our Newsletter</h6>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <Form>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Email"
                      aria-label="email"
                      aria-describedby="basic-addon2"
                    />
                    <Button type="submit">Subscribe</Button>
                  </InputGroup>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* footer bottom part */}

      <section id="footerBottom">
        <Container>
          {/* footer bottom */}
          <Row>
            <Col xl={12}>
              <div className="footer_bottom text-center">
                <p>
                  &copy; Copyright <strong>Restaurantly</strong>. All Rights
                  Reserved
                </p>
                <p className="mb-0 creadits">
                  Designed by <a href="#"> BootstrapMade</a>
                </p>
              </div>
            </Col>

            {/* top arrow */}
            <div className="text-end">
              <a
                href="#banner"
                className={arrow ? "topArrow back_top" : "arrow "}
              >
                <FaRegArrowAltCircleUp />
              </a>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
