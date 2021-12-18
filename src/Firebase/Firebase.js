// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Tzi2xhCSMKeLh-WUPTg5lw90tR-q1m4",
  authDomain: "secret-diary-56e61.firebaseapp.com",
  projectId: "secret-diary-56e61",
  storageBucket: "secret-diary-56e61.appspot.com",
  messagingSenderId: "831795611484",
  appId: "1:831795611484:web:8d61db6c690fdbec106399",
  measurementId: "G-19JD0L7LC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);