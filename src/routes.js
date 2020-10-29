import react from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  export default function App() {
      return (
          <Router>
              <Switch>

                  <Route exact path='/'>
                      <div>Home test</div> 
                  </Route>

                  <Route path='/Resume'>
                      <div>Resume test</div>
                  </Route>

              </Switch>
          </Router>
      )
  }