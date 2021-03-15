import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// for now we will not do anything with the core web vitals data
// once 3xAPI is fully implemented, i'll configure this to send the
// core web vitals data to 3xAPI using a special API key that only has
// the corewebvitals:post permission.
reportWebVitals();
