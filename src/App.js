import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/user/Login';
import Registration from './components/user/Registration';
import OrderSummary from './components/cart/OrderSummary';
import Abcart from './components/cart/Abcart'
import OrderPlaced from './components/cart/OrderPlaced'
import {BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import Resetpassword from './components/user/ResetPassword';
function App() {
  return (
  <Router>
  <Switch>
   <Route path='/BookstoreApplication' component={Dashboard} />
   <Route path='/Login' component={Login}/>
   <Route path='/Registration' component={Registration}/>
   <Route path='/ResetPassword' component={Resetpassword}/>
   <Route path='/Abcart' component={Abcart}/>
   <Route path='/OrderSummary' component={OrderSummary}/>
   <Route path='/OrderPlaced' component={OrderPlaced}/>
   </Switch>
   </Router>
  );
}

export default App;
