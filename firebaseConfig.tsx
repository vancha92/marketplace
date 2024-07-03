// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS1o1xF-UzHTfemTs_Ul-lr-E7qDZZEQs",
  authDomain: "testproject-35a52.firebaseapp.com",
  projectId: "testproject-35a52",
  storageBucket: "testproject-35a52.appspot.com",
  messagingSenderId: "970464060352",
  appId: "1:970464060352:web:160c81c5cb6b3d562e1e25",
  measurementId: "G-7S3S07SFBH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
