import React from 'react';
import { Route, Routes, Link} from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import SideBar from './components/SideBar.js';
import Consultants from './components/WhoWeArePage.js';
import Services from './components/WhoWeServePage.js';
import CustomerStories from './components/WhatCanWeDoPage.js';
import Solutions from './components/WhyWorkWithUsPage.js';
import ContactUs from './components/ContactUsPage.js';
import Industries from './components/OurPurposePage.js';
import WhoWeArePage from './components/WhoWeArePage.js';



const AppWithRouterAccess = () => {

  // Put false on site completion. This enables an "Under Maintenance" type of screen.
  const dev = true
  // Set to false to see site content
  const showUC = true


    return (
      <>
        <Routes>
          <Route path="/" exact element={<LandingPage dev={dev} showUC={showUC}/>}></Route>
          <Route path="/WhoWeAre" element={<WhoWeArePage dev={dev} showUC={showUC}/>}></Route>
          <Route path="/Industries" element={<Industries dev={dev} showUC={showUC}/>}></Route>
          <Route path="/Services" element={<Services dev={dev} showUC={showUC}/>}></Route>
          <Route path="/CustomerStories" element={<CustomerStories dev={dev} showUC={showUC}/>}></Route>
          <Route path="/Solutions" element={<Solutions dev={dev} showUC={showUC}/>}></Route>
          <Route path="/ContactUs" element={<ContactUs dev={dev} showUC={showUC}/>}></Route>
        </Routes>
      </>
    );
  

  /*return (
  <>
    <header className="site-header">
        <div className="inner-header">
          <div className="full-logo link">
            <img src="img/logo.png" className="nav-logo" />
            <div className="logo-text">
              <h1 className="nav-title">HYPERBLOOM A.I.</h1>
              <h2 className="nav-tagline">Life: Advanced</h2>
            </div>
          </div>
          <nav className="site-nav">
            <a className="site-nav__link link">About Us</a>
            <a className="site-nav__link link">Services</a>
            <a className="site-nav__link link">People</a>
            <a className="site-nav__link link">Blog</a>
            <a className="site-nav__link link">Contact</a>
          </nav>
        </div>
    </header>
    <Routes>
      <Route path="/" exact element={<LandingPage dev={dev} showUC={showUC}/>}/>
      <Route path="/about" component={About} />
    </Routes>
    <footer className="site-footer">
      <div className="col-3">
        
      </div>
      <div className="col-3">

      </div>
      <div className="col-3">

      </div>
  </footer>
  </>
  )*/
}

export default AppWithRouterAccess;
