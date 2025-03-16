
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClRwHOtiHcb8TFWNp7PDKu7hrnw_7g_QY",
  authDomain: "inline-fun.firebaseapp.com",
  projectId: "inline-fun",
  storageBucket: "inline-fun.firebasestorage.app",
  messagingSenderId: "434779040178",
  appId: "1:434779040178:web:6d7c5d8296b32073c35cab",
  measurementId: "G-T11S920SJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);