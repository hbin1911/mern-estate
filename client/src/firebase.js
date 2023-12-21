// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-313fa.firebaseapp.com",
  projectId: "mern-estate-313fa",
  storageBucket: "mern-estate-313fa.appspot.com",
  messagingSenderId: "946522964052",
  appId: "1:946522964052:web:b496c484223181bf3eedc1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);