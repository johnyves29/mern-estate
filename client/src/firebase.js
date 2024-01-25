// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2529b.firebaseapp.com",
  projectId: "mern-estate-2529b",
  storageBucket: "mern-estate-2529b.appspot.com",
  messagingSenderId: "180959514520",
  appId: "1:180959514520:web:33c09929b6d066662e25ed",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
