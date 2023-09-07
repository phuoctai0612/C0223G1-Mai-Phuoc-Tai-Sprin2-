// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrnkraOz_PoYh52pMjlim1VdaeZvgp24s",
    authDomain: "movie-405d6.firebaseapp.com",
    projectId: "movie-405d6",
    storageBucket: "movie-405d6.appspot.com",
    messagingSenderId: "867204678458",
    appId: "1:867204678458:web:8433ee4037e59a7bdc4603",
    measurementId: "G-TXVG88G2PE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);