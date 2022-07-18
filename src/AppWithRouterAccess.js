import React from 'react';
import { Route, Routes, Link} from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import About from './components/About.js';
import SideBar from './components/SideBar.js';


const AppWithRouterAccess = () => {

  // Put false on site completion. This enables an "Under Maintenance" type of screen.
  const dev = true
  // Set to false to see site content
  const showUC = true

  if(showUC && dev) {
    return (
      <>
        <Routes>
          <Route path="/" exact element={<LandingPage dev={dev} showUC={showUC}/>}/>
        </Routes>
      </>
    )
  }

  return (
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
  )
}

export default AppWithRouterAccess;
