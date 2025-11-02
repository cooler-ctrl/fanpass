import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import './style.css';
import './header.css';
import './footer.css';

import Header from './header';
import Footer from './footer';

import Events from './events';
import About from './about';
import ContactUs from "./contact";
import FAQ from './FaQitem';
import HeroSection from './hero-section';
import FanpassSection from './fanpass-section';
import CardContainer from './card-container';
import RegisterPage from './LoginPage';
import ScrollToTop from "./ScrollToTop";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <div className='container-fluid p-0' style={{ backgroundColor: "#191919" }}>
        
       
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <ScrollToTop/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FanpassSection />
                <img style={{ width: "100%" }} src="/img/Group 6.svg" alt="" />
                <CardContainer />
                <section className="pjesa2">
                  <img src="/img/Group 5.png" alt="" />
                </section>
                <FAQ />
              </>
            }
          />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/register" element={<RegisterPage onLogin={handleLogin} />} /> 
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
