import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes';
import './index.css';
import './theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);