import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './globalStyles';
import 'normalize.css';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
  <>
    <FirebaseContext>
    <GlobalStyles />
      <App />
    </FirebaseContext>
  </>,
  document.getElementById('root')
);
