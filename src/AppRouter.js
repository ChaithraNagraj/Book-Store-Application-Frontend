import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import homepage from './components/homepage/homepage';
// import dashboard from './components/userLogin/UserLogin';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={homepage} exact={true} />
        </div>
    </BrowserRouter>
);
export default AppRouter;