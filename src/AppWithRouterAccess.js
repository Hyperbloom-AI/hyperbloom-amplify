import React from 'react';
import { Route, Routes, Link} from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import About from './components/About.js';

const AppWithRouterAccess = () => {

  return (
  <>
    <header className="splash-header">
    </header>
    <Routes>
      <Route path="/" exact element={<LandingPage />}/>
      <Route path="/about" component={About} />
    </Routes>
  </>
  )
}

export default AppWithRouterAccess;
