import React, { useEffect } from "react";
// react bootstrap
import { Col, Card } from "react-bootstrap";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const WhyCard = ({ num, title, text }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Col xl={4} lg={4} md={10} className="mx-auto my-3 my-lg-0">
        <Card data-aos="zoom-in" data-aos-duration="2000">
          <Card.Body>
            <Card.Title>{num}</Card.Title>
            <Card.Subtitle className="my-4 text-muted">{title}</Card.Subtitle>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default WhyCard;
