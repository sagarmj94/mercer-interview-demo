import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../components/DownloadAppSection.css";
const DownloadAppSection = () => {
  return (
    <Container fluid className="download-app-section">
      <Container>
        <Row>
          <Col md={8} className="text-section">
            <h1>Download the Mercer Super app</h1>
            <p>
              Your super is in your hands. Track and manage your super account
              anytime, anywhere with the Mercer Super app.
            </p>
            <p className="download-text">Download</p>
            <div className="stores-links">
              <a href="#" className="store-link">
                Apple Store
              </a>{" "}
              |{" "}
              <a href="#" className="store-link">
                Google Play
              </a>
            </div>
            <Button variant="primary" className="learn-more-btn">
              Learn about Member Online
            </Button>
          </Col>
          <Col md={4} className="image-section">
            {/* Assuming you have the image in your project */}
            <img
              src="https://www.mercersuper.com.au/content/dam/mercer-super/australia/images/hero/au-Mercer-Super-2023_GettyImages-717168287.png"
              alt="Woman with smartphone"
              className="responsive-image"
              height={400}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default DownloadAppSection;
