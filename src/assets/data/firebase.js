// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiwM8FwvADD03oZ_0k3GobkgY-c8iTV_0",
    authDomain: "portfolio-71f62.firebaseapp.com",
    projectId: "portfolio-71f62",
    storageBucket: "portfolio-71f62.appspot.com",
    messagingSenderId: "253614067233",
    appId: "1:253614067233:web:dda5373eaf3eb33e46dd60",
    measurementId: "G-XWSBGTV13T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);