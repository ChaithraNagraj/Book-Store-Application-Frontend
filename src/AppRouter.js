import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import homepage from './components/homepage/homepage';
import user from './components/user/Login';
import cart from './components/cart';
import Registration from './components/user/Registration';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route path="/bookstore" component={homepage} exact={true} />
            <Route path="/Login" component={user} eaxcat={true}/>
            <Route path="/cart" component={cart} eaxcat={true}/>
            <Route path="/Registration" component={Registration} eaxcat={true}/>
        </div>
    </BrowserRouter>
);
export default AppRouter;