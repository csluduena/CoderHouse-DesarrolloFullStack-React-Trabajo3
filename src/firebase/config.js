// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDIDE-4Cyh0-aQvAhG5ewlrzC2q26aSTI",
    authDomain: "coderhouse-ecommerce-80f9f.firebaseapp.com",
    projectId: "coderhouse-ecommerce-80f9f",
    storageBucket: "coderhouse-ecommerce-80f9f.appspot.com",
    messagingSenderId: "553391429154",
    appId: "1:553391429154:web:9be3ae2da7b2f613aedc7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);