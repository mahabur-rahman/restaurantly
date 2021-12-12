import React, { useEffect } from "react";
// scss
import "./booking.scss";
// react bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Booking = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <section id="booking">
        <Container data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <div className="heading">
            <h5>Reservation</h5>
            <h2>Book a Table</h2>
          </div>

          <Row>
            <Col xl={4}>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
              </Form>
            </Col>
            <Col xl={4}>
              <Form>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
              </Form>
            </Col>
            <Col xl={4}>
              <Form>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Control type="text" placeholder="Your Phone" />
                </Form.Group>
              </Form>
            </Col>

            <Col xl={4}>
              <Form>
                <Form.Group className="mb-3" controlId="date">
                  <Form.Control type="text" placeholder="Date" />
                </Form.Group>
              </Form>
            </Col>
            <Col xl={4}>
              <Form>
                <Form.Group className="mb-3" controlId="time">
                  <Form.Control type="text" placeholder="Time" />
                </Form.Group>
              </Form>
            </Col>
            <Col xl={4}>
              <Form>
                <Form.Group className="mb-3" controlId="people">
                  <Form.Control type="number" placeholder="# of people" />
                </Form.Group>
              </Form>
            </Col>
            <Col xl={12}>
              <Form>
                <Form.Group className="mb-3" controlId="msg">
                  <Form.Control as="textarea" rows={5} placeholder="Message" />
                </Form.Group>
              </Form>
            </Col>

            <div className="submit_btn text-center mt-2">
              <Button type="submit">Book a Table</Button>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Booking;
