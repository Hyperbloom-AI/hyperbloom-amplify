import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';


function App() {

      return(
        <div className="App">
          <Router>
              <AppWithRouterAccess/>
          </Router>
        </div>
        
  );  
}

export default App;