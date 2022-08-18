import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/Board';
import { HashRouter as Router, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router basename='/'>
    <Route exact path='/' component={Board}>
    <Route path='/about' component={About}/>
  </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
