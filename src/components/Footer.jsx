import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo from "../assets/mercer-logo.svg";
const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container fluid>
        <Container fluid>
          <Row>
            <Col sm={12} md={6} className="footer-brand">
              <a href="/" className="logo-img" target="_top">
                <img
                  className="mb-3"
                  src={
                    "https://www.mercersuper.com.au/content/dam/mercer-super/australia/logos/Mercer-rgb-white.png"
                  }
                  alt="Mercer Australia logo"
                  width="154"
                  height="24"
                />
              </a>

              <p className="text-align-left">
                Mercer Super Trust is part of Marsh McLennan, a leader in risk,
                strategy and people, helping clients navigate a dynamic
                environment through four global businesses.
              </p>
            </Col>
            <Col md={2}></Col>
            <Col sm={12} md={4} className="footer-brand">
              <ul className="footer-List-guy">
                <li>Marsh</li>
                <li>GuyCarpenter</li>
                <li>Mercer</li>
                <li>OliverWyman</li>
              </ul>
            </Col>
          </Row>
          <Row className="footerLinks-wrapper">
            <Col sm={6} md={3} className="footer-links">
              <strong>Mercer Super Helpline</strong>
              <p>8am - 7pm (AEST/AEDT), Monday - Friday</p>
              <p>Call us: 1800 682 525, +61 3 8306 0900</p>
              <p>Pension: 1800 671 369, +61 3 8306 0906</p>
              <p>Make a complaint</p>
            </Col>
            <Col sm={6} md={3} className="footer-links">
              <strong>Terms of use</strong>
              <p>Terms & conditions</p>
              <p>Privacy</p>
              <p>Security</p>
            </Col>
            <Col sm={6} md={3} className="footer-links">
              <strong>What we do at Mercer Super</strong>
              <p>Superannuation</p>
              <p>Retirement</p>
              <p>Financial advice</p>
              <p>Insurance</p>
              <p>Investments</p>
            </Col>
            <Col sm={6} md={3} className="footer-links">
              <strong>Important documents</strong>
              <p>Product Dashboards</p>
              <p>Annual Outcomes Assessments</p>
              <p>Target Market Determinations</p>
              <p>Annual Member Meeting</p>
              <p>Financial Services Guide</p>
              <p>Steps to protect you from scams</p>
            </Col>
          </Row>
          <Row>
            <Col className="footer-bottom">
              <p className="footer-bottom-p">
                © 2024 Mercer LLC. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
