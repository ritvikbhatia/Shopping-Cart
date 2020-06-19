import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD3g2C5-5ZS5YUMwaXBvtW0QUSQHt5JQcA",
  authDomain: "cart-e8905.firebaseapp.com",
  databaseURL: "https://cart-e8905.firebaseio.com",
  projectId: "cart-e8905",
  storageBucket: "cart-e8905.appspot.com",
  messagingSenderId: "25404795461",
  appId: "1:25404795461:web:78fc435b673d24e357912c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
