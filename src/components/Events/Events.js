import React, { useEffect } from "react";
import Heading from "../Heading/Heading";
// scss
import "./event.scss";
// react bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
// data
import { SwiperData } from "../../Data/Data";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Events = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <section id="event">
        <Container data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <Heading
            titleOne={"Events"}
            titleTwo={"Organize Your Events in our Restaurant"}
          />
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
            }}
            className="mySwiper"
          >
            {SwiperData.map((data) => (
              <SwiperSlide key={data.id}>
                <Row className="mb-5">
                  <Col xl={6}>
                    <div className="events_img">
                      <Image src={data.imgSrc} alt={data.title} fluid />
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className="events_content mt-3 mt-xl-0">
                      <h3>{data.title}</h3>
                      <span>{data.price}</span>
                      <p className="fst_text mt-3">{data.textOne}</p>
                      <div className="events_list">
                        <ul>
                          <li>{data.listOne}</li>
                          <li>{data.listTwo}</li>
                          <li>{data.listThree}</li>
                        </ul>
                        <p className="mt-2">{data.textTwo}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    </>
  );
};

export default Events;
