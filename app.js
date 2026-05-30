import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-p-xjcMGmb9WevrcchPNCrm3rk_tqMDg",
  authDomain: "photoselectiontool-f6b36.firebaseapp.com",
  projectId: "photoselectiontool-f6b36",
  storageBucket: "photoselectiontool-f6b36.firebasestorage.app",
  messagingSenderId: "1031705182047",
  appId: "1:1031705182047:web:e9f099ce146cc77bfb80ea"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase Connected Successfully");
