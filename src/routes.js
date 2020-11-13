import React, {useState, useCallback} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Resume from './pages/Resume';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';


export const PATHS = {
    home: '/',
    resume: '/resume',
    portfolio: '/portfolio'
}

export default function App() {
      return (
        <Router>
            <Switch>
            <Route exact path={PATHS.home}>
                    <Home/>
                </Route>

                <Route path={PATHS.resume}>
                    <Resume />
                </Route>

                <Route path={PATHS.portfolio}>
                    <Portfolio />
                </Route>
            </Switch>
        </Router>
      )
  }