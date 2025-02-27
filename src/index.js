import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Detect environment: Use BrowserRouter for localhost, HashRouter for GitHub Pages
const isLocalhost = window.location.hostname === "localhost";
const Router = isLocalhost ? BrowserRouter : HashRouter;
const basename = isLocalhost ? "/" : "/web-service"; // Only set basename for BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={isLocalhost ? "/" : "/web-service"}>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
