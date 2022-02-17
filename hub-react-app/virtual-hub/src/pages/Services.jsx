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

const Services = () => {
  // Set page title on mount
  useEffect(() => {
    document.title = "Services - Smart Focus";
  }, []);
  
  return (
    <>
      <HubNavBar/>
      <h2 className="mt-5 text-center">Services</h2>
      <Container fluid>
        
      </Container>
    </>
  );
}
 
export default Services;