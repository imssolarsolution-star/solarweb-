import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingWidgets from './components/FloatingWidgets';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Calculator from './components/Calculator';
import WhySolar from './components/WhySolar';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Admin from './pages/Admin';
import './App.css';
import { useScrollReveal } from './hooks/useScrollReveal';

function HomePage({ theme, toggleTheme }) {
  useScrollReveal();
  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Calculator />
        <WhySolar />
        <Gallery />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
