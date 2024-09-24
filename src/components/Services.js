import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <i className="fas fa-teeth"></i>
          <h3>Dental Diagnosis</h3>
          <p>AI-powered diagnostics for more accurate and faster results.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-tooth"></i>
          <h3>Treatment Planning</h3>
          <p>Our AI helps to plan personalized dental treatments.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-laptop-medical"></i>
          <h3>Patient Data Analytics</h3>
          <p>Advanced analytics for better patient outcomes and management.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
