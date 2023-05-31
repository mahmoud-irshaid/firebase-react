// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByvMoVEW1XvPeR52BohMVQd4hQqI_XcXE",
    authDomain: "fir-cf796.firebaseapp.com",
    projectId: "fir-cf796",
    storageBucket: "fir-cf796.appspot.com",
    messagingSenderId: "733803057410",
    appId: "1:733803057410:web:6b679b2f8c41ec2c5b721b",
    measurementId: "G-GNTP8H0S1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);