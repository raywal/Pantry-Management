// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn8olM0Pcz7KnnofSlI17_PNKshISKEjA",
  authDomain: "inventory-management-1ffcb.firebaseapp.com",
  projectId: "inventory-management-1ffcb",
  storageBucket: "inventory-management-1ffcb.appspot.com",
  messagingSenderId: "971480791660",
  appId: "1:971480791660:web:569a50306936168388b649",
  measurementId: "G-XKJBNH9HJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
