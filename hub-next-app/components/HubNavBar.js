
import Link from 'next/link';
const qs = require('qs');

// Import react-bootstrap components
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
 } from 'react-bootstrap';

const HubNavBar = ({ logo }) => {

  return (
    <Navbar bg="light" expand="xl" className='shadow-sm'>
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>
            <img
              alt="smart focus logo"
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-center"
            />{' '}
            Smart Focus
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
            <NavDropdown title="Clusters" id="basic-nav-dropdown">
              <Link href="/clusters" passHref><NavDropdown.Item>What are Clusters?</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/clusters/horticultural" passHref><NavDropdown.Item>Horticultural Cluster</NavDropdown.Item></Link>
              <Link href="/clusters/environmental" passHref><NavDropdown.Item>Environmental Cluster</NavDropdown.Item></Link>
              <Link href="/clusters/technology" passHref><NavDropdown.Item>Technology Cluster</NavDropdown.Item></Link>
            </NavDropdown>
            <Link href="/research-papers-and-case-studies" passHref><Nav.Link>Research Papers and Case Studies</Nav.Link></Link>
            <Link href="/resources" passHref><Nav.Link>Resources</Nav.Link></Link>
            <Link href="/education" passHref><Nav.Link>Education</Nav.Link></Link>
            <Link href="/news-events-and-podcasts" passHref><Nav.Link>News Events and Podcasts</Nav.Link></Link>
            <Link href="/portal" passHref><Nav.Link>Portal</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default HubNavBar;