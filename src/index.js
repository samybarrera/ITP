//dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';

//Roules
import AppRoutes from './routes';

//assets
import './index.css';
import App from './components/App';


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

ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>, 
  document.getElementById('con')
 );


