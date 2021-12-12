import React from "react";
// scss
import "./gallery.scss";
// react bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";
// react dom
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
// data
import { GalleryData } from "../../Data/Data";
// light box 👍
import { SRLWrapper } from "simple-react-lightbox";

const Gallery = () => {
  return (
    <>
      <section id="photos">
        <Container fluid>
          <Heading
            titleOne={"Gallery"}
            titleTwo={"Some photos from Our Restaurant"}
          />
          <SRLWrapper>
            <Row>
              {GalleryData.map((gallery) => {
                const { id, imgSrc } = gallery;
                return (
                  <Col
                    xl={3}
                    lg={3}
                    md={6}
                    sm={6}
                    xs={12}
                    key={id}
                    className="mx-auto"
                  >
                    <div className="gallery_img">
                      <Link to={imgSrc}>
                        <Image src={imgSrc} alt="Gallery" fluid />
                      </Link>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </SRLWrapper>
        </Container>
      </section>
    </>
  );
};

export default Gallery;
