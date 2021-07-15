import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// Mis componentes
import Header from './components/Header.js';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />   

        <Switch>
          <Route exact path="/detail/:id">
            <Detail /> 
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
