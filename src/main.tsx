import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@Pages/App';
import '@Styles/index.css';

const container = document.getElementById('root') as HTMLElement;
createRoot(container).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
