import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./LikeToDo.css";

function LikeToDo() {
  return (
    <Container fluid className="like-to-do">
      <Container>
        <Row className="justify-content-center align-items-center my-4">
          <Col xs={12} className="text-center mb-3">
            <h2>What would you like to do today?</h2>
          </Col>
          <Col xs={6} md={3} className="text-center">
            <h3>Grow your super</h3>
            <Button variant="link" className="p-0">
              Learn more
            </Button>
          </Col>
          <Col xs={6} md={3} className="text-center">
            <h3>Consolidate your super</h3>
            <Button variant="link" className="p-0">
              Learn more
            </Button>
          </Col>
          <Col xs={6} md={3} className="text-center">
            <h3>Super education webinars</h3>
            <Button variant="link" className="p-0">
              Learn more
            </Button>
          </Col>
          <Col xs={6} md={3} className="text-center">
            <h3>Explore insurance options</h3>
            <Button variant="link" className="p-0">
              Learn more
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default LikeToDo;
