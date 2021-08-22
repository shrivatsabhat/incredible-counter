import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Provider } from '@container';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
