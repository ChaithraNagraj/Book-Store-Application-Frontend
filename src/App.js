import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import MyCart from './components/cart/MyCart';
import Login from './components/user/Login';
import Registration from './components/user/Registration';
import OrderSummary from './components/cart/OrderSummary';
import {BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import Resetpassword from './components/user/ResetPassword';
function App() {
  return (
  <Router>
  <Switch>
   {/* <Route path='/' exact component={Login} /> */}
   <Route path='/BookstoreApplication' component={Dashboard} />
   <Route path='/Login' component={Login}/>
   <Route path='/MyCart' component={MyCart}/>
   <Route path='/Registration' component={Registration}/>
   <Route path='/ResetPassword' component={Resetpassword}/>
   <Route path='/ordersummary' component={OrderSummary} />
   </Switch>
   </Router>
  );
}

export default App;
