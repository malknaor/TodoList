import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header/Header';
import LandingPage from '../Landing/LandingPage';
import SignInPage from '../SignIn/SignInPage';
import SignUpPage from '../SignUp/SignUpPage';
import PasswordForgetPage from '../PasswordForget/PasswordForgetPage';
import HomePage from '../Home/HomePage';
import AccountPage from '../Account/AccountPage';
import AdminPage from '../Admin/AdminPage';
import './App.css';

import * as ROUTES from '../../constants/routes';

const App = () => {
    return (
        <div className="flex container app">
            <Router>
                <Header />
                <div>
                    <Route exact path={ROUTES.LANDING} component={LandingPage}></Route>
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage}></Route>
                    <Route path={ROUTES.SIGN_IN} component={SignInPage}></Route>
                    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}></Route>
                    <Route path={ROUTES.HOME} component={HomePage}></Route>
                    <Route path={ROUTES.ACCOUNT} component={AccountPage}></Route>
                    <Route path={ROUTES.ADMIN} component={AdminPage}></Route>
                </div>
            </Router>
        </div>
    );
};

export default App;