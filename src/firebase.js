// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg7qyzCBhGfsPQJuIWIV8wxo6hjekynsk",
  authDomain: "crypto-project-fad01.firebaseapp.com",
  projectId: "crypto-project-fad01",
  storageBucket: "crypto-project-fad01.appspot.com",
  messagingSenderId: "869786900364",
  appId: "1:869786900364:web:27efb71d45adcaa5b868a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);