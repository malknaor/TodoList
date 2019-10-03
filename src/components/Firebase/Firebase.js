import app from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";

import firebaseConfig from './config';
import FirebaseContext from './context';


// Initialize Firebase
class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        app.analytics();
    }
}

export default Firebase;
export { FirebaseContext };