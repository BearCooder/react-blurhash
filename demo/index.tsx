import React from 'react';
import ReactDOM from 'react-dom/client';
import Demo from './Demo';

const rootElement = document.createElement('div');

if (!document.querySelector('div')) {
  document.body.appendChild(rootElement);
}

const root = ReactDOM.createRoot(rootElement);
root.render(<Demo />);
