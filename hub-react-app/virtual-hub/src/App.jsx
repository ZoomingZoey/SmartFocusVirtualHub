// Import images
import logo from "./assets/images/icons/logo.png";

// Import react hooks
import { useState } from 'react';

// Import react-router-dom components
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

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


// Import app page components
import Home from 'pages/Home';
import Services from 'pages/Services';
import ExpertiseAndResearch from 'pages/ExpertiseAndResearch';
import CaseStudies from 'pages/CaseStudies';
import NewsAndEvents from 'pages/NewsAndEvents';
import Portal from 'pages/Portal';
import About from 'pages/About';

const App = () => {
  const handleSearch = (e) => {
    //e.preventDefault();
  }
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="md">
          <Container>
            <Link to="/" className="navbar-brand">
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
                <NavLink exact={true} to="/" className="nav-link" activeClassName="active">Home</NavLink>
                <NavLink to="/services" className="nav-link" activeClassName="active">Services</NavLink>
                <NavLink to="/expertise-and-research" className="nav-link" activeClassName="active">Expertise/Research</NavLink>
                <NavLink to="/case-studies" className="nav-link" activeClassName="active">Case Studies</NavLink>
                <NavLink to="/news-and-events" className="nav-link" activeClassName="active">News and Events</NavLink>
                <NavLink to="/portal" className="nav-link" activeClassName="active">Portal</NavLink>
                <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
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
              <Form onSubmit={handleSearch} className="d-flex mx-4" action="/about" method="get">
                <FormControl
                  type="search"
                  name="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button type="submit" variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/expertise-and-research" element={<ExpertiseAndResearch/>}/>
          <Route exact path="/case-studies" element={<CaseStudies/>}/>
          <Route exact path="/news-and-events" element={<NewsAndEvents/>}/>
          <Route exact path="/portal" element={<Portal/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
