/// <reference types="vite/client" />
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

// eslint-disable-next-line toplevel/no-toplevel-side-effect
ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
