// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0z0ZIF7vRZVIshZTGPgaFnY18hS9I2vc",
    authDomain: "practice-firebase-ed357.firebaseapp.com",
    projectId: "practice-firebase-ed357",
    storageBucket: "practice-firebase-ed357.firebasestorage.app",
    messagingSenderId: "881038666027",
    appId: "1:881038666027:web:2b6f284a2b998c295bbd6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
