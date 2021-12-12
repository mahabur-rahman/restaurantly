import React, { useEffect } from "react";
// scss
import "./menu.scss";
// react bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";
// comp
import Heading from "../Heading/Heading";
// img
import itemOne from "../../images/item1.jpg";
import itemTwo from "../../images/item2.jpg";
import itemThree from "../../images/item3.jpg";
import itemFour from "../../images/item4.jpg";
import itemFive from "../../images/item5.jpg";
import itemSix from "../../images/item6.jpg";
import itemSeven from "../../images/item7.jpg";
import itemEight from "../../images/item8.jpg";
import itemNine from "../../images/item9.jpg";
// react router dom
import { Link } from "react-router-dom";
// mixitup
import mixitup from "mixitup";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const MenuItem = () => {
  useEffect(() => {
    mixitup(document.querySelector(".project-wrapper"));
  }, []);

  // aos
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <section id="menuItem">
        <Container>
          <Heading titleOne={"Menu"} titleTwo={"Check Our Tasty Menu"} />
          <Row className="text-center">
            <Col>
              {/* filter btn */}
              <div className="filter_btn mb-4 mb-sm-0">
                <ul className="list-inline">
                  <li
                    className="list-inline-item px-2 text-white"
                    data-filter="all"
                  >
                    All
                  </li>
                  <li
                    className="list-inline-item px-2 text-white"
                    data-filter=".starters"
                  >
                    Starters
                  </li>
                  <li
                    className="list-inline-item px-2 text-white"
                    data-filter=".salads"
                  >
                    Salads
                  </li>
                  <li
                    className="list-inline-item px-2 text-white"
                    data-filter=".specialty"
                  >
                    Specialty
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          {/* item */}

          <div
            className="project-wrapper"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <Row>
              <Col xl={6} className="px-3 item_dash1 mix starters">
                <div className="menu_item">
                  <div className="item_img">
                    <Image src={itemOne} alt="Menu Item" fluid />
                  </div>
                  <div className="content">
                    <Link to="/" className="mb-0">
                      Lobster Bisque
                    </Link>
                    <p className="text">
                      Lorem, deren, trataro, filede, nerada{" "}
                    </p>
                  </div>
                  <div className="price">
                    <p>$5.95</p>
                  </div>
                </div>
              </Col>
              <Col xl={6} className="px-3 item_dash2 mix salads">
                <div className="menu_item">
                  <div className="item_img">
                    <Image src={itemTwo} alt="Menu Item" fluid />
                  </div>
                  <div className="content">
                    <Link to="/" className="mb-0">
                      Bread Barrel
                    </Link>
                    <p className="text">
                      Lorem, deren, trataro, filede, nerada{" "}
                    </p>
                  </div>
                  <div className="price">
                    <p>$6.95</p>
                  </div>
                </div>
              </Col>
              <Col xl={6} className="px-3 item_dash3 mix specialty">
                <div className="menu_item">
                  <div className="item_img">
                    <Image src={itemThree} alt="Menu Item" fluid />
                  </div>
                  <div className="content">
                    <Link to="/" className="mb-0">
                      Crab Cake
                    </Link>
                    <p className="text">
                      Lorem, deren, trataro, filede, nerada{" "}
                    </p>
                  </div>
                  <div className="price">
                    <p>$7.95</p>
                  </div>
                </div>
              </Col>
              <Col xl={6} className="px-3 item_dash4 mix starters">
                <div className="menu_item">
                  <div className="item_img">
                    <Image src={itemFour} alt="Menu Item" fluid />
                  </div>
                  <div className="content">
                    <Link to="/" className="mb-0">
                      Caesar Selections
                    </Link>
                    <p className="text">
                      Lorem, deren, trataro, filede, nerada{" "}
                    </p>
                  </div>
                  <div className="price">
                    <p>$8.95</p>
                  </div>
                </div>
              </Col>
              <Col xl={6} className="px-3 item_dash5 mix specialty">
                <div className="menu_item">
                  <div className="item_img">
                    <Image src={itemFive} alt="Menu Item" fluid />
                  </div>
                  <div className="content">
                    <Link to="/" className="mb-0">
                      Tuscan Grilled
                    </Link>
                    <p className="text">
                      Lorem, deren, trataro, filede, nerada{" "}
                    </p>
                  </div>
                  <div className="price">
                    <p>$9.95</p>
                  </div>
                </div>
              </Col>
              <Col xl={6} className="px-3 item_dash6 mix salads">
                <div className="menu_item">
                  <div className="item_img">
                    <Image src={itemSix} alt="Menu Item" fluid />
                  </div>
                  <div className="content">
                    <Link to="/" className="mb-0">
                      Mozzarella Stick
                    </Link>
                    <p className="text">
                      Lorem, deren, trataro, filede, nerada{" "}
                    </p>
                  </div>
                  <div className="price">
                    <p>$4.95</p>
                  </div>
                </div>
              </Col>
              <Col xl={6} className="px-3 item_dash7 mix starters">
                <div className="menu_item">
                  <div className="item_img">
                    <Image src={itemSeven} alt="Menu Item" fluid />
                  </div>
                  <div className="content">
                    <Link to="/" className="mb-0">
                      Greek Salad
                    </Link>
                    <p className="text">
                      Lorem, deren, trataro, filede, nerada{" "}
                    </p>
                  </div>
                  <div className="price">
                    <p>$9.95</p>
                  </div>
                </div>
              </Col>
              <Col xl={6} className="px-3 item_dash8 mix specialty">
                <div className="menu_item">
                  <div className="item_img">
                    <Image src={itemEight} alt="Menu Item" fluid />
                  </div>
                  <div className="content">
                    <Link to="/" className="mb-0">
                      Spinach Salad
                    </Link>
                    <p className="text">
                      Lorem, deren, trataro, filede, nerada{" "}
                    </p>
                  </div>
                  <div className="price">
                    <p>$9.95</p>
                  </div>
                </div>
              </Col>
              <Col xl={6} className="px-3 item_dash9 mix salads">
                <div className="menu_item">
                  <div className="item_img">
                    <Image src={itemNine} alt="Menu Item" fluid />
                  </div>
                  <div className="content">
                    <Link to="/" className="mb-0">
                      Lobster Roll
                    </Link>
                    <p className="text">
                      Lorem, deren, trataro, filede, nerada{" "}
                    </p>
                  </div>
                  <div className="price">
                    <p>$12.95</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MenuItem;
