import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import CardDesc from './components/content/card_desc';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/">
        <Route index element = {<App />}/>
        <Route path=":idCard" element={<CardDesc/>} /> 
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
//<Route path=":idCard" element={<CardDesc/>} />  permet quand on clique sur une carte d'allait sur les informations de l'élément 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
