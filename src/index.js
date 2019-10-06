import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import Firebase, { FirebaseContext } from './components/Firebase/Firebase';
import './index.css';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.querySelector('#root')
);