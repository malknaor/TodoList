import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from './config';

// Initialize Firebase
class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    }
}

export default Firebase;