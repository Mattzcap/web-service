import React from "react";
import Button from "../components/ui/Button";
import '../styles/App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>My Website</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="landing-content">
        <h1>Welcome to Our Platform</h1>
        <p>
          Discover the best services and solutions tailored for your needs. 
          Join us today and elevate your experience.
        </p>
        <div className="button-container">
          <Button className="primary-btn">Get Started</Button>
          <Button className="outline-btn">Learn More</Button>
        </div>
      </div>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>We provide innovative solutions to enhance your business and lifestyle.</p>
      </section>
    </div>
  );
};

export default LandingPage;
