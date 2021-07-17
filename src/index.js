import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './GlobalStyles';
import App from './App/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
