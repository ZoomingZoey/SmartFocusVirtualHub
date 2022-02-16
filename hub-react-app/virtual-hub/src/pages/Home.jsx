// Import react hooks
import { useState } from 'react';

// Import react-bootstrap components
import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <h2 className="mt-5 text-center">Welcome</h2>
      <Container fluid>
        <Row>
          <Col sm={12} md={6}>Col 1</Col>
          <Col sm={12} md={6}>Col 2</Col>
        </Row>
      </Container>
    </>
  );
}
 
export default Home;