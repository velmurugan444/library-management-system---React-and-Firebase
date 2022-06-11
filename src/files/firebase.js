import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB-Oxn3nQgN-7mpwyVEVex4y9DyRBej7jk",
  authDomain: "library-management-syste-43699.firebaseapp.com",
  databaseURL:
    "https://library-management-syste-43699-default-rtdb.firebaseio.com",
  projectId: "library-management-syste-43699",
  storageBucket: "library-management-syste-43699.appspot.com",
  messagingSenderId: "535957144882",
  appId: "1:535957144882:web:9e6922a69d6cf0eef2832b",
  measurementId: "G-0XB94V21WN"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
