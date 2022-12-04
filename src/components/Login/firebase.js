// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzzMk8J0hnISTIGF7AQMQzA_z-LjPi_pQ",
  authDomain: "fp-985de.firebaseapp.com",
  projectId: "fp-985de",
  storageBucket: "fp-985de.appspot.com",
  messagingSenderId: "960346471477",
  appId: "1:960346471477:web:187605b2bc9bc308f0457c",
  measurementId: "G-4E17RXRNH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {auth}