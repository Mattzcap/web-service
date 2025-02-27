import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Detect environment: Use BrowserRouter for localhost, HashRouter for GitHub Pages
const Router = window.location.hostname === "localhost" ? BrowserRouter : HashRouter;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={window.location.hostname === "localhost" ? "/" : "/web-service"}>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
