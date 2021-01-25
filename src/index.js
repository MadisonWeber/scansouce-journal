import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Store from './context/GlobalState'

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);


