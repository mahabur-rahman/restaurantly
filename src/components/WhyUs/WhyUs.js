import React from "react";
// scss
import "./whyus.scss";
// react bootstrap
import { Container, Row } from "react-bootstrap";
import WhyCard from "./WhyCard";
// data
import { whyUsData } from "../../Data/Data";
import Heading from "../Heading/Heading";

const WhyUs = () => {
  return (
    <>
      <section id="whyUs">
        <Container>
          <Heading titleOne={"Why Us"} titleTwo={'Why Choose Our Restaurant'} />
          <Row>
            {whyUsData.map((data) => (
              <WhyCard key={data.id} {...data} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhyUs;
