import React from 'react';
<<<<<<< HEAD
import AppRouter from './AppRouter';

require('dotenv').config()

class App extends React.Component {
  render() {
    return (
      <AppRouter />
    );
  }
=======
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import UpdatePassword from './components/UpdatePassword';
import ForgotPassword from './components/ForgotPassword';
import VerifyUser from './components/VerifyUser';
import Registration from './components/Registration'
import ResetPassword from './components/ResetPassword'
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddBook from './components/AddBook';

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
      {/* <Registration/>v 
      <ResetPassword/>
      <Login/>
      <UpdatePassword/>
      <ForgotPassword/>
      <VerifyUser/> */}
      <Router>
      <Route path="/" component={Registration}></Route>
      <Route path="/AddBook" component={AddBook}></Route>
      <Route path="/Login" component={Login}></Route>
      <Route path="/UpdatePasswword" component={UpdatePassword}></Route>
      <Route path="/ResetPassword" component={ResetPassword}></Route>
      <Route path="/verifyUser" component={VerifyUser}></Route>





      </Router>
    </div>
  );
>>>>>>> 826f0aa4379d85017661ff52b6021ae0f0fdb546
}

export default App;
