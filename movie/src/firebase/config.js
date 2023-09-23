// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDb2FWI9gcDHmiQLuNyGniKGZttKL0xWF4",
    authDomain: "chat-message-movie-onli.firebaseapp.com",
    projectId: "chat-message-movie-onli",
    storageBucket: "chat-message-movie-onli.appspot.com",
    messagingSenderId: "518190144957",
    appId: "1:518190144957:web:b95cecc5eed6e75906c6d4",
    measurementId: "G-1L5PEWZL3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);