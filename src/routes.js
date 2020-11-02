import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Resume from './pages/Resume';
import SwapPagesButton from './components/SwapPages'

export const PATHS = {
    home: '/',
    resume: '/resume'
}

export default function App() {
      return (
          <Router>
              <Switch>
                  <Route exact path={PATHS.home}>
                      <div>Home</div> 
                      <SwapPagesButton />
                  </Route>

                  <Route path={PATHS.resume}>
                      <Resume/>
                  </Route>

              </Switch>
          </Router>
      )
  }