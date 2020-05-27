/* === Dependencies === */
import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Homepage from "./pages/homepage";
import Nav from "./components/Nav";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Homepage />
        <Footer />
      </Router>
    </>
  );
}


export default App;
