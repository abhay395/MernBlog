// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cd149.firebaseapp.com",
  projectId: "mern-blog-cd149",
  storageBucket: "mern-blog-cd149.appspot.com",
  messagingSenderId: "550973888754",
  appId: "1:550973888754:web:aab60c85a44dd4c168986b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);