import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getFirestore} from "firebase/firestore"
import { getAuth} from 'firebase/auth';
let firebaseConfig = {
  apiKey: "AIzaSyBGxzaBBh8bbciTD4PUC6k4_cgNCXcwrIo",
  authDomain: "careerscamp-ai.firebaseapp.com",
  projectId: "careerscamp-ai",
  storageBucket: "careerscamp-ai.appspot.com",
  messagingSenderId: "89974919951",
  appId: "1:89974919951:web:e0416b2aab76c804a2e47a",
  measurementId: "G-6G0EH2XG3P"
};
  


 export const app = initializeApp(firebaseConfig);
  
  export const firestore =getFirestore(app)
  export const auth = getAuth(app);
