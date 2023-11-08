// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSgxmQpkqKJtdVNZv3ijsf8BHBxyfKBp4",
  authDomain: "myfirstapp-36a6f.firebaseapp.com",
  projectId: "myfirstapp-36a6f",
  storageBucket: "myfirstapp-36a6f.appspot.com",
  messagingSenderId: "628890791177",
  appId: "1:628890791177:web:47dd3a3775278cb3ee37d8"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;