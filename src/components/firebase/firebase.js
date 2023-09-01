// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMN5laaA5Pv-HC0pC_ZNxrXF3rUqBqCsE",
  authDomain: "cypherblitz-4bc6a.firebaseapp.com",
  projectId: "cypherblitz-4bc6a",
  storageBucket: "cypherblitz-4bc6a.appspot.com",
  messagingSenderId: "918607444707",
  appId: "1:918607444707:web:9f0f6db988ef5166eea3d6",
  measurementId: "G-6DC1QQTZZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const leaderRef = collection(db, "leaderboard");
const analytics = getAnalytics(app);

export default app;