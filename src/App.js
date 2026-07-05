import React from 'react'
import './App.css';
import { BrowserRouter as Router , Routes , Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Professional from "./pages/Professional";
import "../src/styles/Navbar.css";
import Footer from './components/Footer';
import "../src/styles/Footer.css";
import ScrollToTop from './components/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/projects" element = {<Projects/>} />
        <Route path = "/experience" element = {<Experience/>} />
        <Route path = "/professional" element = {<Professional/>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const { t } = useLanguage();
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="App">
            <a href="#main-content" className="skip-link">{t('skipLink')}</a>
            <Navbar />
            <main id="main-content">
              <AnimatedRoutes />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App

