import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';

firebase.initializeApp({
	apiKey: "AIzaSyDAlxEtF1GJETWpbjiyvWr9Wi6ty-b_qRs",
    authDomain: "repositoriositp-71ed3.firebaseapp.com",
    databaseURL: "https://repositoriositp-71ed3.firebaseio.com",
    projectId: "repositoriositp-71ed3",
    storageBucket: "repositoriositp-71ed3.appspot.com",
    messagingSenderId: "277607973043"
    });

ReactDOM.render(
  <App />, 
  document.getElementById('root')
 );

