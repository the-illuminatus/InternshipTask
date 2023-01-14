import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
                Sujit's Automobiles rental services have a fleet of brand new luxury cars in Aurangabad that will help you to travel in style and comfort that matches your status. 
                Luxury Cars enable last mile connectivity and project exquisite class, wherever you are visiting. Our Luxury car rental fleet includes Mercedes E class, Toyota Camry and other cars like Toyota Corolla. Be assured to get experienced Chauffeurs and premium services for your luxury car hire in Aurangabad. 
                Luxury Cabs can be booked for airport travel, outstation packages as well as local travel based on your requirements. You can book Savaari cabs from any part of Aurangabad like Deolai ,Pisadevi, Itawa etc at best rates and experience the safe journey. 
                Prepare to get pampered - we will not let you down. Savaari also provides convenient and cost-effective subscription option for monthly car rentals in Aurangabad for regular cab usage on a metered basis.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Sit back and enjoy
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Doorstep Pickup
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Curated Travel content 
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Zero Cancellation Fees
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
