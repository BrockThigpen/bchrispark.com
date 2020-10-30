import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Resume from './pages/Resume';

  export default function App() {
      return (
          <Router>
              <Switch>

                  <Route exact path='/'>
                      <div>Home</div> 
                  </Route>

                  <Route path='/Resume'>
                      <Resume/>
                  </Route>

              </Switch>
          </Router>
      )
  }