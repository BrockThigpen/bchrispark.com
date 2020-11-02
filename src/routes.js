import React, {useState, useCallback} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Resume from './pages/Resume';
import SwapPagesButton from './components/SwapPages'
import RenderHugeList from './components/RenderHugeList'

export const PATHS = {
    home: '/',
    resume: '/resume',
    memoizeThis: '/memoizeThis'
}

export default function App() {
    const [changeThis, setChangeThis] = useState('')

    const anotherFunction = useCallback(() => {
        console.log('hello')
    }, [])

      return (
        <Router>
            <Switch>
                <Route exact path={PATHS.home}>
                    <div>Home</div> 
                    <SwapPagesButton />
                </Route>

                <Route path={PATHS.resume}>
                    <div>Resume</div>
                    <Resume/>
                </Route>

                <Route path={PATHS.memoizeThis}>
                <RenderHugeList anotherFunction={anotherFunction} changeThis={changeThis} setChangeThis={setChangeThis} />
                </Route>
            </Switch>
        </Router>
      )
  }