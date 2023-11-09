// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuaq0N4tvfMz7anynligmzC-LGBW--4QI",
  authDomain: "software-lms.firebaseapp.com",
  databaseURL: "https://software-lms-default-rtdb.firebaseio.com",
  projectId: "software-lms",
  storageBucket: "software-lms.appspot.com",
  messagingSenderId: "592188140131",
  appId: "1:592188140131:web:a591a0cd34fee34889a656",
  measurementId: "G-0GR1XW2FL1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);