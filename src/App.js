import React from 'react';
import './App.css';
import About from "./pages/About/index";
import Contact from "./pages/Contact/index";
import Portfolio from "./pages/Portfolio/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

function App() {
  return (
  <Router>  
      <div>
        <Route exact path="/" component={ About } />
        <Route exact path="/contact" component= { Contact } />
        <Route exact path="/portfolio" component= { Portfolio } />
      </div>
</Router>
  );
}

export default App;
