// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjV-yVPllbZDDYJWX7spiyOLm92co2R-0",
  authDomain: "test-crud-ac348.firebaseapp.com",
  projectId: "test-crud-ac348",
  storageBucket: "test-crud-ac348.appspot.com",
  messagingSenderId: "113232606947",
  appId: "1:113232606947:web:a3e91d73b9c3d637e1f7d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);