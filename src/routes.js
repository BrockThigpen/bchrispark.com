import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  export default function App() {
      return (
          <Router>
              <Switch>

                  <Route exact path='/'>
                      <div>Home</div> 
                  </Route>

                  <Route path='/Resume'>
                      <div>Resume</div>
                  </Route>

              </Switch>
          </Router>
      )
  }