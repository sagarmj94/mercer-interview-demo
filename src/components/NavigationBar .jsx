// NavigationBar.js
import React from "react";
import "./NavigationBar.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const NavigationBar = () => {
  return (
    <div className="navigation-wrap">
      <Row className="wrapper-nav">
        <Col md={9}>
          <Row>
            <Col md={6}>
              <ul className="navbar-list ">
                <li className="navbar-item ">
                  <a href="/members/" className="navbar-link">
                    Members
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/employers/" className="navbar-link">
                    Employers
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/advisers/" className="navbar-link">
                    Advisers
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/contact-mercer-super/" className="navbar-link">
                    Contact us
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <ul className="navbar-list">
                <li className="navbar-item">
                  <a href="/compareus" className="navbar-link">
                    Compare Us
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/superanuation" className="navbar-link">
                    Superannuation
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/Retirement/" className="navbar-link">
                    Retirement
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/advice/" className="navbar-link">
                    Advice
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/investment/" className="navbar-link">
                    Investment
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/insurance/" className="navbar-link">
                    Insurance
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/documents/" className="navbar-link">
                    Documents
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/membersupport/" className="navbar-link">
                    Member Support
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>

        <Col md={1}></Col>
        <Col md={2} className="contact-us-wrapper">
          <ul className="navbar-list contact-us">
            <li className="navbar-item">
              <a
                href="/contact-mercer-super/"
                className="navbar-link"
                data-click_name="navigation"
                data-click_category="Contact us"
                target="_self"
              >
                Contact us
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};
