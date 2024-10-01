// Import React library for creating UI components
import React from 'react'

// Import ReactDOM library to handle rendering React components to the DOM
import ReactDOM from 'react-dom/client'

// Import the main App component which will be the root of your React application
import App from './App'

// Import the main CSS file for global styling across your React app
import './index.css'

// Use ReactDOM to create a root and render the App component within a strict mode wrapper
// StrictMode helps with identifying potential problems in an application, such as warnings about the usage of unsafe lifecycle methods
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
