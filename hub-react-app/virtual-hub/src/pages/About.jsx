// Import react hooks
import { useState, useEffect } from 'react';

// Import react-bootstrap components
import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';
 
// import app components
import HubNavBar from '../components/HubNavBar';

const About = () => {
  // Set page title on mount
  useEffect(() => {
    document.title = "About us - Smart Focus";
  }, []);
  
  return (
    <>
      <HubNavBar/>
      <h2 className="mt-5 text-center">About us</h2>
      <Container fluid>
        
      </Container>
    </>
  );
}
 
export default About;