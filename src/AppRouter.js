import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import homepage from './components/homepage/homepage';
import user from './components/user/Login';
import cart from './components/cart';
import Registration from './components/user/Registration';

    import OrderPlaced from './components/OrderPlaced';
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route path="/BookStoreApplication" component={homepage} exact={true} />
            <Route path="/Login" component={user} eaxcat={true}/>
            <Route path="/cart" component={cart} eaxcat={true}/>
            <Route path="/homepage" component={homepage} eaxcat={true}/>

            <Route path="/Registration" component={Registration} eaxcat={true}/>
            <Route path='/OrderPlaced' component={OrderPlaced} />


        </div>
    </BrowserRouter>
);
export default AppRouter;