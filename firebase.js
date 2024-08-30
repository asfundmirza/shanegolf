// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4qWpiHSXuwNVSbOiAVB-GOwnqXahNMLg",
  authDomain: "shanegolf-71b60.firebaseapp.com",
  projectId: "shanegolf-71b60",
  storageBucket: "shanegolf-71b60.appspot.com",
  messagingSenderId: "268562653745",
  appId: "1:268562653745:web:0a8f027873809d9c012b10",
  measurementId: "G-5CNXSKE9BD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
