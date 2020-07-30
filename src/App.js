import React from 'react';
import './App.css';
import About from "./pages/About/index";
import Contact from "./pages/Contact/index";
import Portfolio from "./pages/Portfolio/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
