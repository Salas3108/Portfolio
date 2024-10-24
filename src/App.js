import React from 'react'
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import "../src/styles/Navbar.css";
import Footer from './components/Footer';
import "../src/styles/Footer.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/projects" element = {<Projects/>} />
          <Route path = "/experience" element = {<Experience/>} />
        </Routes>
        <Footer /> 
      </Router>
    </div>
  )
}

export default App
