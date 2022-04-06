import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./components/app";
import AdminArticle from './components/admin/article';

import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom"

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/">
        <Route index element={<App />} />
      </Route>
      <Route path="/admin">
        <Route path='articles' element={<AdminArticle />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
