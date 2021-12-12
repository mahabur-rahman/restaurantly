import React, { useEffect } from "react";
// scss
import "./testimonial.scss";
// react bootstrap
import { Container, Card, Image } from "react-bootstrap";
// data
import { TestimonialData } from "../../Data/Data";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <section id="testimonial">
        <Container data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <div className="heading">
            <h5>Testimonials</h5>
            <h2>What they're saying about us</h2>
          </div>

          {/* swiper */}

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {TestimonialData.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <div className="client_comments">
                    <div className="single_item">
                      <Card>
                        <Card.Body>
                          <span className="left_Icon">{data.icon1}</span>

                          <Card.Text>{data.text}</Card.Text>

                          <span className="right_icon">{data.icon2}</span>

                          <div className="client_img">
                            <Image src={data.imgSrc} alt={data.name} fluid />
                          </div>
                        </Card.Body>
                      </Card>

                      <div className="name mt-5 mx-4">
                        <h5 className="pt-2">{data.name}</h5>
                        <h6>{data.title}</h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* end of swiper slider */}
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
