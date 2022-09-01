import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
//import Dashboard from "./components/Dashboard";
import Board from "./components/Board";
import GoogleLogin from './components/GoogleLogin';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          { /*
               Uses a component that only performs a Google Login
               based on code
               https://github.com/csfrequency/react-firebase-hooks/tree/edab3f3f3b5ec01c8aafcc6096755dfcc69e4408/auth#social-login-example
               <Route exact path="/" element={<GoogleLogin />} />
          */}
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Board />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;