import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQ4UabvDkTBWEIg4lWWwjn47fpSyBRX0Y",
  authDomain: "hotstar-b128b.firebaseapp.com",
  projectId: "hotstar-b128b",
  storageBucket: "hotstar-b128b.appspot.com",
  messagingSenderId: "382356733543",
  appId: "1:382356733543:web:df1bb59419466aff449ec2",
  measurementId: "G-REG6ERYSBG",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();

// Storage exports
export const storage = firebase.storage();
