import React from 'react';
import './App.css'; // Import the main CSS file
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AIIntegration from './components/AIIntegration';
import CaseStudies from './components/Casestudies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <AIIntegration />
      <CaseStudies />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
