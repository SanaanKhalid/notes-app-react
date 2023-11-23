
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDLb_JiCjPx5ipYxS2qnH0kwat4my0tdsc",
  authDomain: "react-notes-b4a65.firebaseapp.com",
  projectId: "react-notes-b4a65",
  storageBucket: "react-notes-b4a65.appspot.com",
  messagingSenderId: "353261776889",
  appId: "1:353261776889:web:69ad76976055ddaed21728"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")