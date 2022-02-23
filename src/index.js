import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Root} from './App';
import reportWebVitals from './reportWebVitals';
import {Flower} from './context'
ReactDOM.render(
  <React.StrictMode>
  <Flower>
    <Root />
  </Flower>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
