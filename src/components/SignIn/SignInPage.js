import React from 'react';

import { FirebaseContext } from '../Firebase/Firebase';
import SignUpPage from '../SignUp/SignUpPage';
import SignInForm from '../SignIn/SignInForm';

const SignInPage = () => {
    return (
        <div className="signin-page">
            <FirebaseContext.Consumer>
                { firebase => <SignInForm firebase={firebase} title="Sign In"/> }
            </FirebaseContext.Consumer>
            <SignUpPage title="Sign Up"/>
        </div>
    );
};

export default SignInPage;