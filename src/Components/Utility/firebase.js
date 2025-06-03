import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu2wJv5Uf_Or4FYlBljSj_yliDqlgpnM0",
  authDomain: "clone-a1e6b.firebaseapp.com",
  projectId: "clone-a1e6b",
  storageBucket: "clone-a1e6b.firebasestorage.app",
  messagingSenderId: "159058813767",
  appId: "1:159058813767:web:eeff96507f0dc1804ea262",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
