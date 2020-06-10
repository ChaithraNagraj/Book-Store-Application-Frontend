import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/userLogin/Login';
import UpdatePassword from './components/userLogin/UpdatePassword';
import ForgotPassword from './components/userLogin/ForgotPassword';
import VerifyUser from './components/userLogin/VerifyUser';
function App() {
  return (
    <div className="App">
      {
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Login/>
      <UpdatePassword/>
      <ForgotPassword/>
      <VerifyUser/>
    </div>
  );
}

export default App;
