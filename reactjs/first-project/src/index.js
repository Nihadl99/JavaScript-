import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {header} from "./components/header";
import reportWebVitals from './reportWebVitals';
import { Container } from './components/container';

import { Header } from './components/header';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <header />
    <navbar />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
