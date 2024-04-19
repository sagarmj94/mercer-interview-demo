import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./InfoMember.css";

function InfoMember() {
  return (
    <Container fluid className="custom-layout">
      <Container>
        <Row className="justify-content-md-center text-center my-4">
          <Col xs={12}>
            <h2>A leader you can trust</h2>
            <p className="text-muted">
              Mercer Super has been helping Australians achieve their desired
              retirement outcomes since 1995.
            </p>
          </Col>
        </Row>
        <Row className="text-center mb-4">
          <Col md={4}>
            <Card className="mb-4 mb-md-0">
              <Card.Body>
                <Card.Title>75 years' experience</Card.Title>
                <Card.Text>
                  We're backed by Mercer, a locally led, global expert in
                  retirement and investments with USD240 billion1 in assets
                  under management globally.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 mb-md-0">
              <Card.Body>
                <Card.Title>Strong past performance</Card.Title>
                <Card.Text>
                  Mercer Super's default investment option Mercer SmartPath®,
                  has delivered 7.4% p.a. over 10 years for one of our largest
                  cohort of members2, outperforming the comparative industry
                  median of 6.5% p.a.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Low fees</Card.Title>
                <Card.Text>
                  Our fees are some of the most competitive in Australia. This
                  means our members can benefit from material savings which can
                  make a difference in securing their financial future.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center my-4">
          <Col xs={12} md={4}>
            <Button variant="outline-primary" className="mr-2">
              Member login
            </Button>
            <Button variant="primary">Join Mercer Super</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default InfoMember;
