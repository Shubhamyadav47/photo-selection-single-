// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-p-xjcMGmb9WevrcchPNCrm3rk_tqMDg",
  authDomain: "photoselectiontool-f6b36.firebaseapp.com",
  projectId: "photoselectiontool-f6b36",
  storageBucket: "photoselectiontool-f6b36.firebasestorage.app",
  messagingSenderId: "1031705182047",
  appId: "1:1031705182047:web:e9f099ce146cc77bfb80ea",
  measurementId: "G-X7TZT82QC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);