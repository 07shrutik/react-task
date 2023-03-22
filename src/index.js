import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Header from './components/Header';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Scroller from './Scroller';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <App />
    <h1>slide using arrow keys</h1>
    <Scroller />
  </React.StrictMode>
);

reportWebVitals();
