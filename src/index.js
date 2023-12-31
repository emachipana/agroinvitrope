import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Global } from '@emotion/react';
import { reset } from './styles';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
