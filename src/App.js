import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Setup from './Setup';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/setup">
            <Setup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
