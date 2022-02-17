

// Import react hooks
import { useState } from 'react';

 // Import react-router-dom components
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Import app page components
import Home from 'pages/Home';
import Services from 'pages/Services';
import ExpertiseAndResearch from 'pages/ExpertiseAndResearch';
import CaseStudies from 'pages/CaseStudies';
import NewsAndEvents from 'pages/NewsAndEvents';
import Portal from 'pages/Portal';
import About from 'pages/About';

const App = () => {
  return (
    <Router>
      <div>
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
