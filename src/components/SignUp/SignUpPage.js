import React from 'react';

import { FirebaseContext } from '../Firebase/Firebase';
import SignUpForm from './SignUpForm';

const SignUpPage = () => {
    return (
        <div className="signup-page">
            <FirebaseContext.Consumer>
                { firebase => <SignUpForm firebase={firebase} title="Sign Up"/> }
            </FirebaseContext.Consumer>
        </div>
    )
};

export default SignUpPage;