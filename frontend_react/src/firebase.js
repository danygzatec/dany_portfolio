// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Firebase } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAinjpHekXCSHd3e_b1EqJEnBkBnnCPb6A",
  authDomain: "dany-portfolio-1eaf6.firebaseapp.com",
  projectId: "dany-portfolio-1eaf6",
  storageBucket: "dany-portfolio-1eaf6.appspot.com",
  messagingSenderId: "1052416503705",
  appId: "1:1052416503705:web:b95bfabdcdf4420c8aed08",
  measurementId: "G-FTLCDSMNCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();

export default (app, db);
