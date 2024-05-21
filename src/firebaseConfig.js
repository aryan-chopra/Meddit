// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSRhUSTaxZSqxIaHPPKTSzNebo_v_g65U",
    authDomain: "meddit-18b77.firebaseapp.com",
    databaseURL: "https://meddit-18b77-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "meddit-18b77",
    storageBucket: "meddit-18b77.appspot.com",
    messagingSenderId: "348877004239",
    appId: "1:348877004239:web:a9e0eaf9b37c6d3c1a06ba",
    measurementId: "G-JYE1FFG354"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };



