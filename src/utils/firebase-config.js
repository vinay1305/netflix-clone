// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBsnotnojZUWWENbYywUqgtYe6r0iXIf3c",
  authDomain: "react-netflix-clone-4308a.firebaseapp.com",
  projectId: "react-netflix-clone-4308a",
  storageBucket: "react-netflix-clone-4308a.appspot.com",
  messagingSenderId: "1087991637418",
  appId: "1:1087991637418:web:e86ed33c72f277182377d3",
  measurementId: "G-XXD41WSQWV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
