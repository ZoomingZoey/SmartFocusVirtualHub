// Import logo
import logo from "../assets/images/icons/logo.png";

// Import react-bootstrap components
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
  Button
 } from 'react-bootstrap';
 
 // Import react-router-dom components
import {
  Link,
  NavLink
} from 'react-router-dom';

const HubNavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Link exact="true" to="/" className="navbar-brand">
          <img
            alt="smart focus logo"
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-center logo mx-2"
          />{' '}
          Smart Focus
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink exact="true" to="/" className={`nav-link ${navData => navData.isActive && "active"}`}>Home</NavLink>
            <NavLink to="/services" className={`nav-link ${navData => navData.isActive && "active"}`}>Services</NavLink>
            <NavLink to="/expertise-and-research" className={`nav-link ${navData => navData.isActive && "active"}`}>Expertise/Research</NavLink>
            <NavLink to="/case-studies" className={`nav-link ${navData => navData.isActive && "active"}`}>Case Studies</NavLink>
            <NavLink to="/news-and-events" className={`nav-link ${navData => navData.isActive && "active"}`}>News and Events</NavLink>
            <NavLink to="/portal" className={`nav-link ${navData => navData.isActive && "active"}`}>Portal</NavLink>
            <NavLink to="/about" className={`nav-link ${navData => navData.isActive && "active"}`}>About</NavLink>
            {/*
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            */}
          </Nav>
          {/*<Form onSubmit={handleSearch} className="d-flex mx-4" action="/about" method="get">
            <FormControl
              type="search"
              name="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default HubNavBar;