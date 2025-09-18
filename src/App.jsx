// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Testimonials from "./Components/Testimonials";
import Shop from "./Components/Shop";
import Nav from "./Nav-footer/Nav";
import Team from "./Components/Team";



const App = () => {
  return (
    <Router>
      <Nav/>
      <div className="pt-24"> {/* Add padding to prevent content from hiding behind fixed navbar */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/testimonials" element={<Testimonials/>} />
            <Route path="/team" element={<Team/>} />
         
            <Route path="/shop" element={<Shop/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;