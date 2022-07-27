import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDE9J42JIdH16yH6E-LzH2wGwAqGjUPDbo",
  authDomain: "reactive-pod-6144c.firebaseapp.com",
  projectId: "reactive-pod-6144c",
  storageBucket: "reactive-pod-6144c.appspot.com",
  messagingSenderId: "625365645134",
  appId: "1:625365645134:web:3eddd732ba7821c8d1d01f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
