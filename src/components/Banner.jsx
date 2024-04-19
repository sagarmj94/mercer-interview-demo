import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Banner.css";
import family from "../assets/family.png";
export const Banner = () => {
  return (
    // <Container fluid className="custom-banner">
    <Row className="align-items-center justify-content-center custom-banner">
      <Col xs={12} md={6} className="text-container">
        <h1>Your brighter future with Mercer Super</h1>
        <p>Strong long-term performance and low fees</p>
        <Button variant="primary">Learn more</Button>
      </Col>
      <Col xs={12} md={6} className="image-container">
        <div className="family-image">
          <img src={family} alt="banner" height={470} />
        </div>
      </Col>
    </Row>
    // </Container>
  );
};
