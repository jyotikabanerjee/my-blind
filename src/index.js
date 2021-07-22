import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import firebase from "firebase/app";
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
// const admin = require('firebase-admin');
const firebaseConfig = {
    apiKey: "AIzaSyDVTIl9qKcyI7BUguDh3vWSzUWpKj-1IJc",
    authDomain: "my-blind-98ebc.firebaseapp.com",
    databaseURL: "https://my-blind-98ebc-default-rtdb.firebaseio.com",
    projectId: "my-blind-98ebc",
    storageBucket: "my-blind-98ebc.appspot.com",
    messagingSenderId: "72678794531",
    appId: "1:72678794531:web:9ee6bd14978556a685d896"
};
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
