import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-p-xjcMGmb9WevrcchPNCrm3rk_tqMDg",
  authDomain: "photoselectiontool-f6b36.firebaseapp.com",
  projectId: "photoselectiontool-f6b36",
  storageBucket: "photoselectiontool-f6b36.firebasestorage.app",
  messagingSenderId: "1031705182047",
  appId: "1:1031705182047:web:e9f099ce146cc77bfb80ea"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.loginWithGoogle = async function () {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  } catch (err) {
    alert(err.message);
  }
};

window.logoutUser = async function () {
  await signOut(auth);
};

onAuthStateChanged(auth, (user) => {
  const loginWall = document.getElementById("loginWall");
  const toolContainer = document.getElementById("toolContainer");
  const userEmail = document.getElementById("userEmail");

  if (user) {
    loginWall.style.display = "none";
    toolContainer.style.display = "block";
    userEmail.textContent = user.email;
  } else {
    loginWall.style.display = "flex";
    toolContainer.style.display = "none";
  }
});
