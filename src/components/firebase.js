import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getFirestore} from "firebase/firestore"
import { getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAp7RlikLGBk9Hec1_4Zn6fx4HdwDKPJLQ",
  authDomain: "yainc-c172f.firebaseapp.com",
  projectId: "yainc-c172f",
  storageBucket: "yainc-c172f.appspot.com",
  messagingSenderId: "326036975392",
  appId: "1:326036975392:web:bde7e7c919ec7c7837f145",
  measurementId: "G-7TQHE8Z18F"
};
  


 export const app = initializeApp(firebaseConfig);
  
  export const firestore =getFirestore(app)
  export const auth = getAuth(app);
