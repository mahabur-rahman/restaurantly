import React, { useEffect } from "react";
// scss
import "./contact.scss";
// react bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// data
import { ContactData } from "../../Data/Data";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <section id="contactUs">
        <Container>
          <div className="heading">
            <h5>Contact</h5>
            <h2>Contact Us</h2>
          </div>
        </Container>
        <Container fluid data-aos="fade-up" data-aos-duration="1000">
          <iframe
            style={{ border: "0", width: "100%", height: "350px" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            title={"Map"}
          />
        </Container>
        <Container className="my-4">
          <Row>
            <Col xl={4} data-aos="zoom-out-up">
              {ContactData.map((contact) => {
                const { id, icon, heading, text, text1 } = contact;
                return (
                  <div className="left" key={id}>
                    <div className="icon">{icon}</div>
                    <div className="address">
                      <h4>{heading}</h4>
                      <p>
                        {text} <br /> {text1}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Col>
            <Col xl={8} data-aos="zoom-out-down">
              <Row className="mt-4">
                <Col xl={6}>
                  <Form>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col xl={6}>
                  <Form>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col xl={12}>
                  <Form>
                    <Form.Group className="mb-3" controlId="subject">
                      <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col xl={12}>
                  <Form>
                    <Form.Group className="mb-3" controlId="msg">
                      <Form.Control
                        as="textarea"
                        rows={8}
                        placeholder="Message"
                      />
                    </Form.Group>
                  </Form>
                </Col>
                {/* submit btn */}
                <div className="submit_btn text-center mt-2">
                  <Button type="submit">Send Message</Button>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
