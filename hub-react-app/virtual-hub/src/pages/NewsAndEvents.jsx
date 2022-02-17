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

const NewsAndEvents = () => {
  // Set page title on mount
  useEffect(() => {
    document.title = "News and Events - Smart Focus";
  }, []);

  return (
    <>
      <HubNavBar/>
      <h2 className="mt-5 text-center">News and Events</h2>
      <Container fluid>
        
      </Container>
    </>
  );
}
 
export default NewsAndEvents;