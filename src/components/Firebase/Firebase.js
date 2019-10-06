import app from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';

import firebaseConfig from './config';
import FirebaseContext from './context';


// Initialize Firebase
class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        app.analytics();

        this.auth = app.auth();
    }

    // *** Auth API ***
    createUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    signInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    signOut = () => this.auth.signOut();

    passwordReset = email => this.auth.sendPasswordResetEmail(email);
    
    passwordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
export { FirebaseContext };