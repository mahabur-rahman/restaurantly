import React, { useEffect } from "react";
// scss
import "./special.scss";
import { Container, Row, Col, Tab, Nav, Image } from "react-bootstrap";
import Heading from "../Heading/Heading";

// data
import { TabMenu } from "../../Data/Data";
import { TabData } from "../../Data/Data";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Special = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <section id="special">
        <Container>
          <Heading titleOne={"Special"} titleTwo={"Check Our Specials"} />
          {/* tabs */}
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col lg={3} className="mb-4 mb-lg-0">
                <Nav
                  variant="pills"
                  className="flex-column"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  {TabMenu.map((elem) => (
                    <Nav.Item key={elem.id}>
                      <Nav.Link eventKey={elem.eventKey}>{elem.title}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col lg={9}>
                <Tab.Content
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  {TabData.map((tab) => {
                    const { id, heading, textOne, textTwo, imgSrc, eventKey } =
                      tab;
                    return (
                      <Tab.Pane eventKey={eventKey} key={id}>
                        <Row>
                          <Col xl={8}>
                            <div className="content">
                              <h3>{heading}</h3>
                              <p className="fst_text">{textOne}</p>
                              <p className="sst_text">{textTwo}</p>
                            </div>
                          </Col>
                          <Col xl={4}>
                            <div className="tab_img">
                              <Image src={imgSrc} alt="Special Item" fluid />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </>
  );
};

export default Special;
