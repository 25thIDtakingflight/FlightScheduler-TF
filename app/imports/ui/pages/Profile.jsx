import React from 'react';
import { Col, Container, Card, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

/* A simple static component to render some text for the landing page. */
const Profile = () => (
  <Container id={PAGE_IDS.PROFILE} className="py-3">
    <Row>
      <Col>
        <Card.Img src="/images/meteor-logo.png" className="col-auto img-thumbnail" style={{ width: '18rem' }} />
      </Col>
      <Col>
        <Card.Body className="text-float-left">
          <Card.Title>Name: Taking Flight</Card.Title>
          <Card.Text>Email: takingflight@army.mil</Card.Text>
          <Card.Text>Company: C/3-25 </Card.Text>
          <Card.Text>Role: Scheduler</Card.Text>
        </Card.Body>
      </Col>
    </Row>
  </Container>
);

export default Profile;
