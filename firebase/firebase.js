// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgCbP67w9w8Z2mpRF9v70GTLYukat1jMg",
  authDomain: "g4firebase-d2a32.firebaseapp.com",
  projectId: "g4firebase-d2a32",
  storageBucket: "g4firebase-d2a32.firebasestorage.app",
  messagingSenderId: "192471389747",
  appId: "1:192471389747:web:75e4fb4f15e2702c4bb546",
  measurementId: "G-CZ5P7SPMN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const User = collection(db, 'users');
const Posts = collection(db , 'posts');

export {User, Posts, db};


