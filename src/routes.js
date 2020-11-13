import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './pages/Resume';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import MainLayout from './Layouts/MainLayout';
import { PATHS } from './paths';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={PATHS.home}>
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>

        <Route path={PATHS.resume}>
          <MainLayout>
            <Resume />
          </MainLayout>
        </Route>

        <Route path={PATHS.portfolio}>
          <MainLayout>
            <Portfolio />
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}
