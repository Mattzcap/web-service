import React from "react";
import Button from "../components/ui/Button";
import '../styles/App.css';



const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
      <header className="w-full flex justify-between items-center p-4 bg-opacity-10 backdrop-blur-md fixed top-0">
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="max-w-3xl text-center mt-20">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">Welcome to Our Platform</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto text-gray-200">
          Discover the best services and solutions tailored for your needs. Join us today and elevate your experience.
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="px-6 py-3 text-lg bg-white text-blue-600 hover:bg-gray-200">Get Started</Button>
          <Button variant="outline" className="px-6 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600">Learn More</Button>
        </div>
      </div>
      <section id="about" className="mt-20 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-200">We provide innovative solutions to enhance your business and lifestyle.</p>
      </section>
    </div>
  );
};

export default LandingPage;
