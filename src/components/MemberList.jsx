import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./MemberList.css";
import listOfMember from "../utils/memberList.json";
const MemberList = () => {
  return (
    <Container fluid>
      <Container>
        {listOfMember.members.map((member) => {
          console.log(
            "🚀 ~ {listOfMember.members.map ~ member:",
            member?.buttons
          );
          return (
            <Row className="align-items-center my-5">
              <Col sm={8}>
                <h2>{member.title}</h2>
                <p>{member.description}</p>

                {member?.buttons.map((btn, btnIndex) => (
                  <Button variant="link" key={btnIndex}>
                    {btn.name}
                  </Button>
                ))}
              </Col>
              <Col sm={4}>
                <Image
                  src={member.image}
                  alt="People discussing"
                  fluid
                  width={400}
                />
                ;
              </Col>
            </Row>
          );
        })}
      </Container>
    </Container>
  );
};

export default MemberList;
