import React from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import PasswordForgetPage from '../PasswordChange';
import * as ROUTES from '../../constants/routes';

const App=()=>(
    <Router>
        <div>
            <Navigation />
            <hr />
            <Route exact path={ROUTES.LANDING} component={LandingPage}/>
            <Route path={ROUTES.ADMIN} component={AdminPage}/>
            <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
            <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
            <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
            <Route path={ROUTES.HOME} component={HomePage}/>
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
        </div>
    </Router>
);

export default App;