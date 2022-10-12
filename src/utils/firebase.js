import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";

import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const provider = new GoogleAuthProvider();




const firebaseConfig = {
  apiKey: "AIzaSyDXhGcjr2a_y3kMy7uRdXbDIGEuYLffVH0",
  authDomain: "tech-club-website-45e48.firebaseapp.com",
  projectId: "tech-club-website-45e48",
  storageBucket: "tech-club-website-45e48.appspot.com",
  messagingSenderId: "575934096633",
  appId: "1:575934096633:web:4ba93953e13765b2ddee28",
  measurementId: "G-LR6MEE4M1L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app)


export const googleSignIn = () => {
  signInWithRedirect(auth, provider);
}

