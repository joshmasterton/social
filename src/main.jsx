import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { getLightMode } from './comp/utility/LightMode';

// Document background color
document.documentElement.className = getLightMode();

// Create react root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
